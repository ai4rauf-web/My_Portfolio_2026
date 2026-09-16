import { ReactNode, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const BackIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
    <path
      d="M12 22c-1.383 0-2.683-.263-3.9-.788a10.1 10.1 0 0 1-3.175-2.137c-.9-.9-1.612-1.958-2.137-3.175A9.74 9.74 0 0 1 2 12c0-1.383.263-2.683.788-3.9a10.1 10.1 0 0 1 2.137-3.175c.9-.9 1.958-1.612 3.175-2.137A9.74 9.74 0 0 1 12 2c1.383 0 2.683.263 3.9.788a10.1 10.1 0 0 1 3.175 2.137c.9.9 1.613 1.958 2.138 3.175A9.74 9.74 0 0 1 22 12a9.74 9.74 0 0 1-.787 3.9 10.1 10.1 0 0 1-2.138 3.175c-.9.9-1.958 1.613-3.175 2.138A9.74 9.74 0 0 1 12 22Zm0-2c2.233 0 4.125-.775 5.675-2.325C19.225 16.125 20 14.233 20 12c0-2.233-.775-4.125-2.325-5.675C16.125 4.775 14.233 4 12 4c-2.233 0-4.125.775-5.675 2.325C4.775 7.875 4 9.767 4 12c0 2.233.775 4.125 2.325 5.675C7.875 19.225 9.767 20 12 20Zm-.9-7h5.4a.968.968 0 0 0 .713-.287A.968.968 0 0 0 17.5 12a.968.968 0 0 0-.287-.713.968.968 0 0 0-.713-.287h-5.4l1.7-1.7a.948.948 0 0 0 .275-.7.948.948 0 0 0-.275-.7.948.948 0 0 0-.7-.275.948.948 0 0 0-.7.275l-3.4 3.4a.948.948 0 0 0-.275.7c0 .283.092.517.275.7l3.4 3.4c.183.183.417.275.7.275.283 0 .517-.092.7-.275a.948.948 0 0 0 .275-.7.948.948 0 0 0-.275-.7l-1.7-1.7Z"
      fill="currentColor"
    />
  </svg>
)

export const BackLink = () => {
  const navigate = useNavigate()
  return (
    <button
      onClick={() => (window.history.length > 1 ? navigate(-1) : navigate('/'))}
      className="mt-10 flex items-center gap-2 text-muted transition-colors hover:text-ink lg:mt-16"
    >
      <BackIcon />
      <span className="text-base">Back</span>
    </button>
  )
}

export const SectionLabel = ({ children }: { children: ReactNode }) => (
  <p className="text-lg font-medium uppercase leading-7 text-muted underline">{children}</p>
)

export const SectionTitle = ({ children, id }: { children: ReactNode; id?: string }) => (
  <h2 id={id} className="scroll-mt-28 text-2xl font-medium leading-tight text-ink lg:text-[28px]">
    {children}
  </h2>
)

export const Body = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <p className={`text-base leading-7 text-black lg:text-lg ${className}`}>{children}</p>
)

export const Figure = ({
  src,
  alt,
  caption,
}: {
  src: string
  alt: string
  caption?: string
}) => (
  <figure className="flex flex-col gap-3">
    <div className="overflow-hidden rounded-2xl border border-[#e8e8e8] bg-surface">
      <img src={src} alt={alt} className="w-full" loading="lazy" />
    </div>
    {caption && <figcaption className="text-sm leading-6 text-muted">{caption}</figcaption>}
  </figure>
)

export type BlurZone = { x: number; y: number; w: number; h: number }

/* Figure that overlays soft blur rectangles on top of the image — for
   redacting sensitive details (names, brands, IDs) without editing the raster. */
export const BlurredFigure = ({
  src,
  alt,
  caption,
  blur,
}: {
  src: string
  alt: string
  caption?: string
  blur?: BlurZone[]
}) => (
  <figure className="flex flex-col gap-3">
    <div className="relative overflow-hidden rounded-2xl border border-[#e8e8e8] bg-surface">
      <img src={src} alt={alt} className="block w-full" loading="lazy" />
      {blur?.map((z, i) => (
        <div
          key={i}
          aria-hidden
          className="absolute rounded-[3px]"
          style={{
            left: `${z.x}%`,
            top: `${z.y}%`,
            width: `${z.w}%`,
            height: `${z.h}%`,
            backdropFilter: 'blur(9px)',
            WebkitBackdropFilter: 'blur(9px)',
            background: 'rgba(255, 255, 255, 0.35)',
          }}
        />
      ))}
    </div>
    {caption && <figcaption className="text-sm leading-6 text-muted">{caption}</figcaption>}
  </figure>
)

export const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col gap-1 rounded-2xl bg-surface p-6">
    <span className="text-[36px] font-semibold leading-none text-ink lg:text-[44px]">{value}</span>
    <span className="text-sm leading-6 text-muted lg:text-base">{label}</span>
  </div>
)

export const Callout = ({
  title,
  children,
  tone = 'neutral',
}: {
  title?: string
  children: ReactNode
  tone?: 'neutral' | 'warn' | 'info'
}) => {
  const styles =
    tone === 'warn'
      ? 'bg-warn-bg text-warn-text border-warn-text/20'
      : tone === 'info'
      ? 'bg-banner-blue border-tag-blue/20'
      : 'bg-surface border-[#e8e8e8]'
  return (
    <div className={`flex flex-col gap-2 rounded-2xl border p-6 ${styles}`}>
      {title && <p className="text-sm font-semibold uppercase tracking-wide">{title}</p>}
      <div className="text-base leading-7 lg:text-lg">{children}</div>
    </div>
  )
}

export type Chip = { label: string; value: string; href?: string }

export const SnapshotRow = ({ items }: { items: Chip[] }) => (
  <div className="flex shrink-0 flex-col gap-5 lg:w-[360px]">
    {items.map((item) => (
      <div
        key={item.label}
        className="flex flex-col gap-1 border-b border-[#ededed] pb-4 last:border-0"
      >
        <span className="text-sm uppercase tracking-wide text-muted">{item.label}</span>
        {item.href ? (
          <a
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="text-base text-ink underline decoration-tag-blue/40 underline-offset-2 transition-colors hover:text-tag-blue hover:decoration-tag-blue lg:text-lg"
          >
            {item.value}
          </a>
        ) : (
          <span className="text-base text-ink lg:text-lg">{item.value}</span>
        )}
      </div>
    ))}
  </div>
)

type NavItem = { id: string; label: string }

export const StickySectionNav = ({ items }: { items: NavItem[] }) => {
  const [active, setActive] = useState<string | null>(items[0]?.id ?? null)

  useEffect(() => {
    const findActive = () => {
      const anchors = items
        .map((item) => {
          const el = document.getElementById(item.id)
          if (!el) return null
          const rect = el.getBoundingClientRect()
          return { id: item.id, top: rect.top }
        })
        .filter((x): x is { id: string; top: number } => !!x)
      if (!anchors.length) return
      const threshold = 140 // roughly sticky-nav offset
      const passed = anchors.filter((a) => a.top <= threshold)
      const next = passed.length ? passed[passed.length - 1].id : anchors[0].id
      setActive(next)
    }
    findActive()
    const onScroll = () => findActive()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [items])

  return (
    <nav className="sticky top-24 hidden max-h-[calc(100vh-8rem)] w-[220px] shrink-0 overflow-auto pr-4 lg:block">
      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">On this page</p>
      <ul className="flex flex-col gap-1 text-sm leading-6">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`block border-l-2 py-1.5 pl-3 transition-colors ${
                active === item.id
                  ? 'border-tag-blue text-ink'
                  : 'border-[#ececec] text-muted hover:text-ink'
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export const CaseStudyHeader = ({
  tag,
  title,
  overview,
  snapshot,
  heroSlot,
}: {
  tag: string
  title: string
  overview: ReactNode
  snapshot: Chip[]
  heroSlot?: ReactNode
}) => (
  <>
    <p className="mt-6 text-xl text-tag-blue lg:mt-7 lg:text-2xl">{tag}</p>
    <h1 className="mt-2 max-w-[960px] text-[32px] font-medium leading-tight text-ink lg:text-[48px]">
      {title}
    </h1>

    {heroSlot && (
      <div className="mt-10 overflow-hidden rounded-3xl border border-[#e8e8e8] bg-surface lg:mt-12">
        {heroSlot}
      </div>
    )}

    <div className="mt-12 flex flex-col gap-10 lg:flex-row lg:justify-between">
      <div className="flex max-w-[640px] flex-col gap-2">
        <SectionLabel>Overview</SectionLabel>
        <div className="text-xl leading-8 text-tag-blue lg:text-[28px] lg:leading-10">{overview}</div>
      </div>
      <SnapshotRow items={snapshot} />
    </div>
  </>
)

/* Bundled thumbnail grid with hover-zoom overlay and click-to-fullsize
   lightbox. Used to club several research/reference artifacts into a
   compact row without losing the ability to inspect each at real size. */
type ThumbnailItem = { src: string; alt: string }
const THUMB_COLS = { 2: 'sm:grid-cols-2', 3: 'sm:grid-cols-3', 4: 'sm:grid-cols-4' }

export const ThumbnailGrid = ({
  items,
  cols = 3,
}: {
  items: ThumbnailItem[]
  cols?: 2 | 3 | 4
}) => {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  useEffect(() => {
    if (openIdx === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenIdx(null)
    }
    const prevOverflow = document.body.style.overflow
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [openIdx])

  const open = openIdx !== null ? items[openIdx] : null

  return (
    <>
      <div className={`grid grid-cols-1 gap-3 ${THUMB_COLS[cols]}`}>
        {items.map((item, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setOpenIdx(i)}
            aria-label={`View ${item.alt} at full size`}
            className="group relative block overflow-hidden rounded-xl border border-[#e8e8e8] bg-surface text-left transition-shadow duration-200 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-tag-blue"
          >
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              className="h-40 w-full object-cover object-top transition-transform duration-300 group-hover:scale-105 lg:h-48"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition-all duration-200 group-hover:bg-ink/25 group-hover:opacity-100 group-focus-visible:bg-ink/25 group-focus-visible:opacity-100"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink shadow-lg">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="7" />
                  <path d="m20 20-3.5-3.5" />
                  <path d="M11 8v6M8 11h6" />
                </svg>
              </span>
            </span>
          </button>
        ))}
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setOpenIdx(null)}
          role="dialog"
          aria-modal="true"
          aria-label={open.alt}
        >
          <button
            type="button"
            onClick={() => setOpenIdx(null)}
            aria-label="Close full-size view"
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-xl text-ink transition-colors hover:bg-white"
          >
            ✕
          </button>
          <img
            src={open.src}
            alt={open.alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
        </div>
      )}
    </>
  )
}
