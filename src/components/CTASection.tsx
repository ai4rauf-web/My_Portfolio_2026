import { Link } from 'react-router-dom'
import { Handshake } from './Icons'

const CTASection = () => (
  <div className="flex flex-col items-start gap-6 rounded-3xl border border-[#949494] bg-surface p-6 lg:flex-row lg:items-center lg:justify-between lg:p-10">
    <p className="text-[28px] leading-tight text-ink sm:text-[36px] lg:text-[48px]">
      Let's create something together..!
    </p>
    <Link
      to="/contacts"
      className="flex shrink-0 items-center gap-2 rounded-full bg-ink px-5 py-4 text-xl text-white transition-opacity hover:opacity-85"
    >
      Say Hello
      <Handshake className="h-6 w-6" />
    </Link>
  </div>
)

export default CTASection
