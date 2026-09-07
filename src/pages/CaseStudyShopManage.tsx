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
  CustomerFlagFlow,
  FlowCarousel,
  ResearchSnapshot,
  ScreensShowcase,
  ShopFlowMap,
  TwoDrops,
} from '../components/shopManage'
// Shopping
import shopHome from '../assets/shop-manage/home.png'
import shopMobilePlans from '../assets/shop-manage/shop-mobile-plans.png'
import shopSelectLocation from '../assets/shop-manage/shop-select-location.png'
import shopEmptyAddresses from '../assets/shop-manage/shop-empty-addresses.png'
import shopNewAddressAdded from '../assets/shop-manage/shop-new-address-added.png'
import shopMoreActions from '../assets/shop-manage/shop-more-actions.png'
import shopTermsConditions from '../assets/shop-manage/shop-terms-conditions.png'
import shopPriceBreakdown from '../assets/shop-manage/shop-price-breakdown.png'
import shopReviewCheckout from '../assets/shop-manage/shop-review-checkout.png'
import shopMakePayment from '../assets/shop-manage/shop-make-payment.png'
import shopPaymentError from '../assets/shop-manage/shop-payment-error.png'
import shopRequestSubmitted from '../assets/shop-manage/shop-request-submitted.png'
// Managing
import manageSplash from '../assets/shop-manage/manage-splash.png'
import manageLogin from '../assets/shop-manage/manage-login.png'
import manageUaePassAuth from '../assets/shop-manage/manage-uae-pass-auth.png'
import manageTab from '../assets/shop-manage/manage-tab.png'
import manageTabAccountSheet from '../assets/shop-manage/manage-tab-account-sheet.png'
import manageMobileAccounts from '../assets/shop-manage/manage-mobile-accounts.png'
import selectCompany from '../assets/shop-manage/select-company.png'
import manageOutstandingPayment from '../assets/shop-manage/manage-outstanding-payment.png'
import manageEstablishmentInvalid from '../assets/shop-manage/manage-establishment-invalid.png'
import manageBlacklisted from '../assets/shop-manage/manage-blacklisted.png'
import manageDocExpired from '../assets/shop-manage/manage-doc-expired.png'
// SIM switching
import simCloneSelectAccounts from '../assets/shop-manage/sim-clone-select-accounts.png'
import simCloneSelectAccountsAlt from '../assets/shop-manage/sim-clone-select-accounts-alt.png'
import simCloneMultipleSims from '../assets/shop-manage/sim-cloning-multiple-sims.png'
import simCloneMultipleSims2 from '../assets/shop-manage/sim-clone-multiple-sims-2.png'
import simClonePendingRequest from '../assets/shop-manage/sim-clone-pending-request.png'
// SIM replacement
import simReplacementUaePassLogin from '../assets/shop-manage/sim-replacement-uae-pass-login.png'
import simReplacementEsimUserDetails from '../assets/shop-manage/sim-replacement-esim-user-details.png'
import simReplacementVerifyingDocs from '../assets/shop-manage/sim-replacement-verifying-docs.png'
import simReplacementVerifying2 from '../assets/shop-manage/sim-replacement-verifying-2.png'
import simReplacementDocsRejected from '../assets/shop-manage/sim-replacement-docs-rejected.png'
import simReplacementDocsNotFetched from '../assets/shop-manage/sim-replacement-docs-not-fetched.png'
import simReplacementReviewCheckout from '../assets/shop-manage/sim-replacement-review-checkout.png'
import simReplacementPriceBreakdown from '../assets/shop-manage/sim-replacement-price-breakdown.png'
import simReplacementTerms from '../assets/shop-manage/sim-replacement-terms.png'
import simReplacementDelivery from '../assets/shop-manage/sim-replacement-delivery.png'
import simReplacementActivate from '../assets/shop-manage/sim-replacement-esim-activate.png'
import simReplacementOrderConfirmation from '../assets/shop-manage/sim-replacement-order-confirmation.png'

const snapshot = [
  { label: 'Role', value: 'Product Designer — IA, journeys, hi-fi, handoff' },
  { label: 'Team', value: 'Product owner, engineering, growth, care ops' },
  { label: 'Tools', value: 'Figma · FigJam · analytics + care-log review' },
]

const navItems = [
  { id: 'context', label: 'Context' },
  { id: 'problem', label: 'The problem' },
  { id: 'research', label: 'Research' },
  { id: 'role', label: 'My role' },
  { id: 'shop-path', label: 'The shop path' },
  { id: 'drops', label: 'Two drops, one direction' },
  { id: 'flag', label: 'The customer-flag decision' },
  { id: 'screens', label: 'Screens' },
  { id: 'craft', label: 'Design details' },
  { id: 'outcome', label: 'Outcome' },
  { id: 'change', label: 'What I’d change' },
  { id: 'takeaway', label: 'My takeaway' },
]

const CaseStudyShopManage = () => (
  <main className="mx-auto w-full max-w-[1243px] px-5 sm:px-8 lg:px-10">
    <BackLink />

    <CaseStudyHeader
      tag="UX/UI Case Study"
      title="Shop & Manage — putting the plan back at the top"
      overview={
        <p>
          A consumer-facing revamp of SIM and plan management inside the e&amp; mobile app.
          Plan-first IA. Two drops, one direction. A flag-driven offer slot that stays quiet when
          it has nothing to say.
        </p>
      }
      snapshot={snapshot}
      heroSlot={<ScreensShowcase />}
    />

    <div className="mt-12 grid grid-cols-2 gap-4 lg:mt-16 lg:grid-cols-4">
      <Stat value="2 drops" label="v1 shipped, then refined against real usage" />
      <Stat value="+34%" label="top plan-management task completion, Drop 2 vs pre-launch" />
      <Stat value="−41%" label="time to complete a plan change on mobile" />
      <Stat value="−28%" label="plan-related contacts into care after Drop 2" />
    </div>

    <div className="mt-16 flex gap-10 lg:mt-24">
      <StickySectionNav items={navItems} />

      <div className="flex min-w-0 flex-1 flex-col gap-16 lg:gap-24">
        {/* Context */}
        <section className="flex flex-col gap-4">
          <SectionLabel>Context</SectionLabel>
          <SectionTitle id="context">Consumer plan management at e&amp;</SectionTitle>
          <Body>
            Shop &amp; Manage is the surface a subscriber returns to for plan, usage, bill, roaming,
            and SIM tasks — the ones they don&apos;t want to think about.
          </Body>
          <Body>
            Goal of the revamp: plan first, actions one tap away, and stop teasing offers people
            can&apos;t accept.
          </Body>
        </section>

        {/* Problem */}
        <section className="flex flex-col gap-4">
          <SectionLabel>The problem</SectionLabel>
          <SectionTitle id="problem">An IA that hid what people came for</SectionTitle>
          <Body>
            The old IA split into Shop and Manage — clean on paper, confusing on a phone.
            Customers came for their plan and landed on a shop-shaped tab that read as “buy more.”
            The tasks they actually opened the app for sat off-screen or one tap too deep.
          </Body>
          <Body>
            Analytics and care logs said the same thing from two angles: scrolls that shouldn&apos;t
            have happened, calls that the screen should have answered.
          </Body>
        </section>

        {/* Research */}
        <section className="flex flex-col gap-4">
          <SectionLabel>Research</SectionLabel>
          <SectionTitle id="research">Where does this task live?</SectionTitle>
          <Body>
            Open-then-closed card sort with 9 subscribers across 42 real tasks — pulled from
            analytics, care logs, and reviews. Verdict:
            {' '}<strong>Shop is a destination, not a landing.</strong>
          </Body>
          <ResearchSnapshot />
          <Body>
            Three insights set the direction for Drop 1:
          </Body>
          <ul className="flex list-disc flex-col gap-3 pl-6 text-base leading-7 text-black lg:text-lg">
            <li>
              <strong>The plan tile earns the top.</strong> 62% of first-8-second taps went to
              the plan area — even when promos ranked above it.
            </li>
            <li>
              <strong>&quot;Manage&quot; and &quot;Settings&quot; read the same.</strong> Any
              destination named &quot;Manage&quot; had to name what it holds: <em>your plan</em>,
              <em> your bill</em>, <em>your SIM</em>.
            </li>
            <li>
              <strong>Shop is a verb, not a home.</strong> People said &quot;buy&quot;, not
              &quot;shop&quot; — the IA folded shop into tasks, not a destination.
            </li>
          </ul>
        </section>

        {/* Role */}
        <section className="flex flex-col gap-4">
          <SectionLabel>My role</SectionLabel>
          <SectionTitle id="role">What I owned</SectionTitle>
          <Body>
            End-to-end UX/UI: IA, journey design, wires through hi-fi, design-system reuse, dev
            handoff, and reviews with product, growth, and care ops. Drop 2 was mine to argue for —
            the shipped v1 was working; the case for a second pass had to come from the data.
          </Body>
        </section>

        {/* Shop path */}
        <section className="flex flex-col gap-4">
          <SectionLabel>The shop path</SectionLabel>
          <SectionTitle id="shop-path">From SHOP entry to a submitted lead</SectionTitle>
          <Body>
            Every step from the SHOP tab to a submitted lead, including the dead ends. Greyed
            nodes (Recommendations, Banner) exist but sit off the main path — deprioritised so the
            primary journey stays narrow.
          </Body>
          <div className="overflow-x-auto rounded-2xl border border-[#e8e8e8] bg-surface p-6 lg:p-8">
            <div className="min-w-[1120px]">
              <ShopFlowMap />
            </div>
          </div>
          <Body>
            Two skip-paths keep it honest: <strong>Products → Party ID</strong> when the customer
            already knows what they want, and <strong>Party ID → Lead form</strong> when the
            number picker isn&apos;t needed.
          </Body>
        </section>

        {/* Two drops */}
        <section className="flex flex-col gap-4">
          <SectionLabel>The two drops</SectionLabel>
          <SectionTitle id="drops">Same direction, sharper execution</SectionTitle>
          <Body>
            Drop 1 shipped the new IA and offer slot. Drop 2 wasn&apos;t a course-correction — same
            direction — it was a refinement against a signal you can&apos;t generate in review: real
            people, own devices, own tasks.
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
            Every customer carries a set of flags — eligibility signals set upstream by billing,
            care, growth. The app has to decide which offer surfaces for which combination.
          </Body>
          <div className="rounded-2xl border border-[#e8e8e8] bg-surface p-6 lg:p-8">
            <CustomerFlagFlow />
          </div>
          <Body>The rules I fought for:</Body>
          <ul className="flex list-disc flex-col gap-3 pl-6 text-base leading-7 text-black lg:text-lg">
            <li>
              <strong>Retention &gt; cross-sell &gt; up-sell.</strong> If a customer is at risk,
              the moment isn&apos;t for add-ons.
            </li>
            <li>
              <strong>Ineligible means hide, not tease.</strong> Grayed-out offers teach a lesson
              we don&apos;t want to teach. Can&apos;t take it? Slot goes away.
            </li>
            <li>
              <strong>Empty state is never blank.</strong> No qualifying offer? Slot becomes a
              plan tip or care shortcut — never a dead space.
            </li>
            <li>
              <strong>Flags never surface alone.</strong> Offer = flags × tenure × plan tier.
              The screen decides, not the flag.
            </li>
          </ul>
        </section>

        {/* Screens */}
        <section className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <SectionLabel>Screens</SectionLabel>
            <SectionTitle id="screens">Four flows the revamp touched</SectionTitle>
            <Body>
              Same IA, same plan-first hierarchy — four journeys: Shopping, Managing, SIM
              switching, SIM replacement.
            </Body>
          </div>

          <FlowCarousel
            flow="Shopping"
            title="Shop — home to submitted request"
            description="Plan-first home → discovery → address → terms → price → checkout → payment → done."
            screens={[
              { src: shopHome, alt: 'Home screen — plan-first', caption: 'Home · plan at the top' },
              { src: shopMobilePlans, alt: 'Shop mobile plans', caption: 'Product discovery' },
              { src: shopEmptyAddresses, alt: 'No saved addresses', caption: 'Empty · no addresses' },
              { src: shopSelectLocation, alt: 'Select delivery location', caption: 'Select address' },
              { src: shopNewAddressAdded, alt: 'New address added', caption: 'Address added' },
              { src: shopMoreActions, alt: 'Address actions bottom sheet', caption: 'Address actions' },
              { src: shopTermsConditions, alt: 'Terms and conditions', caption: 'Terms &amp; conditions' },
              { src: shopPriceBreakdown, alt: 'Price breakdown', caption: 'Price breakdown' },
              { src: shopReviewCheckout, alt: 'Review and checkout', caption: 'Review &amp; checkout' },
              { src: shopMakePayment, alt: 'Make a payment', caption: 'Make a payment' },
              { src: shopPaymentError, alt: 'Payment failure — incorrect CVV', caption: 'Payment error · edge' },
              { src: shopRequestSubmitted, alt: 'Request submitted', caption: 'Request submitted' },
            ]}
          />

          <FlowCarousel
            flow="Managing"
            title="Manage hub — Postpaid ↔ Prepaid migration entry"
            description="UAE Pass → Manage tab → Mobile Accounts → company picker. Both migration paths live as menu rows here."
            screens={[
              { src: manageSplash, alt: 'App splash', caption: 'Splash' },
              { src: manageLogin, alt: 'Login', caption: 'Login' },
              { src: manageUaePassAuth, alt: 'UAE Pass authentication', caption: 'UAE Pass auth' },
              { src: manageTab, alt: 'Manage tab', caption: 'Manage tab · hub' },
              { src: manageTabAccountSheet, alt: 'Select account type sheet', caption: 'Account-type sheet' },
              { src: manageMobileAccounts, alt: 'Manage Mobile Accounts', caption: 'Manage mobile accounts' },
              { src: selectCompany, alt: 'Select company', caption: 'Migration entries live here' },
              { src: manageOutstandingPayment, alt: 'Outstanding payment blocker', caption: 'Outstanding · blocker' },
              { src: manageEstablishmentInvalid, alt: 'Establishment card invalid', caption: 'Establishment invalid' },
              { src: manageBlacklisted, alt: 'Blacklisted account', caption: 'Blacklisted · gate' },
              { src: manageDocExpired, alt: 'Document expired', caption: 'Doc expired · prompt' },
            ]}
            note="The dedicated step-through screens for the migration itself live in a companion Figma file."
          />

          <FlowCarousel
            flow="SIM switching"
            title="Multi-SIM / SIM clone — account to SIM to blocked state"
            description="Pick account → pick SIM. Plus the negative state that blocks a clone when a request is already open."
            screens={[
              { src: simCloneSelectAccounts, alt: 'Select account', caption: 'Select account' },
              { src: simCloneSelectAccountsAlt, alt: 'Select account — alt state', caption: 'Account — alt state' },
              { src: simCloneMultipleSims, alt: 'Multiple SIMs — entry', caption: 'Multiple SIMs · entry' },
              { src: simCloneMultipleSims2, alt: 'Multiple SIMs — selection state', caption: 'Selection state' },
              { src: simClonePendingRequest, alt: 'Pending request — blocked state', caption: 'Blocked · pending request' },
            ]}
          />

          <FlowCarousel
            flow="SIM replacement"
            title="SIM replacement — auth to activation to confirmation"
            description="UAE Pass → user details → doc verification (with two failure states) → delivery → e-SIM activation → confirmation."
            screens={[
              { src: simReplacementUaePassLogin, alt: 'UAE Pass login', caption: 'UAE Pass login' },
              { src: simReplacementEsimUserDetails, alt: 'e-SIM user details', caption: 'e-SIM user details' },
              { src: simReplacementVerifyingDocs, alt: 'Verifying documents', caption: 'Verifying documents' },
              { src: simReplacementVerifying2, alt: 'Verifying documents · step 2', caption: 'Verifying · step 2' },
              { src: simReplacementDocsRejected, alt: 'Documents sharing rejected', caption: 'Sharing rejected · edge' },
              { src: simReplacementDocsNotFetched, alt: 'Documents could not be fetched', caption: 'Fetch failed · error' },
              { src: simReplacementReviewCheckout, alt: 'Review and checkout', caption: 'Review &amp; checkout' },
              { src: simReplacementPriceBreakdown, alt: 'Price breakdown', caption: 'Price breakdown' },
              { src: simReplacementTerms, alt: 'Terms and conditions', caption: 'Terms &amp; conditions' },
              { src: simReplacementDelivery, alt: 'SIM card delivery tracking', caption: 'Delivery tracking' },
              { src: simReplacementActivate, alt: 'Activate e-SIM', caption: 'e-SIM activation' },
              { src: simReplacementOrderConfirmation, alt: 'Order confirmation', caption: 'Order confirmation' },
            ]}
          />
        </section>

        {/* Craft */}
        <section className="flex flex-col gap-4">
          <SectionLabel>Design details</SectionLabel>
          <SectionTitle id="craft">Small decisions doing the heavy lifting</SectionTitle>
          <ul className="flex list-disc flex-col gap-3 pl-6 text-base leading-7 text-black lg:text-lg">
            <li>
              <strong>Type hierarchy did the IA work.</strong> Plan name largest. Primary action
              next. Everything else deferred.
            </li>
            <li>
              <strong>Icons calmed down.</strong> Drop 2 dropped fill weight one step — the screen
              reads as an object, not an interface.
            </li>
            <li>
              <strong>Copy tightened.</strong> “Manage your plan” → “Your plan”.
            </li>
            <li>
              <strong>Empty and ineligible states got designed.</strong> Nobody sees them
              individually; everyone feels them in aggregate.
            </li>
          </ul>
        </section>

        {/* Outcome */}
        <section className="flex flex-col gap-4">
          <SectionLabel>Outcome</SectionLabel>
          <SectionTitle id="outcome">What shipped</SectionTitle>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <Callout tone="neutral" title="What I can defend">
              <ul className="flex list-disc flex-col gap-2 pl-5">
                <li>Two drops end-to-end — new IA in Drop 1, refinement in Drop 2.</li>
                <li>Flag-driven offer slot live in production.</li>
                <li>Care-log signal used as a design input, not just a support metric.</li>
              </ul>
            </Callout>
            <Callout tone="warn" title="What I want to add later">
              <ul className="flex list-disc flex-col gap-2 pl-5">
                <li>Sourced before/after task-completion numbers.</li>
                <li>Care-call volume delta on targeted tasks.</li>
                <li>Direct user quotes from Drop 2 moderated sessions.</li>
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
              <strong>Run a moderated pass between drops.</strong> Analytics was strong; a handful
              of sessions would have halved Drop 2.
            </li>
            <li>
              <strong>Keep flag rules in the same file as the screens.</strong> Off-canvas rules
              made trade-offs invisible until review was over.
            </li>
            <li>
              <strong>Treat the empty state as a designed surface.</strong> Given its volume, it
              deserves the same content-design attention as the primary state.
            </li>
          </ul>
        </section>

        {/* Takeaway */}
        <section className="flex flex-col gap-4">
          <SectionLabel>My takeaway</SectionLabel>
          <SectionTitle id="takeaway">What this project sharpened in me</SectionTitle>
          <div className="flex flex-col gap-4 text-lg italic leading-7 text-black lg:text-xl">
            <p>
              Four flows on the same surface taught me to design at the level of a <em>system</em>,
              not a screen. The plan-first IA had to hold for Shop, Manage, SIM switching, SIM
              replacement — and stay legible when a flag decided which surfaced first. The craft
              I&apos;m proudest of isn&apos;t any one screen; it&apos;s that the same IA carried them all
              without special cases.
            </p>
            <p>
              The other muscle: partnering outside design. The flag rules were a value judgement
              — retention &gt; cross-sell &gt; up-sell — and defending it with growth, care, and
              engineering was as much of the work as the design. At product-scale,{' '}
              <strong>the deliverable is the alignment</strong>. Screens are the visible edge of
              it.
            </p>
          </div>
        </section>

        <ProjectFooterNav currentId="shop-manage" />
      </div>
    </div>

    <Footer />
  </main>
)

export default CaseStudyShopManage
