import { ReactNode } from 'react'

type Props = {
  title?: string
  items: ReactNode[]
}

/* Short "what we didn't know" block, placed near the top of a case study
   so a reviewer sees ambiguity acknowledged before any process story. */
const AmbiguityCallout = ({ title = "What we didn't know", items }: Props) => (
  <div className="flex flex-col gap-3 rounded-2xl border border-[#e8e8e8] bg-surface p-6 lg:p-8">
    <p className="text-sm font-semibold uppercase tracking-wide text-muted">{title}</p>
    <ul className="flex list-disc flex-col gap-2 pl-5 text-base leading-7 text-ink lg:text-lg">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  </div>
)

export default AmbiguityCallout
