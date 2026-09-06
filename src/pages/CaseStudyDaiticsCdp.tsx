import Footer from '../components/Footer'
import {
  BackLink,
  Body,
  Callout,
  CaseStudyHeader,
  NextProject,
  SectionLabel,
  SectionTitle,
  Stat,
  StickySectionNav,
} from '../components/caseStudy'
import {
  AgentVsCoPilot,
  BuilderAnatomy,
  PersonaMap,
  RejectedAlternatives,
  RolePermissions,
  ThreeModeDiagram,
  TrustFlow,
  WorkbenchAnatomy,
} from '../components/daitics'

const snapshot = [
  { label: 'Role', value: 'Lead Product Designer — shaped the authoring paradigm' },
  { label: 'Team', value: 'Product owners, data engineers, ML engineers, DPO advisor' },
  { label: 'Timeline', value: 'Ongoing R&D · Feb 2025 – present' },
  { label: 'Platform', value: 'Web · one React portal · sovereign on-prem deploy' },
  { label: 'Tools', value: 'Figma · FigJam · Miro · working sessions with engineering' },
  { label: 'Context', value: 'Internal R&D — a Gulf telco Data Monetization program' },
]

const navItems = [
  { id: 'context', label: 'Context' },
  { id: 'scale', label: 'The scale of one Portal' },
  { id: 'problem', label: 'The core problem' },
  { id: 'role', label: 'My role' },
  { id: 'three-modes', label: 'The three-mode decision' },
  { id: 'builder', label: 'The Builder' },
  { id: 'agent-copilot', label: 'Agent vs Co-Pilot' },
  { id: 'trust', label: 'Trust & governance' },
  { id: 'roles', label: 'Bounded by role' },
  { id: 'workbench', label: 'ML Workbench' },
  { id: 'outcome', label: 'Outcome' },
  { id: 'change', label: 'What I’d change' },
]

const CaseStudyDaiticsCdp = () => (
  <main className="mx-auto w-full max-w-[1243px] px-5 sm:px-8 lg:px-10">
    <BackLink />

    <CaseStudyHeader
      tag="AI Product Design Case Study"
      title="Daitics AI CDP — designing the authoring surface where people and AI share the work"
      overview={
        <p>
          An AI-native, sovereign, telco Customer Data Platform. I shaped a three-mode authoring
          paradigm — Builder, Code, Authoring Agent — over one canonical spec, so marketing ops,
          developers, data scientists, and DPOs all work on the <em>same</em> artifact through the
          lens that fits them.
        </p>
      }
      snapshot={snapshot}
      heroSlot={
        <div className="p-6 lg:p-10">
          <ThreeModeDiagram />
        </div>
      }
    />

    <div className="mt-12 grid grid-cols-2 gap-4 lg:mt-16 lg:grid-cols-4">
      <Stat value="12+" label="personas served through one Portal" />
      <Stat value="24" label="surfaces across 9 groups" />
      <Stat value="3" label="peer modes over one canonical IR" />
      <Stat value="80–90%" label="of authoring covered by the Form alone (Tier 1)" />
    </div>

    {/* Layout with sticky nav */}
    <div className="mt-16 flex gap-10 lg:mt-24">
      <StickySectionNav items={navItems} />

      <div className="flex min-w-0 flex-1 flex-col gap-16 lg:gap-24">
        {/* Context */}
        <section className="flex flex-col gap-4">
          <SectionLabel>Context</SectionLabel>
          <SectionTitle id="context">A sovereign, on-prem CDP for a telco data-monetization team</SectionTitle>
          <Body>
            Daitics is an internal R&amp;D platform: a telco-native, AI-native Customer Data Platform,
            designed to run inside a sovereign on-prem footprint. It ingests thirty-plus data sources
            (network usage, billing, digital, service, care) and produces the traits, signals and
            features a data-monetization program actually sells — audiences for campaigns, scores for
            retention, features for models.
          </Body>
          <Body>
            The distinctive part isn’t the pipeline. It’s that everything is <strong>authored</strong>{' '}
            by a human in a UI — traits, signals, features, sources, dedup rules, ML workflows, agents —
            and every one of those artifacts moves through a single governed lifecycle. My work sits at
            that authoring layer, where the human and the platform meet.
          </Body>
        </section>

        {/* Scale */}
        <section className="flex flex-col gap-4">
          <SectionLabel>The scale of one Portal</SectionLabel>
          <SectionTitle id="scale">12+ personas. 24 surfaces. One React app.</SectionTitle>
          <Body>
            Daitics is delivered through one Portal. That decision was made early and I designed
            against it — because splitting per persona breaks the artifact-as-source-of-truth model
            and turns every audit into a cross-app problem.
          </Body>
          <div className="flex flex-col gap-3">
            <div className="rounded-2xl border border-[#e8e8e8] bg-surface p-6 lg:p-8">
              <PersonaMap />
            </div>
            <p className="text-sm leading-6 text-muted">
              Illustrative persona map. Real product screens are omitted — this case study is under
              an internal R&amp;D disclosure boundary.
            </p>
          </div>
        </section>

        {/* Problem */}
        <section className="flex flex-col gap-4">
          <SectionLabel>The core problem</SectionLabel>
          <SectionTitle id="problem">One authoring surface for three very different users</SectionTitle>
          <Body>
            A marketing ops lead thinks in audiences and campaigns. A CDP developer thinks in SQL and
            pipelines. A data scientist thinks in features and models. All three need to author the
            same class of thing — a trait, a signal, a feature — and all three need the result to
            arrive in production with the same governance behind it.
          </Body>
          <Body>
            The obvious answers all fail. A wizard forces the median first-time user’s path onto the
            expert doing this daily. A code-first surface excludes ops entirely. One app per persona
            doubles the truth and cripples review. The right answer had to let each user do it their
            way <em>while looking at the same artifact</em>.
          </Body>
        </section>

        {/* My role */}
        <section className="flex flex-col gap-4">
          <SectionLabel>My role</SectionLabel>
          <SectionTitle id="role">What I owned, what I contributed to</SectionTitle>
          <Body>
            I shaped the authoring paradigm end-to-end: the three-mode structure, the Builder’s
            Form/Rules/Pipeline decomposition, the split between the Authoring Agent tab and the
            ambient Co-Pilot sidebar, and the trust model — how an LLM-drafted artifact still moves
            through the same deterministic gates as a human-authored one.
          </Body>
          <Body>
            I worked in tight loops with the product owners, engineering leads, and the DPO advisor;
            most of the design happened in FigJam and working sessions rather than polished decks.
            Persona coverage across the 24 surfaces was a team effort; the two surfaces I go deep on
            below — <strong>workflow authoring</strong> (Trait / Signal / Feature / Source) and the{' '}
            <strong>ML Workbench</strong> — are the ones I led directly.
          </Body>
        </section>

        {/* Three-mode decision */}
        <section className="flex flex-col gap-4">
          <SectionLabel>Key decision · 1</SectionLabel>
          <SectionTitle id="three-modes">Three peer modes over one canonical spec</SectionTitle>
          <Body>
            Every authoring surface exposes three peer tabs — <strong>Builder</strong>,{' '}
            <strong>Code</strong>, <strong>Authoring Agent</strong> — sitting over one Canonical
            Intermediate Representation (IR) per artifact. The user picks the mode. Nothing forces a
            gateway. The IR is what actually gets promoted; the tabs are bi-directional projections.
          </Body>
          <Body>
            Two things fall out of this that I didn’t appreciate at the start:
          </Body>
          <ul className="flex list-disc flex-col gap-3 pl-6 text-base leading-7 text-black lg:text-lg">
            <li>
              The Builder can cover <strong>80–90% of authoring</strong> — the platform’s own tier
              math. The Form alone (no Rules, no Pipeline) is the whole job for the median trait.
            </li>
            <li>
              The Authoring Agent can produce a candidate that lands directly in the same Builder /
              Code panes. There’s nowhere for the AI to hide its work. The reviewer sees a real
              artifact, not a chat log.
            </li>
          </ul>
          <div className="mt-4">
            <p className="mb-4 text-sm font-medium uppercase tracking-wide text-muted">Alternatives I rejected</p>
            <RejectedAlternatives />
          </div>
        </section>

        {/* Builder */}
        <section className="flex flex-col gap-4">
          <SectionLabel>The Builder</SectionLabel>
          <SectionTitle id="builder">Form → Rules → Pipeline, with a live sidebar</SectionTitle>
          <Body>
            The Builder is one screen with three progressively-disclosed sections. Not a wizard — a
            single canvas where sections appear as the artifact needs them.
          </Body>
          <ul className="flex list-disc flex-col gap-3 pl-6 text-base leading-7 text-black lg:text-lg">
            <li>
              <strong>Form</strong> — always visible. Identity, source, aggregation window, filter,
              output, governance. For the Tier-1 majority this is the whole authoring surface.
            </li>
            <li>
              <strong>Rules</strong> — a visual predicate tree. AND / OR / NOT, nested conditions,
              case-based post-aggregation buckets. Nobody types SQL.
            </li>
            <li>
              <strong>Pipeline</strong> — for Type-B features only: a drag-and-drop transformation
              canvas (scale, encode, PCA, assemble). Type-checked and cycle-checked before save.
            </li>
          </ul>
          <Body>
            The right-hand sidebar is where the platform earns its keep. Detected class and estimated
            p99 latency show <em>while the user is still editing</em>. A synthetic preview evaluates
            the artifact against sample profiles. Lineage and impact make it clear what depends on
            what. Duplicate detection surfaces an audited “continue anyway” — the platform will not
            silently allow near-duplicates.
          </Body>
          <div className="rounded-2xl border border-[#e8e8e8] bg-surface p-6 lg:p-8">
            <BuilderAnatomy />
          </div>
          <Callout title="Design principle" tone="info">
            The Builder must not require the user to leave it to answer any question the platform
            can already answer. Class, latency, coverage, lineage, similarity — all live in the
            sidebar, not one page away.
          </Callout>
        </section>

        {/* Agent vs Co-Pilot */}
        <section className="flex flex-col gap-4">
          <SectionLabel>Key decision · 2</SectionLabel>
          <SectionTitle id="agent-copilot">Two AI surfaces on purpose — not one</SectionTitle>
          <Body>
            The <strong>Authoring Agent</strong> is a peer tab beside Builder and Code. Its job is to
            draft a whole artifact from a natural-language brief, or modify an existing one, or
            explain it, or suggest alternatives. It’s a heavyweight surface — you go there when you
            want the agent to <em>do the work</em>.
          </Body>
          <Body>
            The <strong>ambient Co-Pilot</strong> lives in the sidebar on every surface. It never
            initiates a draft. It explains what’s in front of you, suggests a refactor, validates
            governance before you save, and finds similar artifacts. Right-here-right-now sidekick,
            not driver.
          </Body>
          <div className="rounded-2xl border border-[#e8e8e8] bg-surface p-6 lg:p-8">
            <AgentVsCoPilot />
          </div>
          <Body>
            Building both was deliberate. One AI surface would either be too pushy (the ambient one
            producing drafts you didn’t ask for) or too shy (the heavyweight one hiding behind a
            button). Two roles, two shapes, two levels of consent.
          </Body>
        </section>

        {/* Trust */}
        <section className="flex flex-col gap-4">
          <SectionLabel>Trust &amp; governance</SectionLabel>
          <SectionTitle id="trust">LLM drafts. The platform decides.</SectionTitle>
          <Body>
            The single most important rule I designed around:{' '}
            <strong>the agent’s correctness never depends on the LLM’s correctness</strong>. The
            agent produces a <em>candidate IR</em>. The Canonicalizer — a deterministic step — is
            the only path to promotion. It validates the IR against schema, checks DULE / consent /
            permissions, resolves refs, infers class, and increments version. If any of that fails,
            nothing ships.
          </Body>
          <Body>
            Every IR carries an <code className="rounded bg-surface px-1.5 py-0.5 text-sm">authoring_origin</code>{' '}
            tag: <em>human</em>, <em>ai_seeded</em>, <em>ai_copilot_drafted</em>,{' '}
            <em>human_edited_from_ai_suggestion</em>, or <em>automated_migration</em>. Governance
            reviewers can filter for AI-origin artifacts. There is no hiding.
          </Body>
          <div className="rounded-2xl border border-[#e8e8e8] bg-surface p-6 lg:p-8">
            <TrustFlow />
          </div>
          <Callout title="Continue anyway — audited" tone="warn">
            When the Builder or Workbench flags a near-duplicate, the user can override — but the
            override is captured with a rationale field and stamped into the audit log. Governance
            reviewers see who overrode what, with what reason, at promotion time.
          </Callout>
        </section>

        {/* Roles */}
        <section className="flex flex-col gap-4">
          <SectionLabel>Bounded by role</SectionLabel>
          <SectionTitle id="roles">The agent respects permissions, or it isn’t safe</SectionTitle>
          <Body>
            An AI co-author that lets an unauthorized user “draft” something they couldn’t author by
            hand is a governance hole with a chat interface. So the Authoring Agent inherits the
            same permission model as the artifact itself. What you can see, what you can change,
            what the agent will do for you — all three are constrained by role.
          </Body>
          <RolePermissions />
          <Body>
            Marketing Operations never sees the Code tab. Model Owners, DPO, and Auditor never see
            an edit affordance — they get <em>Explain</em>, not <em>Draft</em>. Data Stewards can
            submit changes to a Suggestion Queue for a permitted role to accept. The agent
            surface is the same everywhere; the doors open only where the role opens them.
          </Body>
        </section>

        {/* ML Workbench */}
        <section className="flex flex-col gap-4">
          <SectionLabel>ML Workbench</SectionLabel>
          <SectionTitle id="workbench">A CDP-native notebook — governed, not general-purpose</SectionTitle>
          <Body>
            The Workbench is the data-scientist and ML-engineer’s surface. Underneath it’s a
            managed JupyterHub, but the raw JupyterHub is never exposed. What the user sees is a
            Portal-rendered notebook with a pre-installed Daitics SDK and a set of governance-aware
            magics: <code>%dtx_sql</code>, <code>%dtx_feature</code>, <code>%dtx_model</code>,{' '}
            <code>%dtx_register_model</code>, <code>%dtx_submit_training</code>,{' '}
            <code>%dtx_lineage</code>, <code>%dtx_audit</code>.
          </Body>
          <Body>
            The design goal was simple: <strong>everything a Data Scientist does here has to leave
            the same governance footprint as everything anyone else does anywhere else in the
            platform.</strong> No shadow features, no models that ship without a Card, no data
            access that skips consent.
          </Body>
          <div className="rounded-2xl border border-[#e8e8e8] bg-surface p-6 lg:p-8">
            <WorkbenchAnatomy />
          </div>
          <ul className="flex list-disc flex-col gap-3 pl-6 text-base leading-7 text-black lg:text-lg">
            <li>
              <strong>SQL through the platform</strong>. <code>%dtx_sql</code> routes queries through
              the Portal query API against the governed data lake — same auth, same consent filter,
              same audit trail as anywhere else.
            </li>
            <li>
              <strong>Features registered, not printed</strong>. <code>%dtx_feature</code> resolves
              against the Feature Registry, and registration flows through the same Canonicalizer as
              the Builder.
            </li>
            <li>
              <strong>Model similarity on promotion</strong>. When a model is registered, an
              embedding compares it against the Catalog. Similarity ≥ 0.75 elevates to a warning
              and requires a rationale before promotion.
            </li>
            <li>
              <strong>Cell-level audit</strong>. Every cell run emits an audit event; sensitive
              access is captured at 100%. The auditor can reconstruct exactly which cell touched
              which sensitive column and when.
            </li>
            <li>
              <strong>Sidebar tools</strong>. MLflow tracking, Argo job monitor, Tool Registry,
              Feature Registry and per-user resource quota — none of it in a separate console.
            </li>
          </ul>
          <Callout title="Design principle" tone="info">
            A data scientist should not have to switch tools to comply. If compliance is a
            separate app, it will lose to speed. If it’s an SDK call, it wins by default.
          </Callout>
        </section>

        {/* Outcome */}
        <section className="flex flex-col gap-4">
          <SectionLabel>Outcome</SectionLabel>
          <SectionTitle id="outcome">Where it is, and what I can honestly claim</SectionTitle>
          <Body>
            Daitics is an active R&amp;D initiative, not a shipped commercial product. So I’m going
            to be honest about which of the outcomes are measurable and which are qualitative — the
            interviewer will ask, and they should.
          </Body>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <Callout title="Design outcomes I can defend" tone="neutral">
              <ul className="flex list-disc flex-col gap-2 pl-5">
                <li>
                  The three-mode paradigm was accepted by product and engineering and is the model
                  the platform is built around today. It shipped through to implementation, not just
                  a Figma file.
                </li>
                <li>
                  The trust model — LLM drafts, deterministic gates, <code>authoring_origin</code>{' '}
                  everywhere — became a platform-wide invariant, not a Portal-only affordance.
                </li>
                <li>
                  Marketing Operations, CDP Developer, Data Scientist, DPO and Auditor all work
                  against the same artifact model. One IR, one audit log.
                </li>
              </ul>
            </Callout>
            <Callout title="What I can’t yet claim" tone="warn">
              <ul className="flex list-disc flex-col gap-2 pl-5">
                <li>Adoption metrics — Daitics has not been in general production long enough.</li>
                <li>Time-to-first-artifact deltas — the baseline isn’t comparable yet.</li>
                <li>
                  Direct user quotes at portfolio-quality — the R&amp;D validation is with internal
                  users under NDA.
                </li>
              </ul>
            </Callout>
          </div>
        </section>

        {/* What I'd change */}
        <section className="flex flex-col gap-4">
          <SectionLabel>What I’d change</SectionLabel>
          <SectionTitle id="change">Things I would rework knowing what I know now</SectionTitle>
          <ul className="flex list-disc flex-col gap-3 pl-6 text-base leading-7 text-black lg:text-lg">
            <li>
              <strong>Ship the Co-Pilot before the Agent tab.</strong> The ambient sidebar is the
              cheaper, higher-trust surface. If I did it again I’d prove the trust model at
              side-panel scale before introducing the peer tab.
            </li>
            <li>
              <strong>Design the Suggestion Queue as a first-class surface.</strong> Read-only roles
              can submit suggestions; that queue currently lives inside Approvals. It deserves its
              own home — it’s where governance and the AI actually collaborate.
            </li>
            <li>
              <strong>Give the Workbench a “Recipe” library.</strong> The magics are good building
              blocks; a well-curated set of parameterized recipes (churn scoring, ARPU forecasting,
              propensity) would make the golden path faster without giving up governance.
            </li>
            <li>
              <strong>Make lineage visible <em>before</em> promotion, not only at review.</strong>{' '}
              Authors should feel the downstream weight of the change they’re about to make while
              they’re still in the artifact. Sidebar shows impact — but the diff view could be
              louder.
            </li>
          </ul>
        </section>

        <NextProject href="/projects/mviva-cvmaas" title="mViva + CVMaaS — self-serve campaigns" />
      </div>
    </div>

    <Footer />
  </main>
)

export default CaseStudyDaiticsCdp
