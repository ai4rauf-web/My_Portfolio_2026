import { Link } from 'react-router-dom'
import { ArrowRight, LoadingHourglass } from './Icons'
import type { Project } from '../data/projects'

const ProjectCard = ({ project }: { project: Project }) => {
  const { tag, title, description, descriptionLink, image, imageAlt, updating } = project

  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl bg-surface transition-shadow duration-300 hover:shadow-lg lg:flex-row lg:items-stretch lg:gap-5">
      <div className="shrink-0 overflow-hidden lg:w-[59.3%]">
        <img
          src={image}
          alt={imageAlt}
          className="h-60 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 sm:h-80 lg:h-full lg:min-h-[391px]"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between gap-8 p-5 lg:py-5 lg:pl-0 lg:pr-10">
        <div className="flex flex-col gap-5">
          <span className="self-start rounded bg-tag-bg px-2 py-1 text-sm text-tag-blue">{tag}</span>
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-semibold text-charcoal">{title}</h3>
            {(description || descriptionLink) && (
              <p className="text-base text-charcoal">
                {descriptionLink && (
                  <a
                    href={descriptionLink.href}
                    target="_blank"
                    rel="noreferrer"
                    className="underline hover:text-tag-blue"
                  >
                    {descriptionLink.text}
                  </a>
                )}
                {description}
              </p>
            )}
            {updating && (
              <div className="flex w-full items-center gap-4 rounded-lg bg-warn-bg p-2">
                <LoadingHourglass className="h-8 w-8 shrink-0 text-warn-text" />
                <p className="text-base text-warn-text">Updating contents... Visit later... 🙇</p>
              </div>
            )}
          </div>
        </div>
        {updating ? (
          <span className="pointer-events-none flex items-center gap-1 self-start rounded-full bg-white py-2 pl-4 pr-3 opacity-20">
            <span className="text-base text-ink">View Details</span>
            <ArrowRight className="h-6 w-6 text-ink" />
          </span>
        ) : (
          <Link
            to={`/projects/${project.id}`}
            className="group/btn flex items-center gap-1 self-start rounded-full bg-white py-2 pl-4 pr-3 transition-shadow duration-300 hover:shadow-md"
          >
            <span className="text-base text-ink">View Details</span>
            <ArrowRight className="h-6 w-6 text-ink transition-transform duration-300 group-hover/btn:translate-x-1" />
          </Link>
        )}
      </div>
    </article>
  )
}

export default ProjectCard
