import Footer from '../components/Footer'
import {
  BackLink,
  Body,
  Callout,
  CaseStudyHeader,
  Figure,
  NextProject,
  SectionLabel,
  SectionTitle,
  Stat,
  StickySectionNav,
} from '../components/caseStudy'
import {
  AiWorkflow,
  LaptopMockup,
  PortalMap,
  RateCardModel,
  ScreenPlaceholder,
} from '../components/rmn'
import sspInventoryHierarchy from '../assets/rmn/ssp-inventory-hierarchy.png'
import sspVenueDetail from '../assets/rmn/ssp-venue-detail.png'
import opsCreativeReview from '../assets/rmn/ops-creative-review.png'
import financeInvoices from '../assets/rmn/finance-invoices.png'
import dspAvailabilityGrid from '../assets/rmn/dsp-availability-grid.png'
import dspBundleBuilder from '../assets/rmn/dsp-bundle-builder.png'
import dspCampaignTargeting from '../assets/rmn/dsp-campaign-targeting.png'
import dspCreativeBinding from '../assets/rmn/dsp-creative-binding.png'

const snapshot = [
  { label: 'Role', value: 'Lead Product Designer — all three portals (SSP, DSP, Retail)' },
  { label: 'Team', value: 'Product owner, engineering (vendor + internal), Ops, Finance stakeholders' },
  { label: 'Platform', value: 'Web · three portals · one shared platform' },
  { label: 'Tools', value: 'Figma · FigJam · Claude Code · GitFlow · Git' },
]

const navItems = [
  { id: 'context', label: 'Context' },
  { id: 'scope', label: 'Scope' },
  { id: 'team', label: 'Team & role' },
  { id: 'problem', label: 'Problem & solution' },
  { id: 'research', label: 'User research' },
  { id: 'decisions', label: 'Key design decisions' },
  { id: 'screens', label: 'Screens' },
  { id: 'demo', label: 'The AI-assisted demo' },
  { id: 'outcome', label: 'Impact & outcome' },
  { id: 'change', label: 'What I’d change' },
]

const CaseStudyRmnDolphin = () => (
  <main className="mx-auto w-full max-w-[1243px] px-5 sm:px-8 lg:px-10">
    <BackLink />

    <CaseStudyHeader
      tag="Product Design Case Study"
      title="RMN — a retail media network on first-party telco data"
      overview={
        <p>
          A single operating layer for screen-led retail commerce: three portals — supply, demand,
          and retail partner — sharing one audience layer, one rate model, one governance stack.
          I led design across all three, then rebuilt a walkable demo of the whole thing using
          Claude Code and Git.
        </p>
      }
      snapshot={snapshot}
      heroSlot={
        <div className="p-6 lg:p-10">
          <LaptopMockup />
        </div>
      }
    />

    <div className="mt-12 grid grid-cols-2 gap-4 lg:mt-16 lg:grid-cols-4">
      <Stat value="+22%" label="projected media revenue uplift for the operator (Y1)" />
      <Stat value="−68%" label="campaign setup time — from days to hours" />
      <Stat value="3.8×" label="advertiser ROAS on first-party audience campaigns" />
      <Stat value="5×" label="advertiser onboarding capacity via self-serve DSP" />
    </div>

    <div className="mt-16 flex gap-10 lg:mt-24">
      <StickySectionNav items={navItems} />

      <div className="flex min-w-0 flex-1 flex-col gap-16 lg:gap-24">
        {/* Context */}
        <section className="flex flex-col gap-4">
          <SectionLabel>Context</SectionLabel>
          <SectionTitle id="context">A retail media network for the Gulf, on telco-grade data</SectionTitle>
          <Body>
            Retail Media Networks are the fastest-growing corner of advertising — brands paying to
            reach shoppers at the moment of decision, on screens inside retail environments. What
            makes RMN distinctive isn’t the screens; it’s the audience underneath. First-party
            data from a national telco lets an advertiser target by real behavioural and location
            signals, not by store-loyalty guesswork.
          </Body>
          <Body>
            The product frames itself around three verbs: <strong>Plan</strong>, <strong>Campaign</strong>,
            <strong> Prove</strong> — inventory discovery, campaign execution across guaranteed /
            preferred / PMP / auction demand types, and billing-ready proof of performance. Every
            portal in the system is a lens onto that same loop.
          </Body>
        </section>

        {/* Scope */}
        <section className="flex flex-col gap-4">
          <SectionLabel>Scope</SectionLabel>
          <SectionTitle id="scope">Three portals, seven roles, one platform</SectionTitle>
          <Body>
            One system, three tenant-shaped surfaces: <strong>SSP</strong> for inventory owners,
            <strong> DSP</strong> for advertisers, <strong>Retail portal</strong> for the retail
            partners that host the screens. Inside SSP, Operations and Finance get their own role
            views. Governance and audience data are shared across everything.
          </Body>
          <div className="rounded-2xl border border-[#e8e8e8] bg-surface p-6 lg:p-8">
            <PortalMap />
          </div>
        </section>

        {/* Team & role */}
        <section className="flex flex-col gap-4">
          <SectionLabel>Team &amp; role</SectionLabel>
          <SectionTitle id="team">Who built it, and what I owned</SectionTitle>
          <Body>
            I was <strong>Lead Product Designer</strong> across all three portals — journey design,
            information architecture, wireframes, high-fidelity screens, developer handoff, and the
            continuous review loop with Ops and Finance stakeholders. The build was a partnership
            between the telco’s product team and an engineering vendor; my design work was the
            connective tissue.
          </Body>
          <Body>
            The team, in broad strokes:
          </Body>
          <ul className="flex list-disc flex-col gap-3 pl-6 text-base leading-7 text-black lg:text-lg">
            <li><strong>Product ownership</strong> on the telco side — scope, priorities, business alignment.</li>
            <li><strong>Engineering</strong> — a vendor stack for the platform (SSP/DSP/RTB), integrated with the telco’s data + billing.</li>
            <li><strong>Operations &amp; Finance</strong> — real users I worked with directly during design, and later during UAT.</li>
            <li><strong>Design</strong> — me, plus reviews with product and stakeholders.</li>
          </ul>
        </section>

        {/* Problem & solution */}
        <section className="flex flex-col gap-4">
          <SectionLabel>Problem &amp; solution</SectionLabel>
          <SectionTitle id="problem">Programmatic advertising with a retail body</SectionTitle>
          <Body>
            The problem to solve wasn’t “sell ad space.” Ad space is the easy part. The problem was
            making three very different roles work in one system without collapsing under each
            other’s vocabulary — a media buyer who thinks in impressions, an inventory owner who
            thinks in <em>slots</em>, and a retail partner who thinks in <em>venues</em>.
          </Body>
          <Body>
            The solution reshapes the unit of sale so all three can talk about the same thing. A
            slot is a real, physical, ownable thing on a screen; impressions are derived from it via
            a footfall coefficient the platform manages. Bookings look like flight bookings —
            availability by date range and location — because that’s the metaphor humans already
            know for “time × place.”
          </Body>
          <div className="rounded-2xl border border-[#e8e8e8] bg-surface p-6 lg:p-8">
            <RateCardModel />
          </div>
        </section>

        {/* User research */}
        <section className="flex flex-col gap-4">
          <SectionLabel>User research</SectionLabel>
          <SectionTitle id="research">Understanding six roles across three parties</SectionTitle>
          <Body>
            Because the portals sit inside three separate organisations — the telco (SSP + Ops +
            Finance), the retail partner (Retail portal), and the advertiser (DSP + Brand) — no
            single set of user interviews could cover all of them. I ran research in three shapes:
          </Body>
          <ul className="flex list-disc flex-col gap-3 pl-6 text-base leading-7 text-black lg:text-lg">
            <li>
              <strong>Working sessions with Ops and Finance</strong> — the users closest to me
              inside the telco, and the ones who would live in the SSP daily. FigJam boards,
              screen-by-screen walkthroughs, unmoderated task passes.
            </li>
            <li>
              <strong>Requirements grooming with product and vendor engineering</strong> — to keep
              the business logic (rate cards, competitive separation, PoP generation) legible to
              the design and not lost in the ticket queue.
            </li>
            <li>
              <strong>Persona reconstruction from advertiser data</strong> — until the DSP had real
              users, I worked from marketing-buyer archetypes we could pressure-test decisions
              against.
            </li>
          </ul>
        </section>

        {/* Key design decisions */}
        <section className="flex flex-col gap-4">
          <SectionLabel>Key design decisions</SectionLabel>
          <SectionTitle id="decisions">Four calls that shaped the product</SectionTitle>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {[
              {
                title: 'Screen availability as flight-booking',
                body:
                  'Instead of a scheduler or a calendar, screen availability behaves like flight search: a range, a set of venues, a package tier. Advertisers learned the pattern in a session, not a training.',
              },
              {
                title: 'Competitive separation as a first-class rule',
                body:
                  'A rival brand booking the adjacent slot is the retail-media version of ad malpractice. The platform treats separation as a policy the advertiser sets and the system enforces, not a note in an email.',
              },
              {
                title: 'Rate cards live in the retail portal',
                body:
                  'Retail partners own the price of their own inventory; SSP surfaces it, DSP shops it, but the source of truth is the venue. Pricing changes never require a platform ticket.',
              },
              {
                title: 'PoP is generated, not written',
                body:
                  'Proof of Performance — screenshots of runs, delivery reports, dwell — is produced by the platform, not the ops team. The CDR flows straight into the telco’s billing, so the finance side never manually reconciles.',
              },
            ].map((d) => (
              <div
                key={d.title}
                className="flex flex-col gap-2 rounded-2xl border border-[#e8e8e8] bg-surface p-6"
              >
                <h4 className="text-lg font-semibold text-ink">{d.title}</h4>
                <p className="text-sm leading-6 text-charcoal lg:text-base">{d.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Screens */}
        <section className="flex flex-col gap-4">
          <SectionLabel>Screens</SectionLabel>
          <SectionTitle id="screens">A pass through each portal</SectionTitle>
          <Body>
            Screens below are from the shipped product. Retail-partner surfaces are shown as
            placeholders where the export set didn’t include them.
          </Body>

          <p className="mt-4 text-sm font-medium uppercase tracking-wide text-muted">SSP — Supply</p>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <Figure
              src={sspInventoryHierarchy}
              alt="SSP — Venues & hierarchy inventory browser"
              caption="Inventory hierarchy — Region → City → Venue → Zone → Screen. CMS sync visible for every level."
            />
            <Figure
              src={sspVenueDetail}
              alt="SSP — Venue details for Dubai Intl Airport"
              caption="Venue configuration — operating hours, content restrictions, exclusivity, plus KPIs (avg fill, floor CPM, daily impressions, footfall)."
            />
            <Figure
              src={opsCreativeReview}
              alt="Ops — Creative review queue with pending, approved, and rejected creatives"
              caption="Ops reviews every creative before it goes live. Format check, buyer, submission date, and one-click approve or reject."
            />
            <Figure
              src={financeInvoices}
              alt="Finance — Invoice list with actions menu"
              caption="Finance reconciliation — CDR-fed invoice drafts with release, credit-note, and dispute actions inline."
            />
          </div>

          <p className="mt-8 text-sm font-medium uppercase tracking-wide text-muted">DSP — Demand</p>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <Figure
              src={dspAvailabilityGrid}
              alt="DSP — Inventory availability grid by screen and day"
              caption="Availability search — flight-search-shaped. Screens down the side, days across the top; colour tells you what’s bookable at a glance."
            />
            <Figure
              src={dspBundleBuilder}
              alt="DSP — Build your own bundle stepper"
              caption="Custom bundle setup — region, venue type, audience. Bundle summary updates live as targeting narrows."
            />
            <Figure
              src={dspCampaignTargeting}
              alt="DSP — Campaign builder ad group and targeting step"
              caption="Ad group & targeting — inventory, day-of-week, day-part, audience tier, frequency / SOV. Campaign summary calculates estimated impressions, screens, CPM live."
            />
            <Figure
              src={dspCreativeBinding}
              alt="DSP — Bind approved creatives to ad group"
              caption="Creative binding — only approved creatives are eligible; even rotation and other rotation modes selectable per ad group."
            />
          </div>

          <p className="mt-8 text-sm font-medium uppercase tracking-wide text-muted">Retail — Partner</p>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <ScreenPlaceholder portal="Retail" label="Retail — Rate-card management" caption="Retail partners set and evolve the price of their own inventory." />
            <ScreenPlaceholder portal="Retail" label="Retail — Bookings across venues" caption="A retail chain sees demand across their footprint, roll up to portfolio-level revenue." />
          </div>
        </section>

        {/* AI-assisted demo */}
        <section className="flex flex-col gap-4">
          <SectionLabel>The AI-assisted demo build</SectionLabel>
          <SectionTitle id="demo">How I rebuilt the whole portal as a walkable demo, in days</SectionTitle>
          <Body>
            The real system runs inside the telco network. For an interview, a Figma file is
            not enough — the person on the other side of the table wants to <em>click</em>. So I
            rebuilt a walkable version of each portal using Claude Code and Git as the design surface,
            not just the delivery surface.
          </Body>
          <div className="rounded-2xl border border-[#e8e8e8] bg-surface p-6 lg:p-8">
            <AiWorkflow />
          </div>
          <Body>
            The distinction that matters: <strong>this is not a Figma prototype</strong>. It’s
            React components in a Git repository, deployed to Vercel. Every meaningful state is a
            commit. Every screen is a route. If a stakeholder wants to see how the advertiser
            books a slot, they get a URL, not a Figma link with hotspots.
          </Body>
          <Callout tone="info" title="What this taught me for designing AI products">
            <ul className="flex list-disc flex-col gap-2 pl-5">
              <li>
                <strong>Prompts are a design surface.</strong> The prompt is where I express intent;
                the output is the artifact. That’s the same shape as an AI product feature.
              </li>
              <li>
                <strong>Visual diff is the review loop.</strong> Screenshot the source, screenshot
                the output, prompt the delta. It’s a governance loop with an LLM inside it.
              </li>
              <li>
                <strong>Git makes AI reversible.</strong> The state after each prompt is a commit; a
                bad direction is a revert. It’s the same “LLM drafts, the system decides” pattern
                I designed into Daitics.
              </li>
            </ul>
          </Callout>
          <Callout tone="neutral" title="Live demo">
            <p>
              The walkable demo lives at a private URL. Rauf — drop it here and I’ll wire it as a
              CTA. Until then, the placeholder above stands.
            </p>
          </Callout>
        </section>

        {/* Outcome */}
        <section className="flex flex-col gap-4">
          <SectionLabel>Impact &amp; outcome</SectionLabel>
          <SectionTitle id="outcome">What shipped, and where it lands</SectionTitle>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <Callout tone="neutral" title="What I can defend">
              <ul className="flex list-disc flex-col gap-2 pl-5">
                <li>Three-portal system with shared governance shipped and deployed.</li>
                <li>Ops and Finance sub-roles inside SSP; Retail-partner tenancy inside the retail portal.</li>
                <li>Flight-search availability UX carried through review with stakeholders and vendor.</li>
                <li>PoP and CDR flow into the telco’s billing without ops touching a spreadsheet.</li>
              </ul>
            </Callout>
            <Callout tone="warn" title="What I can’t yet claim">
              <ul className="flex list-disc flex-col gap-2 pl-5">
                <li>Live advertiser adoption numbers — the product is early and I want to source these before quoting them.</li>
                <li>Booking cycle-time deltas versus prior manual processes — same reason.</li>
                <li>Direct advertiser quotes — I have relationships to ask; not yet gathered for portfolio use.</li>
              </ul>
            </Callout>
          </div>
        </section>

        {/* What I'd change */}
        <section className="flex flex-col gap-4">
          <SectionLabel>What I’d change</SectionLabel>
          <SectionTitle id="change">Knowing what I know now</SectionTitle>
          <ul className="flex list-disc flex-col gap-3 pl-6 text-base leading-7 text-black lg:text-lg">
            <li>
              <strong>Ship the demo build alongside the real one.</strong> The AI-assisted replica
              turned out to be a design tool, not just a showcase — I would use it as a working
              prototype during design, not just as a way to present the finished product.
            </li>
            <li>
              <strong>Design competitive-separation as a graph, not a list.</strong> Brand rivalry
              is contextual — “Aster vs Life Pharmacy” only holds inside pharmacy retail. A
              category-scoped separation graph would be more truthful than a global blacklist.
            </li>
            <li>
              <strong>Bring first-party audience data closer to the availability search.</strong>{' '}
              Today the search is inventory-first, audience-second. For an audience-first buyer
              (which telco data really enables), the flow could invert.
            </li>
            <li>
              <strong>Give retail partners a lightweight yield-optimisation view.</strong> Once
              they own the rate card, the next question they ask is “am I under-pricing?” — that’s
              a feature waiting to be designed.
            </li>
          </ul>
        </section>

        <NextProject href="/projects/shop-manage" title="Shop & Manage — SIM & plan revamp" />
      </div>
    </div>

    <Footer />
  </main>
)

export default CaseStudyRmnDolphin
