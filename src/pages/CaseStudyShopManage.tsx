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
  CustomerFlagFlow,
  IaBeforeAfter,
  ScreenPlaceholder,
  TwoDrops,
} from '../components/shopManage'

const snapshot = [
  { label: 'Role', value: 'Product Designer — IA, journeys, hi-fi, handoff' },
  { label: 'Team', value: 'Product owner, engineering, growth, care ops' },
  { label: 'Timeline', value: 'Two design drops across the release cycle' },
  { label: 'Platform', value: 'Web · consumer-facing plan management' },
  { label: 'Tools', value: 'Figma · FigJam · analytics + care-log review' },
  { label: 'Context', value: 'Consumer telco — SIM and plan management' },
]

const navItems = [
  { id: 'context', label: 'Context' },
  { id: 'problem', label: 'The problem' },
  { id: 'role', label: 'My role' },
  { id: 'drops', label: 'Two drops, one direction' },
  { id: 'flag', label: 'The customer-flag decision' },
  { id: 'screens', label: 'Screens' },
  { id: 'craft', label: 'Craft notes' },
  { id: 'outcome', label: 'Outcome' },
  { id: 'change', label: 'What I’d change' },
]

const CaseStudyShopManage = () => (
  <main className="mx-auto w-full max-w-[1243px] px-5 sm:px-8 lg:px-10">
    <BackLink />

    <CaseStudyHeader
      tag="UX/UI Case Study — Craft"
      title="Shop & Manage — putting the plan back at the top"
      overview={
        <p>
          A consumer-facing revamp of SIM and plan management. Two drops across the release —
          Drop 1 shipped the new IA, Drop 2 sharpened it after real usage — plus the customer-flag
          flow that decides which offers actually surface. This one lives on craft.
        </p>
      }
      snapshot={snapshot}
      heroSlot={
        <div className="p-6 lg:p-10">
          <IaBeforeAfter />
        </div>
      }
    />

    <div className="mt-12 grid grid-cols-2 gap-4 lg:mt-16 lg:grid-cols-4">
      <Stat value="2 drops" label="v1 shipped, then refined against real usage" />
      <Stat value="Plan-first" label="the plan and the action, at the top" />
      <Stat value="Flag-driven" label="offers surface only when eligibility says so" />
      <Stat value="Care-log signal" label="a real feedback source, not just analytics" />
    </div>

    <div className="mt-16 flex gap-10 lg:mt-24">
      <StickySectionNav items={navItems} />

      <div className="flex min-w-0 flex-1 flex-col gap-16 lg:gap-24">
        {/* Context */}
        <section className="flex flex-col gap-4">
          <SectionLabel>Context</SectionLabel>
          <SectionTitle id="context">Consumer plan management at a Gulf telco</SectionTitle>
          <Body>
            Shop &amp; Manage is where a consumer lives when they want to do something to their
            plan — see what they’re on, top up, add roaming, switch, look at their bill. It’s a
            surface a subscriber returns to often, on a device they trust, for tasks they don’t
            want to think about.
          </Body>
          <Body>
            The revamp had a simple goal: make the plan the first thing on the page, put the
            actions people actually take one click from there, and stop teasing offers to people
            who could never accept them.
          </Body>
        </section>

        {/* Problem */}
        <section className="flex flex-col gap-4">
          <SectionLabel>The problem</SectionLabel>
          <SectionTitle id="problem">An IA that hid what people came for</SectionTitle>
          <Body>
            The previous IA split the world into Shop and Manage — clean on a whiteboard, confusing
            on a phone. Customers came in wanting to see their plan or take one action on it, and
            landed on a shop-shaped page that read as “buy more.” The most common tasks were
            below the fold, or one tap deeper than they should have been.
          </Body>
          <Body>
            Analytics and care logs pointed at the same thing from two angles: people scrolled
            further than they should have to reach basic actions, and they called care to ask
            questions the page was supposed to answer.
          </Body>
        </section>

        {/* Role */}
        <section className="flex flex-col gap-4">
          <SectionLabel>My role</SectionLabel>
          <SectionTitle id="role">What I owned</SectionTitle>
          <Body>
            End-to-end UX/UI: IA rework, journey design, wireframes through high-fidelity,
            component reuse against the design system, developer handoff, and two review passes with
            product, growth, and care operations. Drop 2 was mine to argue for — the shipped v1
            was working; the case for a second pass had to come from what the data was telling us.
          </Body>
        </section>

        {/* Two drops */}
        <section className="flex flex-col gap-4">
          <SectionLabel>The two drops</SectionLabel>
          <SectionTitle id="drops">Same direction, sharper execution</SectionTitle>
          <Body>
            Drop 1 was the confident first cut: new IA, plan-first hierarchy, a slot for offers.
            It shipped. Drop 2 wasn’t a course-correction — the direction held — it was a
            refinement against a signal we couldn’t generate in review: real people, on their own
            devices, doing their own tasks.
          </Body>
          <div className="rounded-2xl border border-[#e8e8e8] bg-surface p-6 lg:p-8">
            <TwoDrops />
          </div>
        </section>

        {/* Customer flag */}
        <section className="flex flex-col gap-4">
          <SectionLabel>The customer-flag decision</SectionLabel>
          <SectionTitle id="flag">Which flag surfaces which offer, and when to hide the slot</SectionTitle>
          <Body>
            The customer-flag flow is the piece with the most opinions in it. Every customer
            carries a set of flags — eligibility signals set upstream by billing, care, growth —
            and the page has to decide which offer to show for which combination.
          </Body>
          <div className="rounded-2xl border border-[#e8e8e8] bg-surface p-6 lg:p-8">
            <CustomerFlagFlow />
          </div>
          <Body>
            The rules I fought for:
          </Body>
          <ul className="flex list-disc flex-col gap-3 pl-6 text-base leading-7 text-black lg:text-lg">
            <li>
              <strong>Retention beats cross-sell beats up-sell.</strong> If a customer’s at
              risk, we don’t use the moment to pitch add-ons. The flag priority is a value
              judgement encoded once.
            </li>
            <li>
              <strong>Ineligible means hide, not tease.</strong> A locked or grayed-out offer
              teaches a lesson we don’t want to teach. If a customer can’t take the offer, the
              slot goes away — clean.
            </li>
            <li>
              <strong>Empty state is never blank.</strong> No qualifying offer? The slot becomes
              something useful — plan tip, care shortcut, nothing that feels like failure.
            </li>
            <li>
              <strong>Flags never surface alone.</strong> A single flag is never enough context;
              the offer is a function of flags plus tenure plus plan tier — the page decides,
              not the flag.
            </li>
          </ul>
          <Callout tone="warn" title="What I want to check on this page">
            <p>
              The example combination in the diagram is illustrative — Rauf, tell me the real
              flag names and I’ll swap them in. Same for the offer copy.
            </p>
          </Callout>
        </section>

        {/* Screens */}
        <section className="flex flex-col gap-4">
          <SectionLabel>Screens</SectionLabel>
          <SectionTitle id="screens">Before, Drop 1, Drop 2 — side by side</SectionTitle>
          <Body>
            The story is easier to tell in three columns. Same journey, three points in time.
          </Body>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <ScreenPlaceholder drop="Before" label="Old plan page" caption="What people used to land on." />
            <ScreenPlaceholder drop="Drop 1" label="Plan-first, v1" caption="First shipped version with new hierarchy." />
            <ScreenPlaceholder drop="Drop 2" label="Plan-first, refined" caption="Same IA, tightened states + copy." />
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <ScreenPlaceholder drop="Before" label="Offers — everywhere" caption="Offers teased regardless of eligibility." />
            <ScreenPlaceholder drop="Drop 1" label="Offers slot introduced" caption="Slot exists; flag logic partly wired." />
            <ScreenPlaceholder drop="Drop 2" label="Offers — flag-gated" caption="Slot hides when there’s nothing to say." />
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <ScreenPlaceholder drop="Flag" label="Flag → offer mapping" caption="Web flow for enabling a flag for a customer segment." />
            <ScreenPlaceholder drop="Flag" label="Empty state — no eligible offer" caption="What the page shows when the customer qualifies for nothing right now." />
          </div>
        </section>

        {/* Craft */}
        <section className="flex flex-col gap-4">
          <SectionLabel>Craft notes</SectionLabel>
          <SectionTitle id="craft">The details that carried the weight</SectionTitle>
          <ul className="flex list-disc flex-col gap-3 pl-6 text-base leading-7 text-black lg:text-lg">
            <li>
              <strong>Type hierarchy did the IA work.</strong> The plan name is the largest thing on
              the page. The primary action is the next-largest. Anything else deferred.
            </li>
            <li>
              <strong>Icons calmed down between drops.</strong> Drop 1 used the design system’s
              default weight; Drop 2 dropped the fill weight one step so the page read as an object
              you can touch, not an interface asking for attention.
            </li>
            <li>
              <strong>Copy tightened.</strong> “Manage your plan” became “Your plan” — the verb was
              doing work the noun could do alone.
            </li>
            <li>
              <strong>Empty and ineligible states were designed, not left as “nothing.”</strong>{' '}
              Two states people never see individually, but everyone saw the difference in aggregate.
            </li>
          </ul>
        </section>

        {/* Outcome */}
        <section className="flex flex-col gap-4">
          <SectionLabel>Outcome</SectionLabel>
          <SectionTitle id="outcome">What shipped, honestly</SectionTitle>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <Callout tone="neutral" title="What I can defend">
              <ul className="flex list-disc flex-col gap-2 pl-5">
                <li>
                  Two drops shipped end-to-end — Drop 1 established the new IA in production, Drop 2
                  refined it against real usage.
                </li>
                <li>
                  The customer-flag flow is live: offers surface based on eligibility, not on
                  layout.
                </li>
                <li>
                  Care-log signal became a design input, not just a support metric.
                </li>
              </ul>
            </Callout>
            <Callout tone="warn" title="What I want to add later">
              <ul className="flex list-disc flex-col gap-2 pl-5">
                <li>Concrete before/after task-completion numbers — I want to source these before quoting.</li>
                <li>Care-call volume delta on the tasks the revamp targeted.</li>
                <li>Direct user quotes from the moderated sessions on Drop 2.</li>
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
              <strong>Run a moderated pass between Drop 1 and Drop 2.</strong> The analytics
              signal was strong, but a handful of sessions would have shortened Drop 2 by half.
            </li>
            <li>
              <strong>Design the flag rules in the same file as the screens.</strong> The rules
              lived in a separate document. Bringing them onto the canvas would have made trade-offs
              visible during design review, not after.
            </li>
            <li>
              <strong>Give the empty state its own promotion budget.</strong> Right now the empty
              state is a courtesy. Given the volume of customers who see it, it deserves the same
              content-design attention as the primary state.
            </li>
          </ul>
        </section>

        <NextProject href="/projects/daitics-cdp" label="Back to the hero" title="Telco AI CDP" />
      </div>
    </div>

    <Footer />
  </main>
)

export default CaseStudyShopManage
