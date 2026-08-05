import gradientBlob from '../assets/figma/gradient-blob.svg'
import { OnlineDot } from './Icons'

const Hero = () => (
  <section className="relative mx-auto w-full max-w-[1243px] px-5 sm:px-8 pt-16 lg:px-10 lg:pt-20">
    <div
      aria-hidden
      className="pointer-events-none absolute left-0 top-14 h-[480px] w-[460px] max-w-full select-none motion-safe:animate-blob-drift sm:h-[520px] sm:w-[560px] lg:left-[25px] lg:top-0 lg:h-[640px] lg:w-[720px]"
    >
      <img src={gradientBlob} alt="" className="h-full w-full motion-safe:animate-blob-spin" />
    </div>
    <div className="relative">
      <div className="flex items-center gap-2">
        <OnlineDot className="h-5 w-5" />
        <p className="text-base text-online">Available for new missions</p>
      </div>
      <h1 className="mt-4 text-[32px] leading-[1.377] text-ink sm:text-[44px] lg:text-[60px]">
        Hi, I'm <span className="font-semibold">Rauf</span>{' '}
        <span className="inline-block origin-[70%_80%] motion-safe:animate-wave">👋</span>
        <br />
        <em>Product designer</em> with 10+ years turning complex enterprise problems into products
        people love — currently leading design at{' '}
        <a
          href="https://www.eand.com/en/index.html"
          target="_blank"
          rel="noreferrer"
          className="underline decoration-ink/40 underline-offset-2 transition-colors hover:text-[#1377b0] hover:decoration-[#1377b0]"
        >
          e&amp; UAE
        </a>
        .
      </h1>
      <p className="mt-12 text-lg text-charcoal sm:text-xl lg:mt-16 lg:text-2xl">
        I approach every problem with curiosity, turning complexity into interfaces people actually
        enjoy using. Previously at{' '}
        <a
          href="https://www.emerson.com/en/corporate"
          target="_blank"
          rel="noreferrer"
          className="underline decoration-charcoal/40 underline-offset-2 transition-colors hover:text-[#1377b0] hover:decoration-[#1377b0]"
        >
          Emerson
        </a>
        ,{' '}
        <a
          href="https://www.qburst.com/en-us/"
          target="_blank"
          rel="noreferrer"
          className="underline decoration-charcoal/40 underline-offset-2 transition-colors hover:text-[#1377b0] hover:decoration-[#1377b0]"
        >
          QBurst
        </a>
        , and{' '}
        <a
          href="https://www.morganmckinley.com/"
          target="_blank"
          rel="noreferrer"
          className="underline decoration-charcoal/40 underline-offset-2 transition-colors hover:text-[#1377b0] hover:decoration-[#1377b0]"
        >
          Morgan McKinley
        </a>
        , across enterprise, consulting, and a few startups along the way.
      </p>
    </div>
  </section>
)

export default Hero
