/* Diagrams for the Shop & Manage revamp case study. */

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

