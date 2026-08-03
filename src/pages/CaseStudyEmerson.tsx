import { Link, useNavigate } from 'react-router-dom'
import { ArrowRight } from '../components/Icons'
import Footer from '../components/Footer'
import heroMockup from '../assets/emerson/hero-mockup.jpg'
import compareMatrix from '../assets/emerson/compare-matrix.jpg'
import compareDetail from '../assets/emerson/compare-detail.jpg'
import compareRestricted from '../assets/emerson/compare-restricted.jpg'
import saveAsVariant from '../assets/emerson/save-as-variant.jpg'
import variantCanvas from '../assets/emerson/variant-canvas.jpg'
import variantSelect from '../assets/emerson/variant-select.jpg'
import variantSteps from '../assets/emerson/variant-steps.jpg'
import recipeSearch from '../assets/emerson/recipe-search.jpg'
import qrmColor from '../assets/emerson/qrm-color.jpg'
import roadmap from '../assets/emerson/timeline.jpg'
import researchFlows from '../assets/emerson/research/flows.jpg'
import researchFlowsClone from '../assets/emerson/research/flows-clone.jpg'
import researchProcess from '../assets/emerson/research/process.jpg'
import researchVariantUpgrade from '../assets/emerson/research/variant-upgrade-design.jpg'
import researchConfig1 from '../assets/emerson/research/config-export-1.png'
import researchConfig2 from '../assets/emerson/research/config-export-2.png'

const researchSnaps = [
  { src: researchFlows, alt: 'User flow diagrams from discovery' },
  { src: researchProcess, alt: 'Process description and requirements spec' },
  { src: researchVariantUpgrade, alt: 'Variant upgrade design exploration' },
  { src: researchFlowsClone, alt: 'Clone-study flow mapping' },
  { src: researchConfig1, alt: 'Configuration export study' },
  { src: researchConfig2, alt: 'Configuration export study' },
]

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <p className="text-lg font-medium uppercase leading-7 text-muted underline">{children}</p>
)

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-2xl font-medium leading-tight text-ink lg:text-[28px]">{children}</h2>
)

const Body = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <p className={`text-base leading-7 text-black lg:text-lg ${className}`}>{children}</p>
)

const Figure = ({ src, alt, caption }: { src: string; alt: string; caption?: string }) => (
  <figure className="flex flex-col gap-3">
    <div className="overflow-hidden rounded-2xl border border-[#e8e8e8] bg-surface">
      <img src={src} alt={alt} className="w-full" loading="lazy" />
    </div>
    {caption && <figcaption className="text-sm leading-6 text-muted">{caption}</figcaption>}
  </figure>
)

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col gap-1 rounded-2xl bg-surface p-6">
    <span className="text-[36px] font-semibold leading-none text-ink lg:text-[44px]">{value}</span>
    <span className="text-sm leading-6 text-muted lg:text-base">{label}</span>
  </div>
)

const BackIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
    <path
      d="M12 22c-1.383 0-2.683-.263-3.9-.788a10.1 10.1 0 0 1-3.175-2.137c-.9-.9-1.612-1.958-2.137-3.175A9.74 9.74 0 0 1 2 12c0-1.383.263-2.683.788-3.9a10.1 10.1 0 0 1 2.137-3.175c.9-.9 1.958-1.612 3.175-2.137A9.74 9.74 0 0 1 12 2c1.383 0 2.683.263 3.9.788a10.1 10.1 0 0 1 3.175 2.137c.9.9 1.613 1.958 2.138 3.175A9.74 9.74 0 0 1 22 12a9.74 9.74 0 0 1-.787 3.9 10.1 10.1 0 0 1-2.138 3.175c-.9.9-1.958 1.613-3.175 2.138A9.74 9.74 0 0 1 12 22Zm0-2c2.233 0 4.125-.775 5.675-2.325C19.225 16.125 20 14.233 20 12c0-2.233-.775-4.125-2.325-5.675C16.125 4.775 14.233 4 12 4c-2.233 0-4.125.775-5.675 2.325C4.775 7.875 4 9.767 4 12c0 2.233.775 4.125 2.325 5.675C7.875 19.225 9.767 20 12 20Zm-.9-7h5.4a.968.968 0 0 0 .713-.287A.968.968 0 0 0 17.5 12a.968.968 0 0 0-.287-.713.968.968 0 0 0-.713-.287h-5.4l1.7-1.7a.948.948 0 0 0 .275-.7.948.948 0 0 0-.275-.7.948.948 0 0 0-.7-.275.948.948 0 0 0-.7.275l-3.4 3.4a.948.948 0 0 0-.275.7c0 .283.092.517.275.7l3.4 3.4c.183.183.417.275.7.275.283 0 .517-.092.7-.275a.948.948 0 0 0 .275-.7.948.948 0 0 0-.275-.7l-1.7-1.7Z"
      fill="currentColor"
    />
  </svg>
)

const snapshot: { label: string; value: string; href?: string }[] = [
  { label: 'Role', value: 'Product Designer (UX/UI) — owned all new features' },
  { label: 'Team', value: 'Product Owner, Product Managers, Engineering, Designer(s)' },
  { label: 'Timeline', value: '6 months' },
  { label: 'Platform', value: 'Web · enterprise desktop app' },
  { label: 'Tools', value: 'Figma · Azure DevOps · Kanban' },
  {
    label: 'Client',
    value: 'Emerson (via QBurst) — DeltaV™ MES',
    href: 'https://www.emerson.com/en/automation-systems/operations-business-management/deltav-mes',
  },
]

const CaseStudyEmerson = () => {
  const navigate = useNavigate()

  return (
    <main className="mx-auto w-full max-w-[1243px] px-5 sm:px-8 lg:px-10">
      {/* Back + title */}
      <button
        onClick={() => (window.history.length > 1 ? navigate(-1) : navigate('/'))}
        className="mt-10 flex items-center gap-2 text-muted transition-colors hover:text-ink lg:mt-16"
      >
        <BackIcon />
        <span className="text-base">Back</span>
      </button>

      <p className="mt-6 text-xl text-[#019fb9] lg:mt-7 lg:text-2xl">UX / UI Case Study</p>
      <h1 className="mt-2 max-w-[960px] text-[32px] font-medium leading-tight text-ink lg:text-[48px]">
        Emerson DeltaV™ PSM — making recipe variants manageable at scale
      </h1>

      {/* Hero visual */}
      <div className="mt-10 overflow-hidden rounded-3xl border border-[#e8e8e8] bg-surface lg:mt-12">
        <img
          src={heroMockup}
          alt="DeltaV PSM variant comparison running on a workstation in a pharmaceutical lab"
          className="w-full"
        />
      </div>

      {/* Proof / Overview zone */}
      <div className="mt-12 flex flex-col gap-10 lg:flex-row lg:justify-between">
        <div className="flex max-w-[640px] flex-col gap-2">
          <SectionLabel>Overview</SectionLabel>
          <p className="text-xl leading-8 text-[#019fb9] lg:text-[28px] lg:leading-10">
            A recipe-management tool for regulated pharma manufacturing, where I redesigned how
            engineers/scientists create, compare, and control hundreds of site-specific recipe
            variants — turning an untraceable sprawl into a single, confident workspace.
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-5 lg:w-[360px]">
          {snapshot.map((item) => (
            <div key={item.label} className="flex flex-col gap-1 border-b border-[#ededed] pb-4 last:border-0">
              <span className="text-sm uppercase tracking-wide text-muted">{item.label}</span>
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-base text-ink underline decoration-[#019fb9]/40 underline-offset-2 transition-colors hover:text-[#019fb9] hover:decoration-[#019fb9] lg:text-lg"
                >
                  {item.value}
                </a>
              ) : (
                <span className="text-base text-ink lg:text-lg">{item.value}</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Stat tiles */}
      <div className="mt-12 grid grid-cols-2 gap-4 lg:mt-16 lg:grid-cols-4">
        <Stat value="30+" label="site variants per recipe step, now comparable at a glance" />
        <Stat value="~40%" label="faster variant reviews vs. manual cross-checking" />
        <Stat value="1,700" label="story-point MVP delivered in the PKM v11 release" />
        <Stat value="2" label="global pharma partners in discovery (Pfizer, Roche)" />
      </div>

      {/* Challenge + Outcome (proof) */}
      <div className="mt-16 grid grid-cols-1 gap-6 lg:mt-24 lg:grid-cols-2">
        <div className="flex flex-col gap-3">
          <SectionLabel>The Challenge</SectionLabel>
          <Body>
            In regulated manufacturing, one master recipe spawns dozens of site-specific variants — and
            engineers had no reliable way to see how those variants differed, which had drifted out of
            sync with the parent, or who was editing them. In a compliance-driven environment, that
            ambiguity is a quality and audit risk.
          </Body>
        </div>
        <div className="flex flex-col gap-3">
          <SectionLabel>The Outcome</SectionLabel>
          <Body>
            A side-by-side comparison workspace that puts version, sync status, and access control
            inline for every variant — so an engineer can scan 32 variants against the parent recipe in
            one view. It anchored the PKM v11 MVP and replaced slow, error-prone manual cross-checking.
          </Body>
        </div>
      </div>

      {/* Context */}
      <div className="mt-16 flex flex-col gap-4 lg:mt-24">
        <SectionTitle>Context &amp; business challenge</SectionTitle>
        <Body>
          DeltaV™ MES is Emerson's platform for running batch manufacturing in regulated industries —
          pharma, biotech, and chemicals. The people using it are <strong>scientists and process
          engineers</strong>: the users who author, validate, and run the recipes behind real drug
          products. It digitizes recipes and batch records so plants can eliminate paper, cut errors,
          and release product faster while staying audit-ready.
        </Body>
        <Body>
          The business value sits underneath all of this. In life sciences, getting a process from R&amp;D
          to commercial manufacturing across multiple sites has traditionally taken <strong>years</strong> —
          slowed by paper-based process knowledge, manual re-entry, and human error at every hand-off.
          By making that knowledge structured, accurate, and reusable, the platform compresses that
          journey from <strong>years to months</strong>, mitigates the recipe errors that trigger costly
          batch failures and compliance findings, and protects the accuracy that a zero-error domain
          demands. Every design decision here is ultimately in service of that: <strong>accuracy, error
          mitigation, and speed to production.</strong>
        </Body>
        <Body>
          Within the platform, PSM / PKM (Process Knowledge Management) handles recipes. A master recipe
          rarely runs unchanged: every site adapts it to its own equipment, materials, and constraints,
          producing many site-recipe variants. Over time, a single recipe step could accumulate 30 or
          more variants — each with its own version history, and no dependable way to tell them apart.
        </Body>
        <Body>
          The core problem wasn't a missing feature — it was <strong>missing trust</strong>. Scientists
          and engineers couldn't see how two variants differed, whether a variant was in sync with its
          parent, who had it checked out, or who was allowed to touch it. Every uncertainty was a
          compliance liability.
        </Body>
      </div>

      {/* My Role */}
      <div className="mt-16 flex flex-col gap-4 lg:mt-24">
        <SectionTitle>My role &amp; contribution</SectionTitle>
        <Body>
          I owned the end-to-end UX/UI for all of the release's new features — problem framing,
          information architecture, wireframes, high-fidelity design, and developer handoff. I worked in
          a cross-functional squad with a product owner, product managers, designers, and engineers,
          planning scope directly with stakeholders and running the design in a kanban workflow.
        </Body>
        <Body>
          The <strong>Variants</strong> experience shown here was the most complex and most iterated
          piece of the release — refined over many rounds of critique, stakeholder review, and
          developer feasibility checks before it settled into the workspace below.
        </Body>
      </div>

      {/* Research */}
      <div className="mt-16 flex flex-col gap-4 lg:mt-24">
        <SectionTitle>Research &amp; discovery</SectionTitle>
        <Body>
          Discovery ran on three tracks in parallel — because in a domain this specialised, no single
          source tells the whole story:
        </Body>
        <ul className="flex list-disc flex-col gap-3 pl-6 text-base leading-7 text-black lg:text-lg">
          <li>
            <strong>Stakeholder &amp; customer sessions</strong> — interviews and working discussions with
            the product owner and end-customer teams at global pharma partners (Pfizer, Roche) to
            understand how recipes actually evolve across sites.
          </li>
          <li>
            <strong>Product audit</strong> — a walkthrough of the existing DeltaV recipe tooling (clone,
            rearrange, annotate, export) to map exactly where variant management broke down.
          </li>
          <li>
            <strong>Requirements synthesis</strong> — translating dense PRDs and release planning into a
            prioritised problem list, then pressure-testing it against real engineer workflows.
          </li>
        </ul>
        <div className="mt-2 flex flex-col gap-3">
          <p className="text-sm leading-6 text-muted">
            A glimpse of the discovery artifacts — flows, process specs, and configuration studies that
            fed the design.
          </p>
          <div className="grid grid-cols-2 gap-3">
            {researchSnaps.map((snap, i) => (
              <div key={i} className="overflow-hidden rounded-xl border border-[#e8e8e8] bg-surface">
                <img src={snap.src} alt={snap.alt} loading="lazy" className="h-40 w-full object-cover object-top lg:h-48" />
              </div>
            ))}
          </div>
        </div>
        <Figure
          src={roadmap}
          alt="PKM v11 and QRM release plan roadmap"
          caption="Release planning across the PKM, QRM, and OCTT tracks — Variants (Recipe Variations) was the flagship MVP."
        />
      </div>

      {/* Variants deep dive */}
      <div className="mt-16 flex flex-col gap-4 lg:mt-24">
        <SectionLabel>The flagship — deep dive</SectionLabel>
        <SectionTitle>Designing the Variants experience</SectionTitle>
        <Body>
          The Variants work broke into a handful of connected flows. I framed each as a problem to
          solve, not a screen to draw — and let the compliance stakes drive every decision.
        </Body>
      </div>

      {/* 1. Create */}
      <div className="mt-12 flex flex-col gap-4 lg:mt-16">
        <SectionTitle>1 · Branching a variant, deliberately</SectionTitle>
        <Body>
          From the recipe editor, a scientist or engineer branches a site-specific variant without
          disturbing the master. I placed the action inside the “My Workplace” save menu — beside “Save”
          and “Save as New Shared Recipe” — so branching is a conscious, discoverable choice rather than
          an accidental overwrite of shared work.
        </Body>
        <Figure src={saveAsVariant} alt="Save as New Site Recipe Variant menu" caption="Branching lives in the save menu — deliberate, never accidental." />
      </div>

      {/* 2. Canvas */}
      <div className="mt-16 flex flex-col gap-4 lg:mt-20">
        <SectionTitle>2 · The same mental model as the master</SectionTitle>
        <Body>
          A variant opens in the same step-based canvas as the master recipe, with its full attribute
          tree — equipment classes, equipment, materials, parameters, samplings. Reusing the master's
          structure meant users never had to learn a second mental model to edit a variant.
        </Body>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Figure src={variantCanvas} alt="Variant recipe canvas with step tree" />
          <Figure src={recipeSearch} alt="Searching and filtering recipe variants" />
        </div>
      </div>

      {/* 3. Compare — the core */}
      <div className="mt-16 flex flex-col gap-4 lg:mt-20">
        <SectionTitle>3 · Comparing variants — the core of the solution</SectionTitle>
        <Body>
          This is the heart of the redesign: a side-by-side matrix with the attribute tree down the
          left and variants across as columns, so differences read spatially. The hard part wasn't the
          layout — it was surfacing <em>state</em> without overwhelming the screen.
        </Body>
        <p className="text-sm font-medium uppercase tracking-wide text-muted">Key decisions</p>
        <ul className="flex list-disc flex-col gap-3 pl-5 text-base leading-7 text-black lg:text-lg">
          <li>
            <strong>Scale without truncating:</strong> 30+ variants can't fit on screen, so the matrix
            paginates (“Showing 1 to 6 of 32”) against a persistent attribute tree, instead of cramming
            or hiding data.
          </li>
          <li>
            <strong>Version made visible:</strong> every column carries three inline badges — variant,
            parent site recipe, and step version — so drift is obvious at a glance.
          </li>
          <li>
            <strong>Focus on what's broken:</strong> an “Out of Sync” indicator plus a “Show Out of
            Sync” filter lets them jump straight to variants that need attention.
          </li>
          <li>
            <strong>Safe concurrent editing:</strong> each variant shows its live check-in / check-out
            state, so two engineers never silently overwrite each other.
          </li>
        </ul>
        <Figure src={compareMatrix} alt="Compare Variants matrix — full view" caption="The comparison matrix: attribute tree down the left, variants across as columns." />
        <Figure src={compareDetail} alt="Variant comparison matrix with version badges and sync status" caption="Version, sync, and edit state live inside each column — traceability is the whole point." />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Figure src={variantSelect} alt="Selecting variants to compare" caption="Choosing which variants enter the comparison." />
          <Figure src={compareRestricted} alt="Restricted variant comparison with request-for-access" caption="Restricted variants gate editing behind a “Request for Access” path." />
        </div>
      </div>

      {/* 4. Steps */}
      <div className="mt-16 flex flex-col gap-4 lg:mt-20">
        <SectionTitle>4 · Tailoring a variant, step by step</SectionTitle>
        <Body>
          Engineers can enable or disable individual steps within a variant — tailoring the flow to a
          site without cloning an entirely new recipe, and keeping the variant tied to its parent for
          future updates.
        </Body>
        <Figure src={variantSteps} alt="Enabling and disabling steps within a variant" />
      </div>

      {/* 5. Upgrade / iteration */}
      <div className="mt-16 flex flex-col gap-4 lg:mt-20">
        <SectionTitle>5 · Variant upgrade — earned through iteration</SectionTitle>
        <Body>
          Pulling parent-recipe updates into an existing variant was the thorniest flow — how do you
          apply changes to a recipe someone has already customised, without silently breaking their
          work? It only settled after many iterations in the kanban workflow, cycling designs through
          stakeholder review and developer feasibility until the merge behaviour felt safe and
          predictable.
        </Body>
      </div>

      {/* Supporting breadth */}
      <div className="mt-16 flex flex-col gap-4 lg:mt-24">
        <SectionLabel>Beyond variants</SectionLabel>
        <SectionTitle>The rest of the release</SectionTitle>
        <Body>
          Variants was the flagship, but the release was broad. I also owned the UX/UI for color-coding
          of QRM study values, cloning studies (C&amp;E and FMEA), rearranging
          rows, clickable hyperlinks in annotation, comments on FMEA / FRT / PS, and export &amp; import
          of studies — all built on the shared DeltaV design system for a consistent experience.
        </Body>
        <Figure src={qrmColor} alt="Color-coding of QRM study values" caption="Color-coding QRM study values — one of several supporting features across the release." />
      </div>

      {/* Impact */}
      <div className="mt-16 flex flex-col gap-6 lg:mt-24">
        <SectionTitle>Impact &amp; results</SectionTitle>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <Stat value="~40%" label="less time spent comparing and reviewing variants" />
          <Stat value="Shipped" label="as the flagship MVP of the PKM v11 release" />
          <Stat value="Fewer" label="out-of-sync recipe errors reaching production review" />
        </div>
        <ul className="flex list-disc flex-col gap-3 pl-6 text-base leading-7 text-black lg:text-lg">
          <li>
            Replaced manual, side-by-side cross-checking of variants with a single comparison view —
            scientists and engineers reported reviews that used to take a working session now took
            minutes.
          </li>
          <li>
            Inline version and sync status cut the ambiguity that led to out-of-sync edits, reducing a
            recurring class of recipe error before it reached production review.
          </li>
          <li>
            Validated with global pharma partners and shipped into the DeltaV release — the pattern
            became the reference for how variant-heavy recipes are managed across sites.
          </li>
        </ul>
      </div>

      {/* Reflection */}
      <div className="mt-12 flex flex-col gap-4 lg:mt-16">
        <SectionTitle>My takeaway</SectionTitle>
        <div className="flex flex-col gap-4 text-lg italic leading-7 text-black lg:text-xl">
          <p>
            Designing for life sciences reframed what “good UX” means to me. This is a domain with
            <strong> zero tolerance for error</strong> — a wrong recipe value or an out-of-sync variant
            isn't a bug ticket, it can mean a failed batch, a compliance finding, or a delayed therapy
            reaching patients. That raises the stakes on every decision: clarity, accuracy, and
            traceability aren't nice-to-haves, they're the product.
          </p>
          <p>
            The biggest lesson: in critical, accuracy-driven tools, making <strong>state visible</strong>
            is the design. Scientists and engineers didn't need more capability — they needed to trust
            what they were looking at. Showing version, sync, and access status inline did more for their
            confidence, and for the integrity of the process, than any new feature could. Working under
            those constraints made me a more rigorous designer — one who treats “obvious” and
            “unambiguous” as hard requirements, not aspirations.
          </p>
        </div>
      </div>

      {/* Prev / next navigation */}
      <div className="mt-16 flex items-center justify-between lg:mt-24">
        <Link
          to="/projects/hubbit"
          className="group/btn flex items-center gap-1 rounded-full border border-[#019fb9] bg-white py-2 pl-3 pr-4 transition-shadow duration-300 hover:shadow-md"
        >
          <ArrowRight className="h-6 w-6 rotate-180 text-ink transition-transform duration-300 group-hover/btn:-translate-x-1" />
          <span className="text-base text-ink">Previous Project</span>
        </Link>
        <Link
          to="/projects/lashic"
          className="group/btn flex items-center gap-1 rounded-full border border-[#019fb9] bg-white py-2 pl-4 pr-3 transition-shadow duration-300 hover:shadow-md"
        >
          <span className="text-base text-ink">Next Project</span>
          <ArrowRight className="h-6 w-6 text-ink transition-transform duration-300 group-hover/btn:translate-x-1" />
        </Link>
      </div>

      <Footer />
    </main>
  )
}

export default CaseStudyEmerson
