import { ReactNode } from 'react'

export type DecisionRow = {
  learned: ReactNode
  decided: ReactNode
  changed: ReactNode
}

type Props = {
  rows: DecisionRow[]
  caption?: string
}

/* The most important block in a case study:
   "We learned X -> so we decided Y -> which changed Z."
   Table on desktop, stacked cards on mobile. */
const ResearchDecisionTable = ({ rows, caption }: Props) => (
  <div className="flex flex-col gap-3">
    {/* desktop: 3-column table */}
    <div className="hidden overflow-hidden rounded-2xl border border-[#e8e8e8] lg:block">
      <table className="w-full border-collapse text-left text-base leading-7 text-ink">
        <thead className="bg-surface text-sm font-semibold uppercase tracking-wide text-muted">
          <tr>
            <th scope="col" className="w-1/3 px-6 py-4">What we learned</th>
            <th scope="col" className="w-1/3 px-6 py-4">So we decided</th>
            <th scope="col" className="w-1/3 px-6 py-4">What changed in the product</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-[#e8e8e8] align-top">
              <td className="px-6 py-5">{row.learned}</td>
              <td className="px-6 py-5">{row.decided}</td>
              <td className="px-6 py-5">{row.changed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* mobile: stacked cards */}
    <div className="flex flex-col gap-4 lg:hidden">
      {rows.map((row, i) => (
        <div key={i} className="flex flex-col gap-3 rounded-2xl border border-[#e8e8e8] p-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-muted">We learned</p>
            <p className="mt-1 text-base leading-7 text-ink">{row.learned}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-muted">So we decided</p>
            <p className="mt-1 text-base leading-7 text-ink">{row.decided}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-muted">What changed</p>
            <p className="mt-1 text-base leading-7 text-ink">{row.changed}</p>
          </div>
        </div>
      ))}
    </div>

    {caption && <p className="text-sm leading-6 text-muted">{caption}</p>}
  </div>
)

export default ResearchDecisionTable
