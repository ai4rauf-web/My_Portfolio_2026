import { useEffect, useState } from 'react'

type Props = {
  src: string
  alt: string
  caption?: string
}

/* Figure that opens a full-size lightbox on click.
   Reuses the overlay pattern from caseStudy.tsx -> ThumbnailGrid. */
const ZoomableFigure = ({ src, alt, caption }: Props) => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    const prevOverflow = document.body.style.overflow
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [open])

  return (
    <>
      <figure className="flex flex-col gap-3">
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={`View ${alt} at full size`}
          className="group relative block w-full overflow-hidden rounded-2xl border border-[#e8e8e8] bg-surface text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-tag-blue"
        >
          <img src={src} alt={alt} className="w-full" loading="lazy" />

          {/* Always-visible chip in top-right so touch users and non-hover
              viewers see the shot is zoomable. */}
          <span
            aria-hidden
            className="pointer-events-none absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-ink/85 px-3 py-1.5 text-xs font-medium text-white shadow-lg backdrop-blur-sm"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
              <path d="M11 8v6M8 11h6" />
            </svg>
            Click to zoom
          </span>

          {/* Hover overlay — adds a big magnifier bubble on top of the chip. */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition-all duration-200 group-hover:bg-ink/25 group-hover:opacity-100 group-focus-visible:bg-ink/25 group-focus-visible:opacity-100"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-ink shadow-xl">
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
                <path d="M11 8v6M8 11h6" />
              </svg>
            </span>
          </span>
        </button>
        {caption && (
          <figcaption className="text-sm leading-6 text-muted">{caption}</figcaption>
        )}
      </figure>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={alt}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close full-size view"
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-xl text-ink transition-colors hover:bg-white"
          >
            ✕
          </button>
          <img
            src={src}
            alt={alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
        </div>
      )}
    </>
  )
}

export default ZoomableFigure
