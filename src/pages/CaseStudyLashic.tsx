import { Link, useNavigate } from 'react-router-dom'
import { ArrowRight } from '../components/Icons'
import Footer from '../components/Footer'
import * as a from '../data/lashicAssets'
import quote from '../assets/hubbit/quote.svg'

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

type CollageItem = {
  src: string
  x: number
  y: number
  w: number
  h: number
  frame?: boolean
  className?: string
}
type CollageProps = {
  gradient?: string
  bg?: string
  panelW?: number
  panelH: number
  items: CollageItem[]
  alt: string
  rounded?: string
  shadow?: string
}

const Collage = ({
  gradient,
  bg,
  panelW = 1164,
  panelH,
  items,
  alt,
  rounded = 'rounded-lg',
  shadow = 'shadow-[0px_4px_14px_2px_rgba(0,0,0,0.05)]',
}: CollageProps) => (
  <div
    className={`relative w-full overflow-hidden ${rounded} ${bg ?? ''}`}
    style={{ aspectRatio: `${panelW} / ${panelH}`, backgroundImage: gradient }}
  >
    {items.map((it, i) => (
      <img
        key={i}
        src={it.src}
        alt={`${alt} ${i + 1}`}
        className={`absolute rounded-lg object-cover object-top ${shadow} ${
          it.frame ? 'border border-black lg:border-2' : ''
        } ${it.className ?? ''}`}
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

const smGradient = 'linear-gradient(133deg, rgb(255, 255, 255) 0%, rgb(198, 204, 208) 100%)'
const adminGradient1 = 'linear-gradient(133deg, rgb(255, 255, 255) 0%, rgb(140, 190, 223) 100%)'
const adminGradient2 = 'linear-gradient(133deg, rgb(255, 255, 255) 0%, rgb(229, 243, 252) 100%)'

const terms = [
  {
    img: a.image14,
    title: 'Care Giver (CG)',
    text: 'The person/nurse who take care the older people/the customers/patient in the facility.',
  },
  {
    img: a.image15,
    title: 'Care Receiver (CR)',
    text: 'The person who is admitted and gets care services from the facility.',
  },
  {
    img: a.image16,
    title: 'Service Manager (SM)',
    text: 'The person/nurse who take care the older people/the customers/patient in the facility.',
  },
  {
    img: a.image18,
    title: 'Admin',
    text: 'The person who is a top level manager, who manage all SM’s and the facilities.',
  },
  {
    img: a.image17,
    title: 'Family',
    text: 'The family of Care receiver.',
  },
  {
    img: a.image19,
    title: 'Guest',
    text: 'The person who is visiting the care receiver.',
  },
]

const workingDay = [
  { time: '06:00', task: 'Reach care centre and start shift' },
  { time: '06:10', task: 'Morning checkups & assisting all' },
  { time: '06:30', task: 'Breakfast & medication' },
  { time: '08:00', task: 'Group activities & light exercise with residents' },
  { time: '10:00', task: 'Assist baths to residents.' },
  { time: '12:00', task: 'Lunch & medication assist' },
  { time: '13:00', task: 'Assist residents to bed' },
  { time: '15:00', task: 'Evening checkup & tea time discussions' },
  { time: '16:00', task: 'Shift ends' },
]

const researchCollage: CollageItem[] = [
  { src: a.image9, x: 679, y: 16, w: 468, h: 284, className: 'rounded-xl' },
  { src: a.image20, x: 16, y: 16, w: 443, h: 242 },
  { src: a.image24, x: 389, y: 51, w: 422, h: 230 },
  { src: a.image22, x: 55, y: 220, w: 387, h: 211, className: 'rounded-xl' },
  { src: a.image21, x: 389, y: 322, w: 398, h: 217 },
  { src: a.image10, x: 26, y: 352, w: 323, h: 210 },
  { src: a.image23, x: 722, y: 326, w: 425, h: 232 },
]

const designSystemItems: CollageItem[] = [
  { src: a.colors, x: 0, y: 0, w: 289, h: 321 },
  { src: a.textStylesCjk, x: 316, y: 0, w: 479, h: 561 },
  { src: a.accordion, x: 823, y: 0, w: 340, h: 460 },
  { src: a.textStylesLatin, x: 0, y: 343, w: 289, h: 340 },
  { src: a.button1, x: 433, y: 432, w: 730, h: 229 },
  { src: a.card, x: 0, y: 626, w: 580, h: 324 },
  { src: a.buttonIcon, x: 474, y: 729, w: 425, h: 191 },
  { src: a.size, x: 798, y: 694, w: 365, h: 256 },
]

const serviceManagerPanels: CollageItem[][] = [
  [
    { src: a.s15AHelpCentre, x: 710, y: 45, w: 512, h: 364 },
    { src: a.s01JPasswordResetNewPasswordComplete, x: 253, y: 137, w: 550, h: 390 },
    { src: a.s01FLoginActive, x: -43, y: 21, w: 476, h: 338 },
  ],
  [
    { src: a.s02ADashboardCompactView, x: 29, y: 25, w: 520, h: 447 },
    { src: a.s02GDashboardDetailsCrSensorInfo, x: 645, y: 25, w: 490, h: 691 },
  ],
  [
    { src: a.s04G2ReportsConsultationDvf, x: 551, y: 56, w: 592, h: 385 },
    { src: a.s02HDashboardDetailsCrAlerts, x: 25, y: 26, w: 499, h: 502 },
  ],
  [
    { src: a.s03BAlertsMultiSelect, x: 33, y: 34, w: 625, h: 526 },
    { src: a.s14AFacilityManagement, x: 703, y: 92, w: 623, h: 639 },
  ],
]

const cgMobileScreens = [
  a.s02ELLoginResetPasswordInvalidEmail,
  a.s02ELoginResetPasswordInvalidEmail,
  a.s02KNewPasswordActive1,
  a.s02KNewPasswordActive,
  a.s14ASettings,
  a.s03ALAlertsList,
  a.s03AAlertsList1,
  a.s04ATask1,
  a.s04C1MealsListing1,
  a.s04C3MealsFoodDefault2,
]

const CaseStudyLashic = () => {
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

      <p className="mt-6 text-xl text-[#019fb9] lg:mt-7 lg:text-2xl">UX / UI Case study</p>
      <h1 className="mt-2 max-w-[928px] text-[32px] font-medium leading-tight text-ink lg:text-[48px]">
        Designing for emergency response
      </h1>

      {/* Hero mockup */}
      <div className="mt-10 overflow-hidden rounded-3xl lg:mt-12">
        <img
          src={a.inficaThumb2}
          alt="Lashic sensor and app"
          className="aspect-[1163/580] w-full object-cover"
        />
      </div>

      {/* Overview + client/skills */}
      <div className="mt-12 flex flex-col gap-10 lg:flex-row lg:justify-between">
        <div className="flex max-w-[691px] flex-col gap-2">
          <SectionLabel>Overview</SectionLabel>
          <p className="text-xl leading-8 text-[#019fb9] lg:text-[28px] lg:leading-10">
            A company that creates IoT sensors to track human vitals like heart rate, temperature,
            sleep, etc. discovered that their devices, which have the ability to detect emergencies
            and possibly save lives, were failing to do so. Their software solution was at fault. We
            are assigned to revamp the software and designs.
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-10 lg:w-[332px] lg:gap-12">
          <div className="flex flex-col gap-2">
            <SectionLabel>Client</SectionLabel>
            <a
              href="https://lashic.jp/"
              target="_blank"
              rel="noreferrer"
              className="text-base leading-7 text-black underline decoration-[#019fb9]/40 underline-offset-2 transition-colors hover:text-[#019fb9] hover:decoration-[#019fb9] lg:text-lg"
            >
              Lashic Japan (Infic.Inc)
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <SectionLabel>My Role</SectionLabel>
            <Body>Lead Product Designer — leading a team of 2 junior designers</Body>
          </div>
          <div className="flex flex-col gap-2">
            <SectionLabel>Team</SectionLabel>
            <Body>Product Owner, Project Manager, Business Analyst, Engineering Squad, Designer(s)</Body>
          </div>
          <div className="flex flex-col gap-2">
            <SectionLabel>Skills</SectionLabel>
            <Body>
              Product Discovery, User Research, Concept Development, Design System, Visual Design,
              Prototyping, Dev Handoff
            </Body>
          </div>
        </div>
      </div>

      {/* Metrics */}
      <div className="mt-12 grid grid-cols-2 gap-4 lg:mt-16 lg:grid-cols-4">
        <Stat value="50%" label="reduction in user errors post-launch" />
        <Stat value="40%" label="increase in user satisfaction & efficiency" />
        <Stat value="3" label="connected apps designed — caregiver, service manager, admin" />
        <Stat value="CJK" label="localised for Chinese, Japanese & Korean users" />
      </div>

      {/* Terms used */}
      <div className="mt-16 flex flex-col gap-6 lg:mt-20">
        <SectionLabel>Terms Used (Personas)</SectionLabel>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {terms.map((t) => (
            <div key={t.title} className="flex flex-col gap-4">
              <div className="flex h-24 items-end">
                <img src={t.img} alt="" className="max-h-24 w-auto" aria-hidden />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-lg font-semibold leading-6 text-black">{t.title}</p>
                <p className="max-w-[336px] text-base leading-6 text-muted">{t.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* The brief */}
      <div className="mt-16 flex flex-col gap-2 lg:mt-24">
        <SectionLabel>The Brief</SectionLabel>
        <Body>
          Our team was tasked to identify what caused the gap between caregiver (CG) and their
          residents (CR's) vitals. Also find more user friendly solution for recording and verifying
          each and every tasks/vitals in the facility. We dived deep into use cases, scenarios, and
          the very busy schedule of caregivers. The sensor devices are used in elderly care
          facilities where residents are monitored round the clock by caregivers. We spent around 2
          months in multiple rounds of user research, mapping information architecture, sketching
          out wireframes, and user testing. Our final UX deliverable was a fully interactive
          medium-fidelity wireframe created in Figma and the high fidelity designs and prototypes
          also were created in Figma.
        </Body>
      </div>

      {/* Insights */}
      <div className="mt-16 flex flex-col gap-4 lg:mt-24">
        <SectionTitle>Turning multiple documents into bite-sized insights.</SectionTitle>
        <div className="flex flex-col gap-2 text-base leading-7 text-black lg:text-lg">
          <p>
            A massive PRD (Project Requirement Document) was shared to us which detailed what is
            currently in place, what their business goals are moving forward, and the effect they
            hope to achieve.
          </p>
          <p>Here's what they had:</p>
          <ul className="list-disc pl-6">
            <li>
              A web app was already in place to receive notifications from sensors but the CG's
              weren't using it. A mobile app was also in place to receive alerts but CG found it
              more inconvenient than useful.
            </li>
            <li>
              They want to help CG's save time by presenting information in a way that is usable and
              suggest possible health threats before it happened.
            </li>
            <li>
              Upgrade their hardware based on any of the issues &amp; solutions we identify during
              user research.
            </li>
            <li>
              Improve communication between CG's and family members of the elderly residents/CR's.
            </li>
          </ul>
          <p>This project was exciting from the get-go. Tackling real problems for real users.</p>
        </div>
        <img
          src={a.image3}
          alt="Documents turned into organised insights"
          className="mt-4 w-full max-w-[868px] rounded-3xl object-cover lg:aspect-[868/530]"
        />
      </div>

      {/* Who are we designing for */}
      <div className="mt-16 flex flex-col gap-4 lg:mt-24">
        <SectionTitle>Who are we designing for?</SectionTitle>
        <ol className="list-decimal pl-6 text-lg font-medium leading-7 text-[#019fb9]">
          <li>CARE GIVERS - Mobile /Tablet App</li>
          <li>SERVICE MANAGERS - Web App</li>
          <li>ADMINS - Web APP</li>
        </ol>
        <img
          src={a.image6}
          alt="Care givers at work"
          className="w-full max-w-[834px] rounded-3xl object-cover lg:aspect-[834/263]"
        />
        <div className="flex flex-col gap-2 text-base leading-7 text-black lg:text-lg">
          <p>
            The catch: They don't speak English. We're designing an apps in CJK (Chinese, Japanese,
            and Korean).
          </p>
          <p>
            All our research questions were created in English, translated to CJK, and shared with
            the client. The actual interview was done by the client, results translated to English
            and shared back to us. Yes, there was a lot of back and forth but it was so exciting
            that we were more than happy to do it.
          </p>
          <p>The client recruited 6 willing CG's/nurses for short Zoom calls to get our questions answered.</p>
        </div>
      </div>

      {/* Research collage */}
      <div className="mt-12 lg:mt-16">
        <Collage
          bg="bg-[#f4f4f4]"
          panelW={1163}
          panelH={578}
          items={researchCollage}
          alt="User research artifacts"
          rounded="rounded-3xl"
          shadow="shadow-[0px_4px_14px_0px_rgba(0,0,0,0.25)]"
        />
      </div>

      {/* Assumptions */}
      <div className="mt-16 flex flex-col gap-4 lg:mt-24">
        <SectionLabel>The assumptions we were testing through user research:</SectionLabel>
        <div className="flex flex-col gap-4 text-base leading-7 text-black lg:text-lg">
          <p>
            1. The web app was not being used because the elderly care centre had only one computer
            on each floor and they were too busy attending to residents. The computer is checked
            only when CG's go to the station for medicines or refills.
          </p>
          <p>
            2. The mobile app receives calls from the elderly/CR's, but it was ineffective as all
            caregivers share the same app account and have common company-sponsored mobiles.
          </p>
          <p>
            3. Features like viewing 24-hour graphs of the vitals will be useful as they can share
            it with doctors during checkups.
          </p>
        </div>
      </div>

      {/* Persona */}
      <div className="mt-16 flex flex-col gap-4 lg:mt-24">
        <SectionLabel>Persona</SectionLabel>
        <div className="flex flex-col gap-10 rounded-3xl bg-surface p-6 lg:gap-16 lg:p-10">
          <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:gap-[100px]">
            <div className="flex shrink-0 flex-col items-center gap-1">
              <img src={a.ellipse6} alt="Haruto Itsuki" className="h-[160px] w-[160px] rounded-full object-cover lg:h-[200px] lg:w-[200px]" />
              <p className="mt-1 text-xl font-bold text-ink">Haruto Itsuki</p>
              <p className="text-base leading-6 text-muted">Care giver</p>
            </div>
            <div className="relative pl-8 lg:pl-10">
              <span className="absolute left-0 top-[-10px] font-sans text-[60px] leading-none text-black lg:text-[80px]">
                &ldquo;
              </span>
              <p className="max-w-[671px] text-xl font-medium leading-relaxed text-ink lg:text-2xl lg:leading-9">
                I work all-time as a care giver at this centre. I make sure that all care receivers
                are happy and staying healthy.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-10 lg:flex-row">
            <div className="flex flex-col gap-10 lg:gap-16">
              <div className="flex flex-col gap-3">
                <p className="text-lg font-bold leading-6 text-ink">GOALS</p>
                <ul className="flex max-w-[550px] list-disc flex-col gap-3 pl-6 text-lg text-muted">
                  <li>Respond to any health emergencies on time.</li>
                  <li>Provide insight to doctors and help them diagnose issues.</li>
                  <li>Keep an eye on vitals like pulse, body temperature, Vitals etc</li>
                </ul>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-lg font-bold leading-6 text-ink">PAIN POINTS</p>
                <ul className="flex max-w-[550px] list-disc flex-col gap-3 pl-6 text-lg text-muted">
                  <li>The web app in use is not available on his phone so she cannot track on frequently.</li>
                  <li>Not enough time to visit every resident at night for every checkups.</li>
                  <li>
                    The current mobile app does have enough features to assist him in detecting
                    emergencies.
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex shrink-0 flex-col gap-5 rounded-[20px] border border-[#b8b8b8] bg-[#fafafa] p-4 lg:w-[486px]">
              <p className="text-xl font-bold leading-6 text-ink">A typical working day</p>
              <div className="flex flex-col gap-2">
                {workingDay.map((row) => (
                  <div key={row.time} className="flex items-center gap-2">
                    <span className="shrink-0 rounded bg-[#019fb9] px-2 py-1 text-base text-white">
                      {row.time}
                    </span>
                    <span className="text-base text-charcoal">{row.task}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How might we + user flow */}
      <div className="mt-16 flex flex-col gap-10 lg:mt-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-3 lg:w-[451px] lg:shrink-0">
          <SectionTitle>How might we?</SectionTitle>
          <div className="text-base leading-7 text-black lg:text-lg">
            <p>1. How might we help nurses assist elders promptly?</p>
            <p>2. How might we stay out of their way at all other times?</p>
          </div>
          <img
            src={a.image4}
            alt="How might we sketch"
            className="mt-2 w-full max-w-[423px] rounded-2xl object-cover lg:aspect-[423/340]"
          />
        </div>
        <div className="flex flex-col gap-2 lg:w-[529px]">
          <SectionLabel>Sketching a user flow to map an intuitive, obstacle free path</SectionLabel>
          <Body>
            We started with the happy path and then looked at all possible edge cases. After
            multiple iterations here's the user flow that impressed the team and stakeholders.
          </Body>
        </div>
      </div>
      <div className="mt-10 flex flex-col gap-6 lg:mt-12">
        <img src={a.image7} alt="User flow diagram part 1" className="w-full rounded-lg" />
        <img src={a.image25} alt="User flow diagram part 2" className="w-full rounded-lg" />
      </div>

      {/* Wireframes */}
      <div className="mt-16 flex flex-col gap-2 lg:mt-24">
        <SectionLabel>Show me some screens</SectionLabel>
        <Body>
          It was time to bring out the drawing tools. I created medium-fidelity wireframes using
          Axure RP. The screenshots you see below are the polished version created after many
          internal iterations.
        </Body>
        <div className="mt-4 flex flex-col items-start bg-[#f4ece6] pb-5">
          <img src={a.image12} alt="Wireframe screens 1" className="w-full max-w-[980px]" />
          <img src={a.image13} alt="Wireframe screens 2" className="w-full max-w-[980px]" />
        </div>
      </div>

      {/* User testing */}
      <div className="mt-16 flex flex-col gap-4 lg:mt-24">
        <SectionTitle>We took everything we created, back to the user</SectionTitle>
        <div className="flex flex-col gap-5 text-base leading-7 text-black lg:text-lg">
          <p>
            Our users are extremely strapped for time (did i say that already?) but fortunately, our
            app is also a simple one. So we gave just two tasks in a remote usability test to 6
            participants.
          </p>
          <p>
            1. Let's say you are at the end of your night shift and you opened this app to do the
            final night check of residents. Using this interface can you tell us who all are in/out
            of bed?
            <br />
            The insight: All participants were able to quickly and accurately understand the
            information, however, we discovered that there is an additional check they do at night.
            It is the presence/absence of residents in the room. So, if a resident is absent in bed,
            they check whether they are in the room or not.
          </p>
          <p>
            2. You are at the nursing station and hear the alert tone, what would you do?
            <br />
            The insight: "Swipe" gesture for actions was not intuitive for participants. Even when
            swipe was specified as a possible action (as it will be shown during onboarding), 90% of
            participants still felt that it is "faster" to tap than swipe.
            <br />
            Bonus insight: Currently when a mild medical emergency occurs, the nurses take care of
            residents first and then message the family of residents via WhatsApp/Line. In the case
            of major medical issues, they inform family via call.
          </p>
          <p>
            The downside they face in using WhatsApp/Line is that not all nurses have the family
            contact numbers. Emergencies may occur during anyone's duty time. So having the option
            to contact family within the app is a nice to have.
          </p>
          <p>
            With all this new information we went back to the drawing board, moved things around,
            brainstormed, updated the architecture and reflected them on the wireframes.
          </p>
        </div>
      </div>

      {/* Final look */}
      <div className="mt-16 flex flex-col gap-2 lg:mt-24">
        <SectionLabel>The final look</SectionLabel>
        <div className="flex flex-col items-start bg-[#f4ece6] pb-5">
          <img src={a.image11} alt="Final design overview" className="w-full max-w-[980px]" />
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-4 text-base leading-7 text-black lg:mt-16 lg:text-lg">
        <p>
          When most apps are about capturing user attention and providing value, apps in the medical
          field are about how far away we can keep our users from us. Every single second is too
          precious and we simply cannot afford to take it away from their work.
        </p>
        <p>
          Our backend teammates went on to build the back-end technical architecture for the app. Me
          and my design colleagues started creating the visual designs and created a design system
          for the product.
        </p>
      </div>

      {/* Design system */}
      <div className="mt-16 flex flex-col gap-4 lg:mt-24">
        <SectionLabel>Design System</SectionLabel>
        <Collage
          bg="bg-white"
          panelW={1163}
          panelH={950}
          items={designSystemItems}
          alt="Design system"
          shadow="shadow-none"
        />
        <div className="flex flex-col gap-4 text-base leading-7 text-black lg:text-lg">
          <p>
            Design Systems are structured collections of reusable design components and elements. We
            used them to create a consistent and cohesive user experience across a range of all
            Lashic products or services. It is like a set of building blocks and rules for creating
            digital products like websites and apps. Design systems are made up of key elements like
            typography, color palette, icons, spacing and layout, and so on.
          </p>
          <p>Design systems helped us to maintain efficiency, collaboration, consistency, scalability etc</p>
        </div>
      </div>

      {/* High fidelity */}
      <div className="mt-16 flex flex-col gap-4 lg:mt-24">
        <SectionLabel>High fidelity design</SectionLabel>
        <div className="flex flex-col gap-3">
          <SectionTitle>Care Giver's App (Mobile)</SectionTitle>
          <Body className="text-muted">
            After taking the review/testing, we iterated the screens and created the high fidelity
            design and prototype for the app. We overhauled the existing mobile app with both native
            and custom solutions to ensure the new version was compatible with both iOS and Android
            platforms. We collaborated heavily with the Crisp team to ensure the new design would
            resonate with its worldwide audience. This involved focusing heavily on spacing,
            typography and colour systems for improved user experience which also maximised
            function. Here are the few screens for the CG Mobile app (Latin &amp; Japanese version)
          </Body>
        </div>
      </div>

      {/* CG mobile full-bleed scroll strip */}
      <div className="relative left-1/2 mt-8 w-screen -translate-x-1/2">
        <div className="flex gap-6 overflow-x-auto bg-[#f3f6f8] px-5 py-8 sm:px-8 lg:gap-10 lg:px-[max(calc((100vw-1163px)/2),40px)]">
          {cgMobileScreens.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Care giver mobile app screen ${i + 1}`}
              className="h-[380px] w-auto shrink-0 rounded-lg border border-[#dcdcdc] shadow-[0px_4px_14px_2px_rgba(0,0,0,0.05)] lg:h-[445px]"
            />
          ))}
        </div>
      </div>

      {/* Service manager app */}
      <div className="mt-16 flex flex-col gap-4 lg:mt-20">
        <div className="flex flex-col gap-3">
          <SectionTitle>Service Manager's App</SectionTitle>
          <Body className="text-muted">
            Each centre/unit have an operational managers aka, service managers. For tracking and
            monitoring the CG tasks and updating the SM web-app is utilised very effectively. Here
            are the few HF screenshots for the service manager app.
          </Body>
        </div>
        <div className="flex flex-col gap-6 lg:gap-8">
          {serviceManagerPanels.map((items, i) => (
            <Collage
              key={i}
              gradient={smGradient}
              panelH={497}
              items={items}
              alt="Service manager app"
              rounded={i === 0 ? 'rounded-2xl' : 'rounded-lg'}
            />
          ))}
        </div>
      </div>

      {/* Admin app */}
      <div className="mt-16 flex flex-col gap-4 lg:mt-20">
        <div className="flex flex-col gap-3">
          <SectionTitle>Admins's App</SectionTitle>
          <Body className="text-muted">Here are the few HF screenshots for the Admin web app.</Body>
        </div>
        <div className="flex flex-col gap-6 lg:gap-8">
          <div
            className="relative w-full overflow-hidden rounded-lg"
            style={{ aspectRatio: '1164 / 497', backgroundImage: adminGradient1 }}
          >
            <img
              src={a.vector3}
              alt=""
              aria-hidden
              className="absolute left-[-1%] top-[47.9%] h-[53.7%] w-[101%] max-w-none"
            />
            <img
              src={a.mockupAdmijn12}
              alt="Admin app on a laptop"
              className="absolute left-[31.4%] top-[-2.6%] h-[123.3%] w-[87.1%] object-cover object-top"
            />
            <img
              src={a.s03CEditInventorySensor}
              alt="Edit inventory sensor screen"
              className="absolute left-[3.9%] top-[10.7%] h-[78.9%] w-[41%] rounded-lg border border-black object-cover object-top shadow-[0px_4px_14px_2px_rgba(0,0,0,0.05)] lg:border-2"
            />
          </div>
          <Collage
            gradient={adminGradient2}
            panelH={497}
            items={[
              { src: a.admin21, x: -175, y: -116, w: 951, h: 713 },
              { src: a.s01ACompaniesExpanded, x: 685, y: 59, w: 498, h: 397, frame: true },
            ]}
            alt="Admin app"
          />
        </div>
      </div>

      {/* Reviews */}
      <div className="mt-16 flex flex-col gap-6 lg:mt-24 lg:gap-8">
        <SectionTitle>Reviews from final user testing</SectionTitle>
        <div className="flex max-w-[895px] flex-col gap-6">
          <div className="flex gap-4 lg:gap-5">
            <img src={quote} alt="" className="h-6 w-9 shrink-0 lg:h-[30px] lg:w-[43px]" aria-hidden />
            <p className="text-lg leading-7 text-black lg:text-xl">
              This alert system is so much better now! Before, we had to run to a desktop when an
              alert sound was heard. It was so stressful. We never know if it's just a warning or an
              emergency.
            </p>
          </div>
          <div className="flex gap-4 lg:gap-5">
            <img src={quote} alt="" className="h-6 w-9 shrink-0 lg:h-[30px] lg:w-[43px]" aria-hidden />
            <p className="text-lg leading-7 text-black lg:text-xl">
              We will save so much time with this app. Whenever companies approach us with new apps
              we are always hesitant at first because we are so busy and we don't have time to sit
              and use their apps. But this one will actually help us.
            </p>
          </div>
        </div>
      </div>

      {/* Result */}
      <div className="mt-16 flex flex-col gap-4 lg:mt-20">
        <SectionTitle>Result</SectionTitle>
        <ul className="flex list-disc flex-col gap-2 pl-6 text-base leading-7 text-black lg:text-lg">
          <li>50% reduction in user errors.</li>
          <li>40% increase in user satisfaction and efficiency, according to post-launch surveys.</li>
        </ul>
      </div>

      {/* Takeaway */}
      <div className="mt-12 flex flex-col gap-4 lg:mt-16">
        <SectionTitle>My Takeaway</SectionTitle>
        <div className="text-lg italic leading-7 text-black lg:text-xl">
          <p>
            My biggest takeaway from doing this project was that design is truly iterative.
            Sometimes we get stuck trying to find the *perfect* positions or the *perfect* words but
            the truth is, only the users know what's working and what isn't.
          </p>
          <p className="font-semibold">When it doubt, get data, iterate</p>
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
          to="/"
          className="group/btn flex items-center gap-1 rounded-full border border-[#019fb9] bg-white py-2 pl-4 pr-3 transition-shadow duration-300 hover:shadow-md"
        >
          <span className="text-base text-ink">Home</span>
          <ArrowRight className="h-6 w-6 text-ink transition-transform duration-300 group-hover/btn:translate-x-1" />
        </Link>
      </div>

      <Footer />
    </main>
  )
}

export default CaseStudyLashic
