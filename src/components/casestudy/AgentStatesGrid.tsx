import { ReactNode } from 'react'

export type AgentState = {
  name: string
  desc: ReactNode
  tone?: 'neutral' | 'ok' | 'warn' | 'error'
}

type Props = {
  states: AgentState[]
}

const toneStyles: Record<NonNullable<AgentState['tone']>, string> = {
  neutral: 'bg-surface text-ink border-[#e8e8e8]',
  ok: 'bg-[#e7f6ed] text-[#197417] border-[#9ad1a9]/50',
  warn: 'bg-warn-bg text-warn-text border-warn-text/20',
  error: 'bg-[#fbe9e9] text-[#8a1f1f] border-[#8a1f1f]/15',
}

/* 3-col grid of agent-state tiles. Each tile = a lifecycle state we designed
   for in the authoring agent (idle, understanding, working, proposed, ...). */
const AgentStatesGrid = ({ states }: Props) => (
  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
    {states.map((s) => {
      const tone = s.tone ?? 'neutral'
      return (
        <div
          key={s.name}
          className={`flex flex-col gap-2 rounded-2xl border p-5 ${toneStyles[tone]}`}
        >
          <p className="text-xs font-semibold uppercase tracking-wider">
            {s.name}
          </p>
          <p className="text-sm leading-6">{s.desc}</p>
        </div>
      )
    })}
  </div>
)

export default AgentStatesGrid
