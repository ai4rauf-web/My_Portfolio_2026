import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import type { IncomingMessage, ServerResponse } from 'node:http'
import { randomUUID } from 'node:crypto'

const ALLOWED_SLUGS = new Set([
  'daitics-cdp',
  'mviva-cvmaas',
  'rmn-dolphin',
  'shop-manage',
  'emerson-deltav-psm',
  'hubbit',
  'lashic',
])

const readBody = (req: IncomingMessage) =>
  new Promise<string>((resolve, reject) => {
    let data = ''
    req.on('data', (chunk) => (data += chunk))
    req.on('end', () => resolve(data))
    req.on('error', reject)
  })

const sendJson = (res: ServerResponse, status: number, body: unknown) => {
  res.statusCode = status
  res.setHeader('content-type', 'application/json')
  res.end(JSON.stringify(body))
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      react(),
      {
        name: 'case-study-unlock-dev',
        configureServer(server) {
          server.middlewares.use('/api/unlock', async (req, res, next) => {
            if (req.method !== 'POST') return next()
            try {
              const body = await readBody(req)
              const payload = JSON.parse(body || '{}') as {
                slug?: unknown
                password?: unknown
              }
              const slug =
                typeof payload.slug === 'string'
                  ? payload.slug.trim().toLowerCase()
                  : ''
              const password =
                typeof payload.password === 'string' ? payload.password : ''

              if (!ALLOWED_SLUGS.has(slug) || !password) {
                return sendJson(res, 400, { error: 'invalid_request' })
              }

              let table: Record<string, string> = {}
              try {
                const raw = env.CASE_STUDY_PASSWORDS || ''
                if (raw) table = JSON.parse(raw)
              } catch {
                table = {}
              }

              if (!table[slug] || table[slug] !== password) {
                return sendJson(res, 401, { error: 'invalid_password' })
              }

              return sendJson(res, 200, { token: randomUUID() })
            } catch {
              return sendJson(res, 400, { error: 'bad_request' })
            }
          })
        },
      },
    ],
    server: {
      port: process.env.PORT ? Number(process.env.PORT) : 5173,
    },
  }
})
