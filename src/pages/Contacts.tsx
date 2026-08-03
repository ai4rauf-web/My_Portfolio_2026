import { useState } from 'react'
import Footer from '../components/Footer'

// 👇 Paste your free Web3Forms access key here (get one at https://web3forms.com — enter
//    connect2rauf@gmail.com and they email you the key). It is safe to expose client-side:
//    it only permits sending messages to your verified inbox.
const WEB3FORMS_ACCESS_KEY = '12c68ab1-e66a-4707-86df-d14df379267e'

type Status = 'idle' | 'sending' | 'success' | 'error'

const contactInfo = [
  { label: 'Email', value: 'connect2rauf@gmail.com', href: 'mailto:connect2rauf@gmail.com' },
  { label: 'Call / WhatsApp', value: '+971 - 551403364', suffix: '(UAE)', href: 'tel:+971551403364' },
  { label: 'Location', value: 'Sharjah, UAE' },
]

const inputClasses =
  'w-full rounded-lg border border-transparent [background:linear-gradient(#151b1d,#151b1d)_padding-box,linear-gradient(135deg,rgba(214,214,214,0.5)_0%,rgba(150,150,150,0.18)_50%,rgba(214,214,214,0.38)_100%)_border-box] p-3 text-xl leading-8 text-white placeholder-muted outline-none ring-1 ring-transparent transition-shadow focus:ring-[#019fb9]'

const Contacts = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  const isValid = name.trim() !== '' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && message.trim() !== ''

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isValid || status === 'sending') return
    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Portfolio inquiry from ${name.trim()}`,
          from_name: name.trim(),
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
        }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
        setName('')
        setEmail('')
        setMessage('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <main className="mx-auto w-full max-w-[1243px] px-5 sm:px-8 lg:px-10">
      <h1 className="mt-12 text-[40px] leading-tight text-ink lg:mt-[72px] lg:text-[64px]">
        Let's built together..!
      </h1>
      <p className="mt-6 max-w-[927px] text-lg leading-8 text-muted lg:mt-10 lg:text-xl">
        If you have any inquiries, project proposals, or simply wish to connect, don't hesitate to
        get in touch. You can reach out me on the contact number provided or send me an email
        directly.
      </p>

      <div className="mt-10 flex flex-col gap-12 rounded-3xl bg-ink p-6 sm:p-10 lg:mt-16 lg:flex-row lg:items-start lg:justify-between lg:p-12">
        {/* Contact info */}
        <div className="flex flex-col gap-8 text-xl lg:gap-12">
          <p className="text-sm font-medium uppercase tracking-wide text-white/50">Contact details</p>
          {contactInfo.map((item) => (
            <div key={item.label} className="flex flex-col gap-1">
              <p className="leading-8 text-muted">{item.label}</p>
              {item.href ? (
                <a href={item.href} className="leading-8 text-white underline-offset-4 hover:underline">
                  {item.value}
                  {item.suffix && <span className="font-light text-white/80"> {item.suffix}</span>}
                </a>
              ) : (
                <p className="leading-8 text-white">{item.value}</p>
              )}
            </div>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4 lg:w-[505px]" noValidate>
          <p className="text-sm font-medium uppercase tracking-wide text-white/50">Send message</p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            aria-label="Name"
            className={inputClasses}
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            aria-label="Email"
            className={inputClasses}
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
            aria-label="Message"
            className={`${inputClasses} h-[200px] resize-none`}
          />
          <button
            type="submit"
            disabled={!isValid || status === 'sending'}
            className={`w-full rounded-lg bg-white p-3 text-xl font-medium leading-8 transition-all duration-300 ${
              isValid && status !== 'sending'
                ? 'text-ink hover:shadow-lg'
                : 'cursor-not-allowed text-[#707070]/60 opacity-40'
            }`}
          >
            {status === 'sending' ? 'Sending…' : 'Send Message'}
          </button>
          {status === 'success' && (
            <p className="text-base text-[#4ade80]" role="status">
              Thanks! Your message has been sent — I'll get back to you soon. 🙌
            </p>
          )}
          {status === 'error' && (
            <p className="text-base text-[#f87171]" role="alert">
              Something went wrong. Please try again, or email me directly at connect2rauf@gmail.com.
            </p>
          )}
        </form>
      </div>

      <Footer />
    </main>
  )
}

export default Contacts
