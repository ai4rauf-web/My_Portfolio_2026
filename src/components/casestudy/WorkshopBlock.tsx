import { ReactNode } from 'react'

type Props = {
  goal: ReactNode
  who: ReactNode
  format: ReactNode
  activities?: ReactNode
  decision: ReactNode
  artefact?: {
    src?: string
    alt?: string
    caption?: string
    placeholder?: string
  }
}

const Row = ({ label, children }: { label: string; children: ReactNode }) => (
  <div className="grid grid-cols-1 gap-1 border-t border-[#ededed] pt-4 first:border-0 first:pt-0 lg:grid-cols-[160px_1fr] lg:gap-6">
    <p className="text-sm font-semibold uppercase tracking-wide text-muted">{label}</p>
    <div className="text-base leading-7 text-ink">{children}</div>
  </div>
)

/* Workshop block: Goal · Who · Format · Activities · Decision · Artefact. */
const WorkshopBlock = ({ goal, who, format, activities, decision, artefact }: Props) => (
  <div className="flex flex-col gap-6 rounded-2xl border border-[#e8e8e8] bg-white p-6 lg:p-8">
    <div className="flex flex-col gap-4">
      <Row label="Goal">{goal}</Row>
      <Row label="Who was in the room">{who}</Row>
      <Row label="Format">{format}</Row>
      {activities && <Row label="Activities">{activities}</Row>}
      <Row label="Decision">{decision}</Row>
    </div>

    {artefact && (
      <figure className="flex flex-col gap-3">
        <div className="overflow-hidden rounded-xl border border-[#e8e8e8] bg-surface">
          {artefact.src ? (
            <img
              src={artefact.src}
              alt={artefact.alt ?? ''}
              className="block w-full"
              loading="lazy"
            />
          ) : (
            <div className="flex min-h-[220px] items-center justify-center p-8 text-center text-sm leading-6 text-muted">
              {artefact.placeholder ??
                'Representative service blueprint — data anonymised. Image to be added.'}
            </div>
          )}
        </div>
        {artefact.caption && (
          <figcaption className="text-sm leading-6 text-muted">{artefact.caption}</figcaption>
        )}
      </figure>
    )}
  </div>
)

export default WorkshopBlock
