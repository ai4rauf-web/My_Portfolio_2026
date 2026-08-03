import { ArrowOutward } from './Icons'

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mohammed-rauf-5b45a186/' },
  { label: 'Instagram', href: 'https://www.instagram.com/hello2rauf/' },
]

const LinksBanner = () => (
  <div className="flex flex-col gap-2 rounded-3xl bg-banner-blue px-6 py-4 sm:flex-row sm:items-center sm:justify-between lg:px-10">
    <p className="text-base text-ink">Connect on:</p>
    <div className="flex gap-2">
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="flex items-end gap-[3px] rounded px-2 py-1 font-medium text-ink transition-colors hover:text-[#1377b0]"
        >
          <span className="underline">{link.label}</span>
          <ArrowOutward className="h-5 w-5" />
        </a>
      ))}
    </div>
  </div>
)

export default LinksBanner
