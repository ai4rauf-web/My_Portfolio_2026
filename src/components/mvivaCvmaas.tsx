/* Abstracted diagrams for the mViva + CVMaaS case study.
   No customer logos, no real product screens — placeholders where PNGs will go. */
import type { BlurZone } from './caseStudy'

/* CVMaaS hero mockup — laptop-in-office wrapper (same visual language
   as the RMN hero) with an abstract Party Dashboard inside. Ships now;
   swap the children for a real screenshot once one lands on disk. */
export const CvmaasHeroMockup = ({
  src,
  alt,
  blur,
}: {
  src?: string
  alt?: string
  blur?: BlurZone[]
}) => (
  <div className="relative overflow-hidden rounded-2xl bg-[linear-gradient(135deg,#f6ecdc_0%,#e8dbc4_45%,#cfbfa1_100%)] px-6 py-10 lg:px-12 lg:py-16">
    {/* ambient bokeh */}
    <div className="pointer-events-none absolute -left-16 -top-10 h-56 w-56 rounded-full bg-emerald-300/30 blur-3xl" aria-hidden />
    <div className="pointer-events-none absolute right-4 top-6 h-48 w-48 rounded-full bg-amber-200/50 blur-3xl" aria-hidden />
    <div className="pointer-events-none absolute -bottom-20 left-1/3 h-56 w-72 rounded-full bg-rose-200/40 blur-3xl" aria-hidden />

    {/* laptop */}
    <div className="relative z-10 mx-auto max-w-[820px]">
      <div className="rounded-t-2xl bg-[#141414] p-3 shadow-[0_50px_60px_-24px_rgba(20,10,0,0.45),0_10px_30px_-12px_rgba(20,10,0,0.35)]">
        <div className="relative overflow-hidden rounded-md bg-white">
          {src ? (
            <>
              <img src={src} alt={alt ?? ''} className="block w-full" loading="lazy" />
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
            </>
          ) : (
            /* Abstract Party Dashboard — until real screen lands */
            <svg viewBox="0 0 1440 900" className="block w-full" role="img" aria-label="CVMaaS Party Dashboard with 'add campaign manager' notification">
              <rect width="1440" height="900" fill="#f8f8f9" />
              {/* Top bar */}
              <rect x="0" y="0" width="1440" height="58" fill="#ffffff" />
              <text x="72" y="36" fontFamily="IBM Plex Sans, system-ui" fontSize="18" fontWeight="700" fill="#c8102e">e&amp;</text>
              {['Dashboard', 'Manage', 'Pay', 'Order', 'Services', 'Support'].map((t, i) => (
                <text key={t} x={220 + i * 90} y="36" fontFamily="IBM Plex Sans, system-ui" fontSize="14" fill={t === 'Dashboard' ? '#c8102e' : '#5a5a5a'} fontWeight={t === 'Dashboard' ? 600 : 400}>
                  {t}
                </text>
              ))}
              <line x1="220" y1="55" x2="298" y2="55" stroke="#c8102e" strokeWidth="2" />

              {/* Party header */}
              <text x="72" y="122" fontFamily="IBM Plex Sans, system-ui" fontSize="26" fontWeight="700" fill="#242424">JVC sec34</text>
              <text x="72" y="146" fontFamily="IBM Plex Sans, system-ui" fontSize="11" fill="#686868" letterSpacing="1.4">VIEW DOCUMENTS  ›</text>

              {/* Accounts card */}
              <rect x="72" y="184" width="440" height="200" rx="12" fill="#ffffff" stroke="#ececec" />
              <text x="88" y="212" fontFamily="IBM Plex Sans, system-ui" fontSize="11" fill="#686868" letterSpacing="1.4">ACCOUNTS</text>
              <text x="88" y="234" fontFamily="IBM Plex Sans, system-ui" fontSize="12" fill="#c8102e">82 Active · 1 Inactive · 1 Suspended</text>
              <circle cx="180" cy="310" r="52" fill="none" stroke="#5c1b3b" strokeWidth="16" />
              <text x="180" y="316" fontFamily="IBM Plex Sans, system-ui" fontSize="24" fontWeight="700" fill="#242424" textAnchor="middle">142</text>
              {[
                { l: 'Mobile', v: '150', c: '#c8102e' },
                { l: 'Internet & Data', v: '40', c: '#5c1b3b' },
                { l: 'Business in a Box', v: '10', c: '#2b6cb0' },
                { l: 'Devices', v: '8', c: '#8b8b8b' },
              ].map((r, i) => (
                <g key={r.l} transform={`translate(272, ${256 + i * 22})`}>
                  <rect width="8" height="8" y="-8" fill={r.c} />
                  <text x="16" y="0" fontFamily="IBM Plex Sans, system-ui" fontSize="12" fill="#242424">{r.l}</text>
                  <text x="220" y="0" fontFamily="IBM Plex Sans, system-ui" fontSize="12" fontWeight="600" fill="#242424" textAnchor="end">{r.v}</text>
                </g>
              ))}

              {/* Quick access card */}
              <rect x="530" y="184" width="240" height="200" rx="12" fill="#ffffff" stroke="#ececec" />
              <text x="546" y="212" fontFamily="IBM Plex Sans, system-ui" fontSize="11" fill="#686868" letterSpacing="1.4">QUICK ACCESS</text>
              {['Make a payment', 'Bulk payment', 'Order smartphone', 'Support ticket', 'Cloud services'].map((l, i) => (
                <text key={l} x="558" y={242 + i * 22} fontFamily="IBM Plex Sans, system-ui" fontSize="12" fill="#242424">
                  ○  {l}
                </text>
              ))}

              {/* Orders + support */}
              <rect x="72" y="404" width="440" height="120" rx="12" fill="#ffffff" stroke="#ececec" />
              <text x="88" y="432" fontFamily="IBM Plex Sans, system-ui" fontSize="11" fill="#686868" letterSpacing="1.4">ORDERS · LAST 30 DAYS</text>
              {[
                { l: 'All', v: '20' },
                { l: 'In Progress', v: '3' },
                { l: 'Delivered', v: '15' },
                { l: 'Cancelled', v: '2' },
              ].map((r, i) => (
                <g key={r.l} transform={`translate(${104 + i * 100}, 476)`}>
                  <text x="0" y="0" fontFamily="IBM Plex Sans, system-ui" fontSize="22" fontWeight="700" fill="#242424">{r.v}</text>
                  <text x="0" y="20" fontFamily="IBM Plex Sans, system-ui" fontSize="11" fill="#686868">{r.l}</text>
                </g>
              ))}
              <rect x="530" y="404" width="240" height="120" rx="12" fill="#ffffff" stroke="#ececec" />
              <text x="546" y="432" fontFamily="IBM Plex Sans, system-ui" fontSize="11" fill="#686868" letterSpacing="1.4">SUPPORT · LAST 30 DAYS</text>
              <text x="560" y="472" fontFamily="IBM Plex Sans, system-ui" fontSize="12" fill="#242424">Open tickets  2</text>
              <text x="560" y="492" fontFamily="IBM Plex Sans, system-ui" fontSize="12" fill="#242424">Closed tickets  2</text>

              {/* Notifications panel (right-hand slide-over) */}
              <rect x="792" y="0" width="648" height="900" fill="#ffffff" />
              <line x1="792" y1="0" x2="792" y2="900" stroke="#ececec" />
              <text x="828" y="42" fontFamily="IBM Plex Sans, system-ui" fontSize="20" fontWeight="700" fill="#242424">Notifications.</text>
              <line x1="828" y1="80" x2="878" y2="80" stroke="#c8102e" strokeWidth="2" />
              <text x="828" y="72" fontFamily="IBM Plex Sans, system-ui" fontSize="13" fill="#242424">All</text>
              <text x="880" y="72" fontFamily="IBM Plex Sans, system-ui" fontSize="13" fill="#686868">Unread  3</text>
              <text x="828" y="110" fontFamily="IBM Plex Sans, system-ui" fontSize="10" fill="#686868" letterSpacing="1.4">NEW</text>

              {/* Notification 1 — bill payment */}
              <text x="856" y="146" fontFamily="IBM Plex Sans, system-ui" fontSize="12" fill="#242424">Bill payment for account number 6544756 is overdue by 6 days.</text>
              <text x="856" y="166" fontFamily="IBM Plex Sans, system-ui" fontSize="10" fill="#a8a8a8">Today at 9:42 AM</text>

              {/* Notification 2 — CVMaaS ADD USERS — the important one */}
              <rect x="820" y="196" width="600" height="120" rx="6" fill="#fef7f0" stroke="#f2d7c7" />
              <text x="856" y="220" fontFamily="IBM Plex Sans, system-ui" fontSize="12" fill="#242424">Your CVMaaS package (90064683833) has no campaign managers.</text>
              <text x="856" y="238" fontFamily="IBM Plex Sans, system-ui" fontSize="12" fill="#242424">To start using the service, add campaign managers.</text>
              <rect x="856" y="256" width="120" height="36" rx="4" fill="#ffffff" stroke="#c8102e" />
              <text x="916" y="278" fontFamily="IBM Plex Sans, system-ui" fontSize="12" fontWeight="600" fill="#c8102e" textAnchor="middle">ADD USERS</text>
              <text x="856" y="304" fontFamily="IBM Plex Sans, system-ui" fontSize="10" fill="#a8a8a8">Today at 9:42 AM</text>

              {/* Notification 3 — payment overdue again */}
              <text x="856" y="346" fontFamily="IBM Plex Sans, system-ui" fontSize="12" fill="#242424">Bill payment for account 6544756 is overdue by 6 days.</text>
              <text x="856" y="366" fontFamily="IBM Plex Sans, system-ui" fontSize="10" fill="#a8a8a8">Today at 9:42 AM</text>

              {/* YESTERDAY divider */}
              <text x="828" y="406" fontFamily="IBM Plex Sans, system-ui" fontSize="10" fill="#686868" letterSpacing="1.4">YESTERDAY</text>
              {[0, 1, 2, 3].map((i) => (
                <g key={i}>
                  <text x="856" y={438 + i * 44} fontFamily="IBM Plex Sans, system-ui" fontSize="12" fill="#242424">
                    Bill payment for account 65446547 is overdue by 6 days.
                  </text>
                  <text x="856" y={458 + i * 44} fontFamily="IBM Plex Sans, system-ui" fontSize="10" fill="#a8a8a8">
                    Today at 9:42 AM
                  </text>
                </g>
              ))}

              {/* Close X */}
              <text x="1408" y="42" fontFamily="IBM Plex Sans, system-ui" fontSize="22" fill="#686868" textAnchor="middle">×</text>
            </svg>
          )}
        </div>
      </div>
      {/* base */}
      <div className="relative mx-auto h-3 w-[104%] -translate-x-[2%] rounded-b-[16px] bg-[linear-gradient(180deg,#dcdcdc_0%,#a5a5a5_100%)]" />
      <div className="mx-auto -mt-[6px] h-[6px] w-24 rounded-b-[6px] bg-[#8a8a8a]" />
    </div>

    {/* desk shadow */}
    <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-[linear-gradient(to_top,rgba(80,50,20,0.16),transparent)]" aria-hidden />
  </div>
)

/* FigJam-style research canvas — sticky notes grouped in four columns.
   Same visual grammar as the RMN canvas: dot-grid, warm tones, dotted
   "by the way" connectors that signal linkage without demanding to be read. */
export const MvivaInsightsCanvas = () => {
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
    // PERSONAS
    { top: '10%', left: '3%', w: '18%', tone: '#fde68a', rot: -2, title: 'Party admin', body: 'On the B2B portal. Buys the CVMS package, decides who runs campaigns.' },
    { top: '30%', left: '4%', w: '18%', tone: '#fde68a', rot: 1, title: 'Campaign manager', body: 'Business user. Builds and ships campaigns in mViva day-to-day.' },
    { top: '52%', left: '2%', w: '18%', tone: '#fde68a', rot: -3, title: 'Tester-manager', body: 'Same tool, live audience off. Trials sends before going wide.' },
    { top: '73%', left: '4%', w: '18%', tone: '#fde68a', rot: 2, title: 'Ops (before)', body: 'The people who used to run every campaign by hand.' },

    // DOMAIN — before-state + vendor context
    { top: '6%', left: '26%', w: '19%', tone: '#c7d2fe', rot: 2, title: 'Multi-team pipeline', body: 'Business → data → security → ops. Every step a queue.' },
    { top: '28%', left: '25%', w: '19%', tone: '#c7d2fe', rot: -1, title: 'Vendor product', body: 'mViva is Pelatro. Their defaults assume a campaign specialist, not a business user.' },
    { top: '50%', left: '25%', w: '19%', tone: '#c7d2fe', rot: 2, title: 'Two campaign types', body: 'Real-time (event-triggered) + ad-hoc (scheduled). Different flows, same tool.' },
    { top: '72%', left: '26%', w: '19%', tone: '#c7d2fe', rot: -2, title: 'Channels', body: 'SMS · WhatsApp · Email · partner app. Approval branches per channel.' },

    // INSIGHTS
    { top: '4%', left: '49%', w: '20%', tone: '#bae6fd', rot: -2, kind: 'insight', title: 'INSIGHT', body: 'The email link IS the entry point. Admins don’t browse to Add Manager.' },
    { top: '26%', left: '49%', w: '20%', tone: '#bae6fd', rot: 2, kind: 'insight', title: 'INSIGHT', body: 'Admin ≠ Manager. Different jobs, different roles — never conflate.' },
    { top: '48%', left: '50%', w: '20%', tone: '#bae6fd', rot: -1, kind: 'question', title: 'HYPOTHESIS', body: 'If test numbers work before a manager exists, the admin gets an early win and is more likely to complete setup.' },
    { top: '70%', left: '48%', w: '20%', tone: '#bae6fd', rot: 3, kind: 'insight', title: 'INSIGHT', body: 'Business users don’t re-scope on the fly — they need audience count while building, not after.' },

    // DECISIONS
    { top: '10%', left: '76%', w: '20%', tone: '#bbf7d0', rot: 1, kind: 'decision', title: 'DECISION', body: 'From the email entry point, no back button. The destination reads as the whole task.' },
    { top: '32%', left: '76%', w: '20%', tone: '#bbf7d0', rot: -2, kind: 'decision', title: 'DECISION', body: 'One notification per package, on the party dashboard only — not the main one.' },
    { top: '55%', left: '77%', w: '20%', tone: '#bbf7d0', rot: 2, kind: 'decision', title: 'DECISION', body: 'Test numbers configurable before any manager exists. Governance still applies.' },
    { top: '75%', left: '76%', w: '20%', tone: '#bbf7d0', rot: -1, kind: 'decision', title: 'DECISION', body: 'Approval workflow is multi-step, per-channel, with an e& hand in the loop.' },

    // Column labels
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

        {/* Soft "by the way" connectors */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 1000 625"
          preserveAspectRatio="none"
          aria-hidden
        >
          <g
            stroke="#8a7a54"
            strokeWidth="0.9"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="2 5"
            opacity="0.35"
          >
            <path d="M 210 100 C 240 120, 260 100, 280 80" />
            <path d="M 210 220 C 240 240, 260 220, 280 200" />
            <path d="M 210 360 C 240 360, 260 340, 280 340" />
            <path d="M 210 500 C 240 500, 260 480, 280 470" />

            <path d="M 460 100 C 500 90, 520 60, 540 60" />
            <path d="M 460 210 C 500 210, 520 200, 540 200" />
            <path d="M 460 350 C 500 350, 520 340, 540 340" />
            <path d="M 460 470 C 500 470, 520 460, 540 460" />

            <path d="M 720 60 C 770 80, 790 100, 820 110" />
            <path d="M 720 200 C 770 220, 790 240, 820 250" />
            <path d="M 720 340 C 770 380, 790 400, 820 400" />
            <path d="M 720 460 C 770 480, 790 490, 820 460" />
          </g>
        </svg>
      </div>
    </div>
  )
}

export const BeforeAfterFlow = () => (
  <svg viewBox="0 0 900 420" role="img" aria-label="Before: multi-team procedural process. After: business team self-serve." className="w-full">
    <g fontFamily="IBM Plex Sans, system-ui, sans-serif">
      {/* Before row */}
      <text x="30" y="30" fontSize="12" fill="#686868" letterSpacing="1.2">BEFORE — MULTI-TEAM PROCEDURAL PROCESS</text>
      <g transform="translate(30, 50)">
        {[
          { label: 'Business\nasks', tone: '#fdefc0', bd: '#e1c465' },
          { label: 'Data team', tone: '#f6f6f6', bd: '#e0e0e0' },
          { label: 'Audience\nsized', tone: '#f6f6f6', bd: '#e0e0e0' },
          { label: 'Business\nconfirms', tone: '#fdefc0', bd: '#e1c465' },
          { label: 'Security\nreview', tone: '#fbe9e9', bd: '#d99a9a' },
          { label: 'Ops\nsets up', tone: '#f6f6f6', bd: '#e0e0e0' },
          { label: 'Campaign\nlive', tone: '#eaf6ea', bd: '#c8e6c8' },
        ].map((n, i) => (
          <g key={i} transform={`translate(${i * 120}, 0)`}>
            <rect width="100" height="90" rx="10" fill={n.tone} stroke={n.bd} />
            {n.label.split('\n').map((line, li) => (
              <text
                key={li}
                x="50"
                y={40 + li * 18}
                textAnchor="middle"
                fontSize="13"
                fill="#242424"
              >
                {line}
              </text>
            ))}
            {i < 6 && (
              <line x1="100" y1="45" x2="120" y2="45" stroke="#686868" strokeWidth="1.5" markerEnd="url(#ba-arr)" />
            )}
          </g>
        ))}
      </g>
      <text x="30" y="170" fontSize="12" fill="#8a1f1f" fontStyle="italic">
        Multiple teams · multiple tools · long calendar time from ask to live
      </text>

      {/* After row */}
      <text x="30" y="230" fontSize="12" fill="#686868" letterSpacing="1.2">AFTER — SELF-SERVE, ONE PRODUCT PAIR</text>
      <g transform="translate(30, 250)">
        {[
          { label: 'Business\nteam', tone: '#eef6fb', bd: '#bcdbec' },
          { label: 'mViva\n(builder)', tone: '#eef6fb', bd: '#bcdbec' },
          { label: 'CVMaaS\n(governance)', tone: '#eaf6ea', bd: '#c8e6c8' },
          { label: 'Campaign\nlive', tone: '#eaf6ea', bd: '#c8e6c8' },
        ].map((n, i) => (
          <g key={i} transform={`translate(${i * 190}, 0)`}>
            <rect width="170" height="90" rx="10" fill={n.tone} stroke={n.bd} />
            {n.label.split('\n').map((line, li) => (
              <text
                key={li}
                x="85"
                y={40 + li * 18}
                textAnchor="middle"
                fontSize="13"
                fill="#242424"
              >
                {line}
              </text>
            ))}
            {i < 3 && (
              <line x1="170" y1="45" x2="190" y2="45" stroke="#686868" strokeWidth="1.5" markerEnd="url(#ba-arr)" />
            )}
          </g>
        ))}
      </g>
      <text x="30" y="370" fontSize="12" fill="#197417" fontStyle="italic">
        Business runs it themselves. My team dropped into support-only.
      </text>

      <defs>
        <marker id="ba-arr" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#686868" />
        </marker>
      </defs>
    </g>
  </svg>
)

export const ProductModel = () => (
  <svg viewBox="0 0 900 360" role="img" aria-label="Two products, one experience: CVMaaS provisions, mViva runs" className="w-full">
    <g fontFamily="IBM Plex Sans, system-ui, sans-serif">
      {/* CVMaaS block */}
      <g transform="translate(40, 40)">
        <rect width="380" height="280" rx="18" fill="#eaf6ea" stroke="#c8e6c8" />
        <text x="24" y="34" fontSize="12" fill="#197417" letterSpacing="1.2">CVMAAS — e& SIDE</text>
        <text x="24" y="62" fontSize="18" fontWeight="600" fill="#071012">Provisions the campaign pack</text>
        <text x="24" y="86" fontSize="13" fill="#242424">B2B portal experience. The e&amp; account setup.</text>
        <g transform="translate(24, 110)" fontSize="13" fill="#242424">
          {[
            'Order → sender ID → package live',
            'Notification to admin: add campaign manager',
            'Add managers to the organisation',
            'Role model: Admin · Manager · Tester-Manager',
            'Test numbers before real audience',
            'One account can hold multiple packages',
          ].map((l, i) => (
            <text key={i} y={i * 24 + 12}>• {l}</text>
          ))}
        </g>
      </g>

      {/* mViva block */}
      <g transform="translate(480, 40)">
        <rect width="380" height="280" rx="18" fill="#eef6fb" stroke="#bcdbec" />
        <text x="24" y="34" fontSize="12" fill="#1377b0" letterSpacing="1.2">mVIVA — BUSINESS SIDE</text>
        <text x="24" y="62" fontSize="18" fontWeight="600" fill="#071012">Where the campaign actually runs</text>
        <text x="24" y="86" fontSize="13" fill="#242424">Vendor product. I collaborated on scope + research + testing.</text>
        <g transform="translate(24, 110)" fontSize="13" fill="#242424">
          {[
            'Real-time (event-triggered) campaigns',
            'Ad-hoc (scheduled) campaigns',
            'Audience criteria + inline count',
            'Message action across SMS · WhatsApp · Email',
            'Multi-step approval workflow',
            'Live dashboards + delivery reports',
          ].map((l, i) => (
            <text key={i} y={i * 24 + 12}>• {l}</text>
          ))}
        </g>
      </g>

      {/* Arrow */}
      <g stroke="#686868" strokeWidth="1.5" fill="none">
        <path d="M 420 180 h 60" markerEnd="url(#pm-arr)" />
      </g>
      <text x="450" y="170" textAnchor="middle" fontSize="11" fill="#686868">provisions</text>
      <defs>
        <marker id="pm-arr" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#686868" />
        </marker>
      </defs>
    </g>
  </svg>
)

export const OnboardingFlow = () => (
  <svg viewBox="0 0 900 420" role="img" aria-label="CVMaaS onboarding manager flow" className="w-full">
    <g fontFamily="IBM Plex Sans, system-ui, sans-serif">
      <text x="30" y="30" fontSize="12" fill="#686868" letterSpacing="1.2">
        ONBOARDING THE CAMPAIGN MANAGER — CVMAAS FLOW
      </text>

      {/* Trigger callout */}
      <g transform="translate(30, 50)">
        <rect width="840" height="52" rx="10" fill="#fdefc0" stroke="#e1c465" />
        <text x="20" y="32" fontSize="14" fill="#5b4700">
          Trigger — CVMS order completes and sender ID is created. Admin receives an email prompt.
        </text>
      </g>

      {/* Row 1 — admin side */}
      <text x="30" y="130" fontSize="11" fill="#686868" letterSpacing="1">ADMIN — INSIDE B2B PORTAL</text>
      <g transform="translate(30, 145)">
        {[
          { label: 'Email:\nadd managers', tone: '#eef6fb', bd: '#bcdbec' },
          { label: 'Log in\n(UAE PASS)', tone: '#eef6fb', bd: '#bcdbec' },
          { label: 'Account\nselection', tone: '#f6f6f6', bd: '#e0e0e0' },
          { label: 'Account\nInquiry', tone: '#f6f6f6', bd: '#e0e0e0' },
          { label: 'Add campaign\nmanager', tone: '#eaf6ea', bd: '#c8e6c8' },
          { label: 'Success\n(managers added)', tone: '#eaf6ea', bd: '#c8e6c8' },
        ].map((n, i) => (
          <g key={i} transform={`translate(${i * 140}, 0)`}>
            <rect width="120" height="80" rx="10" fill={n.tone} stroke={n.bd} />
            {n.label.split('\n').map((line, li) => (
              <text
                key={li}
                x="60"
                y={35 + li * 18}
                textAnchor="middle"
                fontSize="12"
                fill="#242424"
              >
                {line}
              </text>
            ))}
            {i < 5 && (
              <line x1="120" y1="40" x2="140" y2="40" stroke="#686868" strokeWidth="1.5" markerEnd="url(#of-arr)" />
            )}
          </g>
        ))}
      </g>

      {/* Row 2 — manager side */}
      <text x="30" y="290" fontSize="11" fill="#686868" letterSpacing="1">MANAGER — GETS INVITED, ONBOARDS</text>
      <g transform="translate(30, 305)">
        {[
          { label: 'Invite email\nto manager', tone: '#eef6fb', bd: '#bcdbec' },
          { label: 'Log in\n(UAE PASS)', tone: '#eef6fb', bd: '#bcdbec' },
          { label: 'Complete\nprofile', tone: '#f6f6f6', bd: '#e0e0e0' },
          { label: 'Land in\nworkspace', tone: '#eaf6ea', bd: '#c8e6c8' },
          { label: 'Configure\ntest numbers', tone: '#eaf6ea', bd: '#c8e6c8' },
          { label: 'Ready to\nrun campaigns', tone: '#eaf6ea', bd: '#c8e6c8' },
        ].map((n, i) => (
          <g key={i} transform={`translate(${i * 140}, 0)`}>
            <rect width="120" height="80" rx="10" fill={n.tone} stroke={n.bd} />
            {n.label.split('\n').map((line, li) => (
              <text
                key={li}
                x="60"
                y={35 + li * 18}
                textAnchor="middle"
                fontSize="12"
                fill="#242424"
              >
                {line}
              </text>
            ))}
            {i < 5 && (
              <line x1="120" y1="40" x2="140" y2="40" stroke="#686868" strokeWidth="1.5" markerEnd="url(#of-arr)" />
            )}
          </g>
        ))}
      </g>

      <defs>
        <marker id="of-arr" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#686868" />
        </marker>
      </defs>
    </g>
  </svg>
)

/* Placeholder for a Figma screenshot slot.
   Rauf drops a real PNG into src/assets/cvmaas/<file>.png later and replaces this. */
export const ScreenPlaceholder = ({
  label,
  caption,
}: {
  label: string
  caption?: string
}) => (
  <figure className="flex flex-col gap-3">
    <div className="relative overflow-hidden rounded-2xl border border-dashed border-[#c8c8c8] bg-surface">
      <div className="flex aspect-[16/10] w-full items-center justify-center">
        <div className="flex flex-col items-center gap-2 px-6 text-center">
          <span className="rounded-full bg-white px-3 py-1 text-xs font-medium uppercase tracking-wide text-muted">
            Figma screen slot
          </span>
          <span className="text-lg font-medium text-charcoal">{label}</span>
          <span className="text-sm text-muted">
            Rauf to export PNG · will drop into <code>src/assets/cvmaas/</code>
          </span>
        </div>
      </div>
    </div>
    {caption && <figcaption className="text-sm leading-6 text-muted">{caption}</figcaption>}
  </figure>
)

export const RoleMatrix = () => (
  <div className="overflow-x-auto rounded-2xl border border-[#e8e8e8]">
    <table className="w-full min-w-[640px] border-collapse text-sm">
      <thead>
        <tr className="bg-surface text-left">
          <th className="px-4 py-3 font-semibold text-charcoal">Role</th>
          <th className="px-4 py-3 font-semibold text-charcoal">Add managers</th>
          <th className="px-4 py-3 font-semibold text-charcoal">Configure test numbers</th>
          <th className="px-4 py-3 font-semibold text-charcoal">Build campaigns (mViva)</th>
        </tr>
      </thead>
      <tbody>
        {[
          { role: 'Admin (party)', a: 'Yes', b: 'Yes', c: 'No' },
          { role: 'Campaign Manager', a: 'No', b: 'Yes', c: 'Yes' },
          { role: 'Tester-Manager', a: 'No', b: 'Yes', c: 'Test-mode only' },
        ].map((r) => (
          <tr key={r.role} className="border-t border-[#ededed]">
            <td className="px-4 py-3 text-charcoal">{r.role}</td>
            <td className="px-4 py-3 text-charcoal">{r.a}</td>
            <td className="px-4 py-3 text-charcoal">{r.b}</td>
            <td className="px-4 py-3 text-charcoal">{r.c}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)
