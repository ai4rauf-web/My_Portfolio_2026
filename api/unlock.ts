export const config = { runtime: 'edge' }

const ALLOWED_SLUGS = new Set([
  'daitics-cdp',
  'mviva-cvmaas',
  'rmn-dolphin',
  'shop-manage',
])

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json' },
  })

function loadPasswords(): Record<string, string> {
  const raw = process.env.CASE_STUDY_PASSWORDS
  if (!raw) return {}
  try {
    const parsed = JSON.parse(raw)
    return typeof parsed === 'object' && parsed ? (parsed as Record<string, string>) : {}
  } catch {
    return {}
  }
}

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false
  let mismatch = 0
  for (let i = 0; i < a.length; i++) mismatch |= a.charCodeAt(i) ^ b.charCodeAt(i)
  return mismatch === 0
}

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== 'POST') return json({ error: 'method_not_allowed' }, 405)

  let payload: { slug?: unknown; password?: unknown }
  try {
    payload = await req.json()
  } catch {
    return json({ error: 'invalid_json' }, 400)
  }

  const slug = typeof payload.slug === 'string' ? payload.slug.trim().toLowerCase() : ''
  const password = typeof payload.password === 'string' ? payload.password : ''

  if (!ALLOWED_SLUGS.has(slug) || !password) {
    return json({ error: 'invalid_request' }, 400)
  }

  const table = loadPasswords()
  const expected = table[slug]

  if (!expected || !timingSafeEqual(password, expected)) {
    return json({ error: 'invalid_password' }, 401)
  }

  const token = crypto.randomUUID()
  return json({ token })
}
