import { useEffect, useMemo, useState } from 'react'
import Footer from '../components/Footer'
import { ArrowRight, LoadingHourglass } from '../components/Icons'
import { labItems, type LabItem } from '../data/labItems'

const PlayIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M8 5.14v13.72a1 1 0 0 0 1.54.84l10.29-6.86a1 1 0 0 0 0-1.68L9.54 4.3A1 1 0 0 0 8 5.14Z" />
  </svg>
)

const LabCard = ({ item, onOpen }: { item: LabItem; onOpen: (item: LabItem) => void }) => {
  const clickable = Boolean(item.detail)

  const card = (
    <article
      className={`group mb-5 break-inside-avoid overflow-hidden rounded-3xl bg-surface transition-shadow duration-300 ${
        clickable ? 'cursor-pointer hover:shadow-lg' : ''
      }`}
    >
      <div
        className={`${item.aspect} relative flex items-center justify-center overflow-hidden`}
        style={{ backgroundImage: item.visual.gradient }}
      >
        {!clickable && (
          <div className="absolute inset-x-0 top-0 z-10 flex items-center gap-1.5 bg-warn-bg/95 px-3 py-1.5 backdrop-blur-sm">
            <LoadingHourglass className="h-4 w-4 shrink-0 text-warn-text" />
            <span className="text-xs font-medium text-warn-text">Updating — visit later</span>
          </div>
        )}
        {item.media?.kind === 'video' ? (
          <>
            {item.media.poster && (
              <img
                src={item.media.poster}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
            )}
            <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform duration-300 group-hover:scale-110">
              <PlayIcon className="h-6 w-6 text-ink" />
            </span>
          </>
        ) : item.media?.kind === 'image' ? (
          <img
            src={item.media.src}
            alt=""
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        ) : (
          <span
            className="select-none text-6xl transition-transform duration-500 ease-out group-hover:scale-110"
            aria-hidden
          >
            {item.visual.emoji}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-3 p-5">
        <span className="self-start rounded bg-tag-bg px-2 py-1 text-sm text-tag-blue">{item.category}</span>
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-semibold text-charcoal">{item.title}</h3>
          <p className="text-base text-muted">{item.blurb}</p>
        </div>
        {clickable && (
          <span className="flex items-center gap-1 text-base text-ink">
            View details
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        )}
      </div>
    </article>
  )

  if (!clickable) return card

  return (
    <button type="button" onClick={() => onOpen(item)} className="block w-full text-left" aria-haspopup="dialog">
      {card}
    </button>
  )
}

const DetailModal = ({ item, onClose }: { item: LabItem; onClose: () => void }) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      <div
        className="max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="relative flex aspect-[16/9] items-center justify-center bg-black"
          style={item.media ? undefined : { backgroundImage: item.visual.gradient }}
        >
          {item.media?.kind === 'video' ? (
            <video
              src={item.media.src}
              poster={item.media.poster}
              controls
              autoPlay
              playsInline
              className="h-full w-full bg-black object-contain"
            />
          ) : item.media?.kind === 'image' ? (
            <img src={item.media.src} alt={item.title} className="h-full w-full object-cover" />
          ) : (
            <span className="select-none text-8xl" aria-hidden>
              {item.visual.emoji}
            </span>
          )}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close details"
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-xl text-ink transition-colors hover:bg-white"
          >
            ✕
          </button>
        </div>
        <div className="flex flex-col gap-4 p-6 lg:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded bg-tag-bg px-2 py-1 text-sm text-tag-blue">{item.category}</span>
            {item.detail && <span className="text-sm text-muted">{item.detail.year}</span>}
          </div>
          <h2 className="text-2xl font-semibold text-ink lg:text-[28px]">{item.title}</h2>
          {item.detail?.body.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="text-base leading-7 text-charcoal lg:text-lg">
              {paragraph}
            </p>
          ))}
          {item.detail && (
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <span className="text-sm text-muted">Made with:</span>
              {item.detail.tools.map((tool) => (
                <span key={tool} className="rounded-full bg-surface px-3 py-1 text-sm text-charcoal">
                  {tool}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const Lab = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selected, setSelected] = useState<LabItem | null>(null)

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(labItems.map((item) => item.category)))],
    [],
  )

  const visibleItems =
    activeCategory === 'All' ? labItems : labItems.filter((item) => item.category === activeCategory)

  return (
    <main className="mx-auto w-full max-w-[1243px] px-5 sm:px-8 lg:px-10">
      <h1 className="mt-12 text-[40px] leading-tight text-ink lg:mt-[72px] lg:text-[64px]">My Lab 🎨</h1>
      <p className="mt-6 max-w-[927px] text-lg leading-8 text-muted lg:text-xl">
        Showcasing the output from the playground where I follow curiosity — motion graphics,
        AI-generated video, illustration, and product design explorations made just for the joy of it.
      </p>

      {/* Category filter chips */}
      <div className="mt-8 flex gap-2 overflow-x-auto pb-2 lg:mt-12 lg:flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`whitespace-nowrap rounded-full border px-4 py-2 text-base transition-colors duration-200 ${
              activeCategory === category
                ? 'border-ink bg-ink text-white'
                : 'border-[#949494]/60 bg-white text-muted hover:border-ink hover:text-ink'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Masonry grid */}
      <div key={activeCategory} className="mt-8 columns-1 gap-5 sm:columns-2 lg:columns-3">
        {visibleItems.map((item) => (
          <LabCard key={item.id} item={item} onOpen={setSelected} />
        ))}
      </div>

      <Footer />

      {selected && <DetailModal item={selected} onClose={() => setSelected(null)} />}
    </main>
  )
}

export default Lab
