import { Link, useNavigate } from 'react-router-dom'
import { ArrowRight } from '../components/Icons'
import Footer from '../components/Footer'
import * as a from '../data/hubbitAssets'

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <p className="text-lg font-medium uppercase leading-7 text-muted underline">{children}</p>
)

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-2xl font-medium leading-7 text-ink lg:text-[28px]">{children}</h2>
)

const Body = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <p className={`text-base leading-7 text-black lg:text-lg ${className}`}>{children}</p>
)

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col gap-1 rounded-2xl bg-surface p-6">
    <span className="text-[36px] font-semibold leading-none text-ink lg:text-[44px]">{value}</span>
    <span className="text-sm leading-6 text-muted lg:text-base">{label}</span>
  </div>
)

/* Horizontal scroll strip for IA diagrams */
type StripProps = {
  bg: string
  images: { src: string; wide?: boolean }[]
  alt: string
}

const ScrollStrip = ({ bg, images, alt }: StripProps) => (
  <div className={`flex gap-4 overflow-x-auto rounded-lg p-4 lg:gap-8 lg:p-8 ${bg}`}>
    {images.map((img, i) => (
      <img
        key={i}
        src={img.src}
        alt={`${alt} ${i + 1}`}
        className="h-64 w-auto max-w-none rounded-lg sm:h-80 lg:h-[440px]"
      />
    ))}
  </div>
)

/* Evenly spaced row of phone screens on a gradient panel */
type PhoneRowProps = {
  gradient: string
  images: string[]
  alt: string
  bordered?: boolean
}

const PhoneRow = ({ gradient, images, alt, bordered }: PhoneRowProps) => (
  <div
    className="grid grid-cols-2 gap-6 rounded-3xl p-6 md:grid-cols-4 lg:gap-16 lg:p-16"
    style={{ backgroundImage: gradient }}
  >
    {images.map((src, i) => (
      <img
        key={i}
        src={src}
        alt={`${alt} ${i + 1}`}
        className={`w-full shadow-[0px_4px_14px_2px_rgba(167,184,192,0.5)] ${
          bordered ? 'rounded-lg border-2 border-black' : ''
        }`}
      />
    ))}
  </div>
)

/* Collage panel: absolutely positioned screenshots using Figma px coords converted to % */
type CollageItem = { src: string; x: number; y: number; w: number; h: number; rounded?: string }
type CollageProps = {
  gradient?: string
  bg?: string
  panelW?: number
  panelH: number
  items: CollageItem[]
  alt: string
  frames?: boolean
}

const Collage = ({ gradient, bg, panelW = 1164, panelH, items, alt, frames = true }: CollageProps) => (
  <div
    className={`relative w-full overflow-hidden rounded-lg ${bg ?? ''}`}
    style={{ aspectRatio: `${panelW} / ${panelH}`, backgroundImage: gradient }}
  >
    {items.map((it, i) => (
      <img
        key={i}
        src={it.src}
        alt={`${alt} ${i + 1}`}
        className={`absolute object-cover shadow-[0px_4px_14px_2px_rgba(167,184,192,0.5)] ${
          frames ? 'rounded-lg border border-black lg:border-2' : 'rounded-lg'
        } ${it.rounded ?? ''}`}
        style={{
          left: `${(it.x / panelW) * 100}%`,
          top: `${(it.y / panelH) * 100}%`,
          width: `${(it.w / panelW) * 100}%`,
          height: `${(it.h / panelH) * 100}%`,
        }}
      />
    ))}
  </div>
)

const blueGradient = 'linear-gradient(115deg, rgb(248, 250, 255) 0%, rgb(203, 225, 232) 100%)'
const blueGradientHiFi = 'linear-gradient(117deg, rgb(247, 250, 255) 0%, rgb(207, 227, 234) 100%)'
const greenGradient = 'linear-gradient(133deg, rgb(243, 249, 243) 0%, rgb(207, 240, 214) 100%)'
const yellowGradient = 'linear-gradient(133deg, rgb(249, 249, 243) 0%, rgb(239, 240, 207) 100%)'

const entities = [
  {
    icon: a.icons8Supplier1002,
    title: 'Supplier App',
    text: 'Used by an entity that sells products or services to other businesses(traders).',
  },
  {
    icon: a.icons8Trader641,
    title: 'Trading App',
    text: 'App for trader is to manage the buying and selling of goods from suppliers.',
  },
  {
    icon: a.icons8Admin481,
    title: 'Admin App',
    text: 'This app is for the administrative purpose like managing users, traders, vendors etc.',
  },
]

const wireframeTraderPanels: CollageItem[][] = [
  [
    { src: a.traderOfferDetailsOfferWaitingForTraderActions, x: 536, y: 156, w: 653, h: 372 },
    { src: a.traderOffers, x: 42, y: 43, w: 641, h: 365 },
  ],
  [
    { src: a.traderOfferDetailsCancelledOfferModel, x: -103, y: 27, w: 563, h: 321 },
    { src: a.traderOfferDetailsOfferWaitingForTraderActions1, x: 620, y: 77, w: 556, h: 317 },
    { src: a.traderOrderDetailsUpdatedStatus, x: 268, y: 187, w: 624, h: 356 },
  ],
]

const wireframeAdminPanels: CollageItem[][] = [
  [
    { src: a.supplierWithOfferAndCounterOfferInfo1, x: 516, y: 109, w: 628, h: 358 },
    { src: a.adminMyProfile, x: -76, y: 24, w: 611, h: 348 },
    { src: a.adminMessagesDirectMessages, x: 139, y: 242, w: 599, h: 341 },
  ],
  [
    { src: a.adminMessagesCreateNewMessageDefault, x: 48, y: 64, w: 511, h: 291 },
    { src: a.adminTradesOffersWithActiveFilters, x: 491, y: 143, w: 619, h: 397 },
  ],
  [
    { src: a.traderOrderDetails1, x: 409, y: 34, w: 733, h: 418 },
    { src: a.adminTradesOfferDetailsOfferWaitingForSupplierActions, x: 26, y: 71, w: 604, h: 344 },
  ],
]

const designSystemItems: CollageItem[] = [
  { src: a.icons1, x: 32, y: 32, w: 197, h: 232 },
  { src: a.otherElements, x: 32, y: 276, w: 334, h: 425 },
  { src: a.buttons, x: 386, y: 276, w: 283, h: 245 },
  { src: a.inputsMobile, x: 689, y: 32, w: 443, h: 351 },
  { src: a.buttons1, x: 689, y: 395, w: 443, h: 215 },
  { src: a.buttons2, x: 249, y: 32, w: 420, h: 197 },
]

const phone = { w: 207, h: 448, rounded: 'rounded-xl lg:rounded-3xl' }

const hifiSupplierPanels: CollageItem[][] = [
  [
    { src: a.signInScreen1, x: 42, y: 234, ...phone },
    { src: a.createNewPassword, x: 333, y: 49, ...phone },
    { src: a.otpVerification, x: 333, y: 551, ...phone },
    { src: a.home, x: 624, y: 433, ...phone },
    { src: a.signUp3, x: 624, y: -48, ...phone },
    { src: a.home1, x: 915, y: 73, ...phone },
    { src: a.materialPricedDetails, x: 915, y: 564, ...phone },
  ],
  [
    { src: a.openSidebar, x: 42, y: 49, ...phone },
    { src: a.preferredMaterials, x: 333, y: 157, ...phone },
    { src: a.addPreferredMaterial4, x: 42, y: 547, ...phone },
    { src: a.pickupLocations, x: 624, y: 19, ...phone },
    { src: a.notifications, x: 333, y: 648, ...phone },
    { src: a.materialsDefault, x: 915, y: 142, ...phone },
    { src: a.materialsDefault, x: 624, y: 517, ...phone },
    { src: a.dealsStartOfferFasExportReview, x: 915, y: 641, ...phone },
  ],
]

const hifiTraderPanels: CollageItem[][] = [
  [
    { src: a.traderMyProfile, x: 616, y: 41, w: 522, h: 297 },
    { src: a.traderDashboard, x: 32, y: 41, w: 472, h: 269 },
    { src: a.traderOffersTable, x: 340, y: 233, w: 483, h: 276 },
  ],
  [
    { src: a.traderCounterOfferFas2, x: -90, y: 36, w: 530, h: 301 },
    { src: a.traderOfferDetailsOfferAccepted, x: 616, y: 61, w: 522, h: 298 },
    { src: a.tradesOfferDetailsOfferWaitingForTraderActions, x: 351, y: 157, w: 553, h: 315 },
  ],
]

const hifiAdminPanels: CollageItem[][] = [
  [
    { src: a.adminDashboardDefault, x: 653, y: 196, w: 485, h: 276 },
    { src: a.loginToTheSystemFilled1, x: 20, y: 34, w: 467, h: 266 },
    { src: a.traderChat1, x: 298, y: 106, w: 500, h: 285 },
  ],
  [
    { src: a.adminMessagesCreateNewAdHocMessage, x: 27, y: 26, w: 425, h: 243 },
    { src: a.adminMessagesAttachment, x: 240, y: 197, w: 459, h: 261 },
    { src: a.adminMessagesAttachment1, x: 599, y: 23, w: 411, h: 234 },
    { src: a.adminTradesOfferDetailsOfferAccepted, x: 737, y: 249, w: 455, h: 259 },
  ],
  [
    { src: a.adminMaterialDetailsPricedMaterial, x: 124, y: 236, w: 428, h: 244 },
    { src: a.adminTradesSupplierDetails, x: 23, y: 24, w: 394, h: 225 },
    { src: a.adminVendorDetails, x: 704, y: 205, w: 443, h: 253 },
    { src: a.adminUserManagement, x: 480, y: 24, w: 432, h: 246 },
  ],
]

const CaseStudyHubbit = () => {
  const navigate = useNavigate()

  return (
    <main className="mx-auto w-full max-w-[1243px] px-5 sm:px-8 lg:px-10">
      {/* Back + title */}
      <button
        onClick={() => (window.history.length > 1 ? navigate(-1) : navigate('/'))}
        className="mt-10 flex items-center gap-2 text-muted transition-colors hover:text-ink lg:mt-16"
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
          <path
            d="M12 22c-1.383 0-2.683-.263-3.9-.788a10.1 10.1 0 0 1-3.175-2.137c-.9-.9-1.612-1.958-2.137-3.175A9.74 9.74 0 0 1 2 12c0-1.383.263-2.683.788-3.9a10.1 10.1 0 0 1 2.137-3.175c.9-.9 1.958-1.612 3.175-2.137A9.74 9.74 0 0 1 12 2c1.383 0 2.683.263 3.9.788a10.1 10.1 0 0 1 3.175 2.137c.9.9 1.613 1.958 2.138 3.175A9.74 9.74 0 0 1 22 12a9.74 9.74 0 0 1-.787 3.9 10.1 10.1 0 0 1-2.138 3.175c-.9.9-1.958 1.613-3.175 2.138A9.74 9.74 0 0 1 12 22Zm0-2c2.233 0 4.125-.775 5.675-2.325C19.225 16.125 20 14.233 20 12c0-2.233-.775-4.125-2.325-5.675C16.125 4.775 14.233 4 12 4c-2.233 0-4.125.775-5.675 2.325C4.775 7.875 4 9.767 4 12c0 2.233.775 4.125 2.325 5.675C7.875 19.225 9.767 20 12 20Zm-.9-7h5.4a.968.968 0 0 0 .713-.287A.968.968 0 0 0 17.5 12a.968.968 0 0 0-.287-.713.968.968 0 0 0-.713-.287h-5.4l1.7-1.7a.948.948 0 0 0 .275-.7.948.948 0 0 0-.275-.7.948.948 0 0 0-.7-.275.948.948 0 0 0-.7.275l-3.4 3.4a.948.948 0 0 0-.275.7c0 .283.092.517.275.7l3.4 3.4c.183.183.417.275.7.275.283 0 .517-.092.7-.275a.948.948 0 0 0 .275-.7.948.948 0 0 0-.275-.7l-1.7-1.7Z"
            fill="currentColor"
          />
        </svg>
        <span className="text-base">Back</span>
      </button>

      <p className="mt-6 text-xl text-[#019fb9] lg:mt-7 lg:text-2xl">Product Design Case study</p>
      <h1 className="mt-2 max-w-[928px] text-[32px] font-medium leading-tight text-ink lg:text-[48px]">
        B2B application for traders &amp; suppliers
      </h1>

      {/* Hero mockup */}
      <div className="mt-10 overflow-hidden rounded-3xl lg:mt-12">
        <img src={a.moke3} alt="Hubbit app on a tablet" className="aspect-[1163/580] w-full object-cover" />
      </div>

      {/* Overview + client/skills */}
      <div className="mt-12 flex flex-col gap-10 lg:flex-row lg:justify-between">
        <div className="flex max-w-[691px] flex-col gap-2">
          <SectionLabel>Overview</SectionLabel>
          <p className="text-xl leading-8 text-[#019fb9] lg:text-[28px] lg:leading-10">
            HubbIT is a B2B mobile application and the objective of the application is to streamline
            the bidding and purchase process of material between suppliers and buyers. The
            application intends to eliminate the paper-intensive process and replace it with a
            technology-driven streamlined approach, in turn generating more revenue and reduced
            operational costs.
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-10 lg:w-[332px] lg:gap-12">
          <div className="flex flex-col gap-2">
            <SectionLabel>Client</SectionLabel>
            <a
              href="https://www.hubbitgpr.com/"
              target="_blank"
              rel="noreferrer"
              className="text-lg leading-7 text-black underline hover:text-[#019fb9]"
            >
              www.hubbitgpr.com
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <SectionLabel>My Role</SectionLabel>
            <Body>Lead Product Designer</Body>
          </div>
          <div className="flex flex-col gap-2">
            <SectionLabel>Team</SectionLabel>
            <Body>Product Owner, Project Manager, 2 Senior Designers, 2 Junior Designers</Body>
          </div>
          <div className="flex flex-col gap-2">
            <SectionLabel>Skills</SectionLabel>
            <Body>
              Product Design Consultation, User Research, KPI Improvements, Design System, Visual
              Design, Prototyping, Dev Handoff
            </Body>
          </div>
        </div>
      </div>

      {/* Metrics */}
      <div className="mt-12 grid grid-cols-2 gap-4 lg:mt-16 lg:grid-cols-4">
        <Stat value="40%" label="increase in conversion rate" />
        <Stat value="30%" label="increase in user adoption" />
        <Stat value="3" label="connected apps designed — supplier, trader, admin" />
        <Stat value="5" label="designers on the team, which I led" />
      </div>

      {/* The brief */}
      <div className="mt-16 flex flex-col gap-2 lg:mt-24">
        <SectionLabel>The Brief</SectionLabel>
        <Body>
          I joined as the lead product designer to enhance the existing product, and took ownership of
          the design direction end to end. I brought in valuable product-design insights and set up a
          system to evaluate the product's performance and its potential for enhancement — while leading
          and mentoring a team of four designers through the process.
        </Body>
        <Body>
          I drove several stages of user research, organised the information architecture, sketched the
          wireframes, and ran user tests. My core UX contribution was a fully interactive wireframe
          built in Figma, along with the high-fidelity designs and prototypes. I defined the key
          performance indicators (KPIs) to track user experience and designed the user-friendly
          dashboards that let business owners monitor their orders, status, and performance in
          real-time.
        </Body>
      </div>

      {/* Existing product study */}
      <div className="mt-16 flex flex-col gap-3 lg:mt-24">
        <SectionTitle>Scrutinising the existing product and flaws in it.</SectionTitle>
        <Body>
          Once we developed a roadmap for project execution, our initial step involved studying and
          documenting the user flows of the existing apps. This allowed us to thoroughly investigate
          and address the challenges faced by users. Below is the flow diagram we produced to
          illustrate this process.
        </Body>
      </div>

      {/* Entities */}
      <div className="mt-14 flex flex-col gap-6 lg:mt-16">
        <SectionTitle>Entities</SectionTitle>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:gap-5">
          {entities.map((e) => (
            <div key={e.title} className="flex flex-col gap-3">
              <img src={e.icon} alt="" className="h-16 w-16 rounded-lg object-cover" aria-hidden />
              <div className="mt-1 flex flex-col gap-1">
                <p className="text-lg font-semibold leading-6 text-black">{e.title}</p>
                <p className="text-base leading-6 text-muted">{e.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* IA 1.0 */}
      <div className="mt-14 flex flex-col gap-4 lg:mt-16">
        <SectionLabel>Supplier App Map (existing app + new features from Excel doc)</SectionLabel>
        <ScrollStrip
          bg="bg-[#fafafa]"
          alt="Existing supplier app IA diagram"
          images={[
            { src: a.ia },
            { src: a.ia1 },
            { src: a.ia2 },
            { src: a.ia3 },
            { src: a.ia4 },
          ]}
        />
      </div>

      {/* IA 2.0 */}
      <div className="mt-16 flex flex-col gap-3 lg:mt-20">
        <SectionLabel>Supplier App Map (Rethinking)</SectionLabel>
        <Body>
          Rethinking user flow IA diagram means reassessing and possibly redesigning the diagram
          that illustrates the flow of interactions within a system or application, as well as the
          organization of information within it. This process involves analyzing the current diagram
          to identify any shortcomings or areas for improvement and then making adjustments or
          creating a new diagram that better aligns with the desired user experience or
          functionality goals. This involved reevaluating user pathways, restructuring information
          hierarchy, and refining the overall visual representation to enhance usability and
          clarity. Below images represent the redefined structure of the IA diagram, after research
          and exploration.
        </Body>
        <div className="mt-2">
          <ScrollStrip
            bg="bg-[#b5e9b7]"
            alt="Redefined supplier app IA diagram"
            images={[
              { src: a.ia001 },
              { src: a.ia01 },
              { src: a.ia02 },
              { src: a.ia03 },
              { src: a.ia04 },
              { src: a.ia05 },
            ]}
          />
        </div>
      </div>

      {/* Wireframes */}
      <div className="mt-16 flex flex-col gap-3 lg:mt-24">
        <SectionTitle>Creating the wireframe</SectionTitle>
        <Body>
          After finalizing the Information Architecture (IA), which outlines the structure and
          organization of content within the application, we translated this into a wireframe
          format. By converting the IA into wireframes, we created a tangible prototype that users
          could interact with during testing. This allowed us to gather feedback on the navigation,
          layout, and overall user experience before proceeding to the final design stage.
        </Body>
      </div>

      <div className="mt-12 flex flex-col gap-4 lg:mt-16">
        <SectionLabel>wireframe - Supplier App</SectionLabel>
        <Body>
          Here are several screens extracted from the wireframe of the supplier app for your review.
        </Body>
        <div className="flex flex-col gap-6">
          <PhoneRow
            gradient={blueGradient}
            alt="Supplier app wireframe"
            images={[
              a.signInScreen,
              a.passwordSentToEmaiIncorrectlyCode1,
              a.passwordSentToEmaiIncorrectlyCode,
              a.passwordSentToEmaiIncorrectlyCode,
            ]}
          />
          <PhoneRow
            gradient={blueGradient}
            bordered
            alt="Supplier app wireframe"
            images={[
              a.postFirstDealAndFirstOfferLogin,
              a.homeScreenPreFirstDealOrOfferLogin,
              a.messagesActive,
              a.chatWithGpTrader,
            ]}
          />
          <PhoneRow
            gradient={blueGradient}
            bordered
            alt="Supplier app wireframe"
            images={[
              a.allDealStartOrderFasExportChangeMinWeightOutOfRange,
              a.myTradeDefault,
              a.myTradeOffersMakeAnOfferChooseMaterial3,
              a.myTradeOrdersFiltersDefault,
            ]}
          />
        </div>
      </div>

      <div className="mt-16 flex flex-col gap-4 lg:mt-20">
        <SectionLabel>wireframe - Trader App</SectionLabel>
        <Body>Listing the screens of trader web app. The app is fully responsive as well.</Body>
        <div className="flex flex-col gap-6">
          {wireframeTraderPanels.map((items, i) => (
            <Collage key={i} gradient={yellowGradient} panelH={497} items={items} alt="Trader app wireframe" />
          ))}
        </div>
      </div>

      <div className="mt-16 flex flex-col gap-4 lg:mt-20">
        <SectionLabel>wireframe - Admin App</SectionLabel>
        <Body>Here is the screenshots of admin web app</Body>
        <div className="flex flex-col gap-6">
          {wireframeAdminPanels.map((items, i) => (
            <Collage key={i} gradient={greenGradient} panelH={497} items={items} alt="Admin app wireframe" />
          ))}
        </div>
      </div>

      {/* Design system */}
      <div className="mt-16 flex flex-col gap-4 lg:mt-24">
        <SectionLabel>Style guide / Design System</SectionLabel>
        <Body>
          Following the creation of wireframes, we conducted user testing and incorporated their
          feedback to enhance the design. Subsequently, we initiated the development of style guides
          and a design system to craft high-fidelity designs for the products.
        </Body>
        <Collage bg="bg-[#f8f8f8]" panelH={733} items={designSystemItems} alt="Design system" frames={false} />
      </div>

      {/* High fidelity */}
      <div className="mt-16 flex flex-col gap-4 lg:mt-24">
        <SectionLabel>High fidelity design</SectionLabel>
        <div className="flex flex-col gap-3">
          <SectionTitle>Supplier App (Mobile)</SectionTitle>
          <Body>
            After wireframe iteration, created the high fidelity design and prototype for the app.
            Here are the few screens from the supplier mobile app.
          </Body>
        </div>
        <div className="flex flex-col gap-6">
          {hifiSupplierPanels.map((items, i) => (
            <Collage key={i} gradient={blueGradientHiFi} panelH={917} items={items} alt="Supplier app high fidelity" />
          ))}
        </div>
      </div>

      <div className="mt-16 flex flex-col gap-4 lg:mt-20">
        <div className="flex flex-col gap-3">
          <SectionTitle>Trader App</SectionTitle>
          <Body>Developed the high fidelity visual design for the trader app.</Body>
        </div>
        <div className="flex flex-col gap-6">
          {hifiTraderPanels.map((items, i) => (
            <Collage key={i} gradient={yellowGradient} panelH={497} items={items} alt="Trader app high fidelity" />
          ))}
        </div>
      </div>

      <div className="mt-16 flex flex-col gap-4 lg:mt-20">
        <div className="flex flex-col gap-3">
          <SectionTitle>Admin App</SectionTitle>
          <Body>
            Designed the hih fidelity version of the admin application and created prototype for
            testing and later hand-off to the dev team. Here are te few mockup screen as shown
            below.
          </Body>
        </div>
        <div className="flex flex-col gap-6">
          {hifiAdminPanels.map((items, i) => (
            <Collage key={i} gradient={greenGradient} panelH={497} items={items} alt="Admin app high fidelity" />
          ))}
        </div>
      </div>

      {/* Responsive design */}
      <div className="mt-16 flex flex-col gap-4 lg:mt-24">
        <SectionTitle>Responsive Design</SectionTitle>
        <Body>
          Created responsive design of the application so that it adapts and functions optimally
          across various devices and screen sizes. This ensures that users have a consistent and
          seamless experience regardless of whether they access the application on a desktop
          computer, tablet, or mobile phone. It involves utilizing flexible layouts, images, and
          breakpoints to adjust the presentation and behavior of the application based on the
          characteristics of the device being used. The goal is to provide users with an intuitive
          and user-friendly interface that remains accessible and easy to use across different
          devices and platforms.
        </Body>
        <div className="flex flex-col gap-6 sm:flex-row">
          <img src={a.image26} alt="Responsive design preview" className="w-full rounded-lg object-cover sm:w-[48%]" />
          <img src={a.image25} alt="Responsive design preview" className="w-full rounded-lg object-cover sm:w-[50%]" />
        </div>
      </div>

      {/* Client quote */}
      <div className="mt-16 flex flex-col gap-6 lg:mt-24 lg:gap-8">
        <SectionTitle>What the client says..</SectionTitle>
        <div className="flex max-w-[895px] gap-4 lg:gap-5">
          <img src={a.quote} alt="" className="h-6 w-9 shrink-0 lg:h-[30px] lg:w-[43px]" aria-hidden />
          <p className="text-lg leading-7 text-black lg:text-xl">
            We needed help improving the engagement and adoption of our mobile apps. The team
            offered really useful, data-driven insights into what we could do better, and then they
            brought it all to life.
            <br />
            <br />
            We're really happy with our new app, adoption is up, and our whole experience with the
            team was really pleasant. Highly recommended.
          </p>
        </div>
      </div>

      {/* Product beauty shot */}
      <div className="mt-16 overflow-hidden rounded-3xl lg:mt-20 lg:max-w-[1025px]">
        <img src={a.mokeThumb12} alt="Hubbit app final design" className="aspect-[1025/640] w-full object-cover" />
      </div>

      {/* Result */}
      <div className="mt-16 flex flex-col gap-4 lg:mt-24">
        <SectionTitle>Result</SectionTitle>
        <ul className="flex list-disc flex-col gap-2 pl-6 text-base leading-7 text-black lg:text-lg">
          <li>
            we've observed significant improvements across key metrics. Our conversion rate has
            surged by 40%, indicating a more streamlined and engaging user experience.
          </li>
          <li>
            Additionally, user adoption rates have increased by 30%, highlighting the effectiveness
            of the new features and design elements in capturing user interest. Overall, these
            enhancements have not only boosted conversion rates but also fostered greater user
            adoption, ultimately driving increased sales and customer engagement on the platform.
          </li>
        </ul>
      </div>

      {/* Takeaway */}
      <div className="mt-12 flex flex-col gap-4 lg:mt-16">
        <SectionTitle>My Takeaway</SectionTitle>
        <div className="flex flex-col gap-4 text-lg italic leading-7 text-black lg:text-xl">
          <p>
            My most significant takeaway from this project is the profound impact that thoughtful,
            user-centric design can have on business outcomes. By keeping user needs and pain points at
            the centre of every decision, I was able to not only enhance the overall user experience but
            also drive tangible results such as increased conversion rates and user adoption.
          </p>
          <p>
            Leading and mentoring a team of four designers also stretched me beyond craft into
            direction — aligning the team on a shared vision, giving feedback that raised the bar, and
            making the calls that kept us moving. It taught me that owning the outcome means growing the
            people delivering it, not just the pixels.
          </p>
        </div>
      </div>

      {/* Prev / next navigation */}
      <div className="mt-16 flex items-center justify-between lg:mt-24">
        <Link
          to="/"
          className="group/btn flex items-center gap-1 rounded-full border border-[#019fb9] bg-white py-2 pl-3 pr-4 transition-shadow duration-300 hover:shadow-md"
        >
          <ArrowRight className="h-6 w-6 rotate-180 text-ink transition-transform duration-300 group-hover/btn:-translate-x-1" />
          <span className="text-base text-ink">Home</span>
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

export default CaseStudyHubbit
