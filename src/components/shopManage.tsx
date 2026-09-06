/* Diagrams for the Shop & Manage revamp case study. */

export const IaBeforeAfter = () => (
  <svg viewBox="0 0 900 380" role="img" aria-label="IA before and after the revamp" className="w-full">
    <g fontFamily="IBM Plex Sans, system-ui, sans-serif">
      {/* Before */}
      <text x="30" y="30" fontSize="12" fill="#8a1f1f" letterSpacing="1.2">
        BEFORE — WHAT PEOPLE COULDN’T FIND
      </text>
      <g transform="translate(30, 50)">
        <rect width="400" height="290" rx="14" fill="#fbe9e9" stroke="#d99a9a" />
        {[
          { y: 30, l: 'Shop entry' },
          { y: 60, l: '  Plans (buried under Shop)' },
          { y: 90, l: '  Add-ons' },
          { y: 120, l: '  Roaming' },
          { y: 150, l: 'Manage entry' },
          { y: 180, l: '  My plan (below the fold)' },
          { y: 210, l: '  Usage' },
          { y: 240, l: '  Bill' },
          { y: 270, l: 'Offers — where?' },
        ].map((r) => (
          <text key={r.y} x="20" y={r.y} fontSize="12" fill="#5a1717">{r.l}</text>
        ))}
      </g>
      <text x="30" y="360" fontSize="11" fill="#8a1f1f">
        Plans, actions, and offers scattered across two entry points. Users learned it, but hated it.
      </text>

      {/* After */}
      <text x="470" y="30" fontSize="12" fill="#197417" letterSpacing="1.2">
        AFTER — WHAT WE PUT IN FRONT OF THEM
      </text>
      <g transform="translate(470, 50)">
        <rect width="400" height="290" rx="14" fill="#eaf6ea" stroke="#c8e6c8" />
        {[
          { y: 30, l: 'Your plan — right at the top' },
          { y: 60, l: '  Actions you can take now' },
          { y: 90, l: '  What’s left this cycle' },
          { y: 120, l: 'Offers for you — flag-driven' },
          { y: 150, l: '  Only shown when eligible' },
          { y: 180, l: 'Shop' },
          { y: 210, l: '  Plans · Add-ons · Roaming' },
          { y: 240, l: 'Manage' },
          { y: 270, l: '  Usage · Bill · Settings' },
        ].map((r) => (
          <text key={r.y} x="20" y={r.y} fontSize="12" fill="#0f3f0f">{r.l}</text>
        ))}
      </g>
      <text x="470" y="360" fontSize="11" fill="#197417">
        Plan and actions up top. Offers surfaced only when the customer flag says they’re eligible.
      </text>
    </g>
  </svg>
)

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

export const ScreenPlaceholder = ({
  label,
  drop,
  caption,
}: {
  label: string
  drop: 'Before' | 'Drop 1' | 'Drop 2' | 'Flag'
  caption?: string
}) => {
  const tones: Record<string, { fill: string; text: string }> = {
    Before: { fill: '#fbe9e9', text: '#8a1f1f' },
    'Drop 1': { fill: '#eef6fb', text: '#1377b0' },
    'Drop 2': { fill: '#eaf6ea', text: '#197417' },
    Flag: { fill: '#fdefc0', text: '#5b4700' },
  }
  const c = tones[drop]
  return (
    <figure className="flex flex-col gap-3">
      <div className="relative overflow-hidden rounded-2xl border border-dashed border-[#c8c8c8] bg-surface">
        <div className="flex aspect-[9/16] w-full items-center justify-center sm:aspect-[16/10]">
          <div className="flex flex-col items-center gap-2 px-6 text-center">
            <span
              className="rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wide"
              style={{ background: c.fill, color: c.text }}
            >
              {drop} — screen slot
            </span>
            <span className="text-lg font-medium text-charcoal">{label}</span>
            <span className="text-sm text-muted">
              Drop PNG into <code>src/assets/shop-manage/</code>
            </span>
          </div>
        </div>
      </div>
      {caption && <figcaption className="text-sm leading-6 text-muted">{caption}</figcaption>}
    </figure>
  )
}
