import { Link } from 'react-router-dom'
import { ArrowRight } from './Icons'
import { projects } from '../data/projects'

const ProjectFooterNav = ({ currentId }: { currentId: string }) => {
  const idx = projects.findIndex((p) => p.id === currentId)
  const prev = idx > 0 ? projects[idx - 1] : null
  const next = idx >= 0 && idx < projects.length - 1 ? projects[idx + 1] : null

  const linkBase = 'group/btn flex items-center gap-3 text-ink'
  const arrowCircle =
    'flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#019fb9] text-ink transition-shadow duration-300 group-hover/btn:shadow-md'

  return (
    <div className="mt-16 flex items-center justify-between gap-4 lg:mt-24">
      {prev ? (
        <Link to={`/projects/${prev.id}`} className={linkBase}>
          <span className={arrowCircle}>
            <ArrowRight className="h-5 w-5 rotate-180 transition-transform duration-300 group-hover/btn:-translate-x-0.5" />
          </span>
          <span className="flex min-w-0 flex-col leading-tight">
            <span className="text-base text-ink">Previous Project</span>
            <span className="truncate text-xs text-muted">{prev.title}</span>
          </span>
        </Link>
      ) : (
        <Link to="/" className={linkBase}>
          <span className={arrowCircle}>
            <ArrowRight className="h-5 w-5 rotate-180 transition-transform duration-300 group-hover/btn:-translate-x-0.5" />
          </span>
          <span className="text-base text-ink">Home</span>
        </Link>
      )}

      {next ? (
        <Link to={`/projects/${next.id}`} className={linkBase}>
          <span className="flex min-w-0 flex-col text-right leading-tight">
            <span className="text-base text-ink">Next Project</span>
            <span className="truncate text-xs text-muted">{next.title}</span>
          </span>
          <span className={arrowCircle}>
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
          </span>
        </Link>
      ) : (
        <Link to="/" className={linkBase}>
          <span className="text-base text-ink">Home</span>
          <span className={arrowCircle}>
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
          </span>
        </Link>
      )}
    </div>
  )
}

export default ProjectFooterNav
