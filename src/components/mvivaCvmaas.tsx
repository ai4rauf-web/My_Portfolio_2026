/* Abstracted diagrams for the mViva + CVMaaS case study.
   No customer logos, no real product screens — placeholders where PNGs will go. */

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
