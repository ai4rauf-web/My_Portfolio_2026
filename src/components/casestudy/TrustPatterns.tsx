import { ReactNode } from 'react'

export type TrustPattern = {
  name: string
  desc: ReactNode
}

type Props = {
  patterns: TrustPattern[]
}

/* Named interaction patterns the AI surface uses to earn user trust —
   confidence in plain language, sources, approval gates, undo, fallback. */
const TrustPatterns = ({ patterns }: Props) => (
  <ul className="flex flex-col gap-4">
    {patterns.map((p) => (
      <li
        key={p.name}
        className="flex flex-col gap-1 border-l-2 border-tag-blue/60 pl-4"
      >
        <p className="text-base font-semibold text-ink">{p.name}</p>
        <p className="text-base leading-7 text-charcoal lg:text-lg">{p.desc}</p>
      </li>
    ))}
  </ul>
)

export default TrustPatterns
