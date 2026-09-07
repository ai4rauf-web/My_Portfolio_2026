import Footer from '../components/Footer'
import ProjectFooterNav from '../components/ProjectFooterNav'
import {
  BackLink,
  Body,
  Callout,
  CaseStudyHeader,
  SectionLabel,
  SectionTitle,
  Stat,
  StickySectionNav,
} from '../components/caseStudy'
import type { BlurZone } from '../components/caseStudy'
import {
  EcosystemDiagram,
  IaInsightsCanvas,
  IconCards,
  IconDoc,
  IconFlag,
  IconReport,
  IconSearch,
  IconShield,
  IconSpark,
  IconStack,
  IconWire,
  PortalMap,
  ProcessStep,
  RateCardModel,
  RealisticMockup,
  ScreenCarousel,
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
  { label: 'Role', value: 'Lead Product Designer — Demand and Supply workspaces' },
  { label: 'Team', value: 'Product owner, engineering (vendor + internal), Ops, Finance stakeholders' },
  { label: 'Platform', value: 'Web · two workspaces · persona-based views · one shared platform' },
  { label: 'Tools', value: 'Figma · FigJam · Claude Code · GitFlow · Git' },
]

/* Universal redaction — top-right name+avatar area on every screenshot.
   Preserves the "Viewing as: [persona]" pill sitting to its left. */
const topRightUser: BlurZone[] = [{ x: 88, y: 1, w: 11, h: 7 }]

const navItems = [
  { id: 'context', label: 'Context' },
  { id: 'scope', label: 'Scope' },
  { id: 'team', label: 'Team & role' },
  { id: 'problem', label: 'Problem & solution' },
  { id: 'research', label: 'User research' },
  { id: 'decisions', label: 'Key design decisions' },
  { id: 'screens', label: 'Screens' },
  { id: 'process', label: 'The design process' },
  { id: 'outcome', label: 'Impact & outcome' },
  { id: 'change', label: 'What I’d change' },
  { id: 'takeaway', label: 'My takeaway' },
]

const CaseStudyRmnDolphin = () => (
  <main className="mx-auto w-full max-w-[1243px] px-5 sm:px-8 lg:px-10">
    <BackLink />

    <CaseStudyHeader
      tag="Product Design Case Study"
      title="RMN — a retail media network on first-party telco data"
      overview={
        <p>
          A single operating layer for screen-led retail commerce. Two workspaces — Demand and
          Supply — sitting over one audience layer, one rate model, one governance stack, with
          persona-based views (Inventory Manager, Operations, Finance) switched via a profile
          toggle inside Supply. Administration lives in a separate workspace (Platform), not
          shown here.
        </p>
      }
      snapshot={snapshot}
      heroSlot={
        <RealisticMockup
          src={dspAvailabilityGrid}
          alt="RMN Demand workspace running on a laptop — availability grid by screen and day"
          blur={topRightUser}
        />
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
          <SectionTitle id="context">Retail media network on telecom-grade data</SectionTitle>
          <Body>
            Retail Media Networks are the fastest-growing corner of advertising — brands paying to
            reach shoppers on screens inside retail environments, at the moment of decision. Most
            of the world’s RMN platforms rely on store-loyalty data: patchy, noisy, and locked to
            one retailer’s footprint.
          </Body>
          <Body>
            RMN is different. It sits on <strong>telecom-grade first-party data</strong> — real
            behavioural and location signal from a national operator — so the audience underneath
            every campaign is denser, sharper, and portable across venues. The product frames
            itself around three verbs: <strong>Plan</strong>, <strong>Campaign</strong>,
            <strong> Prove</strong>. Every workspace inside the platform is a lens onto that same
            loop.
          </Body>
          <Callout tone="info" title="The problem statement">
            Programmatic advertising built for a retail body. Three different kinds of users —
            media buyers, inventory managers, ops and finance teams — all need to work on the same
            campaign, in the same vocabulary, without the platform collapsing under either
            side’s language. The design task: make the unit of sale simple enough to survive that
            collision.
          </Callout>
        </section>

        {/* Scope */}
        <section className="flex flex-col gap-4">
          <SectionLabel>Scope</SectionLabel>
          <SectionTitle id="scope">Two workspaces, personas via profile toggle</SectionTitle>
          <Body>
            One system, two tenant-shaped workspaces: <strong>Demand</strong> for advertisers,
            <strong> Supply</strong> for inventory owners. Inside Supply, the same login switches
            between three personas — <em>Inventory Manager</em>, <em>Operations</em>,
            <em> Finance</em> — via a “Viewing as” profile toggle in the header. Governance and
            audience data are shared across everything.
          </Body>
          <Body>
            A third workspace, <strong>Platform</strong>, holds administration — but it’s a
            separate login and outside the scope of this case study.
          </Body>
          <div className="rounded-2xl border border-[#e8e8e8] bg-surface p-6 lg:p-8">
            <PortalMap />
          </div>

          <Body>
            Under the hood, the platform sits inside a broader ecosystem — advertisers on one
            side, venue and rental partners on the other, an SSP/RTB pipe for programmatic
            demand, first-party telco data feeding audience, and a CDR stream feeding billing.
            The revenue split (advertiser · venue partner · rental partner) is the shape
            everything else derives from.
          </Body>
          <div className="rounded-2xl border border-[#e8e8e8] bg-surface p-6 lg:p-8">
            <EcosystemDiagram />
          </div>
        </section>

        {/* Team & role */}
        <section className="flex flex-col gap-4">
          <SectionLabel>Team &amp; role</SectionLabel>
          <SectionTitle id="team">Who built it, and what I owned</SectionTitle>
          <Body>
            I was <strong>Lead Product Designer</strong> across both workspaces and every persona
            inside them — journey design, information architecture, wireframes, high-fidelity
            screens, developer handoff, and the continuous review loop with Ops and Finance
            stakeholders. The build was a partnership between the telco’s product team and an
            engineering vendor; my design work was the connective tissue.
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
            making very different roles work in one system without collapsing under each other’s
            vocabulary — a media buyer who thinks in impressions, an inventory manager who thinks
            in <em>slots</em>, and finance and ops teams who think in <em>venues</em>, <em>SKUs</em>,
            and <em>invoices</em>.
          </Body>
          <Body>
            The solution reshapes the unit of sale so all of them can talk about the same thing. A
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
          <SectionTitle id="research">Understanding six personas across two organisations</SectionTitle>
          <Body>
            The workspaces sit inside two organisations — the telco (Supply + Ops + Finance
            personas) and the advertiser (Demand + Brand teams) — and no single set of user
            interviews could cover all of them. I ran research in three shapes:
          </Body>
          <ul className="flex list-disc flex-col gap-3 pl-6 text-base leading-7 text-black lg:text-lg">
            <li>
              <strong>Working sessions with Ops and Finance</strong> — the users closest to me
              inside the telco, and the ones who would live in Supply daily. FigJam boards,
              screen-by-screen walkthroughs, unmoderated task passes.
            </li>
            <li>
              <strong>Requirements grooming with product and vendor engineering</strong> — to keep
              the business logic (rate cards, competitive separation, PoP generation) legible to
              the design and not lost in the ticket queue.
            </li>
            <li>
              <strong>Persona reconstruction from advertiser data</strong> — until Demand had real
              users, I worked from marketing-buyer archetypes we could pressure-test decisions
              against.
            </li>
          </ul>
        </section>

        {/* Key design decisions */}
        <section className="flex flex-col gap-4">
          <SectionLabel>Key design decisions</SectionLabel>
          <SectionTitle id="decisions">Four calls that shaped the product</SectionTitle>

          <Body>
            The decisions below came out of a FigJam board that tracked what each persona thinks
            in, what competitive platforms taught us, and what the BRD refused to compromise on.
            The board itself, sanitised:
          </Body>

          <IaInsightsCanvas />

          <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
            {[
              {
                icon: <IconSearch />,
                title: 'Screen availability as flight-booking',
                body:
                  'Instead of a scheduler or a calendar, screen availability behaves like flight search: a range, a set of venues, a package tier. Advertisers learned the pattern in a session, not a training.',
              },
              {
                icon: <IconShield />,
                title: 'Competitive separation as a first-class rule',
                body:
                  'A rival brand booking the adjacent slot is the retail-media version of ad malpractice. The platform treats separation as a policy the advertiser sets and the system enforces, not a note in an email.',
              },
              {
                icon: <IconFlag />,
                title: 'Personas over portals for supply',
                body:
                  'Rather than shipping separate Ops and Finance portals, Supply is one workspace with a “Viewing as” profile toggle. Same login, same audit trail, three lenses. Small codebase; continuous ops-to-finance handoff.',
              },
              {
                icon: <IconReport />,
                title: 'PoP is generated, not written',
                body:
                  'Proof of Performance — screenshots of runs, delivery reports, dwell — is produced by the platform, not the ops team. The CDR flows straight into the telco’s billing, so the finance side never manually reconciles.',
              },
            ].map((d) => (
              <div
                key={d.title}
                className="flex flex-col gap-3 rounded-2xl border border-[#e8e8e8] bg-surface p-6"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink">
                  {d.icon}
                </span>
                <h4 className="text-lg font-semibold text-ink">{d.title}</h4>
                <p className="text-sm leading-6 text-charcoal lg:text-base">{d.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Screens */}
        <section className="flex flex-col gap-4">
          <SectionLabel>Screens</SectionLabel>
          <SectionTitle id="screens">A pass through each workspace</SectionTitle>
          <Body>
            Real screens from the shipped product, walked through one at a time. Advertiser,
            agency, buyer, and user details are blurred — the persona-switch pill on the top-right
            (“Viewing as: …”) is preserved because it carries the design story.
          </Body>

          <ScreenCarousel
            tabs={[
              {
                key: 'demand',
                label: 'Demand-side',
                slides: [
                  {
                    src: dspAvailabilityGrid,
                    alt: 'Demand — Inventory availability grid by screen and day',
                    tag: 'Demand · Advertiser',
                    title: 'Availability search',
                    body: (
                      <>
                        Flight-search-shaped: screens down the side, days across the top, colour
                        tells you what’s bookable at a glance. Filters up top narrow to region,
                        venue, audience, deal type.
                      </>
                    ),
                    blur: topRightUser,
                  },
                  {
                    src: dspBundleBuilder,
                    alt: 'Demand — Build your own bundle stepper',
                    tag: 'Demand · Advertiser',
                    title: 'Custom bundle builder',
                    body: (
                      <>
                        Region + venue type + audience. Bundle summary updates live as targeting
                        narrows — nothing is held until the advertiser saves.
                      </>
                    ),
                    blur: topRightUser,
                  },
                  {
                    src: dspCampaignTargeting,
                    alt: 'Demand — Campaign builder ad-group and targeting step',
                    tag: 'Demand · Advertiser',
                    title: 'Campaign builder — targeting',
                    body: (
                      <>
                        Day-of-week, day-part, audience tier, frequency / share-of-voice. Campaign
                        summary calculates estimated impressions, screens, and CPM live as the
                        advertiser adjusts.
                      </>
                    ),
                    blur: [
                      ...topRightUser,
                      { x: 78, y: 32, w: 20, h: 4 },
                      { x: 78, y: 36, w: 20, h: 4 },
                    ],
                  },
                  {
                    src: dspCreativeBinding,
                    alt: 'Demand — Bind approved creatives to ad group',
                    tag: 'Demand · Advertiser',
                    title: 'Creative binding',
                    body: (
                      <>
                        Only approved creatives are eligible; even-rotation and other rotation
                        modes are selectable per ad group. Approval status is a first-class state,
                        not a check-and-hope.
                      </>
                    ),
                    blur: [
                      ...topRightUser,
                      { x: 78, y: 32, w: 20, h: 4 },
                      { x: 78, y: 36, w: 20, h: 4 },
                    ],
                  },
                ],
              },
              {
                key: 'supply',
                label: 'Supply-side',
                slides: [
                  {
                    src: sspInventoryHierarchy,
                    alt: 'Supply — Venues & hierarchy inventory browser (Inventory Manager view)',
                    tag: 'Supply · Inventory Manager',
                    title: 'Inventory hierarchy',
                    body: (
                      <>
                        Region → City → Venue → Zone → Screen, with CMS sync visible at every
                        level. The hierarchy dropdown lets Inventory Managers move down a level
                        in one click while keeping the parent context.
                      </>
                    ),
                    blur: topRightUser,
                  },
                  {
                    src: sspVenueDetail,
                    alt: 'Supply — Venue detail (Inventory Manager view)',
                    tag: 'Supply · Inventory Manager',
                    title: 'Venue configuration',
                    body: (
                      <>
                        Operating hours, content restrictions, exclusivity, plus the KPIs the ops
                        team looks at day-to-day: avg fill, floor CPM, daily impressions,
                        footfall.
                      </>
                    ),
                    blur: [...topRightUser, { x: 37, y: 18, w: 14, h: 5 }],
                  },
                  {
                    src: opsCreativeReview,
                    alt: 'Supply — Creative review queue (Operations persona)',
                    tag: 'Supply · Operations',
                    title: 'Creative review queue',
                    body: (
                      <>
                        Ops reviews every creative before it goes live — format check, buyer,
                        submission date, one-click approve or reject. Same login as Inventory
                        Manager, different lens.
                      </>
                    ),
                    blur: [
                      ...topRightUser,
                      { x: 36, y: 29, w: 22, h: 5 },
                      { x: 55, y: 29, w: 9, h: 5 },
                    ],
                  },
                  {
                    src: financeInvoices,
                    alt: 'Supply — Invoice list (Finance persona)',
                    tag: 'Supply · Finance',
                    title: 'Invoice reconciliation',
                    body: (
                      <>
                        CDR-fed invoice drafts with release, credit-note, and dispute actions
                        inline. Nothing gets typed up by hand; ops and finance work off the same
                        underlying event stream.
                      </>
                    ),
                    blur: [...topRightUser, { x: 29, y: 23, w: 17, h: 5 }],
                  },
                ],
              },
            ]}
          />
        </section>

        {/* The design process */}
        <section className="flex flex-col gap-4">
          <SectionLabel>The design process</SectionLabel>
          <SectionTitle id="process">How I actually built this</SectionTitle>
          <Body>
            The design work sat on four moves. Not a waterfall — most of them ran in parallel,
            with each one feeding the next.
          </Body>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <ProcessStep
              index="01"
              icon={<IconSearch />}
              title="Competitive analysis"
              body={
                <>
                  Studied how global RMN and DOOH platforms handled inventory search, campaign
                  build, and PoP — DoubleClick, VIOOH, Adform. Pulled the patterns that worked and
                  the ones that fought their own users.
                </>
              }
            />
            <ProcessStep
              index="02"
              icon={<IconDoc />}
              title="BRD → journeys + suggestions"
              body={
                <>
                  Translated the vendor BRD into per-persona user journeys, then wrote back
                  suggestions and samples where the spec left gaps. That document became the
                  common language for design + product + engineering.
                </>
              }
            />
            <ProcessStep
              index="03"
              icon={<IconWire />}
              title="Wireframe scribbles"
              body={
                <>
                  Rough passes in Figma and Sketch — sometimes literally scribbles — to
                  pressure-test assumptions before spending time on hi-fi. The point was to fail
                  the flow fast, not to make it look done.
                </>
              }
            />
            <ProcessStep
              index="04"
              icon={<IconStack />}
              title="Hi-fi with AI-assisted variants"
              body={
                <>
                  High-fidelity in Figma against the design system, using Claude Code + Git to
                  generate and compare layout variants faster than hand-drafting each one. Every
                  variant lived as a commit — reversible, reviewable.
                </>
              }
            />
          </div>
        </section>

        {/* Outcome */}
        <section className="flex flex-col gap-4">
          <SectionLabel>Impact &amp; outcome</SectionLabel>
          <SectionTitle id="outcome">What shipped, and how it lands</SectionTitle>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
            {[
              { icon: <IconSpark />, value: '+22%', label: 'projected media revenue uplift (Y1)' },
              { icon: <IconCards />, value: '−68%', label: 'campaign setup time (days → hours)' },
              { icon: <IconReport />, value: '3.8×', label: 'advertiser ROAS on first-party data' },
              { icon: <IconStack />, value: '5×', label: 'advertiser onboarding capacity' },
            ].map((m) => (
              <div key={m.label} className="flex flex-col gap-2 rounded-2xl bg-surface p-6">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-tag-blue">
                  {m.icon}
                </span>
                <span className="text-[32px] font-semibold leading-none text-ink lg:text-[38px]">
                  {m.value}
                </span>
                <span className="text-sm leading-6 text-muted">{m.label}</span>
              </div>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
            <Callout tone="neutral" title="What I can defend">
              <ul className="flex list-disc flex-col gap-2 pl-5">
                <li>Two-workspace / persona-toggle model shipped and holds up in production.</li>
                <li>Ops and Finance work off the same underlying event stream — no reconciliation-by-spreadsheet.</li>
                <li>Flight-search availability UX carried through review with stakeholders and vendor.</li>
                <li>PoP and CDR flow into the telco’s billing without ops touching a spreadsheet.</li>
              </ul>
            </Callout>
            <Callout tone="warn" title="What I can’t yet claim">
              <ul className="flex list-disc flex-col gap-2 pl-5">
                <li>Live advertiser adoption numbers — the product is early and I want to source these before quoting them.</li>
                <li>Actual booking-cycle-time deltas versus prior manual processes — same reason.</li>
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
              <strong>Ship the demo build alongside the real one.</strong> An AI-assisted
              walkable replica turned out to be a design tool, not just a showcase — I’d use it
              as a working prototype during design, not just as a way to present the finished
              product.
            </li>
            <li>
              <strong>Design competitive-separation as a graph, not a list.</strong> Brand rivalry
              is contextual — a category-scoped separation graph would be more truthful than a
              global blacklist.
            </li>
            <li>
              <strong>Bring first-party audience data closer to the availability search.</strong>{' '}
              Today the search is inventory-first, audience-second. For an audience-first buyer
              (which telco data really enables), the flow could invert.
            </li>
            <li>
              <strong>Give retail partners a lightweight yield-optimisation view.</strong> Once
              they own the rate card, the next question is “am I under-pricing?” — that’s a
              feature waiting to be designed.
            </li>
          </ul>
        </section>

        {/* Takeaway */}
        <section className="flex flex-col gap-4">
          <SectionLabel>My takeaway</SectionLabel>
          <SectionTitle id="takeaway">Second retail media project — the domain is concrete now</SectionTitle>
          <Body>
            RMN is my <strong>second</strong> retail media network. The first was Dolphin — a
            DOOH network in the US market with 3,500+ screens across 90+ DMAs, working with
            advertisers, venue partners, and rental partners around a three-way revenue split.
            Coming into RMN, the domain wasn’t a hypothesis; it was a body of practice.
          </Body>
          <Body>
            That changes what design costs. On the first RMN, most of the effort went into
            <em> naming things</em> — what a slot is, what an availability window means, what PoP
            covers. On the second, that vocabulary is a given, and the design work moves upstream:
            fitting the platform to a different market shape (venue-based Gulf, not DMA-based US),
            a different data spine (first-party telco vs store-loyalty), and a different persona
            model (personas over portals inside Supply).
          </Body>
          <Body>
            The generalisable lesson is still the same one:{' '}
            <strong>shape the noun before you touch the verbs</strong>. Once every party can hold
            the same “thing” in their head, pricing, availability, targeting, invoicing, and
            disputes line up in the same shape. UI is a downstream artefact of getting that right.
          </Body>
        </section>

        <ProjectFooterNav currentId="rmn-dolphin" />
      </div>
    </div>

    <Footer />
  </main>
)

export default CaseStudyRmnDolphin
