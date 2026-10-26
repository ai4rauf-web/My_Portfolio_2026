import { ReactNode } from 'react'

export type FlowStep = {
  title: string
  desc?: ReactNode
}

type Props = {
  title?: string
  happyPath: FlowStep[]
  failures: { case: string; what: ReactNode; why: ReactNode }[]
  footnote?: ReactNode
}

const Arrow = () => (
  <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5 shrink-0 text-muted" fill="none">
    <path
      d="M5 12h14M13 6l6 6-6 6"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

/* Enterprise identity-verification flow block: happy path (left-to-right chain)
   + failure/edge-case table. Reusable for any identity or onboarding flow. */
const IdentityVerificationFlow = ({
  title = 'Identity verification — happy path and failure paths',
  happyPath,
  failures,
  footnote,
}: Props) => (
  <div className="flex flex-col gap-6">
    <div className="flex flex-col gap-4 rounded-2xl border border-[#e8e8e8] bg-white p-6 lg:p-8">
      <p className="text-sm font-semibold uppercase tracking-wide text-muted">{title}</p>
      <div className="-mx-2 overflow-x-auto">
        <ol className="flex min-w-max items-stretch gap-3 px-2">
          {happyPath.map((s, i) => (
            <li key={s.title} className="flex items-stretch gap-3">
              <div className="flex min-w-[160px] max-w-[220px] flex-col gap-1 rounded-xl border border-[#e8e8e8] bg-surface px-4 py-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                  Step {i + 1}
                </span>
                <span className="text-sm font-semibold leading-5 text-ink">{s.title}</span>
                {s.desc && <span className="text-xs leading-5 text-muted">{s.desc}</span>}
              </div>
              {i < happyPath.length - 1 && (
                <div className="flex items-center">
                  <Arrow />
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>
    </div>

    {failures.length > 0 && (
      <div className="flex flex-col gap-3">
        <p className="text-sm font-semibold uppercase tracking-wide text-muted">
          Failure &amp; edge-case paths
        </p>
        <div className="hidden overflow-hidden rounded-2xl border border-[#e8e8e8] lg:block">
          <table className="w-full border-collapse text-left text-base leading-7 text-ink">
            <thead className="bg-surface text-sm font-semibold uppercase tracking-wide text-muted">
              <tr>
                <th scope="col" className="w-1/4 px-6 py-4">Case</th>
                <th scope="col" className="w-2/5 px-6 py-4">What the user sees</th>
                <th scope="col" className="px-6 py-4">Why / how we handle it</th>
              </tr>
            </thead>
            <tbody>
              {failures.map((f, i) => (
                <tr key={i} className="border-t border-[#e8e8e8] align-top">
                  <td className="px-6 py-5 font-medium">{f.case}</td>
                  <td className="px-6 py-5">{f.what}</td>
                  <td className="px-6 py-5">{f.why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex flex-col gap-3 lg:hidden">
          {failures.map((f, i) => (
            <div key={i} className="flex flex-col gap-3 rounded-2xl border border-[#e8e8e8] p-5">
              <p className="text-sm font-semibold text-ink">{f.case}</p>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                  What the user sees
                </p>
                <p className="mt-1 text-sm leading-6 text-ink">{f.what}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                  Why / how we handle it
                </p>
                <p className="mt-1 text-sm leading-6 text-ink">{f.why}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )}

    {footnote && <p className="text-sm leading-6 text-muted">{footnote}</p>}
  </div>
)

export default IdentityVerificationFlow
