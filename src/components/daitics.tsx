/* Abstracted diagrams for the Daitics case study.
   Everything is illustrative — no real product screens. */

export const PersonaMap = () => (
  <svg viewBox="0 0 900 460" role="img" aria-label="One Portal serving 12+ personas across 9 surface groups" className="w-full">
    <defs>
      <linearGradient id="portalGrad" x1="0" x2="1">
        <stop offset="0" stopColor="#1377b0" stopOpacity="0.9" />
        <stop offset="1" stopColor="#071012" />
      </linearGradient>
    </defs>

    {/* Personas on the left */}
    <g fontFamily="IBM Plex Sans, system-ui, sans-serif" fontSize="13" fill="#242424">
      <text x="20" y="24" fontSize="11" fill="#686868" letterSpacing="1.2">12+ PERSONAS</text>
      {[
        'Marketing Operations',
        'CDP Developer',
        'Data Scientist',
        'ML Engineer',
        'Model Owner',
        'Data Steward',
        'DPO',
        'Auditor',
        'Ops Admin',
        'Tenant Admin',
        'Super Admin',
        'Platform Admin',
      ].map((p, i) => (
        <g key={p} transform={`translate(20, ${50 + i * 30})`}>
          <rect width="220" height="24" rx="12" fill="#f6f6f6" stroke="#e0e0e0" />
          <text x="14" y="16">{p}</text>
        </g>
      ))}
    </g>

    {/* Portal in the middle */}
    <g transform="translate(280, 130)">
      <rect width="240" height="200" rx="20" fill="url(#portalGrad)" />
      <text x="120" y="90" textAnchor="middle" fill="#ffffff" fontFamily="IBM Plex Sans, system-ui, sans-serif" fontSize="16" fontWeight="500">
        Daitics Portal
      </text>
      <text x="120" y="112" textAnchor="middle" fill="#d0eeff" fontFamily="IBM Plex Sans, system-ui, sans-serif" fontSize="12">
        One React app
      </text>
      <text x="120" y="128" textAnchor="middle" fill="#d0eeff" fontFamily="IBM Plex Sans, system-ui, sans-serif" fontSize="12">
        One canonical IR per artifact
      </text>
    </g>

    {/* Connecting lines */}
    <g stroke="#c8c8c8" strokeWidth="1">
      {Array.from({ length: 12 }).map((_, i) => (
        <line key={i} x1="240" y1={62 + i * 30} x2="280" y2={230} strokeOpacity={0.6} />
      ))}
    </g>
    <g stroke="#c8c8c8" strokeWidth="1">
      {Array.from({ length: 9 }).map((_, i) => (
        <line key={i} x1="520" y1={230} x2="600" y2={62 + i * 42} strokeOpacity={0.6} />
      ))}
    </g>

    {/* Group tiles on the right */}
    <g fontFamily="IBM Plex Sans, system-ui, sans-serif" fontSize="12" fill="#242424">
      <text x="600" y="24" fontSize="11" fill="#686868" letterSpacing="1.2">9 SURFACE GROUPS · 24 SURFACES</text>
      {[
        'Foundation — Launchpad · Sources · Schema · Catalog',
        'Identity — Identity · Profiles · Identifier Search',
        'Data Quality — DQ Console',
        'AI Authoring — Ask Daitics · Agent Studio',
        'ML — Workbench · Model Catalog · Feature Registry · Training Runs',
        'Data products — Traits · Signals',
        'Distribution — Destinations',
        'Governance — Lineage · Privacy · Approvals',
        'Ops & Admin — Operations · Security · Settings · Admin · Academy',
      ].map((g, i) => (
        <g key={g} transform={`translate(600, ${50 + i * 42})`}>
          <rect width="280" height="32" rx="8" fill="#ffffff" stroke="#e0e0e0" />
          <text x="14" y="20">{g}</text>
        </g>
      ))}
    </g>
  </svg>
)

export const ThreeModeDiagram = () => (
  <svg viewBox="0 0 900 380" role="img" aria-label="Three peer authoring modes projecting onto one canonical IR" className="w-full">
    <g fontFamily="IBM Plex Sans, system-ui, sans-serif">
      {/* Three tab cards */}
      {[
        { x: 40, title: 'Builder', sub: 'Form → Rules → Pipeline', pill: '80–90% of authoring', tone: '#eef6fb', border: '#bcdbec' },
        { x: 320, title: 'Code', sub: 'SQL · Python SDK', pill: 'Power users', tone: '#f6f6f6', border: '#e0e0e0' },
        { x: 600, title: 'Authoring Agent', sub: 'Draft · Modify · Explain · Suggest', pill: 'NL co-author', tone: '#eaf6ea', border: '#c8e6c8' },
      ].map((c) => (
        <g key={c.title} transform={`translate(${c.x}, 30)`}>
          <rect width="260" height="150" rx="16" fill={c.tone} stroke={c.border} />
          <text x="20" y="34" fontSize="18" fontWeight="600" fill="#071012">{c.title}</text>
          <text x="20" y="60" fontSize="13" fill="#686868">{c.sub}</text>
          <g transform="translate(20, 90)">
            <rect width="200" height="26" rx="13" fill="#ffffff" stroke={c.border} />
            <text x="14" y="18" fontSize="12" fill="#242424">{c.pill}</text>
          </g>
        </g>
      ))}

      {/* Arrows down */}
      <g stroke="#686868" strokeWidth="1.5" fill="none">
        <path d="M 170 190 v 30" markerEnd="url(#arrHead)" />
        <path d="M 450 190 v 30" markerEnd="url(#arrHead)" />
        <path d="M 730 190 v 30" markerEnd="url(#arrHead)" />
      </g>

      {/* Canonical IR bar */}
      <g transform="translate(40, 230)">
        <rect width="820" height="60" rx="12" fill="#071012" />
        <text x="410" y="34" textAnchor="middle" fontSize="15" fill="#ffffff">Canonical IR — the single source of truth</text>
        <text x="410" y="52" textAnchor="middle" fontSize="12" fill="#d0eeff">authoring_origin: human · ai_seeded · ai_copilot_drafted · human_edited_from_ai · migration</text>
      </g>

      <g stroke="#686868" strokeWidth="1.5" fill="none">
        <path d="M 450 290 v 30" markerEnd="url(#arrHead)" />
      </g>

      {/* Canonicalizer + governance */}
      <g transform="translate(180, 320)">
        <rect width="540" height="42" rx="10" fill="#fdefc0" stroke="#e1c465" />
        <text x="270" y="26" textAnchor="middle" fontSize="14" fill="#5b4700">
          Canonicalizer → schema · DULE · consent · lineage · duplicate check → promoted
        </text>
      </g>

      <defs>
        <marker id="arrHead" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#686868" />
        </marker>
      </defs>
    </g>
  </svg>
)

export const BuilderAnatomy = () => (
  <svg viewBox="0 0 900 520" role="img" aria-label="Builder anatomy: Form, Rules, Pipeline with a live sidebar" className="w-full">
    <g fontFamily="IBM Plex Sans, system-ui, sans-serif">
      {/* Frame */}
      <rect x="10" y="10" width="880" height="500" rx="16" fill="#ffffff" stroke="#e0e0e0" />

      {/* Tab row */}
      <g transform="translate(30, 30)">
        <rect width="120" height="30" rx="15" fill="#071012" />
        <text x="60" y="20" textAnchor="middle" fontSize="13" fill="#ffffff">Builder</text>
        <rect x="130" width="80" height="30" rx="15" fill="#f6f6f6" stroke="#e0e0e0" />
        <text x="170" y="20" textAnchor="middle" fontSize="13" fill="#686868">Code</text>
        <rect x="220" width="150" height="30" rx="15" fill="#f6f6f6" stroke="#e0e0e0" />
        <text x="295" y="20" textAnchor="middle" fontSize="13" fill="#686868">Trait Agent</text>
      </g>

      {/* Main authoring column */}
      <g transform="translate(30, 80)">
        {/* Form */}
        <rect width="560" height="130" rx="10" fill="#f6f6f6" />
        <text x="16" y="24" fontSize="12" fill="#686868" letterSpacing="1">FORM</text>
        <text x="16" y="46" fontSize="14" fill="#071012" fontWeight="500">Identity · Source · Aggregation window · Filter · Output · Governance</text>
        <g transform="translate(16, 60)">
          {['Name', 'Source', 'Window', 'Output type', 'Owner', 'DULE tags'].map((l, i) => (
            <g key={l} transform={`translate(${(i % 3) * 180}, ${Math.floor(i / 3) * 30})`}>
              <rect width="160" height="22" rx="6" fill="#ffffff" stroke="#e0e0e0" />
              <text x="10" y="15" fontSize="11" fill="#242424">{l}</text>
            </g>
          ))}
        </g>

        {/* Rules */}
        <g transform="translate(0, 150)">
          <rect width="560" height="150" rx="10" fill="#eef6fb" />
          <text x="16" y="24" fontSize="12" fill="#1377b0" letterSpacing="1">RULES · predicate tree</text>
          <g transform="translate(16, 40)" fontSize="12" fill="#242424">
            <rect width="528" height="24" rx="6" fill="#ffffff" stroke="#bcdbec" />
            <text x="12" y="16">IF ( recency &lt; 7d )   AND   ( arpu ≥ 100 )   OR   ( plan.tier ∈ &#123;gold, platinum&#125; )</text>
            <g transform="translate(0, 34)">
              <rect width="528" height="24" rx="6" fill="#ffffff" stroke="#bcdbec" />
              <text x="12" y="16">THEN aggregate(SUM, events.data_usage_mb, window=30d)</text>
            </g>
            <g transform="translate(0, 68)">
              <rect width="528" height="24" rx="6" fill="#ffffff" stroke="#bcdbec" />
              <text x="12" y="16">CASE bucket: [0–5k] → low, [5k–20k] → mid, [&gt;20k] → heavy</text>
            </g>
          </g>
        </g>

        {/* Pipeline */}
        <g transform="translate(0, 320)">
          <rect width="560" height="110" rx="10" fill="#eaf6ea" />
          <text x="16" y="24" fontSize="12" fill="#197417" letterSpacing="1">PIPELINE · Type B features only</text>
          <g transform="translate(16, 40)">
            {['source', 'scale', 'encode', 'PCA', 'assemble', 'register'].map((n, i) => (
              <g key={n} transform={`translate(${i * 90}, 0)`}>
                <rect width="70" height="34" rx="8" fill="#ffffff" stroke="#c8e6c8" />
                <text x="35" y="21" textAnchor="middle" fontSize="12" fill="#197417">{n}</text>
                {i < 5 && <line x1="70" y1="17" x2="90" y2="17" stroke="#197417" strokeWidth="1" />}
              </g>
            ))}
          </g>
          <text x="16" y="94" fontSize="11" fill="#5b7c5b">Type-safe, validated on save. No cycles. No dangling refs.</text>
        </g>
      </g>

      {/* Live sidebar */}
      <g transform="translate(610, 80)">
        <rect width="260" height="410" rx="10" fill="#ffffff" stroke="#e0e0e0" />
        <text x="18" y="26" fontSize="12" fill="#686868" letterSpacing="1">LIVE SIDEBAR</text>

        {[
          { title: 'Detected', body: 'Class: Type A · Class family: numeric_bucket · p99 est. 62 ms' },
          { title: 'Synthetic preview', body: '128 sample profiles evaluated · 41.4% high · 22.9% mid · 35.7% low' },
          { title: 'Lineage & impact', body: 'Feeds 3 signals · 2 destinations · 1 model in Catalog' },
          { title: 'Duplicate check', body: '"data_usage_bucket_30d" — 0.72 similarity. Continue? Audited.' },
          { title: 'Ambient Co-Pilot', body: 'Explain · Suggest refactor · Validate governance · Find similar' },
        ].map((b, i) => (
          <g key={b.title} transform={`translate(18, ${44 + i * 72})`}>
            <text x="0" y="14" fontSize="12" fontWeight="600" fill="#071012">{b.title}</text>
            <foreignObject x="0" y="18" width="224" height="50">
              <div style={{ fontFamily: 'IBM Plex Sans, system-ui, sans-serif', fontSize: 11, color: '#686868', lineHeight: 1.4 }}>
                {b.body}
              </div>
            </foreignObject>
          </g>
        ))}
      </g>
    </g>
  </svg>
)

export const AgentVsCoPilot = () => (
  <svg viewBox="0 0 900 320" role="img" aria-label="Authoring Agent tab and ambient Co-Pilot — two different tools" className="w-full">
    <g fontFamily="IBM Plex Sans, system-ui, sans-serif">
      {/* Agent card */}
      <g transform="translate(30, 30)">
        <rect width="400" height="260" rx="16" fill="#eaf6ea" stroke="#c8e6c8" />
        <text x="24" y="34" fontSize="12" fill="#197417" letterSpacing="1.2">HEAVYWEIGHT · AUTHORING AGENT TAB</text>
        <text x="24" y="62" fontSize="20" fontWeight="600" fill="#071012">Trait Agent · Signal Agent · Feature Agent · Source Agent</text>
        <text x="24" y="90" fontSize="13" fill="#242424">A peer tab, not a wizard.</text>
        <g transform="translate(24, 108)" fontSize="13" fill="#242424">
          {[
            'Draft new — NL → candidate IR, populates Form + Rules + Pipeline',
            'Modify existing — updates the same IR, Builder reflects the diff',
            'Explain — purpose, computation, governance, downstream use',
            'Suggest — alternative compositions with rationale',
          ].map((l, i) => (
            <text key={i} y={i * 26 + 12}>• {l}</text>
          ))}
        </g>
        <text x="24" y="246" fontSize="12" fill="#5b7c5b" fontStyle="italic">Always produces a candidate — never bypasses the Canonicalizer.</text>
      </g>

      {/* Co-Pilot card */}
      <g transform="translate(470, 30)">
        <rect width="400" height="260" rx="16" fill="#eef6fb" stroke="#bcdbec" />
        <text x="24" y="34" fontSize="12" fill="#1377b0" letterSpacing="1.2">LIGHTWEIGHT · AMBIENT CO-PILOT SIDEBAR</text>
        <text x="24" y="62" fontSize="20" fontWeight="600" fill="#071012">Right-here-right-now sidekick</text>
        <text x="24" y="90" fontSize="13" fill="#242424">Scoped to the artifact in front of you.</text>
        <g transform="translate(24, 108)" fontSize="13" fill="#242424">
          {[
            'Explain what this artifact does, in plain language',
            'Suggest a refactor (e.g. simplify Type B → Tier 1)',
            'Validate against governance before you save',
            'Find similar artifacts — surface duplicates',
            'Propose a derived signal / feature from this trait',
          ].map((l, i) => (
            <text key={i} y={i * 22 + 12}>• {l}</text>
          ))}
        </g>
        <text x="24" y="246" fontSize="12" fill="#3a6b8a" fontStyle="italic">Does not initiate drafts. Nudges, never drives.</text>
      </g>
    </g>
  </svg>
)

export const TrustFlow = () => (
  <svg viewBox="0 0 900 240" role="img" aria-label="Trust flow: authoring modes → candidate IR → Canonicalizer → approval → sandbox → live" className="w-full">
    <g fontFamily="IBM Plex Sans, system-ui, sans-serif">
      {[
        { x: 20, w: 140, title: 'Authoring', sub: 'Builder · Code · Agent', fill: '#eef6fb', border: '#bcdbec' },
        { x: 180, w: 140, title: 'Candidate IR', sub: 'authoring_origin tag', fill: '#f6f6f6', border: '#e0e0e0' },
        { x: 340, w: 170, title: 'Canonicalizer', sub: 'schema · DULE · lineage · dup', fill: '#fdefc0', border: '#e1c465' },
        { x: 530, w: 140, title: 'Approval', sub: 'BPMN, role-bound', fill: '#eaf6ea', border: '#c8e6c8' },
        { x: 690, w: 90, title: 'Sandbox', sub: 'shadow run', fill: '#eef6fb', border: '#bcdbec' },
        { x: 800, w: 80, title: 'Live', sub: 'in-service', fill: '#071012', border: '#071012', text: '#ffffff' },
      ].map((n) => (
        <g key={n.title} transform={`translate(${n.x}, 60)`}>
          <rect width={n.w} height="100" rx="12" fill={n.fill} stroke={n.border} />
          <text x={n.w / 2} y="42" textAnchor="middle" fontSize="14" fontWeight="600" fill={n.text ?? '#071012'}>{n.title}</text>
          <text x={n.w / 2} y="66" textAnchor="middle" fontSize="11" fill={n.text ?? '#686868'}>{n.sub}</text>
        </g>
      ))}
      {/* Arrows */}
      <g stroke="#686868" strokeWidth="1.5" fill="none" markerEnd="url(#tf-arr)">
        <line x1="160" y1="110" x2="180" y2="110" />
        <line x1="320" y1="110" x2="340" y2="110" />
        <line x1="510" y1="110" x2="530" y2="110" />
        <line x1="670" y1="110" x2="690" y2="110" />
        <line x1="780" y1="110" x2="800" y2="110" />
      </g>
      <defs>
        <marker id="tf-arr" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#686868" />
        </marker>
      </defs>
      <text x="450" y="200" textAnchor="middle" fontSize="12" fill="#686868">
        LLM drafts. Deterministic gates decide. Agent correctness never depends on LLM correctness.
      </text>
    </g>
  </svg>
)

type Perm = 'edit' | 'read' | 'hidden' | 'explain'

const permBadge = (p: Perm): { text: string; fill: string; color: string } => {
  switch (p) {
    case 'edit':
      return { text: 'Editable', fill: '#eaf6ea', color: '#197417' }
    case 'read':
      return { text: 'Read-only', fill: '#f6f6f6', color: '#686868' }
    case 'hidden':
      return { text: 'Hidden', fill: '#fbe9e9', color: '#8a1f1f' }
    case 'explain':
      return { text: 'Explain-only', fill: '#eef6fb', color: '#1377b0' }
  }
}

const permRows: { role: string; builder: Perm; code: Perm; agent: Perm }[] = [
  { role: 'Marketing Operations', builder: 'edit', code: 'hidden', agent: 'edit' },
  { role: 'CDP Developer', builder: 'edit', code: 'edit', agent: 'edit' },
  { role: 'Data Scientist / ML Engineer', builder: 'edit', code: 'edit', agent: 'edit' },
  { role: 'Model Owner', builder: 'read', code: 'read', agent: 'explain' },
  { role: 'DPO', builder: 'read', code: 'read', agent: 'explain' },
  { role: 'Auditor', builder: 'read', code: 'read', agent: 'hidden' },
  { role: 'Data Steward', builder: 'read', code: 'hidden', agent: 'explain' },
]

export const RolePermissions = () => (
  <div className="overflow-x-auto rounded-2xl border border-[#e8e8e8]">
    <table className="w-full min-w-[640px] border-collapse text-sm">
      <thead>
        <tr className="bg-surface text-left">
          <th className="px-4 py-3 font-semibold text-charcoal">Role</th>
          <th className="px-4 py-3 font-semibold text-charcoal">Builder</th>
          <th className="px-4 py-3 font-semibold text-charcoal">Code</th>
          <th className="px-4 py-3 font-semibold text-charcoal">Authoring Agent</th>
        </tr>
      </thead>
      <tbody>
        {permRows.map((r) => (
          <tr key={r.role} className="border-t border-[#ededed]">
            <td className="px-4 py-3 text-charcoal">{r.role}</td>
            {(['builder', 'code', 'agent'] as const).map((col) => {
              const b = permBadge(r[col])
              return (
                <td key={col} className="px-4 py-3">
                  <span
                    className="inline-flex rounded-full px-3 py-1 text-xs font-medium"
                    style={{ background: b.fill, color: b.color }}
                  >
                    {b.text}
                  </span>
                </td>
              )
            })}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

export const WorkbenchAnatomy = () => (
  <svg viewBox="0 0 900 500" role="img" aria-label="ML Workbench notebook anatomy" className="w-full">
    <g fontFamily="IBM Plex Sans, system-ui, sans-serif">
      <rect x="10" y="10" width="880" height="480" rx="14" fill="#ffffff" stroke="#e0e0e0" />
      {/* Toolbar */}
      <rect x="10" y="10" width="880" height="34" rx="14" fill="#f6f6f6" />
      <g transform="translate(24, 30)" fill="#686868" fontSize="12">
        <text x="0" y="0">Kernel: daitics-sdk · CDP-scoped · ABAC via workspace JWT</text>
        <text x="660" y="0">▶ Run  ▮▮ Stop  ⟲ Restart</text>
      </g>

      {/* Left rail — sidebar tools */}
      <g transform="translate(20, 56)">
        <rect width="180" height="424" rx="10" fill="#f6f6f6" />
        <text x="16" y="22" fontSize="12" fill="#686868" letterSpacing="1">SIDE PANELS</text>
        {[
          'MLflow tracking',
          'Argo jobs',
          'Tool Registry',
          'Data Catalog',
          'Feature Registry',
          'Files',
          'Quota — 2 CPU / 8 GB',
        ].map((s, i) => (
          <g key={s} transform={`translate(12, ${44 + i * 40})`}>
            <rect width="156" height="30" rx="7" fill="#ffffff" stroke="#e0e0e0" />
            <text x="14" y="20" fontSize="12" fill="#242424">{s}</text>
          </g>
        ))}
      </g>

      {/* Notebook cells */}
      <g transform="translate(220, 60)">
        {/* Cell 1 */}
        <rect width="480" height="88" rx="8" fill="#0b1a1f" />
        <text x="16" y="24" fontSize="12" fill="#8bd0ea" fontFamily="monospace">%dtx_sql</text>
        <text x="16" y="44" fontSize="12" fill="#e4e4e4" fontFamily="monospace">SELECT profile_id, arpu, plan_tier</text>
        <text x="16" y="60" fontSize="12" fill="#e4e4e4" fontFamily="monospace">FROM daitics.traits.latest</text>
        <text x="16" y="76" fontSize="12" fill="#e4e4e4" fontFamily="monospace">WHERE region = 'GCC' AND consent.marketing = TRUE;</text>

        {/* Cell 2 */}
        <g transform="translate(0, 100)">
          <rect width="480" height="70" rx="8" fill="#0b1a1f" />
          <text x="16" y="24" fontSize="12" fill="#8bd0ea" fontFamily="monospace">%dtx_feature register</text>
          <text x="16" y="44" fontSize="12" fill="#e4e4e4" fontFamily="monospace">name="arpu_bucket_30d", type="A",</text>
          <text x="16" y="60" fontSize="12" fill="#e4e4e4" fontFamily="monospace">     ref="traits.arpu_bucket_30d"</text>
        </g>

        {/* Cell 3 */}
        <g transform="translate(0, 182)">
          <rect width="480" height="88" rx="8" fill="#0b1a1f" />
          <text x="16" y="24" fontSize="12" fill="#8bd0ea" fontFamily="monospace">%dtx_submit_training</text>
          <text x="16" y="44" fontSize="12" fill="#e4e4e4" fontFamily="monospace">spec = ModelSpec.load("churn_v3")</text>
          <text x="16" y="60" fontSize="12" fill="#e4e4e4" fontFamily="monospace">run = daitics.training.submit(spec, budget="small")</text>
          <text x="16" y="76" fontSize="12" fill="#e4e4e4" fontFamily="monospace">daitics.mlflow.follow(run)  # streaming metrics →</text>
        </g>

        {/* Output */}
        <g transform="translate(0, 282)">
          <rect width="480" height="120" rx="8" fill="#f6f6f6" stroke="#e0e0e0" />
          <text x="16" y="24" fontSize="11" fill="#686868">Cell audit · code_hash=6b21… · sensitive_access=false</text>
          <text x="16" y="46" fontSize="12" fill="#242424">Similarity check on register — 3 candidates found:</text>
          <text x="16" y="66" fontSize="12" fill="#1377b0">arpu_band_30d · 0.83   arpu_bucket · 0.71   arpu_tier · 0.58</text>
          <text x="16" y="96" fontSize="12" fill="#8a1f1f">Threshold: 0.75 → mandatory rationale required to promote.</text>
        </g>
      </g>

      {/* Right rail — MLflow live */}
      <g transform="translate(720, 60)">
        <rect width="160" height="340" rx="10" fill="#ffffff" stroke="#e0e0e0" />
        <text x="16" y="22" fontSize="12" fill="#686868" letterSpacing="1">MLFLOW · LIVE</text>
        <g transform="translate(16, 40)" fontSize="12" fill="#242424">
          <text y="0">run: churn_v3.42</text>
          <text y="18">status: RUNNING</text>
          <text y="42">step 320 / 500</text>
          <text y="60">loss: 0.281</text>
          <text y="78">auc: 0.884</text>
          <text y="96">precision: 0.79</text>
        </g>
        {/* mini sparkline */}
        <polyline
          points="16,220 32,210 48,196 64,182 80,175 96,160 112,152 128,144 144,140"
          fill="none"
          stroke="#1377b0"
          strokeWidth="1.6"
        />
        <text x="16" y="266" fontSize="11" fill="#686868">auc trend</text>
      </g>
    </g>
  </svg>
)

export const RejectedAlternatives = () => (
  <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
    {[
      {
        title: 'Wizard',
        outcome: 'Rejected',
        body:
          'A step-by-step wizard forces order on people who already know what they want. It rewards the median first-time user and punishes the 90% doing this every day. It also fights the idea that authoring is one artifact seen through three lenses — a wizard is a one-way street.',
      },
      {
        title: 'Code-first for everyone',
        outcome: 'Rejected',
        body:
          'A code-first surface is honest to CDP developers and ML engineers, but it locks out marketing ops entirely and makes DPO / audit review harder, not easier. It also has no place to put an AI co-author — you end up bolting a chat on top of an editor.',
      },
      {
        title: 'One app per persona',
        outcome: 'Rejected',
        body:
          'Splitting into role-specific apps looked clean on a slide. In practice it forced two DBs of truth (or a fragile bridge), and made every audit and duplicate check cross-app. The IR is the point — everyone should be looking at the same artifact.',
      },
    ].map((r) => (
      <div key={r.title} className="flex flex-col gap-2 rounded-2xl border border-[#e8e8e8] bg-surface p-6">
        <span className="self-start rounded-full bg-white px-3 py-1 text-xs font-medium uppercase tracking-wide text-muted">
          {r.outcome}
        </span>
        <h4 className="text-lg font-semibold text-ink">{r.title}</h4>
        <p className="text-sm leading-6 text-charcoal lg:text-base">{r.body}</p>
      </div>
    ))}
  </div>
)

/* FigJam-style research canvas — the board that led to the three-mode
   decision, the two-AI-surface split, and the trust model. Same visual
   grammar as the RMN and CVMaaS canvases: dot-grid, warm tones, dotted
   "by the way" connectors. */
export const TelcoInsightsCanvas = () => {
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
    { top: '10%', left: '3%', w: '18%', tone: '#fde68a', rot: -2, title: 'Marketing ops', body: 'Thinks in audiences, campaigns, offers. Never touches SQL.' },
    { top: '30%', left: '4%', w: '18%', tone: '#fde68a', rot: 1, title: 'CDP developer', body: 'Thinks in SQL, pipelines, sources. Wants raw control.' },
    { top: '52%', left: '2%', w: '18%', tone: '#fde68a', rot: -3, title: 'Data scientist', body: 'Thinks in features, models, notebooks. Lives in code.' },
    { top: '73%', left: '4%', w: '18%', tone: '#fde68a', rot: 2, title: 'DPO / Auditor', body: 'Thinks in consent, lineage, retention. Reviews, never edits.' },

    // DOMAIN — CDP-specific + telco constraints
    { top: '6%', left: '26%', w: '19%', tone: '#c7d2fe', rot: 2, title: '30+ data sources', body: 'CDRs · billing · network · DPI · CRM · app · web · location. Silos to unify.' },
    { top: '28%', left: '25%', w: '19%', tone: '#c7d2fe', rot: -1, title: 'Sovereign on-prem', body: 'Data cannot leave the operator. No SaaS control plane. LLM lives inside the fence.' },
    { top: '50%', left: '25%', w: '19%', tone: '#c7d2fe', rot: 2, title: 'Authored, not learned', body: 'Every trait / signal / feature is a human-authored spec — traceable, versioned, promotable.' },
    { top: '72%', left: '26%', w: '19%', tone: '#c7d2fe', rot: -2, title: 'DULE + consent + lineage', body: 'Governance is a property of the artifact, not a step in a queue.' },

    // INSIGHTS
    { top: '4%', left: '49%', w: '20%', tone: '#bae6fd', rot: -2, kind: 'insight', title: 'INSIGHT', body: 'One artifact model = one audit trail. Everything else derives.' },
    { top: '26%', left: '49%', w: '20%', tone: '#bae6fd', rot: 2, kind: 'insight', title: 'INSIGHT', body: 'LLM correctness ≠ platform correctness. Separate the layers or lose control.' },
    { top: '48%', left: '50%', w: '20%', tone: '#bae6fd', rot: -1, kind: 'question', title: 'HYPOTHESIS', body: 'If the same IR backs all three modes, users can switch mid-artifact without losing state.' },
    { top: '70%', left: '48%', w: '20%', tone: '#bae6fd', rot: 3, kind: 'insight', title: 'INSIGHT', body: 'Different lenses on the same thing beats different apps for the same job.' },

    // DECISIONS
    { top: '10%', left: '76%', w: '20%', tone: '#bbf7d0', rot: 1, kind: 'decision', title: 'DECISION', body: 'Three peer modes — Builder · Code · Authoring Agent — over one Canonical IR.' },
    { top: '32%', left: '76%', w: '20%', tone: '#bbf7d0', rot: -2, kind: 'decision', title: 'DECISION', body: 'Two AI surfaces — heavyweight Agent tab + ambient Co-Pilot sidebar. Never one.' },
    { top: '55%', left: '77%', w: '20%', tone: '#bbf7d0', rot: 2, kind: 'decision', title: 'DECISION', body: 'authoring_origin on every IR. AI actions are traceable, not invisible.' },
    { top: '75%', left: '76%', w: '20%', tone: '#bbf7d0', rot: -1, kind: 'decision', title: 'DECISION', body: 'Agent inherits the artifact’s permission model. AI can’t escalate.' },

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
