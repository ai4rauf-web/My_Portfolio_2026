/* Diagrams and interactive components for the RMN Dolphin case study. */
import { useState, type ReactNode } from 'react'
import type { BlurZone } from './caseStudy'

/* Realistic laptop-in-office mockup — puts a real screenshot inside a laptop
   frame, laid over a warm office-desk gradient with soft bokeh. */
export const RealisticMockup = ({
  src,
  alt,
  blur,
}: {
  src: string
  alt: string
  blur?: BlurZone[]
}) => (
  <div className="relative overflow-hidden rounded-2xl bg-[linear-gradient(135deg,#f6ecdc_0%,#e8dbc4_45%,#cfbfa1_100%)] px-6 py-10 lg:px-12 lg:py-16">
    {/* ambient bokeh — plants and warm lamps */}
    <div className="pointer-events-none absolute -left-16 -top-10 h-56 w-56 rounded-full bg-emerald-300/30 blur-3xl" aria-hidden />
    <div className="pointer-events-none absolute right-4 top-6 h-48 w-48 rounded-full bg-amber-200/50 blur-3xl" aria-hidden />
    <div className="pointer-events-none absolute -bottom-20 left-1/3 h-56 w-72 rounded-full bg-rose-200/40 blur-3xl" aria-hidden />
    <div className="pointer-events-none absolute -right-10 bottom-2 h-40 w-40 rounded-full bg-emerald-200/40 blur-3xl" aria-hidden />

    {/* laptop */}
    <div className="relative z-10 mx-auto max-w-[820px]">
      {/* lid */}
      <div className="rounded-t-2xl bg-[#141414] p-3 shadow-[0_50px_60px_-24px_rgba(20,10,0,0.45),0_10px_30px_-12px_rgba(20,10,0,0.35)]">
        <div className="relative overflow-hidden rounded-md">
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
                background: 'rgba(255,255,255,0.35)',
              }}
            />
          ))}
        </div>
      </div>
      {/* base / hinge */}
      <div className="relative mx-auto h-3 w-[104%] -translate-x-[2%] rounded-b-[16px] bg-[linear-gradient(180deg,#dcdcdc_0%,#a5a5a5_100%)]" />
      <div className="mx-auto -mt-[6px] h-[6px] w-24 rounded-b-[6px] bg-[#8a8a8a]" />
    </div>

    {/* desk shadow */}
    <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-[linear-gradient(to_top,rgba(80,50,20,0.16),transparent)]" aria-hidden />
  </div>
)

/* FigJam-style canvas — a sticky-note "IA insights" board with drawn arrows.
   Intentionally rough — captures the feel of research, not a polished diagram. */
export const IaInsightsCanvas = () => {
  type Note = {
    top: string
    left: string
    w: string
    tone: string
    rot: number
    title?: string
    body: string
    kind?: 'insight' | 'decision' | 'question'
  }

  const notes: Note[] = [
    // Column A — PERSONAS
    { top: '10%', left: '3%', w: '18%', tone: '#fde68a', rot: -2, title: 'Media buyers', body: 'Think in impressions, ROAS, flight windows. Want live estimates before committing.' },
    { top: '30%', left: '4%', w: '18%', tone: '#fde68a', rot: 1, title: 'Inventory managers', body: 'Think in slots × screens × venues. Care about fill rate and price floor.' },
    { top: '52%', left: '2%', w: '18%', tone: '#fde68a', rot: -3, title: 'Ops', body: 'Approve creatives, hold campaigns, resolve conflicts.' },
    { top: '73%', left: '4%', w: '18%', tone: '#fde68a', rot: 2, title: 'Finance', body: 'Reconcile CDRs, release invoices, manage disputes.' },

    // Column B — DOMAIN KNOWLEDGE (learned building the first RMN)
    { top: '6%', left: '26%', w: '19%', tone: '#c7d2fe', rot: 2, title: 'Three-way rev split', body: 'Advertiser · Venue Partner · Rental Partner. The commercial structure of every DOOH play.' },
    { top: '28%', left: '25%', w: '19%', tone: '#c7d2fe', rot: -1, title: 'SSP integration', body: 'Programmatic demand via SSPs — supplements Guaranteed / Preferred / PMP; doesn’t replace them.' },
    { top: '50%', left: '25%', w: '19%', tone: '#c7d2fe', rot: 2, title: 'DMA vs venue', body: 'US market plans by DMA. Gulf market plans by venue + region. Different taxonomy, same shape.' },
    { top: '72%', left: '26%', w: '19%', tone: '#c7d2fe', rot: -2, title: 'Footfall audit', body: 'Impressions ≈ plays × footfall coefficient. Audit trail is table-stakes.' },

    // Column C — INSIGHTS
    { top: '4%', left: '49%', w: '20%', tone: '#bae6fd', rot: -2, kind: 'insight', title: 'INSIGHT', body: 'One noun the whole system speaks in — the slot. Everything else derives.' },
    { top: '26%', left: '49%', w: '20%', tone: '#bae6fd', rot: 2, kind: 'insight', title: 'INSIGHT', body: 'Personas > portals. One workspace, three lenses, one audit trail.' },
    { top: '48%', left: '50%', w: '20%', tone: '#bae6fd', rot: -1, kind: 'question', title: 'HYPOTHESIS', body: 'If availability looks like flight search, an advertiser learns it in one session.' },
    { top: '70%', left: '48%', w: '20%', tone: '#bae6fd', rot: 3, kind: 'insight', title: 'INSIGHT', body: 'PoP has to be generated by the platform. If ops writes it, disputes never end.' },

    // Column D — DECISIONS
    { top: '10%', left: '76%', w: '20%', tone: '#bbf7d0', rot: 1, kind: 'decision', title: 'DECISION', body: 'Flight-search shape for availability. Filters up top; grid below.' },
    { top: '32%', left: '76%', w: '20%', tone: '#bbf7d0', rot: -2, kind: 'decision', title: 'DECISION', body: '“Viewing as” profile toggle inside Supply — no separate Ops or Finance portal.' },
    { top: '55%', left: '77%', w: '20%', tone: '#bbf7d0', rot: 2, kind: 'decision', title: 'DECISION', body: 'Competitive separation is a first-class policy, not a note in an email.' },
    { top: '75%', left: '76%', w: '20%', tone: '#bbf7d0', rot: -1, kind: 'decision', title: 'DECISION', body: 'CDR streams straight to billing. Finance reconciles inside the tool.' },

    // Column labels (annotations)
    { top: '2%', left: '3%', w: '17%', tone: 'transparent', rot: 0, body: 'PERSONAS' },
    { top: '2%', left: '26%', w: '17%', tone: 'transparent', rot: 0, body: 'DOMAIN' },
    { top: '2%', left: '49%', w: '17%', tone: 'transparent', rot: 0, body: 'INSIGHTS' },
    { top: '2%', left: '76%', w: '17%', tone: 'transparent', rot: 0, body: 'DECISIONS' },
  ]

  return (
    <div
      className="relative overflow-hidden rounded-2xl bg-[#f2ede3] p-4 lg:p-8"
      style={{
        backgroundImage: 'radial-gradient(#d9d3c6 1px, transparent 1.6px)',
        backgroundSize: '18px 18px',
      }}
    >
      <div className="relative mx-auto aspect-[16/10] w-full">
        {notes.map((s, i) =>
          s.tone === 'transparent' ? (
            <div
              key={i}
              className="absolute text-[10px] font-bold uppercase tracking-[0.14em] text-[#8a7a54]"
              style={{ top: s.top, left: s.left, width: s.w }}
            >
              {s.body}
            </div>
          ) : (
            <div
              key={i}
              className="absolute rounded-sm p-2 text-[10px] leading-tight text-[#3f3320] shadow-[0_4px_10px_-4px_rgba(60,50,20,0.35),0_1.5px_3px_-1px_rgba(60,50,20,0.25)]"
              style={{
                top: s.top,
                left: s.left,
                width: s.w,
                background: s.tone,
                transform: `rotate(${s.rot}deg)`,
              }}
            >
              {s.title && (
                <div
                  className={`text-[9px] font-bold uppercase tracking-wider ${
                    s.kind === 'insight'
                      ? 'text-[#0369a1]'
                      : s.kind === 'decision'
                      ? 'text-[#166534]'
                      : s.kind === 'question'
                      ? 'text-[#7c3aed]'
                      : 'text-[#5a4a1f]'
                  }`}
                >
                  {s.title}
                </div>
              )}
              <div className="mt-0.5 text-[10px]">{s.body}</div>
            </div>
          ),
        )}

        {/* Hand-drawn connectors linking clusters */}
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1000 625" preserveAspectRatio="none" aria-hidden>
          <g stroke="#4b5563" strokeWidth="1.4" fill="none" strokeLinecap="round" opacity="0.5">
            <path d="M 210 100 C 240 120, 260 100, 280 80" />
            <path d="M 210 220 C 240 240, 260 220, 280 200" />
            <path d="M 210 360 C 240 360, 260 340, 280 340" />
            <path d="M 210 500 C 240 500, 260 480, 280 470" />

            <path d="M 460 100 C 500 90, 520 60, 540 60" />
            <path d="M 460 210 C 500 210, 520 200, 540 200" />
            <path d="M 460 350 C 500 350, 520 340, 540 340" />
            <path d="M 460 470 C 500 470, 520 460, 540 460" strokeDasharray="4 4" />

            <path d="M 720 60 C 770 80, 790 100, 820 110" strokeWidth="1.7" />
            <path d="M 720 200 C 770 220, 790 240, 820 250" strokeWidth="1.7" />
            <path d="M 720 340 C 770 380, 790 400, 820 400" strokeWidth="1.7" />
            <path d="M 720 460 C 770 480, 790 490, 820 490" strokeWidth="1.7" />
          </g>
        </svg>
      </div>
    </div>
  )
}

/* Ecosystem diagram — how the RMN stakeholders connect around the platform.
   Abstracted from the domain (advertisers · SSPs · venue partners · rental partners),
   no customer-specific branding. */
export const EcosystemDiagram = () => (
  <svg viewBox="0 0 900 420" role="img" aria-label="RMN ecosystem — stakeholders, data flow, and billing" className="w-full">
    <g fontFamily="IBM Plex Sans, system-ui, sans-serif">
      {/* Central platform */}
      <g transform="translate(370, 155)">
        <rect width="160" height="110" rx="14" fill="#071012" />
        <text x="80" y="42" textAnchor="middle" fontSize="12" fill="#a8a8a8" letterSpacing="1.2">RMN PLATFORM</text>
        <text x="80" y="66" textAnchor="middle" fontSize="14" fontWeight="600" fill="#ffffff">Demand + Supply</text>
        <text x="80" y="86" textAnchor="middle" fontSize="11" fill="#d0eeff">plan · campaign · prove</text>
      </g>

      {/* Left column — Demand side */}
      {[
        { y: 40, label: 'DEMAND', color: '#1377b0', fill: '#eef6fb', border: '#bcdbec', name: 'Advertisers' },
        { y: 130, label: 'DEMAND', color: '#1377b0', fill: '#eef6fb', border: '#bcdbec', name: 'Brand teams / agencies' },
        { y: 220, label: 'PROGRAMMATIC', color: '#686868', fill: '#f6f6f6', border: '#e0e0e0', name: 'SSP / RTB integrations' },
      ].map((n) => (
        <g key={n.y} transform={`translate(30, ${n.y})`}>
          <rect width="200" height="60" rx="12" fill={n.fill} stroke={n.border} />
          <text x="16" y="24" fontSize="11" fill={n.color} letterSpacing="1.2">{n.label}</text>
          <text x="16" y="46" fontSize="13" fontWeight="600" fill="#071012">{n.name}</text>
        </g>
      ))}

      {/* Right column — Supply side */}
      {[
        { y: 40, label: 'SUPPLY', name: 'Inventory owners' },
        { y: 130, label: 'VENUE PARTNERS', name: 'Screen locations · mall · airport · transit' },
        { y: 220, label: 'RENTAL PARTNERS', name: 'Hardware investors · revenue share' },
      ].map((n) => (
        <g key={n.y} transform={`translate(670, ${n.y})`}>
          <rect width="200" height="60" rx="12" fill="#eaf6ea" stroke="#c8e6c8" />
          <text x="16" y="24" fontSize="11" fill="#197417" letterSpacing="1.2">{n.label}</text>
          <text x="16" y="46" fontSize="12" fontWeight="600" fill="#071012">{n.name}</text>
        </g>
      ))}

      {/* Bottom — data + billing */}
      <g transform="translate(230, 330)">
        <rect width="200" height="60" rx="12" fill="#fdefc0" stroke="#e1c465" />
        <text x="16" y="24" fontSize="11" fill="#5b4700" letterSpacing="1.2">FIRST-PARTY DATA</text>
        <text x="16" y="46" fontSize="13" fontWeight="600" fill="#071012">Telco audience + footfall</text>
      </g>
      <g transform="translate(470, 330)">
        <rect width="200" height="60" rx="12" fill="#fdefc0" stroke="#e1c465" />
        <text x="16" y="24" fontSize="11" fill="#5b4700" letterSpacing="1.2">BILLING · PoP</text>
        <text x="16" y="46" fontSize="13" fontWeight="600" fill="#071012">CDR → telco billing rails</text>
      </g>

      {/* Connectors */}
      <g stroke="#686868" strokeWidth="1.3" fill="none" markerEnd="url(#eco-arr)">
        <line x1="230" y1="70" x2="370" y2="180" />
        <line x1="230" y1="160" x2="370" y2="200" />
        <line x1="230" y1="250" x2="370" y2="230" />
        <line x1="530" y1="180" x2="670" y2="70" />
        <line x1="530" y1="205" x2="670" y2="160" />
        <line x1="530" y1="235" x2="670" y2="250" />
        <line x1="410" y1="265" x2="330" y2="330" />
        <line x1="490" y1="265" x2="570" y2="330" />
      </g>

      <defs>
        <marker id="eco-arr" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#686868" />
        </marker>
      </defs>
    </g>
  </svg>
)

export type CarouselSlide = {
  src: string
  alt: string
  tag: string
  title: string
  body: ReactNode
  blur?: BlurZone[]
}

/* Full-width, tabbed carousel for the Screens section.
   Tabs at top switch between Demand-side and Supply-side slide lists.
   Image takes the full width; description sits below with a tag pill,
   title, prose, counter and prev/next arrows. */
export const ScreenCarousel = ({
  tabs,
}: {
  tabs: { key: string; label: string; slides: CarouselSlide[] }[]
}) => {
  const [tabIdx, setTabIdx] = useState(0)
  const [slideIdx, setSlideIdx] = useState(0)

  const activeTab = tabs[tabIdx]
  const slides = activeTab.slides
  const s = slides[slideIdx]
  const total = slides.length
  const go = (delta: number) => setSlideIdx((prev) => (prev + delta + total) % total)

  const chooseTab = (i: number) => {
    setTabIdx(i)
    setSlideIdx(0)
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Tabs */}
      <div role="tablist" className="flex w-fit gap-1 rounded-full border border-[#e0e0e0] bg-white p-1">
        {tabs.map((t, i) => (
          <button
            key={t.key}
            type="button"
            role="tab"
            aria-selected={i === tabIdx}
            onClick={() => chooseTab(i)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors sm:text-base ${
              i === tabIdx ? 'bg-ink text-white' : 'text-muted hover:bg-ink/5 hover:text-ink'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Full-width image */}
      <div className="relative overflow-hidden rounded-2xl border border-[#e8e8e8] bg-surface">
        <img src={s.src} alt={s.alt} className="block w-full" loading="lazy" />
        {s.blur?.map((z, k) => (
          <div
            key={k}
            aria-hidden
            className="absolute rounded-[3px]"
            style={{
              left: `${z.x}%`,
              top: `${z.y}%`,
              width: `${z.w}%`,
              height: `${z.h}%`,
              backdropFilter: 'blur(9px)',
              WebkitBackdropFilter: 'blur(9px)',
              background: 'rgba(255,255,255,0.35)',
            }}
          />
        ))}
      </div>

      {/* Description block below */}
      <div className="flex flex-col gap-4 rounded-2xl border border-[#e8e8e8] bg-surface p-6 lg:flex-row lg:items-start lg:justify-between lg:gap-8 lg:p-8">
        <div className="flex flex-col gap-3 lg:max-w-[720px]">
          <span className="inline-flex w-fit rounded-full bg-white px-3 py-1 text-xs font-medium uppercase tracking-wide text-tag-blue">
            {s.tag}
          </span>
          <h4 className="text-xl font-semibold text-ink lg:text-2xl">{s.title}</h4>
          <div className="text-base leading-7 text-charcoal lg:text-lg">{s.body}</div>
        </div>

        <div className="flex items-center gap-4 lg:flex-col lg:items-end">
          <span className="text-sm text-muted">
            {String(slideIdx + 1).padStart(2, '0')}{' '}
            <span className="text-[#c8c8c8]">/ {String(total).padStart(2, '0')}</span>
          </span>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous screen"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e0e0e0] bg-white text-ink transition-colors hover:bg-ink hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tag-blue"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
                <path fill="currentColor" d="M14 6 8 12l6 6 1.4-1.4L10.8 12l4.6-4.6z" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next screen"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e0e0e0] bg-white text-ink transition-colors hover:bg-ink hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tag-blue"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
                <path fill="currentColor" d="M10 6l6 6-6 6-1.4-1.4L13.2 12 8.6 7.4z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Progress dots */}
      <div className="flex justify-center gap-2">
        {slides.map((_, k) => (
          <button
            key={k}
            type="button"
            onClick={() => setSlideIdx(k)}
            aria-label={`Show screen ${k + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              k === slideIdx ? 'w-6 bg-ink' : 'w-1.5 bg-[#c8c8c8] hover:bg-muted'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

/* Process step — number + icon + title + body. */
export const ProcessStep = ({
  index,
  icon,
  title,
  body,
}: {
  index: string
  icon: ReactNode
  title: string
  body: ReactNode
}) => (
  <div className="flex flex-col gap-3 rounded-2xl border border-[#e8e8e8] bg-surface p-6">
    <div className="flex items-center gap-3">
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-xs font-semibold text-white">
        {index}
      </span>
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink">
        {icon}
      </span>
    </div>
    <h4 className="text-lg font-semibold text-ink">{title}</h4>
    <p className="text-sm leading-6 text-charcoal lg:text-base">{body}</p>
  </div>
)

/* Small icon set used across the RMN page. Stroke-based, currentColor. */
const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  className: 'h-5 w-5',
  'aria-hidden': true,
}
export const IconSearch = () => (
  <svg {...iconProps}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
)
export const IconDoc = () => (
  <svg {...iconProps}><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z" /><path d="M14 3v5h5" /><path d="M9 13h6M9 17h6M9 9h2" /></svg>
)
export const IconWire = () => (
  <svg {...iconProps}><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M7 14h4M7 17h6" /></svg>
)
export const IconStack = () => (
  <svg {...iconProps}><path d="m4 8 8-4 8 4-8 4Z" /><path d="m4 12 8 4 8-4" /><path d="m4 16 8 4 8-4" /></svg>
)
export const IconFlag = () => (
  <svg {...iconProps}><path d="M4 21V4h11l-1 4h6v8h-8l-1-4H4" /></svg>
)
export const IconShield = () => (
  <svg {...iconProps}><path d="M12 3 4 6v6c0 5 3.4 8.6 8 9 4.6-.4 8-4 8-9V6Z" /><path d="m9 12 2 2 4-4" /></svg>
)
export const IconCards = () => (
  <svg {...iconProps}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 10h18M8 15h4" /></svg>
)
export const IconReport = () => (
  <svg {...iconProps}><path d="M5 21V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v15" /><path d="M9 21v-6M12 21v-9M15 21v-4" /></svg>
)
export const IconSpark = () => (
  <svg {...iconProps}><path d="M12 3v3M12 18v3M4.2 5.6l2.1 2.1M17.7 16.3l2.1 2.1M3 12h3M18 12h3M4.2 18.4l2.1-2.1M17.7 7.7l2.1-2.1" /></svg>
)

export const PlanCampaignProve = () => (
  <svg viewBox="0 0 900 300" role="img" aria-label="RMN operating layer: Plan → Campaign → Prove" className="w-full">
    <g fontFamily="IBM Plex Sans, system-ui, sans-serif">
      <text x="30" y="30" fontSize="12" fill="#686868" letterSpacing="1.2">
        A SINGLE OPERATING LAYER — SCREEN-LED RETAIL COMMERCE
      </text>
      {[
        {
          x: 30,
          title: 'PLAN',
          sub: 'Inventory by venue, audience, weather, time',
          fill: '#eef6fb',
          border: '#bcdbec',
          color: '#1377b0',
        },
        {
          x: 320,
          title: 'CAMPAIGN',
          sub: 'Guaranteed · Preferred · PMP · Auction',
          fill: '#eaf6ea',
          border: '#c8e6c8',
          color: '#197417',
        },
        {
          x: 610,
          title: 'PROVE',
          sub: 'Billing-ready analytics · CDR into e&',
          fill: '#fdefc0',
          border: '#e1c465',
          color: '#5b4700',
        },
      ].map((c) => (
        <g key={c.title} transform={`translate(${c.x}, 60)`}>
          <rect width="260" height="180" rx="18" fill={c.fill} stroke={c.border} />
          <text x="24" y="34" fontSize="12" fontWeight="600" fill={c.color} letterSpacing="1.2">{c.title}</text>
          <text x="24" y="72" fontSize="20" fontWeight="600" fill="#071012">{c.title.charAt(0) + c.title.slice(1).toLowerCase()}</text>
          <text x="24" y="100" fontSize="13" fill="#242424">{c.sub}</text>
        </g>
      ))}
      <g stroke="#686868" strokeWidth="1.5" fill="none">
        <line x1="290" y1="150" x2="320" y2="150" markerEnd="url(#pcp-arr)" />
        <line x1="580" y1="150" x2="610" y2="150" markerEnd="url(#pcp-arr)" />
      </g>
      <defs>
        <marker id="pcp-arr" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#686868" />
        </marker>
      </defs>
    </g>
  </svg>
)

export const LaptopMockup = () => (
  <svg viewBox="0 0 900 520" role="img" aria-label="RMN platform running on a laptop — advertiser managing a campaign" className="w-full">
    <defs>
      <linearGradient id="lap-screen" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0" stopColor="#1a1a1a" />
        <stop offset="1" stopColor="#0b0b0b" />
      </linearGradient>
      <linearGradient id="lap-base" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0" stopColor="#d8d8d8" />
        <stop offset="1" stopColor="#a8a8a8" />
      </linearGradient>
      <linearGradient id="rev-line" x1="0" x2="1">
        <stop offset="0" stopColor="#1377b0" />
        <stop offset="1" stopColor="#197417" />
      </linearGradient>
    </defs>

    {/* Laptop base (trapezoid) */}
    <path d="M 60 470 L 840 470 L 880 500 L 20 500 Z" fill="url(#lap-base)" />
    <rect x="380" y="470" width="140" height="4" rx="2" fill="#8a8a8a" />

    {/* Laptop lid */}
    <rect x="60" y="30" width="780" height="440" rx="12" fill="url(#lap-screen)" />
    {/* Bezel */}
    <rect x="80" y="50" width="740" height="400" rx="6" fill="#f8f8f9" />

    {/* Browser chrome */}
    <g fontFamily="IBM Plex Sans, system-ui, sans-serif">
      <rect x="80" y="50" width="740" height="30" fill="#eef0f2" />
      <circle cx="100" cy="65" r="4" fill="#e57373" />
      <circle cx="114" cy="65" r="4" fill="#f2c94c" />
      <circle cx="128" cy="65" r="4" fill="#68c186" />
      <rect x="150" y="55" width="500" height="20" rx="10" fill="#ffffff" stroke="#d8d8d8" />
      <text x="164" y="69" fontSize="10" fill="#686868">rmn.telco-platform.local  ·  DSP — Campaign Manager</text>

      {/* App top bar */}
      <rect x="80" y="80" width="740" height="42" fill="#071012" />
      <text x="100" y="105" fontSize="12" fontWeight="600" fill="#ffffff" letterSpacing="2">RMN</text>
      {['Plan', 'Campaigns', 'Creative', 'Audiences', 'Prove'].map((t, i) => (
        <text
          key={t}
          x={168 + i * 76}
          y="105"
          fontSize="11"
          fill={t === 'Campaigns' ? '#ffffff' : '#8f8f8f'}
          fontWeight={t === 'Campaigns' ? 600 : 400}
        >
          {t}
        </text>
      ))}
      <circle cx="794" cy="101" r="10" fill="#1377b0" />
      <text x="794" y="105" textAnchor="middle" fontSize="10" fill="#ffffff" fontWeight="600">A</text>

      {/* Left sidebar */}
      <rect x="80" y="122" width="160" height="328" fill="#f6f6f7" />
      <text x="98" y="148" fontSize="10" fill="#686868" letterSpacing="1.4">WORKSPACE</text>
      {[
        { label: 'All campaigns', active: true },
        { label: 'Drafts' },
        { label: 'Awaiting approval' },
        { label: 'Live' },
        { label: 'Completed' },
        { label: 'Archived' },
      ].map((r, i) => (
        <g key={r.label} transform={`translate(90, ${160 + i * 26})`}>
          {r.active && <rect width="140" height="22" rx="6" fill="#ffffff" stroke="#e0e0e0" />}
          <text x="14" y="15" fontSize="11" fill={r.active ? '#071012' : '#5b5b5b'} fontWeight={r.active ? 600 : 400}>
            {r.label}
          </text>
        </g>
      ))}

      <text x="98" y="336" fontSize="10" fill="#686868" letterSpacing="1.4">TOOLS</text>
      {['Audience library', 'Creative studio', 'Reports', 'Billing'].map((r, i) => (
        <text key={r} x="104" y={352 + i * 22} fontSize="11" fill="#5b5b5b">{r}</text>
      ))}

      {/* Main content */}
      <text x="260" y="150" fontSize="15" fontWeight="600" fill="#071012">Campaign performance</text>
      <text x="260" y="168" fontSize="11" fill="#686868">Last 14 days · all live campaigns · advertiser workspace</text>

      {/* KPI cards */}
      {[
        { x: 260, label: 'Impressions', val: '18.4M', delta: '+22% vs LP', tone: '#eef6fb', border: '#bcdbec' },
        { x: 400, label: 'Media spend', val: 'AED 1.24M', delta: 'pacing +4%', tone: '#eaf6ea', border: '#c8e6c8' },
        { x: 540, label: 'ROAS', val: '3.8×', delta: 'target 3.0×', tone: '#fdefc0', border: '#e1c465' },
        { x: 680, label: 'Setup time', val: '2h avg', delta: '−68% vs prior', tone: '#eef6fb', border: '#bcdbec' },
      ].map((k) => (
        <g key={k.label} transform={`translate(${k.x}, 180)`}>
          <rect width="128" height="72" rx="8" fill={k.tone} stroke={k.border} />
          <text x="12" y="20" fontSize="9" fill="#5b5b5b" letterSpacing="1">{k.label.toUpperCase()}</text>
          <text x="12" y="42" fontSize="18" fontWeight="600" fill="#071012">{k.val}</text>
          <text x="12" y="60" fontSize="9" fill="#5b5b5b">{k.delta}</text>
        </g>
      ))}

      {/* Trend chart panel */}
      <g transform="translate(260, 268)">
        <rect width="548" height="80" rx="8" fill="#ffffff" stroke="#e0e0e0" />
        <text x="14" y="20" fontSize="10" fill="#686868" letterSpacing="1">MEDIA REVENUE — 14 DAYS</text>
        <polyline
          points="20,60 60,55 100,58 140,52 180,50 220,44 260,46 300,40 340,42 380,36 420,34 460,30 500,26 540,22"
          fill="none"
          stroke="url(#rev-line)"
          strokeWidth="2"
        />
        {[20, 100, 180, 260, 340, 420, 500].map((x) => (
          <circle key={x} cx={x} cy={x < 260 ? 55 : x < 380 ? 40 : x < 460 ? 32 : 26} r="1.6" fill="#1377b0" />
        ))}
      </g>

      {/* Campaigns table */}
      <g transform="translate(260, 360)">
        <rect width="548" height="82" rx="8" fill="#ffffff" stroke="#e0e0e0" />
        <text x="14" y="18" fontSize="10" fill="#686868" letterSpacing="1">LIVE CAMPAIGNS</text>
        {[
          { name: 'Ramadan — Home fibre push', pkg: 'Premium', spend: 'AED 340K', roas: '4.1×', status: 'Live' },
          { name: 'GCC roamers — travel add-on', pkg: 'Executive', spend: 'AED 210K', roas: '3.6×', status: 'Live' },
          { name: 'Gold tier — retention', pkg: 'Residential', spend: 'AED 88K', roas: '3.2×', status: 'Pacing' },
        ].map((c, i) => (
          <g key={c.name} transform={`translate(14, ${34 + i * 16})`} fontSize="10" fill="#242424">
            <circle cx="0" cy="-3" r="3" fill={c.status === 'Live' ? '#197417' : '#e0a63a'} />
            <text x="10">{c.name}</text>
            <text x="260">{c.pkg}</text>
            <text x="352">{c.spend}</text>
            <text x="448">{c.roas}</text>
            <text x="500">{c.status}</text>
          </g>
        ))}
      </g>
    </g>
  </svg>
)

export const PortalMap = () => (
  <svg viewBox="0 0 900 480" role="img" aria-label="Two workspaces — Demand and Supply — with personas switched via profile toggle" className="w-full">
    <g fontFamily="IBM Plex Sans, system-ui, sans-serif">
      <text x="30" y="30" fontSize="12" fill="#686868" letterSpacing="1.2">
        TWO WORKSPACES · PERSONA-BASED VIEWS · ONE SHARED PLATFORM
      </text>

      {/* Two workspaces */}
      {[
        {
          x: 30,
          title: 'DEMAND',
          full: 'Demand-Side workspace',
          sub: 'Advertiser side. Search availability, build campaigns, bind creatives, review performance.',
          fill: '#eef6fb',
          border: '#bcdbec',
          color: '#1377b0',
          personas: ['Advertiser', 'Brand Team', 'Media Buyer'],
        },
        {
          x: 460,
          title: 'SUPPLY',
          full: 'Supply-Side workspace',
          sub: 'Inventory side. One login, multiple personas — switched via the profile toggle.',
          fill: '#eaf6ea',
          border: '#c8e6c8',
          color: '#197417',
          personas: ['Inventory Manager', 'Operations', 'Finance'],
        },
      ].map((p) => (
        <g key={p.title} transform={`translate(${p.x}, 60)`}>
          <rect width="410" height="320" rx="18" fill={p.fill} stroke={p.border} />
          <text x="24" y="38" fontSize="14" fontWeight="600" fill={p.color} letterSpacing="1.2">{p.title}</text>
          <text x="24" y="66" fontSize="18" fontWeight="600" fill="#071012">{p.full}</text>
          <foreignObject x="24" y="80" width="362" height="60">
            <div style={{ fontFamily: 'IBM Plex Sans, system-ui, sans-serif', fontSize: 12, color: '#242424', lineHeight: 1.5 }}>
              {p.sub}
            </div>
          </foreignObject>
          <text x="24" y="168" fontSize="11" fill="#686868" letterSpacing="1.2">PERSONAS</text>
          <g transform="translate(24, 180)">
            {p.personas.map((r, i) => (
              <g key={r} transform={`translate(0, ${i * 36})`}>
                <rect width="362" height="28" rx="7" fill="#ffffff" stroke={p.border} />
                <text x="14" y="19" fontSize="12" fill="#242424">{r}</text>
                <text x="348" y="19" fontSize="10" fill="#686868" textAnchor="end">Viewing as</text>
              </g>
            ))}
          </g>
        </g>
      ))}

      {/* Base layer */}
      <g transform="translate(30, 400)">
        <rect width="840" height="60" rx="10" fill="#071012" />
        <text x="420" y="26" textAnchor="middle" fontSize="13" fill="#ffffff">
          Shared platform — first-party telco audiences · compliance and security automated across stages
        </text>
        <text x="420" y="46" textAnchor="middle" fontSize="11" fill="#a8a8a8">
          Administration lives in a third workspace, Platform — a separate login, not covered in this case study.
        </text>
      </g>
    </g>
  </svg>
)

export const RateCardModel = () => (
  <svg viewBox="0 0 900 300" role="img" aria-label="Rate-card model: 15 screens × 10-sec plays × 2 weeks" className="w-full">
    <g fontFamily="IBM Plex Sans, system-ui, sans-serif">
      <text x="30" y="30" fontSize="12" fill="#686868" letterSpacing="1.2">
        THE UNIT OF SALE — INSPIRED BY FLIGHT-BOOKING UX
      </text>

      {/* Package cards */}
      {[
        { x: 30, title: 'Executive', sub: 'AED XX,XXX / 2 weeks', tone: '#fdefc0', bd: '#e1c465' },
        { x: 320, title: 'Residential', sub: 'AED X,XXX / 2 weeks', tone: '#eef6fb', bd: '#bcdbec' },
        { x: 610, title: 'Premium', sub: 'AED XX,XXX / 2 weeks', tone: '#eaf6ea', bd: '#c8e6c8' },
      ].map((p) => (
        <g key={p.title} transform={`translate(${p.x}, 60)`}>
          <rect width="260" height="100" rx="14" fill={p.tone} stroke={p.bd} />
          <text x="24" y="36" fontSize="16" fontWeight="600" fill="#071012">{p.title}</text>
          <text x="24" y="60" fontSize="12" fill="#242424">{p.sub}</text>
          <text x="24" y="80" fontSize="12" fill="#686868">1 slot = 10-sec play / minute loop</text>
        </g>
      ))}

      {/* Unit maths */}
      <g transform="translate(30, 190)">
        <rect width="840" height="80" rx="12" fill="#f6f6f6" stroke="#e0e0e0" />
        <text x="24" y="30" fontSize="13" fill="#242424">
          <tspan fontWeight="600">15 screens</tspan> × <tspan fontWeight="600">10-sec plays</tspan> ×{' '}
          <tspan fontWeight="600">1-min loop</tspan> ×{' '}
          <tspan fontWeight="600">2 weeks</tspan> = one bookable slot.
        </text>
        <text x="24" y="54" fontSize="12" fill="#686868">
          impressions ≈ plays × footfall coefficient (3–5) — the number the advertiser really cares about
        </text>
      </g>
    </g>
  </svg>
)

export const AiWorkflow = () => (
  <svg viewBox="0 0 900 420" role="img" aria-label="AI-assisted demo build workflow" className="w-full">
    <g fontFamily="IBM Plex Sans, system-ui, sans-serif">
      <text x="30" y="30" fontSize="12" fill="#686868" letterSpacing="1.2">
        HOW THE REPLICA DEMO GETS BUILT — CLAUDE CODE + GIT
      </text>

      {[
        {
          x: 30,
          n: '1',
          title: 'Extract intent',
          body: 'Real screens + BRD notes → a written brief of every screen, in plain language. What is on it, what it does, what data.',
        },
        {
          x: 240,
          n: '2',
          title: 'Prompt to Claude Code',
          body: 'One screen at a time. Constraints as prose. Reference component library. Ask for React + Tailwind.',
        },
        {
          x: 450,
          n: '3',
          title: 'Visual diff',
          body: 'Run local. Screenshot. Compare against the source. Prompt the delta. Repeat until it reads right.',
        },
        {
          x: 660,
          n: '4',
          title: 'Git checkpoint',
          body: 'Commit each meaningful state. Named branches per portal. Reversible at every step.',
        },
      ].map((s) => (
        <g key={s.n} transform={`translate(${s.x}, 60)`}>
          <rect width="210" height="220" rx="14" fill="#ffffff" stroke="#e0e0e0" />
          <circle cx="30" cy="34" r="16" fill="#071012" />
          <text x="30" y="39" textAnchor="middle" fontSize="14" fontWeight="600" fill="#ffffff">{s.n}</text>
          <text x="56" y="40" fontSize="14" fontWeight="600" fill="#071012">{s.title}</text>
          <foreignObject x="20" y="60" width="180" height="150">
            <div style={{ fontFamily: 'IBM Plex Sans, system-ui, sans-serif', fontSize: 12, color: '#242424', lineHeight: 1.5 }}>
              {s.body}
            </div>
          </foreignObject>
        </g>
      ))}

      <g stroke="#686868" strokeWidth="1.5" fill="none" markerEnd="url(#ai-arr)">
        <line x1="240" y1="170" x2="240" y2="170" />
        <line x1="240" y1="170" x2="240" y2="170" />
      </g>
      {/* Between-step arrows */}
      <g stroke="#686868" strokeWidth="1.5" fill="none">
        <line x1="240" y1="170" x2="240" y2="170" />
      </g>
      <g transform="translate(0, 60)">
        {[240, 450, 660].map((x) => (
          <line
            key={x}
            x1={x - 30}
            y1="110"
            x2={x}
            y2="110"
            stroke="#686868"
            strokeWidth="1.5"
            markerEnd="url(#ai-arr)"
          />
        ))}
      </g>

      <g transform="translate(30, 310)">
        <rect width="840" height="80" rx="12" fill="#eaf6ea" stroke="#c8e6c8" />
        <text x="20" y="32" fontSize="13" fontWeight="600" fill="#197417">Deploy — Vercel</text>
        <text x="20" y="56" fontSize="12" fill="#242424">
          Every commit is a deployable state. The interviewer gets a link, not a Figma file.
        </text>
      </g>

      <defs>
        <marker id="ai-arr" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#686868" />
        </marker>
      </defs>
    </g>
  </svg>
)

export const ScreenPlaceholder = ({
  label,
  portal,
  caption,
}: {
  label: string
  portal: 'SSP' | 'DSP' | 'Retail' | 'Ops' | 'Finance'
  caption?: string
}) => {
  const portalColors: Record<string, { fill: string; text: string }> = {
    SSP: { fill: '#eef6fb', text: '#1377b0' },
    DSP: { fill: '#eaf6ea', text: '#197417' },
    Retail: { fill: '#fdefc0', text: '#5b4700' },
    Ops: { fill: '#f6f6f6', text: '#686868' },
    Finance: { fill: '#fbe9e9', text: '#8a1f1f' },
  }
  const c = portalColors[portal]
  return (
    <figure className="flex flex-col gap-3">
      <div className="relative overflow-hidden rounded-2xl border border-dashed border-[#c8c8c8] bg-surface">
        <div className="flex aspect-[16/10] w-full items-center justify-center">
          <div className="flex flex-col items-center gap-2 px-6 text-center">
            <span
              className="rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wide"
              style={{ background: c.fill, color: c.text }}
            >
              {portal} — screen slot
            </span>
            <span className="text-lg font-medium text-charcoal">{label}</span>
            <span className="text-sm text-muted">
              Rauf to drop branding-abstracted PNG into <code>src/assets/rmn/</code>
            </span>
          </div>
        </div>
      </div>
      {caption && <figcaption className="text-sm leading-6 text-muted">{caption}</figcaption>}
    </figure>
  )
}
