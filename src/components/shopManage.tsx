/* Diagrams for the Shop & Manage revamp case study. */
import type { ReactNode } from 'react'

export const TwoDrops = () => (
  <svg viewBox="0 0 900 340" role="img" aria-label="Drop 1 shipped, Drop 2 refined after real usage" className="w-full">
    <g fontFamily="IBM Plex Sans, system-ui, sans-serif">
      <text x="30" y="30" fontSize="12" fill="#686868" letterSpacing="1.2">
        TWO DROPS — SAME DIRECTION, SHARPER EXECUTION
      </text>

      {/* Drop 1 */}
      <g transform="translate(30, 60)">
        <rect width="400" height="250" rx="16" fill="#eef6fb" stroke="#bcdbec" />
        <text x="20" y="34" fontSize="12" fill="#1377b0" letterSpacing="1.2">DROP 1 · V1 SHIPPED</text>
        <text x="20" y="60" fontSize="18" fontWeight="600" fill="#071012">A confident first cut</text>
        <text x="20" y="86" fontSize="13" fill="#242424">Plan-first hierarchy · new taxonomy · offer slot.</text>
        <g transform="translate(20, 106)" fontSize="12" fill="#242424">
          {[
            'New IA landed and shipped to production',
            'Analytics + care-log signal collected',
            'What we could not test in flat-file review',
          ].map((l, i) => (
            <text key={i} y={i * 22 + 12}>• {l}</text>
          ))}
        </g>
      </g>

      {/* Drop 2 */}
      <g transform="translate(470, 60)">
        <rect width="400" height="250" rx="16" fill="#eaf6ea" stroke="#c8e6c8" />
        <text x="20" y="34" fontSize="12" fill="#197417" letterSpacing="1.2">DROP 2 · REFINEMENT AFTER USE</text>
        <text x="20" y="60" fontSize="18" fontWeight="600" fill="#071012">Sharpened by real behaviour</text>
        <text x="20" y="86" fontSize="13" fill="#242424">Same taxonomy, tighter hierarchy, better states.</text>
        <g transform="translate(20, 106)" fontSize="12" fill="#242424">
          {[
            'Fixed the misread “Manage” entry',
            'Offers show only when the flag is on',
            'Empty and ineligible states rewritten',
            'Copy tightened; icons calmed',
          ].map((l, i) => (
            <text key={i} y={i * 22 + 12}>• {l}</text>
          ))}
        </g>
      </g>

      <g stroke="#686868" strokeWidth="1.5" fill="none">
        <line x1="430" y1="180" x2="470" y2="180" markerEnd="url(#td-arr)" />
      </g>
      <defs>
        <marker id="td-arr" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#686868" />
        </marker>
      </defs>
    </g>
  </svg>
)

export const CustomerFlagFlow = () => (
  <svg viewBox="0 0 900 340" role="img" aria-label="Customer flag decides which offer surfaces" className="w-full">
    <g fontFamily="IBM Plex Sans, system-ui, sans-serif">
      <text x="30" y="30" fontSize="12" fill="#686868" letterSpacing="1.2">
        CUSTOMER FLAG → OFFER MAPPING
      </text>

      {/* Left column: customer with flags */}
      <g transform="translate(30, 60)">
        <rect width="230" height="240" rx="14" fill="#f6f6f6" stroke="#e0e0e0" />
        <text x="16" y="26" fontSize="12" fill="#686868" letterSpacing="1">CUSTOMER RECORD</text>
        <text x="16" y="54" fontSize="14" fontWeight="600" fill="#071012">Attributes on file</text>
        <g transform="translate(16, 72)" fontSize="12" fill="#242424">
          {[
            'Plan tier: Gold',
            'Tenure: 3+ years',
            'Roaming user: yes',
            'Flag: HOME_UPGRADE_ELIGIBLE',
            'Flag: LOYALTY_TOP_TIER',
          ].map((l, i) => (
            <text key={i} y={i * 22 + 12}>• {l}</text>
          ))}
        </g>
      </g>

      {/* Middle: rule engine */}
      <g transform="translate(300, 60)">
        <rect width="280" height="240" rx="14" fill="#fdefc0" stroke="#e1c465" />
        <text x="20" y="26" fontSize="12" fill="#5b4700" letterSpacing="1">FLAG → OFFER RULES</text>
        <text x="20" y="54" fontSize="14" fontWeight="600" fill="#071012">Decision I owned</text>
        <g transform="translate(20, 72)" fontSize="12" fill="#242424">
          {[
            'One flag never surfaces alone',
            'Priority: retention > cross-sell > up-sell',
            'Empty state: never blank, always calming',
            'Ineligible: hide the slot, do not tease',
          ].map((l, i) => (
            <text key={i} y={i * 24 + 12}>• {l}</text>
          ))}
        </g>
      </g>

      {/* Right: offers surfaced */}
      <g transform="translate(620, 60)">
        <rect width="250" height="240" rx="14" fill="#eaf6ea" stroke="#c8e6c8" />
        <text x="16" y="26" fontSize="12" fill="#197417" letterSpacing="1">OFFERS SHOWN TO THIS CUSTOMER</text>
        <g transform="translate(16, 60)" fontSize="12" fill="#0f3f0f">
          {[
            { l: 'Home fibre upgrade — 25% off', flag: 'HOME_UPGRADE' },
            { l: 'Priority care line', flag: 'LOYALTY' },
            { l: '(cross-sell add-ons hidden)', flag: '' },
          ].map((r, i) => (
            <g key={i} transform={`translate(0, ${i * 42})`}>
              <rect width="218" height="34" rx="7" fill="#ffffff" stroke="#c8e6c8" />
              <text x="10" y="20" fontSize="12">{r.l}</text>
            </g>
          ))}
        </g>
      </g>

      <g stroke="#686868" strokeWidth="1.5" fill="none" markerEnd="url(#cf-arr)">
        <line x1="260" y1="180" x2="300" y2="180" />
        <line x1="580" y1="180" x2="620" y2="180" />
      </g>
      <defs>
        <marker id="cf-arr" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#686868" />
        </marker>
      </defs>
    </g>
  </svg>
)

export const ShopFlowMap = () => {
  // Grid: 8 columns, 3 rows. Nodes are 138 × 74, rounded 10.
  const NW = 138
  const NH = 74
  const col = (n: number) => 40 + n * 170
  const R1 = 190
  const R2 = 330
  const R3 = 470
  type Node = { id: string; x: number; y: number; label: string; grey?: boolean }
  const nodes: Node[] = [
    { id: 'shop', x: col(0), y: R1, label: 'SHOP' },
    { id: 'cats', x: col(1), y: R1, label: 'Product\nCategories' },
    { id: 'prod', x: col(2), y: R1, label: 'Products' },
    { id: 'reco', x: col(2), y: R2, label: 'Recommen-\ndations', grey: true },
    { id: 'bann', x: col(2), y: R3, label: 'Banner', grey: true },
    { id: 'disc', x: col(3), y: R1, label: 'Discovery\npage with\nproduct cards' },
    { id: 'sub', x: col(3), y: R2, label: 'Sub\nCategory' },
    { id: 'pid', x: col(4), y: R1, label: 'Party ID\nSelection' },
    { id: 'acc', x: col(5), y: R2, label: 'Account\nNumber\nSelection' },
    { id: 'lead', x: col(6), y: R2, label: 'Lead form' },
    { id: 'sub-req', x: col(7), y: R2, label: 'Submit\nrequest' },
  ]
  const byId = Object.fromEntries(nodes.map((n) => [n.id, n])) as Record<string, Node>

  const width = col(7) + NW + 40
  const height = R3 + NH + 40

  const LEFT = (n: Node) => ({ x: n.x, y: n.y + NH / 2 })
  const RIGHT = (n: Node) => ({ x: n.x + NW, y: n.y + NH / 2 })
  const TOP = (n: Node) => ({ x: n.x + NW / 2, y: n.y })
  const BOT = (n: Node) => ({ x: n.x + NW / 2, y: n.y + NH })

  const straight = (a: { x: number; y: number }, b: { x: number; y: number }) =>
    `M ${a.x} ${a.y} L ${b.x} ${b.y}`
  const rightThenDown = (a: { x: number; y: number }, b: { x: number; y: number }) => {
    const midX = (a.x + b.x) / 2
    return `M ${a.x} ${a.y} L ${midX} ${a.y} L ${midX} ${b.y} L ${b.x} ${b.y}`
  }
  const downThenRight = rightThenDown // same shape, different intent
  const upOverDown = (a: { x: number; y: number }, b: { x: number; y: number }, archY: number) =>
    `M ${a.x} ${a.y} L ${a.x} ${archY} L ${b.x} ${archY} L ${b.x} ${b.y}`

  const arrows = [
    { d: straight(RIGHT(byId.shop), LEFT(byId.cats)) },
    { d: straight(RIGHT(byId.cats), LEFT(byId.prod)) },
    { d: rightThenDown(RIGHT(byId.cats), LEFT(byId.reco)) },
    { d: rightThenDown(RIGHT(byId.cats), LEFT(byId.bann)) },
    { d: straight(RIGHT(byId.prod), LEFT(byId.disc)) },
    { d: straight(RIGHT(byId.disc), LEFT(byId.pid)) },
    { d: straight(BOT(byId.sub), TOP({ ...byId.disc, y: byId.disc.y + NH })) },
    { d: downThenRight(RIGHT(byId.sub), LEFT(byId.pid)) },
    { d: upOverDown(TOP(byId.prod), TOP(byId.pid), R1 - 90) },
    { d: rightThenDown(RIGHT(byId.pid), LEFT(byId.acc)) },
    { d: upOverDown(TOP(byId.pid), TOP(byId.lead), R1 - 90) },
    { d: straight(RIGHT(byId.acc), LEFT(byId.lead)) },
    { d: straight(RIGHT(byId.lead), LEFT(byId['sub-req'])) },
  ]

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      role="img"
      aria-label="Shop path IA — from SHOP entry to Submit request"
      className="w-full"
    >
      <g fontFamily="IBM Plex Sans, system-ui, sans-serif">
        <text x="30" y="30" fontSize="12" fill="#686868" letterSpacing="1.2">
          SHOP PATH IA — RESEARCH-DERIVED FLOW, ENTRY TO LEAD
        </text>

        {/* Arrows */}
        <g fill="none" stroke="#A1A1AA" strokeWidth="1.5">
          {arrows.map((a, i) => (
            <path key={i} d={a.d} markerEnd="url(#sfm-arr)" />
          ))}
        </g>

        {/* Nodes */}
        {nodes.map((n) => {
          const fill = n.grey ? '#D4D4D4' : '#E9DAFF'
          const stroke = n.grey ? '#A3A3A3' : '#C7B0FF'
          const text = n.grey ? '#52525B' : '#18181B'
          const lines = n.label.split('\n')
          const lineHeight = 14
          const startY = n.y + NH / 2 - ((lines.length - 1) * lineHeight) / 2 + 4
          return (
            <g key={n.id}>
              <rect
                x={n.x}
                y={n.y}
                width={NW}
                height={NH}
                rx={10}
                fill={fill}
                stroke={stroke}
                strokeWidth="1"
              />
              {lines.map((ln, i) => (
                <text
                  key={i}
                  x={n.x + NW / 2}
                  y={startY + i * lineHeight}
                  textAnchor="middle"
                  fontSize="12"
                  fontWeight="600"
                  fill={text}
                >
                  {ln}
                </text>
              ))}
            </g>
          )
        })}

        <defs>
          <marker
            id="sfm-arr"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#A1A1AA" />
          </marker>
        </defs>
      </g>
    </svg>
  )
}

import shopHomeImg from '../assets/shop-manage/home.png'
import shopMobilePlansImg from '../assets/shop-manage/shop-mobile-plans.png'
import simCloneMultipleSimsImg from '../assets/shop-manage/sim-cloning-multiple-sims.png'
import manageMobileAccountsImg from '../assets/shop-manage/manage-mobile-accounts.png'
import simReplacementActivateImg from '../assets/shop-manage/sim-replacement-esim-activate.png'

export const ScreensShowcase = () => {
  const screens = [
    { src: manageMobileAccountsImg, flow: 'Postpaid ↔ Prepaid', label: 'Manage hub' },
    { src: shopHomeImg, flow: 'Shop / Manage', label: 'Home — plan-first', hero: true },
    { src: shopMobilePlansImg, flow: 'Shop', label: 'Mobile plans' },
    { src: simCloneMultipleSimsImg, flow: 'SIM Clone', label: 'Multiple SIMs' },
    { src: simReplacementActivateImg, flow: 'SIM Replacement', label: 'e-SIM activation' },
  ]
  return (
    <div className="relative bg-gradient-to-b from-[#F5F2FF] via-[#FAF8FF] to-[#EEF2FB] px-4 py-8 sm:px-8 sm:py-12 lg:px-14 lg:py-14">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/70 to-transparent" />
      <div className="pointer-events-none absolute -left-24 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[#E9DAFF] opacity-40 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-[#DDECFB] opacity-40 blur-3xl" />

      <div className="relative -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:mx-0 sm:justify-center sm:overflow-visible sm:px-0 sm:pb-0 lg:gap-6">
        {screens.map((s, i) => (
          <figure
            key={i}
            className={`group flex shrink-0 snap-center flex-col items-center gap-3 transition-transform duration-500 ${
              s.hero ? 'sm:-translate-y-3 lg:-translate-y-4' : i % 2 === 0 ? 'sm:translate-y-2' : ''
            }`}
          >
            <div
              className={`relative overflow-hidden rounded-[28px] border border-white/60 bg-white shadow-[0_20px_60px_-20px_rgba(24,24,27,0.28),0_8px_20px_-10px_rgba(24,24,27,0.18)] ${
                s.hero
                  ? 'w-[200px] sm:w-[220px] lg:w-[240px]'
                  : 'w-[160px] sm:w-[180px] lg:w-[200px]'
              }`}
              style={{ aspectRatio: '9 / 19.5' }}
            >
              <img
                src={s.src}
                alt={`${s.flow} — ${s.label}`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
              <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-inset ring-black/5" />
            </div>
            <figcaption className="flex w-full flex-col items-center gap-1 text-center">
              <span className="rounded-full bg-white/80 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#3F1F7F] backdrop-blur">
                {s.flow}
              </span>
              <span className="text-xs font-medium text-charcoal">{s.label}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      <p className="relative mt-8 text-center text-xs uppercase tracking-[0.2em] text-[#7C6FA6]">
        Four flows · one plan-first IA · e&amp; consumer app
      </p>
    </div>
  )
}

/* ------------------------------------------------------------------
 * Phone frame + flow mockup panel (dark background, iPhone-style bezel)
 * ------------------------------------------------------------------ */

const PhoneFrame = ({
  src,
  alt,
  widthClass = 'w-[150px] sm:w-[168px] lg:w-[180px]',
}: {
  src: string
  alt: string
  widthClass?: string
}) => (
  <div
    className={`relative shrink-0 ${widthClass} rounded-[34px] bg-[#0F0F12] p-[6px] shadow-[0_28px_60px_-24px_rgba(0,0,0,0.55),0_10px_24px_-12px_rgba(0,0,0,0.45)]`}
    style={{ aspectRatio: '9 / 19.5' }}
  >
    <div className="relative h-full w-full overflow-hidden rounded-[28px] bg-white">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover object-top"
      />
      {/* notch */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[16px] w-[80px] -translate-x-1/2 rounded-b-[12px] bg-[#0F0F12]" />
      {/* subtle inner ring */}
      <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-inset ring-white/10" />
    </div>
  </div>
)

const flowMockupChip: Record<string, { fill: string; text: string }> = {
  Shopping: { fill: 'rgba(233,218,255,0.16)', text: '#D8C7FF' },
  Managing: { fill: 'rgba(221,236,251,0.16)', text: '#B6DAFF' },
  'SIM switching': { fill: 'rgba(253,231,243,0.16)', text: '#F7B7DA' },
  'SIM replacement': { fill: 'rgba(220,252,231,0.16)', text: '#A7EFC0' },
}

export const FlowMockup = ({
  flow,
  title,
  description,
  screens,
  note,
}: {
  flow: 'Shopping' | 'Managing' | 'SIM switching' | 'SIM replacement'
  title: string
  description?: string
  screens: { src: string; alt: string; caption?: string }[]
  note?: string
}) => {
  const chip = flowMockupChip[flow]
  return (
    <div className="overflow-hidden rounded-3xl bg-[#0B0B0E] p-6 sm:p-8 lg:p-10">
      <div className="flex flex-col gap-1 pb-6">
        <span
          className="w-fit rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] backdrop-blur"
          style={{ background: chip.fill, color: chip.text }}
        >
          {flow}
        </span>
        <h4 className="text-base font-medium text-white sm:text-lg">{title}</h4>
        {description && (
          <p className="max-w-[68ch] text-sm leading-6 text-white/60">{description}</p>
        )}
      </div>

      <div className="relative">
        {/* edge fades — visual cue that the row keeps going */}
        <div className="pointer-events-none absolute -left-6 top-0 z-10 h-full w-10 bg-gradient-to-r from-[#0B0B0E] via-[#0B0B0E]/80 to-transparent sm:-left-8 lg:-left-10" />
        <div className="pointer-events-none absolute -right-6 top-0 z-10 h-full w-10 bg-gradient-to-l from-[#0B0B0E] via-[#0B0B0E]/80 to-transparent sm:-right-8 lg:-right-10" />

        <div
          className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-3 sm:-mx-8 sm:px-8 lg:-mx-10 lg:px-10"
          style={{ scrollbarWidth: 'thin' }}
        >
          {screens.map((s, i) => (
            <figure key={i} className="flex snap-center flex-col items-center gap-2">
              <PhoneFrame src={s.src} alt={s.alt} />
              {s.caption && (
                <figcaption className="max-w-[164px] text-center text-[11px] leading-4 text-white/55">
                  {s.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>

        {/* subtle "scroll for more" hint on wide viewports when there are many screens */}
        {screens.length >= 5 && (
          <p className="mt-2 text-right text-[10px] uppercase tracking-[0.2em] text-white/35">
            Scroll →
          </p>
        )}
      </div>

      {note && <p className="mt-6 text-xs text-white/40">{note}</p>}
    </div>
  )
}

/* ------------------------------------------------------------------
 * ResearchSnapshot — mock of a FigJam-style research board
 *
 * Feels like a real working artifact rather than a designed one:
 * dark toolbar, dot-grid canvas, dense sticky clusters, live
 * cursors with participant tags, sketchy connectors, comment
 * pins, minimap, zoom control. Text on stickies is deliberately
 * small so the board reads as texture, not content.
 * ------------------------------------------------------------------ */

const CANVAS_W = 1120
const CANVAS_H = 640

const stickyBase =
  'absolute rounded-[3px] p-1.5 shadow-[0_4px_10px_-4px_rgba(60,50,20,0.35),0_1.5px_3px_-1px_rgba(60,50,20,0.25)]'

const Sticky = ({
  x,
  y,
  w = 78,
  h = 78,
  tone,
  rotate = 0,
  children,
  fontSize = 10,
}: {
  x: number
  y: number
  w?: number
  h?: number
  tone: 'yellow' | 'pink' | 'orange' | 'green' | 'blue' | 'lilac'
  rotate?: number
  children: ReactNode
  fontSize?: number
}) => {
  const tones = {
    yellow: '#FDF3B0',
    pink: '#FBCFE4',
    orange: '#FED7AA',
    green: '#D6F1D0',
    blue: '#C7DFF7',
    lilac: '#E6D9FF',
  }
  return (
    <div
      className={stickyBase}
      style={{
        left: x,
        top: y,
        width: w,
        height: h,
        background: tones[tone],
        transform: `rotate(${rotate}deg)`,
        fontFamily: '"Caveat", "Bradley Hand", cursive',
        fontSize,
        lineHeight: 1.1,
        color: '#3d2b12',
        overflow: 'hidden',
      }}
    >
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/40 to-transparent" />
      <span className="relative">{children}</span>
    </div>
  )
}

const ClusterLabel = ({ x, y, children, rotate = 0 }: { x: number; y: number; children: ReactNode; rotate?: number }) => (
  <div
    className="absolute"
    style={{
      left: x,
      top: y,
      transform: `rotate(${rotate}deg)`,
      fontFamily: '"Kalam", "Caveat", cursive',
      fontSize: 14,
      fontWeight: 700,
      letterSpacing: '0.03em',
      color: '#1a1a1a',
      background:
        'linear-gradient(180deg, transparent 55%, rgba(253, 224, 71, 0.65) 55%, rgba(253, 224, 71, 0.65) 88%, transparent 88%)',
      padding: '1px 6px',
    }}
  >
    {children}
  </div>
)

const Cursor = ({
  x,
  y,
  color,
  name,
}: {
  x: number
  y: number
  color: string
  name: string
}) => (
  <div className="pointer-events-none absolute" style={{ left: x, top: y }}>
    <svg width="18" height="20" viewBox="0 0 18 20" style={{ filter: `drop-shadow(0 1px 2px rgba(0,0,0,0.2))` }}>
      <path d="M 1 1 L 1 15 L 5 11 L 8 18 L 11 17 L 8 10 L 14 10 Z" fill={color} stroke="white" strokeWidth="1" />
    </svg>
    <div
      className="mt-0.5 rounded-[3px] px-1.5 py-[1px] text-white"
      style={{
        background: color,
        fontFamily: '"IBM Plex Sans", system-ui, sans-serif',
        fontSize: 10,
        fontWeight: 500,
        display: 'inline-block',
      }}
    >
      {name}
    </div>
  </div>
)

const CommentPin = ({ x, y, count }: { x: number; y: number; count: number }) => (
  <div
    className="absolute flex items-center justify-center rounded-full text-white shadow"
    style={{
      left: x,
      top: y,
      width: 20,
      height: 20,
      background: '#0EA5E9',
      fontFamily: 'system-ui, sans-serif',
      fontSize: 10,
      fontWeight: 600,
      border: '2px solid white',
    }}
  >
    {count}
  </div>
)

export const ResearchSnapshot = () => (
  <div
    className="relative overflow-hidden rounded-2xl border border-[#E4E4E7] bg-white shadow-[0_20px_60px_-30px_rgba(0,0,0,0.25),0_8px_20px_-14px_rgba(0,0,0,0.15)]"
  >
    {/* Toolbar chrome */}
    <div className="flex items-center justify-between border-b border-[#2A2C33] bg-[#1E1F24] px-3 py-2 text-white">
      <div className="flex min-w-0 items-center gap-2">
        <div className="flex h-6 w-6 items-center justify-center rounded bg-gradient-to-br from-[#F24E1E] via-[#A259FF] to-[#0ACF83]">
          <span style={{ fontFamily: 'system-ui', fontSize: 10, fontWeight: 700 }}>F</span>
        </div>
        <div className="min-w-0 truncate" style={{ fontFamily: '"IBM Plex Sans", sans-serif', fontSize: 12 }}>
          <span className="text-white/50">Design / Research /</span>{' '}
          <span className="text-white">shop-manage · card sort · nov 24</span>
        </div>
      </div>

      {/* Tools cluster */}
      <div className="hidden items-center gap-1 sm:flex">
        {[
          { key: 'select', title: 'Select' },
          { key: 'sticky', title: 'Sticky' },
          { key: 'shape', title: 'Shape' },
          { key: 'text', title: 'Text' },
          { key: 'draw', title: 'Draw' },
          { key: 'connect', title: 'Connector' },
        ].map((t, i) => (
          <div
            key={t.key}
            className="flex h-6 w-6 items-center justify-center rounded text-white/60"
            style={{ background: i === 1 ? '#3B3E46' : 'transparent' }}
          >
            {t.key === 'sticky' && (
              <div className="h-3 w-3 rounded-[2px] bg-[#FDF3B0] shadow-inner" />
            )}
            {t.key === 'shape' && <div className="h-3 w-3 rounded-full border border-white/60" />}
            {t.key === 'text' && (
              <span style={{ fontFamily: 'serif', fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.75)' }}>T</span>
            )}
            {t.key === 'draw' && (
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5"><path d="M2 10 L10 2 M8 2 L10 2 L10 4" /></svg>
            )}
            {t.key === 'connect' && (
              <svg width="14" height="8" viewBox="0 0 14 8" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5"><path d="M0 4 L12 4 M9 1 L12 4 L9 7" /></svg>
            )}
            {t.key === 'select' && (
              <svg width="12" height="12" viewBox="0 0 12 12" fill="rgba(255,255,255,0.6)"><path d="M1 1 L1 9 L4 6 L6 11 L8 10 L6 5 L11 5 Z" /></svg>
            )}
          </div>
        ))}
      </div>

      {/* Participants + share */}
      <div className="flex items-center gap-2">
        <div className="flex -space-x-1.5">
          {[
            { c: '#EC4899', l: 'R' },
            { c: '#8B5CF6', l: 'S' },
            { c: '#10B981', l: 'A' },
            { c: '#F59E0B', l: 'M' },
          ].map((p, i) => (
            <div
              key={i}
              className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#1E1F24] text-white"
              style={{
                background: p.c,
                fontFamily: 'system-ui',
                fontSize: 9,
                fontWeight: 600,
              }}
            >
              {p.l}
            </div>
          ))}
        </div>
        <div
          className="rounded bg-[#3B82F6] px-2 py-0.5 text-white"
          style={{ fontFamily: '"IBM Plex Sans", sans-serif', fontSize: 11, fontWeight: 500 }}
        >
          Share
        </div>
      </div>
    </div>

    {/* Canvas viewport (scrolls if needed on narrow screens) */}
    <div className="relative overflow-auto bg-[#FAFAF7]" style={{ maxHeight: 640 }}>
      <div
        className="relative"
        style={{
          width: CANVAS_W,
          height: CANVAS_H,
          backgroundImage:
            'radial-gradient(#D8D6CE 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0',
        }}
      >
        {/* Sketchy background connector arrows */}
        <svg
          className="pointer-events-none absolute inset-0"
          width={CANVAS_W}
          height={CANVAS_H}
          fill="none"
          stroke="#A17F3F"
          strokeWidth="1.8"
          strokeLinecap="round"
        >
          <defs>
            <marker id="arr-brown" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#A17F3F" />
            </marker>
            <marker id="arr-red" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#B91C1C" />
            </marker>
          </defs>
          {/* SHOP → PLAN */}
          <path d="M 250 200 C 300 220, 340 240, 400 250" strokeDasharray="4 3" markerEnd="url(#arr-brown)" />
          {/* PLAN → SIM */}
          <path d="M 570 260 C 620 260, 660 260, 710 250" strokeDasharray="4 3" markerEnd="url(#arr-brown)" />
          {/* SIM → INSIGHTS */}
          <path d="M 880 280 C 900 350, 780 400, 700 430" strokeDasharray="4 3" markerEnd="url(#arr-brown)" />
          {/* Big red highlight arrow to the plan tile insight */}
          <path
            d="M 320 490 C 380 500, 440 490, 480 460"
            stroke="#B91C1C"
            strokeWidth="2.5"
            markerEnd="url(#arr-red)"
          />
        </svg>

        {/* Freehand highlight loop around plan cluster */}
        <svg
          className="pointer-events-none absolute"
          style={{ left: 340, top: 190, width: 250, height: 130 }}
          viewBox="0 0 250 130"
          fill="none"
          stroke="#B91C1C"
          strokeWidth="2.2"
          strokeLinecap="round"
        >
          <path d="M 20 60 C 20 20, 80 8, 130 12 C 200 18, 240 55, 235 85 C 228 118, 160 128, 100 122 C 40 116, 15 100, 20 60 Z" />
        </svg>

        {/* Cluster: SHOP (top-left) */}
        <ClusterLabel x={100} y={140} rotate={-1}>SHOP</ClusterLabel>
        <Sticky x={90} y={175} w={72} h={72} tone="yellow" rotate={-4}>Buy new<br/>plan</Sticky>
        <Sticky x={160} y={168} w={68} h={64} tone="yellow" rotate={3}>Roaming<br/>pack</Sticky>
        <Sticky x={110} y={240} w={60} h={58} tone="yellow" rotate={-2}>Top-up</Sticky>
        <Sticky x={175} y={232} w={64} h={62} tone="yellow" rotate={2}>Buy<br/>device</Sticky>
        <Sticky x={95} y={295} w={70} h={58} tone="yellow" rotate={-3} fontSize={9}>Add-on<br/>subscription</Sticky>
        <Sticky x={170} y={295} w={62} h={54} tone="yellow" rotate={1} fontSize={9}>Gift<br/>data</Sticky>

        {/* Cluster: MY PLAN (mid) */}
        <ClusterLabel x={410} y={200} rotate={1}>MY PLAN</ClusterLabel>
        <Sticky x={400} y={230} w={78} h={72} tone="pink" rotate={-3}>See usage<br/>this cycle</Sticky>
        <Sticky x={480} y={225} w={64} h={62} tone="pink" rotate={2}>Pay bill</Sticky>
        <Sticky x={412} y={302} w={70} h={62} tone="pink" rotate={-2}>Change<br/>plan</Sticky>
        <Sticky x={485} y={295} w={64} h={58} tone="pink" rotate={3}>Freeze<br/>line</Sticky>
        <Sticky x={545} y={252} w={64} h={62} tone="pink" rotate={-1} fontSize={9}>Auto-pay<br/>settings</Sticky>

        {/* Cluster: SIM & NUMBER (top-right) */}
        <ClusterLabel x={720} y={155} rotate={-1}>SIM &amp; NUMBER</ClusterLabel>
        <Sticky x={710} y={185} w={72} h={68} tone="orange" rotate={2}>Replace<br/>lost SIM</Sticky>
        <Sticky x={790} y={175} w={68} h={64} tone="orange" rotate={-3}>Clone<br/>SIM</Sticky>
        <Sticky x={860} y={190} w={64} h={62} tone="orange" rotate={2}>Port<br/>number</Sticky>
        <Sticky x={720} y={252} w={70} h={60} tone="orange" rotate={-2}>Activate<br/>e-SIM</Sticky>
        <Sticky x={795} y={244} w={62} h={58} tone="orange" rotate={3} fontSize={9}>Swap<br/>SIM tier</Sticky>
        <Sticky x={860} y={258} w={60} h={54} tone="orange" rotate={-2} fontSize={9}>Migrate<br/>pre↔post</Sticky>

        {/* Cluster: ACCOUNT (right, lower) */}
        <ClusterLabel x={960} y={195} rotate={1}>ACCOUNT</ClusterLabel>
        <Sticky x={950} y={225} w={70} h={64} tone="green" rotate={-2}>Switch<br/>company</Sticky>
        <Sticky x={1025} y={230} w={62} h={58} tone="green" rotate={3}>Family<br/>plan</Sticky>
        <Sticky x={955} y={294} w={64} h={58} tone="green" rotate={2}>Settings</Sticky>
        <Sticky x={1025} y={290} w={60} h={58} tone="green" rotate={-3}>Consent</Sticky>

        {/* Cluster: INSIGHTS / RAW NOTES (bottom band, mixed) */}
        <ClusterLabel x={90} y={430} rotate={-1}>WHAT WE HEARD</ClusterLabel>
        <Sticky x={80} y={460} w={130} h={70} tone="blue" rotate={-2} fontSize={11}>
          <span style={{ color: '#7a1a1a', fontWeight: 700, fontSize: 13 }}>!! 62%</span> of first-8-sec taps → plan tile
        </Sticky>
        <Sticky x={220} y={455} w={130} h={70} tone="yellow" rotate={3} fontSize={11}>
          “Where is my bill?” asked 4× in 30 min
        </Sticky>
        <Sticky x={360} y={465} w={140} h={68} tone="pink" rotate={-2} fontSize={10}>
          Users don&apos;t distinguish <b>Manage</b> vs <b>Settings</b>
        </Sticky>
        <Sticky x={510} y={460} w={130} h={70} tone="orange" rotate={2} fontSize={10}>
          “Opened Shop by <i>mistake</i> — wanted usage.”
        </Sticky>
        <Sticky x={650} y={468} w={130} h={68} tone="lilac" rotate={-3} fontSize={10}>
          &quot;Manage&quot; = the settings gear to most people
        </Sticky>
        <Sticky x={790} y={462} w={130} h={72} tone="green" rotate={1} fontSize={10}>
          SIM tasks got sorted into <b>Account</b> just as often as <b>Manage</b>
        </Sticky>
        <Sticky x={935} y={468} w={135} h={72} tone="pink" rotate={-2} fontSize={10}>
          Nobody used the word <b>&quot;shop&quot;</b> — they said <i>&quot;buy&quot;</i>
        </Sticky>

        {/* Marker doodle underline under an insight */}
        <svg className="pointer-events-none absolute" style={{ left: 78, top: 528, width: 140, height: 12 }} viewBox="0 0 140 12" fill="none" stroke="#B91C1C" strokeWidth="2.5" strokeLinecap="round">
          <path d="M 4 6 C 30 2, 60 10, 90 5 S 130 8, 138 6" />
        </svg>

        {/* Comment pins on specific stickies */}
        <CommentPin x={175} y={175} count={3} />
        <CommentPin x={550} y={225} count={1} />
        <CommentPin x={880} y={240} count={2} />
        <CommentPin x={190} y={465} count={5} />

        {/* Live cursors */}
        <Cursor x={310} y={330} color="#EC4899" name="Rauf" />
        <Cursor x={620} y={210} color="#8B5CF6" name="Sarah · PM" />
        <Cursor x={880} y={370} color="#10B981" name="Ahmed · Dev" />
        <Cursor x={430} y={490} color="#F59E0B" name="Maya · Care" />

        {/* Section label at top-left of canvas */}
        <div
          className="absolute"
          style={{ left: 60, top: 60, fontFamily: '"Kalam", cursive', fontSize: 22, fontWeight: 700, color: '#1a1a1a' }}
        >
          Where does this task live? <span style={{ color: '#8a6a2a', fontSize: 14, fontWeight: 400 }}>· 42 tasks · 9 participants · open→closed</span>
        </div>

        {/* Timestamp / meta pinned to canvas */}
        <div
          className="absolute"
          style={{
            right: 60,
            top: 60,
            fontFamily: '"Kalam", cursive',
            fontSize: 12,
            color: '#6a5a2a',
            textAlign: 'right',
            lineHeight: 1.4,
          }}
        >
          Session 3 of 3 · Nov 12<br />
          <span style={{ color: '#8a6a2a' }}>Rauf, Sarah, Ahmed, Maya</span>
        </div>
      </div>

      {/* Zoom control (fixed to viewport bottom-left) */}
      <div
        className="pointer-events-none absolute bottom-3 left-3 flex items-center gap-1 rounded bg-white/95 px-2 py-1 shadow"
        style={{ fontFamily: '"IBM Plex Sans", sans-serif', fontSize: 11, color: '#3f3f46' }}
      >
        <span className="text-[#71717a]">−</span>
        <span className="font-medium">60%</span>
        <span className="text-[#71717a]">+</span>
        <span className="ml-2 text-[#a1a1aa]">Fit to page</span>
      </div>

      {/* Minimap (fixed to viewport bottom-right) */}
      <div
        className="pointer-events-none absolute bottom-3 right-3 overflow-hidden rounded bg-white/95 shadow"
        style={{ width: 132, height: 78, border: '1px solid #E4E4E7' }}
      >
        <div className="relative h-full w-full" style={{ background: '#FAFAF7' }}>
          {/* mini clusters */}
          <div className="absolute" style={{ left: 8, top: 12, width: 22, height: 20, background: '#FDF3B0', borderRadius: 2 }} />
          <div className="absolute" style={{ left: 40, top: 14, width: 20, height: 18, background: '#FBCFE4', borderRadius: 2 }} />
          <div className="absolute" style={{ left: 66, top: 10, width: 24, height: 20, background: '#FED7AA', borderRadius: 2 }} />
          <div className="absolute" style={{ left: 96, top: 14, width: 20, height: 18, background: '#D6F1D0', borderRadius: 2 }} />
          <div className="absolute" style={{ left: 10, top: 42, width: 108, height: 20, background: 'linear-gradient(90deg,#C7DFF7,#FDF3B0,#FBCFE4,#FED7AA,#D6F1D0)', borderRadius: 2, opacity: 0.7 }} />
          {/* viewport indicator */}
          <div
            className="absolute"
            style={{
              left: 4,
              top: 4,
              width: 124,
              height: 70,
              border: '1.5px solid #3B82F6',
              borderRadius: 2,
              boxShadow: '0 0 0 1px rgba(59,130,246,0.15)',
            }}
          />
        </div>
      </div>
    </div>
  </div>
)
