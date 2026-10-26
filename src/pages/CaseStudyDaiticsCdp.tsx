import Footer from '../components/Footer'
import ProjectFooterNav from '../components/ProjectFooterNav'
import {
  BackLink,
  Body,
  Callout,
  CaseStudyHeader,
  Figure,
  SectionLabel,
  SectionTitle,
  Stat,
  StickySectionNav,
  ThumbnailGrid,
} from '../components/caseStudy'
import AmbiguityCallout from '../components/casestudy/AmbiguityCallout'
import ResearchDecisionTable from '../components/casestudy/ResearchDecisionTable'
import ThreeModesDiagram from '../components/casestudy/ThreeModesDiagram'
import AutomationControlMatrix from '../components/casestudy/AutomationControlMatrix'
import AgentStatesGrid from '../components/casestudy/AgentStatesGrid'
import TrustPatterns from '../components/casestudy/TrustPatterns'
import aicdpBanner from '../assets/AICDP/aicdp-banner.jpg'
import aicdpVsAicep from '../assets/AICDP/aicdp-vs-aicep.jpg'
import aicdpEndToEndFlow from '../assets/AICDP/aicdp-end-to-end-flow.svg'
import mlWorkbenchTable from '../assets/AICDP/ml-workbench-table.jpg'
import mlWorkbenchNotebook from '../assets/AICDP/ml-workbench-notebook.jpg'
import mlJupyterhub from '../assets/AICDP/ml-jupyterhub.png'
import wfHero from '../assets/AICDP/workflows/workflows-hero.png'
import wfCreateMenu from '../assets/AICDP/workflows/workflows-create-menu.png'
import wfAgentBuilder from '../assets/AICDP/workflows/workflows-agent-builder.png'
import wfManualBuilder from '../assets/AICDP/workflows/workflows-manual-builder.png'
import wfImport from '../assets/AICDP/workflows/workflows-import.png'
import v53Iteration from '../assets/AICDP/v53-iteration.jpg'
import competitorScreenshots from '../assets/AICDP/competitor-screenshots.png'
import palantir from '../assets/AICDP/palantir.jpg'
import pipeline from '../assets/AICDP/pipeline.png'
import pipelineNodes from '../assets/AICDP/pipeline-nodes.png'
import userResearchCamunda from '../assets/AICDP/user-research-camunda.png'
import userResearchPersonaTasks from '../assets/AICDP/user-research-persona-tasks.png'
import {
  AgentVsCoPilot,
  PersonaMap,
  RejectedAlternatives,
  TelcoInsightsCanvas,
  TrustFlow,
} from '../components/daitics'
import { IconReport, IconShield, IconSpark, IconStack } from '../components/rmn'

const snapshot = [
  { label: 'Role', value: 'Lead Product Designer — shaped the authoring paradigm' },
  { label: 'Team', value: 'Product owners, data engineers, ML engineers, DPO advisor' },
  { label: 'Platform', value: 'Web · one React portal · sovereign on-prem deploy' },
  { label: 'Tools', value: 'Figma · FigJam · ClickUp · Claude Code · Git' },
]

const navItems = [
  { id: 'context', label: 'Context' },
  { id: 'scale', label: 'The scale of one Portal' },
  { id: 'problem', label: 'The core problem' },
  { id: 'user-research', label: 'User research' },
  { id: 'competitive', label: 'Competitive analysis' },
  { id: 'role', label: 'My role' },
  { id: 'research', label: 'Research → decisions' },
  { id: 'three-modes', label: 'The three-mode decision' },
  { id: 'builder', label: 'The Pipeline' },
  { id: 'agent-copilot', label: 'Agent vs Co-Pilot' },
  { id: 'trust', label: 'Trust & governance' },
  { id: 'hcai', label: 'Human-Centered AI' },
  { id: 'workbench', label: 'ML Workbench' },
  { id: 'workflows', label: 'Workflow module' },
  { id: 'outcome', label: 'Outcome' },
  { id: 'change', label: 'What I’d change' },
  { id: 'takeaway', label: 'My takeaway' },
]

const researchSnaps = [
  { src: userResearchPersonaTasks, alt: 'Task inventory per persona' },
  { src: userResearchCamunda, alt: 'Workflow analysis — Camunda BPMN reference' },
  { src: v53Iteration, alt: 'V53 — final iteration of the master research spec' },
]

const competitiveSnaps = [
  { src: competitorScreenshots, alt: 'Authoring patterns across enterprise CDPs and data platforms' },
  { src: palantir, alt: 'Palantir Foundry — governed, artifact-first workspace reference' },
]

const CaseStudyDaiticsCdp = () => (
  <main className="mx-auto w-full max-w-[1243px] px-5 sm:px-8 lg:px-10">
    <BackLink />

    <CaseStudyHeader
      tag="AI Product Design Case Study"
      title="Telco AI CDP — designing the authoring surface where people and AI share the work"
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
        <img
          src={aicdpBanner}
          alt="Telco AI CDP — authoring surface where people and AI share the work"
          className="h-full w-full object-cover"
        />
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
          <Callout tone="info" title="The brief">
            Telcos generate more first-party customer data than almost any other sector — CDRs,
            network signalling, DPI, billing, CRM, app, web, location. But that data lives in 15+
            siloed systems, and a single customer shows up under 5–10 different identifiers.
            Marketing is generic, care agents have no context, churn is invisible, compliance is
            inconsistent. AI CDP unifies this fragmented data into a single governed Customer 360
            — purpose-built for Telco, sovereign-deployed inside the operator’s own infrastructure,
            and AI-native from the ground up (90+ AI operators, MCP Server for agent access).
          </Callout>
          <Figure
            src={aicdpVsAicep}
            alt="AI CDP vs AI CEP — how the platform works together"
            caption="The system splits cleanly into two halves: the AI CDP as the data & intelligence foundation, and the AI CEP as journey orchestration & activation. C360 is assembled only in the CDP; the CEP consumes the unified profile. Engagement events flow back for closed-loop learning."
          />

          <Body>
            Zoom in on the CDP half, and here is what the end-to-end workflow inside the platform
            actually looks like — from raw source ingestion on the left, through identity
            resolution, trait and signal authoring, feature engineering and ML, all the way to
            the operators and destinations that carry a governed profile into activation on the
            right.
          </Body>
          <Figure
            src={aicdpEndToEndFlow}
            alt="AI CDP end-to-end workflow"
            caption="AI CDP end-to-end workflow. Each stage is a first-class authoring surface with the same governance model behind it — one artifact per node, one audit trail across the flow."
          />
        </section>

        {/* Ambiguity callout — DRAFT: review */}
        <AmbiguityCallout
          items={[
            <>No shared product definition — <em>sovereign on-prem CDP</em> meant something different to each team.</>,
            <>12+ personas (MarkOps, CDP Developer, Data Scientist, DPO, Auditor...) each described the product differently.</>,
            <>No precedent for AI-authoring inside a telco-grade CDP under PDPL and TDRA constraints.</>,
            <>Sovereign and on-prem — no SaaS templates to copy, no third-party models allowed on data.</>,
          ]}
        />

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

        {/* User research */}
        <section className="flex flex-col gap-4">
          <SectionLabel>User research</SectionLabel>
          <SectionTitle id="user-research">Persona tasks and workflow research</SectionTitle>
          <Body>
            Before I could argue for any authoring paradigm, I had to know what each persona
            actually did all day — what they authored, what they reviewed, what they handed off,
            what tools they lived in. I mapped tasks per persona (everything downstream — three
            modes, agent scope, role permissions — derives from this), studied how existing
            workflow tools decompose an authoring flow into states, gates, and hand-offs
            (Camunda BPMN as one of the closer references, and where the draft / review /
            promotion trust split came from), and fed it all into a single living spec that
            went through 53 iterations before the team was aligned enough to build.
          </Body>
          <div className="mt-2 flex flex-col gap-3">
            <p className="text-sm leading-6 text-muted">
              A glimpse of the research artifacts — persona-task inventory, workflow analysis,
              and the master spec at its final iteration. Hover to zoom · click to view full size.
            </p>
            <ThumbnailGrid items={researchSnaps} cols={3} />
          </div>
        </section>

        {/* Competitive analysis */}
        <section className="flex flex-col gap-4">
          <SectionLabel>Competitive analysis</SectionLabel>
          <SectionTitle id="competitive">How the market builds this</SectionTitle>
          <Body>
            I looked at how the closest neighbours in the space — enterprise CDPs, data platforms,
            and AI-operator products — shape their authoring surfaces. Two references did the most
            work: a Figma-based sweep of visual patterns across the CDP market (what worked, what
            didn’t, and what we could improve on), and a deep look at Palantir Foundry as the
            reference for a governed, artifact-first workspace — which confirmed the direction:{' '}
            <strong>the artifact is the design; the UI is a lens.</strong>
          </Body>
          <div className="mt-2 flex flex-col gap-3">
            <p className="text-sm leading-6 text-muted">
              The two reference sweeps. Hover to zoom · click to view full size.
            </p>
            <ThumbnailGrid items={competitiveSnaps} cols={2} />
          </div>
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

        {/* Research → decisions canvas */}
        <section className="flex flex-col gap-4">
          <SectionLabel>Research → decisions</SectionLabel>
          <SectionTitle id="research">The board that shaped the three big calls</SectionTitle>
          <Body>
            Most of the decisions below came out of a FigJam board — personas on the left, domain
            constraints next to them, insights that fell out, decisions on the right. Sanitised
            snapshot:
          </Body>
          <TelcoInsightsCanvas />

          {/* Research -> Decision table — DRAFT: review */}
          <ResearchDecisionTable
            caption="Four rows the three big calls came out of. The canvas above is the raw thinking; this is the summary a reviewer can read in 20 seconds."
            rows={[
              {
                learned: <>Marketing, Dev and Data Science each re-expressed the same logic in their own tool.</>,
                decided: <>One canonical IR (intermediate representation) per artifact.</>,
                changed: <>Three peer modes — Builder, Code, Agent — write to the same spec. No hand-off rebuilds.</>,
              },
              {
                learned: <>DPO needed audit on every action, not opt-in on request.</>,
                decided: <>Auditable by default — logs are a platform invariant, not a feature.</>,
                changed: <>Every action logs <code>authoring_origin</code> + spec version. AI actions are first-class in the same audit trail as human ones.</>,
              },
              {
                learned: <>Marketers think visually; developers think in code. Neither accepts a “downgrade” toggle.</>,
                decided: <>Peer modes, not simple/advanced.</>,
                changed: <>The Form alone covers 80–90% of authoring. The Code tab is a peer, not an escape hatch.</>,
              },
              {
                learned: <>An agent that <em>acts</em> can't be audited the same way as a user.</>,
                decided: <>LLM drafts. The platform (Canonicalizer) decides.</>,
                changed: <>The Agent produces a candidate IR; a deterministic step validates schema, DULE and consent before anything promotes.</>,
              },
            ]}
          />
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

          {/* Three-modes diagram — DRAFT: review */}
          <ThreeModesDiagram />

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

        {/* Pipeline */}
        <section className="flex flex-col gap-4">
          <SectionLabel>The Pipeline</SectionLabel>
          <SectionTitle id="builder">A drag-and-drop data flow, one node at a time</SectionTitle>
          <Body>
            The Pipeline is where authoring turns into a data flow. Every step — ingest, schema,
            quality, tokenisation, modelling, sink — is a node the author can drop, configure,
            and connect. Same governance model, same audit trail as the rest of the platform.
          </Body>
          <Figure
            src={pipeline}
            alt="Pipeline canvas — end-to-end data flow"
            caption="A typical pipeline reads left-to-right: source → schema → quality → tokenisation → modelling → sink. Nodes surface their tool of origin (Kafka, AWS, and so on); the platform handles the plumbing."
          />
          <Figure
            src={pipelineNodes}
            alt="Pipeline node vocabulary"
            caption="The node vocabulary — the set of building blocks a pipeline author picks from. Each node is small on purpose; complexity lives in composition, not in any single step."
          />
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
            When the platform flags a near-duplicate, the user can override — but the
            override is captured with a rationale field and stamped into the audit log. Governance
            reviewers see who overrode what, with what reason, at promotion time.
          </Callout>

          <Callout title="Compliance built in" tone="info">
            <p>
              Every artifact carries the regulatory frames it lives under — <strong>GDPR</strong>
              (right to access, rectify, erase), <strong>UAE PDPL</strong> (Federal Decree-Law No.
              45 of 2021), <strong>TDRA</strong> telecom data rules, and the operator’s own DULE
              and consent policies. Consent status, purpose limitation, retention window, and
              subject-rights hooks travel with the profile from ingestion to activation. Nothing
              is retro-fitted at the last mile — the compliance model is upstream of the artifact
              model, not downstream of it.
            </p>
          </Callout>
        </section>

        {/* Human-Centered AI — DRAFT: review */}
        <section className="flex flex-col gap-4">
          <SectionLabel>Human-Centered AI</SectionLabel>
          <SectionTitle id="hcai">How the agent earns the right to act</SectionTitle>
          <Body>
            Trust &amp; governance (above) covers the <em>mechanism</em> — LLM drafts, deterministic
            gate, authoring_origin on every artifact. This section covers the <em>interaction</em>:
            which behaviours we chose, which we deliberately excluded, and what the agent looks like
            from the user's seat.
          </Body>

          {/* Automation vs. control */}
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold uppercase tracking-wide text-muted">
              Automation × control — the design space
            </p>
            <AutomationControlMatrix
              topLeft={{
                title: 'Suggest',
                body: (
                  <>Inline hints and tooltips while the human builds in the Form or Code tab.
                    The human writes; the AI nudges.</>
                ),
              }}
              topRight={{
                title: 'Draft',
                body: (
                  <>Agent writes a complete candidate IR. Human reviews it in Builder or Code,
                    edits inline, approves. The AI writes; the human owns the merge.</>
                ),
              }}
              bottomLeft={{
                title: 'Auto-complete',
                body: (
                  <>Small deterministic completions — default profile fields, resolved refs,
                    version bumps. No LLM; nothing to gate.</>
                ),
              }}
              bottomRight={{
                title: 'Act without approval',
                tone: 'excluded',
                body: (
                  <>Deliberately empty. Every AI action goes through the Canonicalizer; the
                    platform refuses to promote without a validated IR.</>
                ),
              }}
            />
          </div>

          {/* Agent states */}
          <div className="mt-6 flex flex-col gap-3">
            <p className="text-sm font-semibold uppercase tracking-wide text-muted">
              Agent lifecycle — nine states we designed for
            </p>
            <AgentStatesGrid
              states={[
                { name: 'Idle', desc: 'Agent available. No draft in flight. Prompt field is live, nothing else is.' },
                { name: 'Understanding', desc: 'Reading the prompt and context. Resolving refs. Nothing committed yet.' },
                { name: 'Working', desc: 'Drafting the candidate IR. Streaming updates where it helps; hidden where it would distract.' },
                { name: 'Proposed', desc: 'Draft shown in Builder/Code as a diff. User can accept, edit, or discard.', tone: 'ok' },
                { name: 'Approved', desc: 'User accepted. Candidate heads to the Canonicalizer for deterministic validation.', tone: 'ok' },
                { name: 'Partial', desc: 'Agent produced some but not all required fields. Flagged for human completion.', tone: 'warn' },
                { name: 'Failed', desc: 'Agent couldn\u2019t produce a candidate. Surface the reason, not the stack trace.', tone: 'warn' },
                { name: 'Invalid', desc: 'Canonicalizer rejected the candidate (schema, consent, DULE). Shows which gate failed.', tone: 'error' },
                { name: 'Rejected', desc: 'User discarded the draft. Captured for prompt-quality improvement.', tone: 'error' },
              ]}
            />
          </div>

          {/* Trust patterns */}
          <div className="mt-6 flex flex-col gap-3">
            <p className="text-sm font-semibold uppercase tracking-wide text-muted">
              Trust patterns — the vocabulary we repeat
            </p>
            <TrustPatterns
              patterns={[
                { name: 'Confidence in plain language', desc: 'No percentages or probabilities in the UI. The agent says what it did and what it didn\u2019t do, in a sentence.' },
                { name: 'Sources travel with the draft', desc: 'Every proposed IR carries the tables, policies and prior artifacts it reasoned over. Reviewers never have to ask \u201cwhere did this come from?\u201d.' },
                { name: 'Approval gates with impact', desc: 'Before a promotion the user sees the downstream artifacts the change touches — not just a confirm dialog.' },
                { name: 'Undo and versioning', desc: 'Nothing the agent proposes overwrites history. Every version is addressable; every rollback is one action.' },
                { name: 'Fallback to Builder', desc: 'If the agent can\u2019t help, the Builder is right there — same tab, same artifact. No hand-off, no lost context.' },
              ]}
            />
          </div>
        </section>

        {/* ML Workbench */}
        <section className="flex flex-col gap-4">
          <SectionLabel>ML Workbench</SectionLabel>
          <SectionTitle id="workbench">A CDP-native notebook — governed, not general-purpose</SectionTitle>
          <Body>
            The Workbench is the data-scientist and ML-engineer’s surface for building models on
            top of the CDP. The design goal was to give them a familiar notebook, without giving
            up governance: everything a data scientist does here has to leave the same audit
            footprint as everything anyone else does anywhere else in the platform.
          </Body>
          <Body>
            Under the hood, the Workbench is a <strong>headless JupyterHub</strong> embedded
            inside the platform. Open-source infrastructure does the heavy lifting — kernel
            management, notebook execution, per-user environments — but the JupyterHub UI is
            never exposed to the user. Every surface a data scientist touches is a Portal-
            rendered React page.
          </Body>
          <Figure
            src={mlJupyterhub}
            alt="Headless JupyterHub inside the Portal"
            caption="Where the notebook actually runs — JupyterHub sits behind the Portal's own UI. Same auth, same audit, no separate URL to leak."
          />
          <Figure
            src={mlWorkbenchTable}
            alt="ML Workbench — dataset browser, usage_daily table"
            caption="Governed dataset browser — open any trait as a table (usage_daily: 71M rows, seven columns, DQ 99.1%, ingested 11 min ago). Row count, schema and data-quality signal sit in the header so a scientist decides whether it's worth loading before they write a query."
          />
          <Figure
            src={mlWorkbenchNotebook}
            alt="ML Workbench — Feature Engineering notebook with Python and SQL cells"
            caption="The notebook itself — Python and SQL cells side by side, imports from dtx.workbench, and a one-click handle to query any governed table. Feature engineering happens where the data lives, not in a copy."
          />
          <Callout title="Design principle" tone="info">
            A data scientist should not have to switch tools to comply. If compliance is a
            separate app, it will lose to speed. If it lives inside the notebook, it wins by default.
          </Callout>
        </section>

        {/* Workflow module — DRAFT: review */}
        <section className="flex flex-col gap-4">
          <SectionLabel>Workflow module</SectionLabel>
          <SectionTitle id="workflows">Approval workflows governed by the platform, not the mailbox</SectionTitle>
          <Body>
            Every change in the platform — a new trait, a model promotion, a segment edit, a
            tokenisation request — has to pass through an approval workflow. The module makes those
            workflows a <strong>first-class product</strong>, not an email chain. It is Flowable BPMN
            underneath, Portal-rendered on top, and every run leaves the same audit trail as any
            other artifact change.
          </Body>
          <Figure
            src={wfHero}
            alt="Workflows list — Approval workflows, SLAs and escalations that govern every change in the platform"
            caption="The Workflows home. KPIs on top (published, in-flight, average approval time, SLA breaches), tabs below for Workflows, Instances, Approval queue and Version history. Risk-tier filter top-right governs who can approve what."
          />

          <SectionTitle id="workflows-create">Three ways to create a workflow</SectionTitle>
          <Body>
            A reviewer never has to choose between \u201ceasy\u201d and \u201cpowerful.\u201d The
            same canonical workflow spec sits behind all three creation paths, so a workflow started
            by the agent and finished in Manual mode is still one workflow with one audit history.
          </Body>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <div className="flex flex-col gap-2 rounded-2xl border border-[#e8e8e8] bg-surface p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-tag-blue">Agentic flow</p>
              <p className="text-base font-semibold text-ink">Build with the Workflow Agent</p>
              <p className="text-sm leading-6 text-charcoal">
                Describe the approval in plain language — who reviews, what conditions apply, how
                strict the SLAs are. The agent drafts a Flowable BPMN definition; the human refines
                it. Same trust rules as the CDP\u2019s authoring agent: the LLM drafts, the
                platform decides.
              </p>
            </div>
            <div className="flex flex-col gap-2 rounded-2xl border border-[#e8e8e8] bg-surface p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-tag-blue">Manual flow</p>
              <p className="text-base font-semibold text-ink">Start blank, drag BPMN elements</p>
              <p className="text-sm leading-6 text-charcoal">
                A canonical palette of human tasks (Approval, Multi-approval, Review, Manual data
                entry), system &amp; agent tasks (Service, Notification, AI agent, Script), and
                gateways (XOR, AND, OR). Governance primitives live inside the palette so nothing
                non-compliant can be dragged in.
              </p>
            </div>
            <div className="flex flex-col gap-2 rounded-2xl border border-[#e8e8e8] bg-surface p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-tag-blue">Upload</p>
              <p className="text-base font-semibold text-ink">Upload a BPMN 2.0 definition</p>
              <p className="text-sm leading-6 text-charcoal">
                Drop a <code>.bpmn20.xml</code> file (or JSON export) to bring an existing process
                in from another engine. Imports go through the <em>same</em> sandbox test and
                publish gate as a newly-authored one — script tasks are stripped on import; service
                tasks must exist in the approved catalog.
              </p>
            </div>
          </div>
          <Figure
            src={wfCreateMenu}
            alt="Create workflow menu — four entry paths"
            caption="The split \u2018Create workflow\u2019 button opens the four entry paths. From template is the fourth path for teams starting from a reference library; the three above are the primary modes."
          />

          <SectionTitle id="workflows-builder">The builder — one canvas, two modes</SectionTitle>
          <Body>
            Agentic and Manual modes are tabs on the same builder. The canvas, the trigger node,
            the risk-tier badge, the sandbox test button and the validation issue counter are
            shared. The left panel is what changes — prompt box for the agent, BPMN element palette
            for Manual.
          </Body>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <Figure
              src={wfAgentBuilder}
              alt="Builder in Workflow Agent mode — plain-language brief with sample prompts"
              caption="Agent mode. The suggested prompts aren\u2019t decoration — they match real CDP approval shapes (sandbox-to-live with parallel DPO on PII, trait promotion with Readiness Check Agent validation, detokenisation gated by DPO)."
            />
            <Figure
              src={wfManualBuilder}
              alt="Builder in Manual mode — BPMN element palette"
              caption="Manual mode. Human tasks, system &amp; agent tasks, gateways. Script task is locked \u2014 platform-owned only, so a workflow author can\u2019t smuggle untyped code into a governed path."
            />
          </div>

          <SectionTitle id="workflows-import">Imports go through the same gate</SectionTitle>
          <Body>
            Uploading a BPMN definition is not a shortcut to live. The import modal names the rule
            plainly: imports pass through the <em>same</em> sandbox test and publish gate as new
            workflows. There is no second route to production.
          </Body>
          <Figure
            src={wfImport}
            alt="Import BPMN 2.0 XML modal — drop zone and import rules"
            caption="Import modal. Flowable-compatible BPMN 2.0. Script tasks are stripped; service tasks must resolve against the approved catalog."
          />

          <SectionTitle id="workflows-sandbox">Test drive before publish</SectionTitle>
          <Body>
            Every workflow can be \u201ctest-driven\u201d in a sandbox simulator before it leaves
            draft. The simulator runs each human decision, each agent task, and each parallel branch
            against synthetic requesters. If the rejection branch runs, parallel approvals are
            cancelled and the requester is notified with the reason \u2014 nothing activates. The
            output is a simulated elapsed time and a list of decisions made, not a toast.
          </Body>

          <SectionLabel>What this is projected to save</SectionLabel>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <Stat
              value="9.4h"
              label="projected avg. time to approve — target for governed changes"
              caption="Sandbox target — from the design-prototype KPI tile; replaces mailbox approvals measured in days"
            />
            <Stat
              value="−2.1h"
              label="projected weekly reduction once workflows go self-serve"
              caption="Projected weekly delta vs. the previous week — baseline from pre-module email approvals"
            />
            <Stat
              value="4 tiers"
              label="risk-tier policy that governs who can approve what"
              caption="Structural — Critical / High / Medium / Low; policy, not a filter"
            />
          </div>

          <Callout title="Audit trail is identical to every other artifact" tone="info">
            A workflow run leaves the same audit footprint as a trait edit or a model promotion:
            <code>authoring_origin</code> on who built the workflow (human / agent / imported),
            spec version at execution time, which gate approved or rejected each step, and the
            exact Canonicalizer check that let the resulting change promote. One audit trail across
            authoring and execution — no second system to reconcile.
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

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
            {[
              { icon: <IconStack />, value: '3 modes', label: 'Builder · Code · Authoring Agent over one canonical IR' },
              { icon: <IconSpark />, value: '80–90%', label: 'projected Tier-1 coverage from Form alone' },
              { icon: <IconShield />, value: '5 tags', label: 'authoring_origin classifications — every AI action traceable' },
              { icon: <IconReport />, value: '100%', label: 'AI actions land in the same audit trail as human ones' },
            ].map((m) => (
              <div key={m.label} className="flex flex-col gap-2 rounded-2xl bg-surface p-6">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-tag-blue">
                  {m.icon}
                </span>
                <span className="text-[26px] font-semibold leading-tight text-ink lg:text-[30px]">
                  {m.value}
                </span>
                <span className="text-sm leading-6 text-muted">{m.label}</span>
              </div>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
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

        {/* Takeaway */}
        <section className="flex flex-col gap-4">
          <SectionLabel>My takeaway</SectionLabel>
          <SectionTitle id="takeaway">Complex, agentic, and compliance-friendly by design</SectionTitle>
          <Body>
            This was the most complex design surface I’ve worked on — twelve personas, twenty-four
            surfaces, and a genuinely agentic system where an LLM can draft, modify, and explain
            work that a human then reviews and ships. The trick was to make that complexity
            invisible to any one role: the artifact carries the complexity, the UI carries only
            the lens.
          </Body>
          <Body>
            The other half of the work was making compliance a native property, not a bolt-on.
            GDPR, UAE PDPL, TDRA, DULE, consent — they’re part of the artifact from the moment
            it’s authored, not a checklist run at promotion. Once governance is upstream of every
            AI action, an agentic product stops feeling risky and starts feeling like the fastest
            way to ship the right thing.
          </Body>
        </section>

        <ProjectFooterNav currentId="daitics-cdp" />
      </div>
    </div>

    <Footer />
  </main>
)

export default CaseStudyDaiticsCdp
