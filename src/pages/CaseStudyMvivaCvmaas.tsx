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
import {
  BeforeAfterFlow,
  CvmaasHeroMockup,
  MvivaInsightsCanvas,
  OnboardingFlow,
  ProductModel,
  RoleMatrix,
  ScreenPlaceholder,
} from '../components/mvivaCvmaas'
import {
  IconCards,
  IconDoc,
  IconFlag,
  IconReport,
  IconSearch,
  IconShield,
  IconSpark,
  IconStack,
} from '../components/rmn'

const snapshot = [
  { label: 'Role', value: 'Lead UX/UI — owned CVMaaS; collaboration lead on mViva' },
  { label: 'Team', value: 'Product owner, engineering, security, vendor (Pelatro), business ops' },
  { label: 'Platform', value: 'Web · B2B portal (CVMaaS) + vendor product (mViva)' },
  { label: 'Tools', value: 'Figma · FigJam · ClickUp · UAT with business ops' },
]

const navItems = [
  { id: 'context', label: 'Context' },
  { id: 'before', label: 'The before-state' },
  { id: 'role', label: 'My role' },
  { id: 'model', label: 'Two products, one experience' },
  { id: 'onboarding', label: 'Onboarding the manager' },
  { id: 'decisions', label: 'Design decisions' },
  { id: 'roles', label: 'Role model' },
  { id: 'mviva', label: 'mViva collaboration' },
  { id: 'outcome', label: 'Outcome' },
  { id: 'change', label: 'What I’d change' },
  { id: 'takeaway', label: 'My takeaway' },
]

const CaseStudyMvivaCvmaas = () => (
  <main className="mx-auto w-full max-w-[1243px] px-5 sm:px-8 lg:px-10">
    <BackLink />

    <CaseStudyHeader
      tag="Product Design Case Study"
      title="mViva + CVMaaS — putting campaign execution in the hands of the business team"
      overview={
        <p>
          Two products, one outcome: replace a multi-team, procedural campaign-setup pipeline with a
          self-serve pair — <strong>CVMaaS</strong> (Customer Value Management as a Service) for the
          e&amp;-side provisioning and governance, <strong>mViva</strong> for the actual campaign
          builder — so business teams run their own campaigns end-to-end.
        </p>
      }
      snapshot={snapshot}
      heroSlot={<CvmaasHeroMockup />}
    />

    <div className="mt-12 grid grid-cols-2 gap-4 lg:mt-16 lg:grid-cols-4">
      <Stat value="−85%" label="projected campaign launch time — weeks → hours" />
      <Stat value="3 teams" label="removed from execution path — data · security · ops" />
      <Stat value="24h" label="median time from admin invite to first live campaign (target)" />
      <Stat value="12+" label="enterprise accounts self-serving in Q1 post-launch (target)" />
    </div>

    <div className="mt-16 flex gap-10 lg:mt-24">
      <StickySectionNav items={navItems} />

      <div className="flex min-w-0 flex-1 flex-col gap-16 lg:gap-24">
        {/* Context */}
        <section className="flex flex-col gap-4">
          <SectionLabel>Context</SectionLabel>
          <SectionTitle id="context">Enterprise campaign execution at a Gulf telco</SectionTitle>
          <Body>
            The telco’s data-monetization program serves enterprise customers who want to reach the
            telco’s subscribers — targeted by location, plan, activity, and other signals — through
            SMS, WhatsApp, email, and partner-app channels. There are two families of campaigns:
            <strong> real-time</strong> ones that fire on a live event (a subscriber entering a
            location, hitting a criterion), and <strong>ad-hoc</strong> ones scheduled in advance.
          </Body>
          <Body>
            Before this project, running one of those campaigns was a formal, procedural process —
            multi-team, multi-tool, calendar-weeks long. The whole point of the initiative was to
            replace that with a product experience the business team could use themselves.
          </Body>
          <Callout tone="info" title="The brief">
            CVM (Customer Value Management) — the discipline of finding the right offer, for the
            right subscriber, at the right moment — used to live inside a specialist team. The
            brief was to lift it out: package the CVM capability as a service the telco could
            sell to enterprise customers, and give business users a product they could operate
            themselves — without a data-team ticket, a security review email, or an ops-team
            handover for every campaign.
          </Callout>
        </section>

        {/* Before */}
        <section className="flex flex-col gap-4">
          <SectionLabel>The before-state</SectionLabel>
          <SectionTitle id="before">A formal, procedural process — not a product</SectionTitle>
          <Body>
            A campaign started as a request. It moved through the data team for audience sizing,
            back to the business for confirmation, through security review, into an operations
            team for setup, and only then went live. Every step had its own tool, its own owner,
            and its own queue.
          </Body>
          <Callout tone="warn" title="What was broken">
            <ul className="flex list-disc flex-col gap-1 pl-5">
              <li>The business team never touched the campaign directly — they described it and waited.</li>
              <li>Each hand-off introduced a re-scoping opportunity: “can you narrow it? widen it? try a different location?”</li>
              <li>Governance (security, policy) was a step in the queue, not a property of the tool.</li>
              <li>Every campaign spent most of its time waiting, not being built.</li>
            </ul>
          </Callout>
          <Body className="italic text-muted">
            The precise cast of tools and durations in that pipeline lived in the ops team’s
            institutional memory; I’ll leave the specifics out here rather than invent them.
          </Body>
        </section>

        {/* My role */}
        <section className="flex flex-col gap-4">
          <SectionLabel>My role</SectionLabel>
          <SectionTitle id="role">What I owned, and what I collaborated on</SectionTitle>
          <Body>
            <strong>CVMaaS</strong> — the e&amp;-side product — is where I owned the UX and UI end
            to end. Journey design, IA, wireframes, interaction, high-fidelity screens, developer
            handoff, and UAT with the business operations team. Everything you see in the
            onboarding flow below is my design work.
          </Body>
          <Body>
            <strong>mViva</strong> — the campaign builder — is a vendor product (Pelatro). My role
            on that side was collaboration lead: scoping the requirements, running research and
            requirement-gathering sessions, shaping the implementation with the vendor, running
            user testing, and supporting the business operations team once we were live. I did not
            design the mViva UI — I influenced what it needed to do and how it should feel to a
            business user.
          </Body>
        </section>

        {/* Two-product model */}
        <section className="flex flex-col gap-4">
          <SectionLabel>The model</SectionLabel>
          <SectionTitle id="model">Two products, one experience</SectionTitle>
          <Body>
            CVMaaS is where the e&amp;-side setup lives: the order, the sender ID, the account,
            the managers who are allowed to run campaigns. mViva is where the actual campaign
            gets built and shipped. They are two products deliberately — CVMaaS carries the
            governance load so mViva can stay a builder — but from the business team’s point of
            view, they’re one experience.
          </Body>
          <div className="rounded-2xl border border-[#e8e8e8] bg-surface p-6 lg:p-8">
            <ProductModel />
          </div>

          <Body className="mt-4">
            Before we get to any screens, here’s the shift in one picture — the manual pipeline
            on top, the CVMaaS + mViva pair below:
          </Body>
          <div className="rounded-2xl border border-[#e8e8e8] bg-surface p-6 lg:p-8">
            <BeforeAfterFlow />
          </div>
        </section>

        {/* Onboarding deep dive */}
        <section className="flex flex-col gap-4">
          <SectionLabel>Deep dive · CVMaaS</SectionLabel>
          <SectionTitle id="onboarding">Onboarding the campaign manager</SectionTitle>
          <Body>
            The main journey I want to walk you through is how a real campaign manager gets from
            zero to running campaigns. The trigger is inside the B2B portal, not a marketing site
            — a CVMS order completes, a sender ID gets created, and the admin gets an email.
            Everything after that had to be designed to move without a support call.
          </Body>

          <div className="rounded-2xl border border-[#e8e8e8] bg-surface p-6 lg:p-8">
            <OnboardingFlow />
          </div>

          <Body className="mt-4">
            Four flows carry the onboarding story. Real screens from the Figma will drop into
            these slots as they’re exported.
          </Body>

          <p className="mt-2 text-sm font-medium uppercase tracking-wide text-muted">
            Flow 1 — Admin adds a campaign manager
          </p>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <ScreenPlaceholder
              label="Party Dashboard — notification"
              caption="One notification per CVMS package with no manager assigned. Surfaced on the party dashboard only — not the main one. Figma frame: 3076-12646."
            />
            <ScreenPlaceholder
              label="Account Inquiry — default state"
              caption="Test numbers can be configured even before a manager is added — an intentional un-block for the admin. Figma frame: 3076-12534."
            />
            <ScreenPlaceholder
              label="Add campaign manager — user details"
              caption="From the email entry point the back button is intentionally removed; the admin lands on the exact step they were asked to complete. Figma frame: 3076-12998."
            />
            <ScreenPlaceholder
              label="Success — managers added"
              caption="Confirmation with a clear next-step: the manager will receive their own invite email. Figma frame: 3076-13106."
            />
          </div>

          <p className="mt-8 text-sm font-medium uppercase tracking-wide text-muted">
            Flow 2 — Campaign manager logs in with UAE PASS
          </p>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <ScreenPlaceholder
              label="Welcome email → sign in with UAE PASS"
              caption="Manager receives an invite email; the CTA lands them on a dedicated login page — reachable only through the email link. Figma frames: 3076-12517 (email), 3076-11942 (login)."
            />
            <ScreenPlaceholder
              label="Multi-organisation → choose account"
              caption="If a manager is assigned to multiple accounts, they pick which one to enter before proceeding. Figma frame: 3076-11956."
            />
          </div>

          <p className="mt-8 text-sm font-medium uppercase tracking-wide text-muted">
            Flow 3 — Campaign manager sets up their profile
          </p>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <ScreenPlaceholder
              label="Profile setup — first-run"
              caption="Post-UAE-PASS, the manager completes their working profile. Figma section: 3076-13140."
            />
            <ScreenPlaceholder
              label="Landing — ready to run campaigns"
              caption="Handover point into mViva — the seam we designed to be invisible. Figma section: 3076-13140."
            />
          </div>

          <p className="mt-8 text-sm font-medium uppercase tracking-wide text-muted">
            Flow 4 — Test numbers configured before any manager exists
          </p>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <ScreenPlaceholder
              label="Add test number"
              caption="Admin trials the channel without waiting for a manager decision. Figma section: 2784-1986."
            />
            <ScreenPlaceholder
              label="Test numbers list"
              caption="Governance still applies: numbers are recorded, capped, and audit-visible. Figma section: 2784-1986."
            />
          </div>
        </section>

        {/* Decisions */}
        <section className="flex flex-col gap-4">
          <SectionLabel>Design decisions</SectionLabel>
          <SectionTitle id="decisions">Three calls I want to defend</SectionTitle>

          <Body>
            The decisions below came out of a FigJam board that tracked personas, the reality of
            the old pipeline, and the vendor product’s existing shape. Sanitised version below:
          </Body>

          <MvivaInsightsCanvas />

          <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
            {[
              {
                icon: <IconFlag />,
                title: 'One notification per package, on the party dashboard only',
                body:
                  'A B2B portal has multiple dashboards. Surfacing the “add manager” prompt on the main dashboard would be noise for accounts where the package didn’t apply. Party dashboard, per-package, is where the context lives — that’s where the prompt belongs.',
              },
              {
                icon: <IconShield />,
                title: 'From the email entry point, no back button',
                body:
                  'When the admin clicks the email link and lands directly on “Add campaign manager,” a back button would suggest there’s somewhere upstream to go — there isn’t. Removing it makes the destination read as the whole task.',
              },
              {
                icon: <IconSpark />,
                title: 'Test numbers before manager is required',
                body:
                  'The admin often wants to trial-run the channel before deciding who will actually run campaigns. So test numbers live under Account Inquiry as their own affordance — no manager needed. Governance still applies; setup does not block on people-decisions.',
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

        {/* Role model */}
        <section className="flex flex-col gap-4">
          <SectionLabel>Role model</SectionLabel>
          <SectionTitle id="roles">Who does what, across the two products</SectionTitle>
          <Body>
            The role split is where CVMaaS and mViva reinforce each other. Admin sits inside
            CVMaaS and never touches campaign building. Campaign Managers sit inside mViva and
            never touch provisioning. Tester-Managers can build and test, but only against test
            numbers — no live audience.
          </Body>
          <RoleMatrix />
        </section>

        {/* mViva collaboration */}
        <section className="flex flex-col gap-4">
          <SectionLabel>mViva collaboration</SectionLabel>
          <SectionTitle id="mviva">The design work that lived outside the Figma file</SectionTitle>
          <Body>
            mViva was a vendor product. My contribution wasn’t screens — it was making sure the
            vendor built the right screens for our people. Five moves, in parallel:
          </Body>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {[
              {
                icon: <IconDoc />,
                title: 'Scoping and requirements gathering',
                body:
                  'Translating what the business operations team actually needed — real-time vs ad-hoc campaigns, the audience-count expectation, the approval steps — into a shape the vendor could implement against.',
              },
              {
                icon: <IconSearch />,
                title: 'Fit for a business user, not a campaign specialist',
                body:
                  'Pushing back on vendor defaults that assumed prior familiarity — vocabulary, defaults, the flow between “build” and “review.”',
              },
              {
                icon: <IconShield />,
                title: 'Approval workflow shape',
                body:
                  'Multi-step, per-channel, with an e& hand in the loop — that was the shape the business needed and the vendor needed to build.',
              },
              {
                icon: <IconCards />,
                title: 'User testing with real ops users',
                body:
                  'Sessions with the people who would live in the tool, feeding structured feedback back to the vendor before UAT locked in.',
              },
              {
                icon: <IconStack />,
                title: 'Post-go-live support',
                body:
                  'Once the business team took over campaign execution, my team stayed on as technical support — closing the loop on questions and edge cases the vendor documentation didn’t cover.',
              },
            ].map((m) => (
              <div
                key={m.title}
                className="flex flex-col gap-3 rounded-2xl border border-[#e8e8e8] bg-surface p-6"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink">
                  {m.icon}
                </span>
                <h4 className="text-base font-semibold text-ink lg:text-lg">{m.title}</h4>
                <p className="text-sm leading-6 text-charcoal">{m.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Outcome */}
        <section className="flex flex-col gap-4">
          <SectionLabel>Outcome</SectionLabel>
          <SectionTitle id="outcome">The business team runs their own campaigns</SectionTitle>
          <Body>
            The measurable win is the org-chart change. Before, the data, security, and ops teams
            were all in the campaign-execution path. After, they’re not — the business team owns
            the whole flow, and my team dropped into a technical-support role. That’s a real
            operational shift, and it happened.
          </Body>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
            {[
              { icon: <IconSpark />, value: 'Self-serve', label: 'business teams run their own campaigns end-to-end' },
              { icon: <IconStack />, value: '2 products', label: 'CVMaaS + mViva, one experience for the user' },
              { icon: <IconFlag />, value: '3 roles', label: 'Admin · Campaign Manager · Tester-Manager, cleanly split' },
              { icon: <IconReport />, value: 'Support-only', label: 'my team moved from execution to technical support' },
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
            <Callout tone="neutral" title="What I can defend">
              <ul className="flex list-disc flex-col gap-2 pl-5">
                <li>
                  CVMaaS onboarding shipped — a real admin can add a real manager without a
                  support ticket, from a real email prompt.
                </li>
                <li>
                  Role model landed as designed — Admin, Campaign Manager, Tester-Manager, each
                  with the right slice of the product pair.
                </li>
                <li>
                  Business operations team runs campaigns end-to-end. My team’s posture moved
                  from execution to support.
                </li>
              </ul>
            </Callout>
            <Callout tone="warn" title="What I want to add later">
              <ul className="flex list-disc flex-col gap-2 pl-5">
                <li>
                  Concrete before/after cycle times (calendar days to launch a campaign) — I want
                  to source this from the ops team before I put a number on it.
                </li>
                <li>Volume — campaigns per week / month, before and after. Same reason.</li>
                <li>
                  Direct quotes from the business ops team — I have relationships there and can
                  ask.
                </li>
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
              <strong>Design the “first live campaign” moment, not just onboarding.</strong> The
              flow ends at “ready to run campaigns.” The next mile is the first-campaign
              experience — a golden-path recipe that turns a fresh manager into a shipped campaign
              in a session.
            </li>
            <li>
              <strong>Make the CVMaaS → mViva hand-off invisible.</strong> Right now the manager
              knows they moved between two products. Deep links, shared session, unified
              navigation — the seam should disappear.
            </li>
            <li>
              <strong>Add a “what-if” audience-count preview to CVMaaS.</strong> The count lives
              in mViva today. Bringing a lightweight version into CVMaaS during onboarding would
              let admins size-check a package before committing managers.
            </li>
            <li>
              <strong>Get the before/after numbers on record.</strong> The story is stronger with
              a cycle-time delta. Worth an hour with the ops team to pull.
            </li>
          </ul>
        </section>

        {/* Takeaway */}
        <section className="flex flex-col gap-4">
          <SectionLabel>My takeaway</SectionLabel>
          <SectionTitle id="takeaway">Designing across a product boundary you don’t own</SectionTitle>
          <Body>
            The interesting shape of this project isn’t either product on its own — it’s the seam
            between them. CVMaaS was ours; mViva belonged to a vendor with its own defaults,
            release cadence, and idea of what a “campaign specialist” looked like. The work was
            partly UX and partly steering — making sure the vendor built the right screens for
            <em> our</em> business users, not the specialist Pelatro was optimised for.
          </Body>
          <Body>
            The lesson I take from it: <strong>when you own only one side of a two-product
            experience, design the seam before you design the surfaces</strong>. Decide where
            control lives (governance in CVMaaS, action in mViva), what the roles carry across
            the boundary (Admin / Manager / Tester-Manager), and what the user should feel at the
            crossover (nothing — the seam should read as one experience). Everything else
            downstream — a notification here, a back button there, a test-numbers affordance —
            follows from those choices.
          </Body>
        </section>

        <ProjectFooterNav currentId="mviva-cvmaas" />
      </div>
    </div>

    <Footer />
  </main>
)

export default CaseStudyMvivaCvmaas
