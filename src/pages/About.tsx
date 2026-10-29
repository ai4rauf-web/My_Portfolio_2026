import { useRef, useState } from 'react'
import Footer from '../components/Footer'
import { ClaudeLogo, ClickUpLogo, FigmaLogo, GitLogo, KimiLogo, TerminalLogo, VercelLogo } from '../components/Icons'
import higgsfieldLogo from '../assets/tools/higgsfield.png'
import wisprFlowLogo from '../assets/tools/wisprflow.png'
import rauf from '../assets/about/rauf.jpg'
import hub71Hackathon from '../assets/about/activities/hub71-hackathon.jpg'
import arrowCircleRight from '../assets/about/arrow-circle-right.svg'
import logoEand from '../assets/about/logo-eand.png'
import logoEmerson from '../assets/about/logo-emerson.png'
import logoUniqlo from '../assets/about/logo-uniqlo.png'
import logoKerala from '../assets/about/logo-kerala.png'
import logoLashic from '../assets/about/logo-lashic.png'
import logoQburst from '../assets/about/logo-qburst.png'
import logoDolphin from '../assets/about/logo-dolphin.png'
import logoFlashat from '../assets/about/logo-flashat.png'
import logoHubbit from '../assets/about/logo-hubbit.png'
import logoAnywhere from '../assets/about/logo-anywhere.png'
import logoEandColor from '../assets/about/logo-eand-color.png'
import logoEmersonColor from '../assets/about/logo-emerson-color.png'
import logoUniqloColor from '../assets/about/logo-uniqlo-color.png'
import logoKeralaColor from '../assets/about/logo-kerala-color.png'
import logoLashicColor from '../assets/about/logo-lashic-color.png'
import logoQburstColor from '../assets/about/logo-qburst-color.png'
import logoDolphinColor from '../assets/about/logo-dolphin-color.png'
import logoFlashatColor from '../assets/about/logo-flashat-color.png'
import logoHubbitColor from '../assets/about/logo-hubbit-color.png'
import logoAnywhereColor from '../assets/about/logo-anywhere-color.png'

const clientLogos = [
  { src: logoEand, color: logoEandColor, alt: 'e&', h: 'h-[45px]' },
  { src: logoEmerson, color: logoEmersonColor, alt: 'Emerson', h: 'h-[64px]' },
  { src: logoUniqlo, color: logoUniqloColor, alt: 'UNIQLO', h: 'h-[54px]' },
  { src: logoKerala, color: logoKeralaColor, alt: 'Government of Kerala', h: 'h-[64px]' },
  { src: logoLashic, color: logoLashicColor, alt: 'Lashic', h: 'h-[36px]' },
  { src: logoQburst, color: logoQburstColor, alt: 'QBurst', h: 'h-[54px]' },
  { src: logoDolphin, color: logoDolphinColor, alt: 'Dolphin Digital Signage Solutions', h: 'h-[56px]' },
  { src: logoFlashat, color: logoFlashatColor, alt: 'Flashat', h: 'h-[64px]' },
  { src: logoHubbit, color: logoHubbitColor, alt: 'Hubbit', h: 'h-[54px]' },
  { src: logoAnywhere, color: logoAnywhereColor, alt: 'Anywhere Auctions', h: 'h-[48px]' },
]

// Auto-looping logo strip — the list is duplicated once so translating the
// track by exactly -50% loops seamlessly. Hovering pauses it so a visitor
// can rest on a logo and see its colour reveal.
const LogoMarquee = () => (
  <div className="group/marquee relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
    <div className="flex w-max animate-marquee items-center gap-16 group-hover/marquee:[animation-play-state:paused]">
      {[...clientLogos, ...clientLogos].map((logo, i) => (
        <div key={`${logo.alt}-${i}`} className="group flex h-[75px] shrink-0 items-center">
          <div className="relative">
            <img
              src={logo.src}
              alt={i < clientLogos.length ? logo.alt : ''}
              aria-hidden={i >= clientLogos.length}
              className={`${logo.h} w-auto max-w-[140px] object-contain transition-opacity duration-300 group-hover:opacity-0`}
            />
            <img
              src={logo.color}
              alt=""
              aria-hidden
              className={`${logo.h} absolute inset-0 w-auto max-w-[140px] object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
)

type ApproachCard = { title: string; text: string }

const approaches: { key: string; label: string; cards: ApproachCard[] }[] = [
  {
    key: 'new',
    label: 'AI Approach',
    cards: [
      {
        title: 'Explore with AI',
        text: 'Research, ideation, and exploration happen in conversation with AI — fast, divergent, and cheap to iterate on.',
      },
      {
        title: 'Design in code',
        text: 'I generate and refine the design directly, working in tools like Claude Code rather than static mockups alone.',
      },
      {
        title: 'Ship, not just hand off',
        text: 'Work is pushed to Git and deployed as part of the same flow — design and delivery happen together.',
      },
    ],
  },
  {
    key: 'old',
    label: 'Conventional Approach',
    cards: [
      {
        title: 'Research & interviews',
        text: 'Understand real users through interviews and field research before any solutioning begins.',
      },
      {
        title: 'Ideation',
        text: 'Turn findings into problem statements, personas, and early concepts.',
      },
      {
        title: 'Wireframes & UI in Figma',
        text: 'Structure the flow in wireframes, then design high-fidelity interfaces.',
      },
      {
        title: 'Developer handoff',
        text: 'Deliver specs, assets, and prototypes for engineering to build.',
      },
    ],
  },
]

const tools = [
  { name: 'Claude', text: "The best design partner that doesn't have opinions about fonts.", icon: ClaudeLogo },
  { name: 'Kimi', text: 'A second opinion when Claude and I disagree.', icon: KimiLogo },
  { name: 'Figma/Figjam', text: 'Where the thinking — and the mess — happens before the code does.', icon: FigmaLogo },
  { name: 'Terminal', text: 'Where design turns into something real.', icon: TerminalLogo },
  { name: 'Git', text: 'Version control for decisions, not just code.', icon: GitLogo },
  { name: 'Vercel', text: 'From `git push` to live in about a minute.', icon: VercelLogo },
  { name: 'Wispr Flow', text: "I don't type much anymore — I just talk.", image: wisprFlowLogo },
  { name: 'Higgsfield', text: 'AI video, without the render farm.', image: higgsfieldLogo },
  { name: 'ClickUp', text: 'Where the roadmap lives, when it needs to live somewhere.', icon: ClickUpLogo },
]

const linkCards = [
  {
    label: 'Download CV',
    href: 'https://drive.google.com/file/d/1aY41eRi9nb4R2bv1-C5SNpq9nDQk5eFE/view?usp=sharing',
    text: 'Discover my resume to delve deeper into my design background, skills, and professional experience.',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mohammed-rauf-5b45a186/',
    text: 'Connect me and stay informed about my recent professional accomplishments and career advancements.',
  },
]

type Activity = {
  key: string
  title: string
  meta: string
  image?: string
  imageAlt?: string
  state: 'live' | 'draft'
  body: React.ReactNode
}

const activities: Activity[] = [
  {
    key: 'hub71-hackathon',
    title: 'Hub71+ AI Hackathon',
    meta: 'Abu Dhabi · Oct 2026',
    image: hub71Hackathon,
    imageAlt: 'Hub71+ AI Hackathon in Abu Dhabi — on stage, speakers, teams building',
    state: 'live',
    body: (
      <>
        <p>
          Earlier this month, I spent a day at the Hub71+ AI Hackathon, supported by{' '}
          <a
            href="https://www.linkedin.com/company/openai/"
            target="_blank"
            rel="noreferrer"
            className="text-ink underline decoration-ink/30 underline-offset-2 transition-colors hover:text-tag-blue hover:decoration-tag-blue"
          >
            OpenAI
          </a>
          .
        </p>
        <p>
          69 teams, over 90 builders, and one brief. What stayed with me most was how differently
          everyone approached the same problem. I learned a lot just from the conversations between
          building sessions with bright people from all over the world.
        </p>
        <p>
          A real learning curve, and a great experience. Thank you,{' '}
          <a
            href="https://www.linkedin.com/company/hub71ad/"
            target="_blank"
            rel="noreferrer"
            className="text-ink underline decoration-ink/30 underline-offset-2 transition-colors hover:text-tag-blue hover:decoration-tag-blue"
          >
            Hub71
          </a>
          , for creating spaces like this. Looking forward to the next one.
        </p>
      </>
    ),
  },
  {
    key: 'ghost-village-rak',
    title: 'Hiking to Ghost Village',
    meta: 'Ras Al Khaimah',
    state: 'draft',
    body: <p>A day trip to the abandoned stone village in the Hajar mountains. Writing it up with photos soon.</p>,
  },
]

const About = () => {
  const [activeApproach, setActiveApproach] = useState(approaches[0].key)
  const current = approaches.find((a) => a.key === activeApproach)!
  const activitiesScrollerRef = useRef<HTMLDivElement>(null)

  return (
    <main className="mx-auto w-full max-w-[1243px] px-5 sm:px-8 lg:px-10">
      {/* Hero: photo + bio, side by side on desktop */}
      <div className="mt-12 flex flex-col gap-10 lg:mt-[100px] lg:flex-row lg:items-start lg:gap-[42px]">
        <div className="shrink-0">
          <div className="relative h-[240px] w-[240px] overflow-hidden rounded-full lg:h-[300px] lg:w-[300px]">
            <img
              src={rauf}
              alt="Portrait of Rauf"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col gap-8 lg:max-w-[680px]">
          <h1 className="text-[32px] text-ink lg:text-[48px]">
            <span className="font-semibold">Hey, I'm Rauf</span> 👋
          </h1>
          <div className="flex flex-col gap-7 text-base leading-7 text-muted lg:text-lg">
            <p>
              Product Designer based in UAE. I'm passionate about improving the way people interact
              with the digital realm to make their daily tasks more meaningful. Most recently I led
              design at Etisalat UAE (e&amp;) across four product areas, shaping the next generation
              of digital products experiences.
            </p>
            <p>
              I embarked on my professional journey at Morgan McKinley as a Data Process Engineer.
              Driven by my passion for problem-solving through design, transitioning to design roles
              in startups, I cultivated creative skills and dived into product design. Design is my
              intellectual playground, connecting businesses and users effectively.
            </p>
            <p>
              In my offline life, I find joy in taking long drives, hiking, practicing organic
              farming, spending time with family and friends, and experiencing the magic of music.
              When I'm not immersed in the world of design, you can usually find me on a culinary
              adventure, discovering new flavours and delights during my travels.
            </p>
          </div>
        </div>
      </div>

      {/* Full width — client logos */}
      <div className="mt-16 flex flex-col gap-6 lg:mt-24">
        <p className="text-lg font-medium italic leading-7 text-muted">
          Listing few of the clients which I am fortunate to work for
        </p>
        <LogoMarquee />
      </div>

      {/* Full width — How I work */}
      <div className="mt-16 flex flex-col gap-6 lg:mt-24">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium uppercase tracking-wide text-muted">Approach</p>
          <h2 className="text-[26px] font-semibold text-charcoal lg:text-[32px]">How I work</h2>
          <p className="max-w-[680px] text-base text-muted lg:text-lg">
            In practice, I use a hybrid of both — leaning into whichever fits the use case and the
            problem at hand.
          </p>
        </div>

        <div className="flex gap-2">
          {approaches.map((a) => (
            <button
              key={a.key}
              type="button"
              onClick={() => setActiveApproach(a.key)}
              className={`rounded-full border px-4 py-2 text-base transition-colors duration-200 ${
                activeApproach === a.key
                  ? 'border-ink bg-ink text-white'
                  : 'border-[#949494]/60 bg-white text-muted hover:border-ink hover:text-ink'
              }`}
            >
              {a.label}
            </button>
          ))}
        </div>

        <div key={activeApproach} className="approach-fade grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {current.cards.map((card) => (
            <div key={card.title} className="flex flex-col gap-2 rounded-2xl bg-surface p-6">
              <p className="text-lg font-semibold text-ink">{card.title}</p>
              <p className="text-base leading-6 text-muted">{card.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Full width — Tools */}
      <div className="mt-16 flex flex-col gap-6 lg:mt-24">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium uppercase tracking-wide text-muted">Tools</p>
          <h2 className="text-[26px] font-semibold text-charcoal lg:text-[32px]">Things I love</h2>
        </div>

        <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <div key={tool.name} className="flex gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-surface">
                {tool.icon ? <tool.icon className="h-5 w-5 text-ink" /> : <img src={tool.image} alt="" className="h-full w-full object-cover" />}
              </span>
              <div className="flex flex-col gap-1">
                <p className="text-lg font-semibold text-ink">{tool.name}</p>
                <p className="text-base leading-6 text-muted">{tool.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full width — Activities (horizontal carousel) */}
      <div className="mt-16 flex flex-col gap-6 lg:mt-24">
        <div className="flex items-end justify-between gap-6">
          <div className="flex flex-col gap-2">
            <p className="text-sm font-medium uppercase tracking-wide text-muted">Activities</p>
            <h2 className="text-[26px] font-semibold text-charcoal lg:text-[32px]">Beyond the screen</h2>
            <p className="max-w-[680px] text-base text-muted lg:text-lg">
              Hackathons I showed up to, walks and hikes I logged, places I went. Fresh things keep landing here.
            </p>
          </div>
          <div className="flex shrink-0 gap-2">
            <button
              type="button"
              onClick={() => activitiesScrollerRef.current?.scrollBy({ left: -activitiesScrollerRef.current.clientWidth * 0.85, behavior: 'smooth' })}
              aria-label="Scroll activities left"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#838282]/40 text-ink transition-colors hover:border-ink hover:bg-ink hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-tag-blue"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
            </button>
            <button
              type="button"
              onClick={() => activitiesScrollerRef.current?.scrollBy({ left: activitiesScrollerRef.current.clientWidth * 0.85, behavior: 'smooth' })}
              aria-label="Scroll activities right"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#838282]/40 text-ink transition-colors hover:border-ink hover:bg-ink hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-tag-blue"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
            </button>
          </div>
        </div>

        <div
          ref={activitiesScrollerRef}
          className="-mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-5 pb-2 sm:-mx-8 sm:px-8 lg:-mx-10 lg:px-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {activities.map((a) => (
            <article
              key={a.key}
              className={`flex shrink-0 snap-start flex-col overflow-hidden rounded-2xl border transition-all duration-200 w-[85%] sm:w-[460px] lg:w-[520px] ${
                a.state === 'draft'
                  ? 'border-dashed border-[#c9c9c9] bg-[#fafafa]'
                  : 'border-[#e8e8e8] bg-white hover:shadow-md'
              }`}
            >
              {a.image ? (
                <img
                  src={a.image}
                  alt={a.imageAlt ?? a.title}
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="flex aspect-[4/3] w-full items-center justify-center bg-surface text-muted">
                  <div className="flex flex-col items-center gap-2 text-center">
                    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-5-5L5 21" /></svg>
                    <span className="text-sm">Photos coming soon</span>
                  </div>
                </div>
              )}

              <div className="flex flex-col gap-2 p-6">
                <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted">
                  <span>{a.meta}</span>
                  {a.state === 'draft' && (
                    <span className="rounded-full border border-[#c9c9c9] bg-white px-2 py-0.5 normal-case">
                      Coming soon
                    </span>
                  )}
                </div>
                <h3
                  className={`text-xl font-semibold ${
                    a.state === 'draft' ? 'text-muted' : 'text-ink'
                  }`}
                >
                  {a.title}
                </h3>
                <div
                  className={`flex flex-col gap-3 text-base leading-7 ${
                    a.state === 'draft' ? 'text-muted/80' : 'text-muted'
                  }`}
                >
                  {a.body}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Full width — links */}
      <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-24">
        {linkCards.map((card) => (
          <a
            key={card.label}
            href={card.href}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col gap-2 rounded-xl border border-[#838282]/30 px-4 py-3 transition-all duration-300 hover:border-[#838282]/60 hover:shadow-md"
          >
            <span className="flex items-center gap-2">
              <span className="text-lg leading-7 text-ink underline">{card.label}</span>
              <img
                src={arrowCircleRight}
                alt=""
                className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden
              />
            </span>
            <span className="text-base text-muted">{card.text}</span>
          </a>
        ))}
      </div>

      <Footer />
    </main>
  )
}

export default About
