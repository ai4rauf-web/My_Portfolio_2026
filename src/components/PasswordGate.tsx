import { FormEvent, ReactNode, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

type Props = {
  slug: string
  title: string
  subtitle?: string
  children: ReactNode
}

const storageKey = (slug: string) => `cs-unlock:${slug}`

const PasswordGate = ({ slug, title, subtitle, children }: Props) => {
  const [unlocked, setUnlocked] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    try {
      if (sessionStorage.getItem(storageKey(slug))) setUnlocked(true)
    } catch {
      // sessionStorage unavailable — stay gated
    }
  }, [slug])

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!password) return
    setSubmitting(true)
    setError(null)
    try {
      const res = await fetch('/api/unlock', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ slug, password }),
      })
      if (res.ok) {
        const data = (await res.json()) as { token?: string }
        try {
          sessionStorage.setItem(storageKey(slug), data.token ?? '1')
        } catch {
          // ignore
        }
        setUnlocked(true)
        return
      }
      if (res.status === 401) setError('That password didn’t work. Try again, or ping Rauf.')
      else setError('Something went wrong. Please try again in a moment.')
    } catch {
      setError('Network error. Check your connection and try again.')
    } finally {
      setSubmitting(false)
    }
  }

  if (unlocked) return <>{children}</>

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-lg flex-col justify-center gap-8 px-6 py-16">
      <div className="flex flex-col gap-3">
        <p className="text-sm font-medium uppercase tracking-wide text-muted">Private case study</p>
        <h1 className="text-3xl font-medium leading-tight text-ink lg:text-4xl">{title}</h1>
        {subtitle && <p className="text-base leading-7 text-muted lg:text-lg">{subtitle}</p>}
      </div>

      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-charcoal">Access password</span>
          <input
            type="password"
            value={password}
            autoFocus
            autoComplete="off"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl border border-[#e0e0e0] bg-white px-4 py-3 text-base leading-6 text-ink outline-none transition focus:border-tag-blue"
            placeholder="Enter password"
          />
        </label>

        {error && (
          <p className="rounded-lg bg-[#fbe9e9] px-4 py-3 text-sm leading-6 text-[#8a1f1f]">{error}</p>
        )}

        <button
          type="submit"
          disabled={submitting || !password}
          className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-base font-medium text-white transition hover:bg-charcoal disabled:cursor-not-allowed disabled:opacity-50"
        >
          {submitting ? 'Checking…' : 'Unlock case study'}
        </button>
      </form>

      <div className="flex flex-col gap-2 text-sm leading-6 text-muted">
        <p>
          If you don’t have the password, reach me at{' '}
          <a className="underline hover:text-ink" href="mailto:connect2rauf@gmail.com">
            connect2rauf@gmail.com
          </a>
          .
        </p>
        <Link to="/" className="underline hover:text-ink">
          ← Back to portfolio
        </Link>
      </div>
    </div>
  )
}

export default PasswordGate
