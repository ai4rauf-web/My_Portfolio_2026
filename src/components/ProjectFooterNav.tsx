import { Link } from 'react-router-dom'
import { ArrowRight } from './Icons'
import { projects } from '../data/projects'

const ProjectFooterNav = ({ currentId }: { currentId: string }) => {
  const idx = projects.findIndex((p) => p.id === currentId)
  const prev = idx > 0 ? projects[idx - 1] : null
  const next = idx >= 0 && idx < projects.length - 1 ? projects[idx + 1] : null

  const buttonBase =
    'group/btn flex items-center gap-3 rounded-full border border-[#019fb9] bg-white py-2 transition-shadow duration-300 hover:shadow-md'

  return (
    <div className="mt-16 flex items-start justify-between gap-4 lg:mt-24">
      {prev ? (
        <Link to={`/projects/${prev.id}`} className={`${buttonBase} pl-3 pr-4`}>
          <ArrowRight className="h-6 w-6 shrink-0 rotate-180 text-ink transition-transform duration-300 group-hover/btn:-translate-x-1" />
          <span className="flex min-w-0 flex-col leading-tight">
            <span className="text-base text-ink">Previous Project</span>
            <span className="truncate text-xs text-muted">{prev.title}</span>
          </span>
        </Link>
      ) : (
        <Link to="/" className={`${buttonBase} pl-3 pr-4`}>
          <ArrowRight className="h-6 w-6 shrink-0 rotate-180 text-ink transition-transform duration-300 group-hover/btn:-translate-x-1" />
          <span className="text-base text-ink">Home</span>
        </Link>
      )}

      {next ? (
        <Link to={`/projects/${next.id}`} className={`${buttonBase} pl-4 pr-3`}>
          <span className="flex min-w-0 flex-col text-right leading-tight">
            <span className="text-base text-ink">Next Project</span>
            <span className="truncate text-xs text-muted">{next.title}</span>
          </span>
          <ArrowRight className="h-6 w-6 shrink-0 text-ink transition-transform duration-300 group-hover/btn:translate-x-1" />
        </Link>
      ) : (
        <Link to="/" className={`${buttonBase} pl-4 pr-3`}>
          <span className="text-base text-ink">Home</span>
          <ArrowRight className="h-6 w-6 shrink-0 text-ink transition-transform duration-300 group-hover/btn:translate-x-1" />
        </Link>
      )}
    </div>
  )
}

export default ProjectFooterNav
