import CTASection from '../components/CTASection'
import Footer from '../components/Footer'
import rauf from '../assets/about/rauf.png'
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

const linkCards = [
  {
    label: 'Download CV',
    href: 'https://drive.google.com/file/d/1t3HcBD6mH3hZTyIvRLsQUCeXI0_o_f7i/view?usp=sharing',
    text: 'Discover my resume to delve deeper into my design background, skills, and professional experience.',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mohammed-rauf-5b45a186/',
    text: 'Connect me and stay informed about my recent professional accomplishments and career advancements.',
  },
  {
    label: 'Behance',
    href: 'https://www.behance.net/raufn',
    text: 'Discover my creative playground, where I present my design explorations.',
  },
  {
    label: 'Dribbble',
    href: 'https://dribbble.com/mohd_rauf',
    text: 'Discover my creative realm, where I exhibit my design explorations and experiments.',
  },
]

const About = () => (
  <main className="mx-auto w-full max-w-[1243px] px-5 sm:px-8 lg:px-10">
    <div className="mt-12 flex flex-col gap-10 lg:mt-[100px] lg:flex-row lg:gap-[42px]">
      {/* Profile photo */}
      <div className="shrink-0">
        <div className="relative h-[240px] w-[240px] overflow-hidden rounded-full lg:h-[300px] lg:w-[300px]">
          <img
            src={rauf}
            alt="Portrait of Rauf"
            className="absolute left-[-8%] top-[-14.9%] h-[146%] w-[110%] max-w-none object-cover"
          />
        </div>
      </div>

      {/* Bio + logos + links */}
      <div className="flex max-w-[809px] flex-col gap-12 lg:gap-16">
        <div className="flex flex-col gap-8">
          <h1 className="text-[32px] text-ink lg:text-[48px]">
            <span className="font-semibold">Hey, I'm Rauf</span> 👋
          </h1>
          <div className="flex flex-col gap-7 text-base leading-7 text-muted lg:text-lg">
            <p>
              Product Designer based in UAE. I'm passionate about improving the way people interact
              with the digital realm to make their daily tasks more meaningful. Currently, I'm at
              e&amp;, leading the design team in shaping the next generation of digital products
              experiences.
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

        <p className="text-lg font-medium italic leading-7 text-muted">
          Listing few of the clients which I am fortunate to work for
        </p>

        <div className="grid grid-cols-2 items-center justify-items-start gap-x-10 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
          {clientLogos.map((logo) => (
            <div key={logo.alt} className="group flex h-[75px] items-center">
              <div className="relative">
                <img
                  src={logo.src}
                  alt={logo.alt}
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

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
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
      </div>
    </div>

    <div className="mt-16 lg:mt-24">
      <CTASection />
    </div>

    <Footer />
  </main>
)

export default About
