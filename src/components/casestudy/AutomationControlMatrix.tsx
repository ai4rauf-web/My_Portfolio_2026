import { ReactNode } from 'react'

type Quadrant = {
  title: string
  body: ReactNode
  tone?: 'default' | 'excluded'
}

type Props = {
  xAxisLabel?: string
  yAxisLabel?: string
  topLeft: Quadrant
  topRight: Quadrant
  bottomLeft: Quadrant
  bottomRight: Quadrant
}

/* 2x2 matrix for Human-Centered AI — AI automation vs. human control. */
const AutomationControlMatrix = ({
  xAxisLabel = 'AI automation ->',
  yAxisLabel = 'Human control ->',
  topLeft,
  topRight,
  bottomLeft,
  bottomRight,
}: Props) => {
  const cell = (q: Quadrant) => (
    <div
      className={
        q.tone === 'excluded'
          ? 'flex min-h-[160px] flex-col gap-2 rounded-2xl border border-dashed border-[#cfcfcf] bg-[#fafafa] p-5 text-muted'
          : 'flex min-h-[160px] flex-col gap-2 rounded-2xl border border-[#e8e8e8] bg-surface p-5'
      }
    >
      <p className={`text-sm font-semibold ${q.tone === 'excluded' ? 'text-muted' : 'text-ink'}`}>
        {q.title}
      </p>
      <div className={`text-sm leading-6 ${q.tone === 'excluded' ? 'text-muted/90' : 'text-charcoal'}`}>
        {q.body}
      </div>
    </div>
  )

  return (
    <div className="flex flex-col gap-3">
      <div className="relative grid grid-cols-[auto_1fr] gap-3">
        <div className="flex items-center justify-center">
          <span className="rotate-180 whitespace-nowrap text-xs font-semibold uppercase tracking-wider text-muted [writing-mode:vertical-rl]">
            {yAxisLabel}
          </span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {cell(topLeft)}
          {cell(topRight)}
          {cell(bottomLeft)}
          {cell(bottomRight)}
        </div>
      </div>
      <p className="pl-6 text-center text-xs font-semibold uppercase tracking-wider text-muted">
        {xAxisLabel}
      </p>
    </div>
  )
}

export default AutomationControlMatrix
