/* Abstracted diagrams for the RMN Dolphin case study.
   No real screens — real screenshots (branding-abstracted) drop into src/assets/rmn/ separately. */

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

export const PortalMap = () => (
  <svg viewBox="0 0 900 480" role="img" aria-label="Three portals, seven roles" className="w-full">
    <g fontFamily="IBM Plex Sans, system-ui, sans-serif">
      <text x="30" y="30" fontSize="12" fill="#686868" letterSpacing="1.2">
        THREE PORTALS · SEVEN ROLES · ONE PLATFORM
      </text>

      {/* Three portals */}
      {[
        {
          x: 30,
          title: 'SSP',
          full: 'Supply-Side Portal',
          sub: 'Inventory owners — Media Owners, Aggregators. Plus Ops and Finance sub-roles.',
          fill: '#eef6fb',
          border: '#bcdbec',
          color: '#1377b0',
          roles: ['Inventory Admin', 'Operations', 'Finance'],
        },
        {
          x: 320,
          title: 'DSP',
          full: 'Demand-Side Portal',
          sub: 'Advertiser side. Build campaigns, target audiences, place bids, upload creatives.',
          fill: '#eaf6ea',
          border: '#c8e6c8',
          color: '#197417',
          roles: ['Advertiser', 'Brand Team', 'Media Buyer'],
        },
        {
          x: 610,
          title: 'Retail',
          full: 'Retail Partner Portal',
          sub: 'Retail tenants — screen owners at the venue level. Rate-card ownership, availability.',
          fill: '#fdefc0',
          border: '#e1c465',
          color: '#5b4700',
          roles: ['Retail Admin'],
        },
      ].map((p) => (
        <g key={p.title} transform={`translate(${p.x}, 60)`}>
          <rect width="260" height="330" rx="18" fill={p.fill} stroke={p.border} />
          <text x="24" y="38" fontSize="14" fontWeight="600" fill={p.color} letterSpacing="1">{p.title}</text>
          <text x="24" y="64" fontSize="16" fontWeight="600" fill="#071012">{p.full}</text>
          <foreignObject x="24" y="76" width="212" height="80">
            <div style={{ fontFamily: 'IBM Plex Sans, system-ui, sans-serif', fontSize: 12, color: '#242424', lineHeight: 1.5 }}>
              {p.sub}
            </div>
          </foreignObject>
          <g transform="translate(24, 180)">
            {p.roles.map((r, i) => (
              <g key={r} transform={`translate(0, ${i * 34})`}>
                <rect width="212" height="26" rx="7" fill="#ffffff" stroke={p.border} />
                <text x="14" y="18" fontSize="12" fill="#242424">{r}</text>
              </g>
            ))}
          </g>
        </g>
      ))}

      {/* Base layer */}
      <g transform="translate(30, 410)">
        <rect width="840" height="50" rx="10" fill="#071012" />
        <text x="420" y="32" textAnchor="middle" fontSize="13" fill="#ffffff">
          Shared platform — audiences from first-party telco data · compliance and security automated across stages
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
