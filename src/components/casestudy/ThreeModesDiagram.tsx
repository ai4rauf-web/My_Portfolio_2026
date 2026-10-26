/* Diagram for the "three peer modes over one canonical spec" decision.
   Builder / Code / Agent -> Canonical IR -> Canonicalizer -> Audit log. */
const ThreeModesDiagram = () => (
  <figure className="flex flex-col gap-3">
    <div className="overflow-hidden rounded-2xl border border-[#e8e8e8] bg-surface p-6 lg:p-8">
      <svg
        viewBox="0 0 720 420"
        role="img"
        aria-label="Three peer modes — Builder, Code, Authoring Agent — all write to one canonical intermediate representation, which the Canonicalizer validates before any change lands in the audit log."
        className="h-auto w-full"
      >
        <defs>
          <marker
            id="arrow-threemodes"
            viewBox="0 0 10 10"
            refX={9}
            refY={5}
            markerWidth={6}
            markerHeight={6}
            orient="auto"
          >
            <path d="M0,0 L10,5 L0,10 Z" fill="#242424" />
          </marker>
        </defs>
        <g fontFamily="IBM Plex Sans, system-ui, sans-serif">
          {/* three mode boxes */}
          {[
            { x: 40, label: 'Builder', sub: 'Visual, form-first' },
            { x: 260, label: 'Code', sub: 'YAML / SQL' },
            { x: 480, label: 'Authoring Agent', sub: 'LLM-drafted' },
          ].map((m) => (
            <g key={m.label}>
              <rect x={m.x} y={20} width={200} height={70} rx={14}
                fill="#ffffff" stroke="#1377b0" strokeWidth={1.5} />
              <text x={m.x + 100} y={48} textAnchor="middle"
                fontSize={16} fontWeight={600} fill="#071012">{m.label}</text>
              <text x={m.x + 100} y={70} textAnchor="middle"
                fontSize={12} fill="#686868">{m.sub}</text>
              <line x1={m.x + 100} y1={90} x2={m.x + 100} y2={140}
                stroke="#242424" strokeWidth={1.5} />
            </g>
          ))}

          {/* bus to IR */}
          <path d="M140 140 L580 140" stroke="#242424" strokeWidth={1.5} fill="none" />
          <line x1={360} y1={140} x2={360} y2={160} stroke="#242424" strokeWidth={1.5} />

          {/* IR box */}
          <rect x={200} y={160} width={320} height={70} rx={14}
            fill="#d0eeff" stroke="#1377b0" strokeWidth={1.5} />
          <text x={360} y={190} textAnchor="middle"
            fontSize={16} fontWeight={600} fill="#071012">Canonical IR</text>
          <text x={360} y={210} textAnchor="middle" fontSize={12} fill="#242424">
            One spec per artifact — the recipe that actually ships
          </text>

          {/* arrow to Canonicalizer */}
          <line x1={360} y1={230} x2={360} y2={270}
            stroke="#242424" strokeWidth={1.5} markerEnd="url(#arrow-threemodes)" />

          {/* Canonicalizer */}
          <rect x={220} y={280} width={280} height={60} rx={14}
            fill="#ffffff" stroke="#071012" strokeWidth={1.5} />
          <text x={360} y={306} textAnchor="middle"
            fontSize={14} fontWeight={600} fill="#071012">Canonicalizer</text>
          <text x={360} y={325} textAnchor="middle" fontSize={11} fill="#686868">
            Schema · DULE · consent · lineage — deterministic gate
          </text>

          {/* arrow to audit */}
          <line x1={360} y1={340} x2={360} y2={370}
            stroke="#242424" strokeWidth={1.5} markerEnd="url(#arrow-threemodes)" />

          {/* Audit log */}
          <rect x={240} y={370} width={240} height={38} rx={10}
            fill="#f6f6f6" stroke="#686868" strokeWidth={1} strokeDasharray="4 3" />
          <text x={360} y={394} textAnchor="middle" fontSize={13} fill="#242424">
            Audit log (authoring_origin + version)
          </text>
        </g>
      </svg>
    </div>
    <figcaption className="text-sm leading-6 text-muted">
      Same recipe. Three ways to write it. The recipe is what ships.
    </figcaption>
  </figure>
)

export default ThreeModesDiagram
