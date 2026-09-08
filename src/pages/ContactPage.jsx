import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/common/Icon'
import Reveal from '../components/common/Reveal'
import { BRAND } from '../constants/brand'
import { ROUTES } from '../constants/navigation'
import { openLiveChat } from '../lib/liveChat'
import { sendContactLead } from '../lib/sendContactLead'
import {
  CONTACT_DETAILS,
  CONTACT_FAQS,
  CONTACT_IMAGES,
  CONTACT_REASONS,
} from '../data/contact'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  company: '',
  budget: '',
  reason: CONTACT_REASONS[0],
  message: '',
}

export default function ContactPage() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [submittedName, setSubmittedName] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const successRef = useRef(null)

  useEffect(() => {
    if (!submitted) return
    successRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }, [submitted])

  function updateField(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }))
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }))
    if (submitError) setSubmitError('')
  }

  function validate() {
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your name'
    if (!form.email.trim()) next.email = 'Please enter your email'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email'
    if (!form.phone.trim()) next.phone = 'Please enter your phone number'
    else if (!/^[\d\s+().-]{7,20}$/.test(form.phone.trim())) {
      next.phone = 'Enter a valid phone number'
    }
    if (!form.message.trim() || form.message.trim().length < 20) {
      next.message = 'Tell us a bit more (at least 20 characters)'
    }
    return next
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const next = validate()
    setErrors(next)
    setSubmitError('')
    if (Object.keys(next).length) return

    const nameSnapshot = form.name.trim()
    setSubmitting(true)
    try {
      await sendContactLead(form)
      setSubmittedName(nameSnapshot)
      setSubmitted(true)
      setForm(initialForm)
    } catch (err) {
      setSubmitError(err?.message || 'Could not send your message. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="contact-hero relative min-h-[520px] flex items-center px-margin-desktop overflow-hidden">
        <div className="contact-hero-media absolute inset-0 pointer-events-none">
          <img
            src={CONTACT_IMAGES.office}
            alt=""
            className="contact-hero-photo absolute inset-0 w-full h-full object-cover"
          />
          <div className="contact-hero-veil absolute inset-0" />
          <div className="contact-hero-fade absolute inset-0" />
          <div className="contact-hero-glow absolute bottom-0 right-0 w-[520px] h-[520px] rounded-full blur-[140px]" />
        </div>
        <div className="contact-hero-copy relative z-10 max-w-[1440px] mx-auto w-full py-xxl">
          <p className="hero-enter font-label-caps text-label-caps text-primary-container mb-md tracking-[0.18em]">
            LET&apos;S BUILD SOMETHING EXCEPTIONAL
          </p>
          <h1 className="hero-enter hero-enter-delay-1 font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface max-w-[860px] mb-lg">
            Contact NEUTRIX -{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F6EFF] via-[#8B5CF6] to-[#C084FC]">
              your next growth partner
            </span>
          </h1>
          <p className="hero-enter hero-enter-delay-2 font-body-lg text-body-lg text-on-surface-variant max-w-[620px]">
            Tell us about your project. We&apos;ll respond within one business day with clear next steps
            and a free consultation.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-xxl px-margin-desktop">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-5 gap-xxl">
          {/* Form */}
          <Reveal className="lg:col-span-3" variant="left">
            <div className="glass-card rounded-xl p-xl md:p-xxl border border-outline-variant/30">
              {submitted ? (
                <div
                  ref={successRef}
                  className="text-center py-xxl px-md"
                  role="status"
                  aria-live="polite"
                >
                  <div className="w-20 h-20 mx-auto mb-lg rounded-full bg-primary-container/15 border border-primary-container/40 flex items-center justify-center">
                    <Icon name="check_circle" className="text-primary-container text-[44px]" />
                  </div>
                  <p className="font-label-caps text-label-caps text-primary-container mb-sm tracking-[0.16em]">
                    SUCCESS
                  </p>
                  <h2 className="font-headline-md text-[28px] md:text-[32px] text-on-surface mb-md">
                    Message sent successfully
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-xl max-w-[32rem] mx-auto">
                    {submittedName ? `Thanks, ${submittedName}! ` : 'Thanks! '}
                    Your inquiry is with our team. A strategist from NEUTRIX will contact you shortly
                    to schedule your free consultation.
                  </p>
                  <div className="inline-flex items-center gap-sm rounded-lg border border-primary-container/35 bg-primary-container/10 px-lg py-md mb-xl text-primary-container font-body-sm text-[14px]">
                    <Icon name="mark_email_read" className="text-[20px]" />
                    We usually reply within one business day
                  </div>
                  <div>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false)
                        setSubmittedName('')
                      }}
                      className="border border-primary-container text-primary-container font-headline-sm px-xl py-md rounded hover:bg-primary-container/10 transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <h2 className="font-headline-md text-[28px] md:text-[32px] text-on-surface mb-sm">
                    Project inquiry
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-xl">
                    Share a few details and we&apos;ll craft a tailored proposal.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-lg" noValidate>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                      <Field
                        label="Full name"
                        id="name"
                        value={form.name}
                        error={errors.name}
                        onChange={(v) => updateField('name', v)}
                        placeholder="Alex Rivera"
                      />
                      <Field
                        label="Work email"
                        id="email"
                        type="email"
                        value={form.email}
                        error={errors.email}
                        onChange={(v) => updateField('email', v)}
                        placeholder="alex@company.com"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                      <Field
                        label="Phone number"
                        id="phone"
                        type="tel"
                        value={form.phone}
                        error={errors.phone}
                        onChange={(v) => updateField('phone', v)}
                        placeholder="Your phone number"
                      />
                      <Field
                        label="Company"
                        id="company"
                        value={form.company}
                        onChange={(v) => updateField('company', v)}
                        placeholder="Your company"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                      <Field
                        label="Estimated budget"
                        id="budget"
                        value={form.budget}
                        onChange={(v) => updateField('budget', v)}
                        placeholder="$5k – $25k+"
                      />
                      <div>
                        <label htmlFor="reason" className="font-label-caps text-label-caps text-on-surface-variant block mb-sm">
                          What do you need?
                        </label>
                        <select
                          id="reason"
                          value={form.reason}
                          onChange={(e) => updateField('reason', e.target.value)}
                          className="w-full bg-surface-container-low border border-outline-variant/40 rounded-lg px-md py-md text-on-surface focus:outline-none focus:border-primary-container transition-colors"
                        >
                          {CONTACT_REASONS.map((reason) => (
                            <option key={reason} value={reason}>
                              {reason}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="font-label-caps text-label-caps text-on-surface-variant block mb-sm">
                        Project details
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        value={form.message}
                        onChange={(e) => updateField('message', e.target.value)}
                        placeholder="Goals, timeline, links, or anything we should know..."
                        className={`w-full bg-surface-container-low border rounded-lg px-md py-md text-on-surface focus:outline-none transition-colors resize-y min-h-[140px] ${
                          errors.message ? 'border-error' : 'border-outline-variant/40 focus:border-primary-container'
                        }`}
                      />
                      {errors.message && (
                        <p className="text-error font-body-sm text-body-sm mt-xs">{errors.message}</p>
                      )}
                    </div>
                    {submitError && (
                      <p className="text-error font-body-sm text-body-sm" role="alert">
                        {submitError}
                      </p>
                    )}
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full md:w-auto bg-primary-container text-on-primary-fixed font-headline-sm px-xxl py-lg rounded-lg cyber-glow transition-transform hover:scale-[1.02] disabled:opacity-70"
                    >
                      {submitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                </>
              )}
            </div>
          </Reveal>

          {/* Side panel */}
          <div className="lg:col-span-2 space-y-lg">
            <Reveal variant="right" delay={80}>
              <div className="glass-card rounded-xl overflow-hidden">
                <img
                  src={CONTACT_IMAGES.team}
                  alt="Neutrix Lab team collaborating"
                  className="w-full h-[220px] object-cover"
                />
                <div className="p-lg">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-sm">
                    Talk to a strategist
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-lg">
                    No pressure pitch - just clarity on scope, timeline, and the best path to launch.
                  </p>
                  <button
                    type="button"
                    onClick={() => openLiveChat()}
                    className="mb-lg w-full flex items-center justify-center gap-sm bg-primary-container text-on-primary-fixed font-headline-sm px-lg py-md rounded-lg cyber-glow transition-transform hover:scale-[1.02]"
                  >
                    <Icon name="chat" className="text-[20px]" />
                    Start live chat
                  </button>
                  <div className="space-y-md">
                    {CONTACT_DETAILS.map((item) => (
                      <div key={item.label} className="flex items-start gap-md">
                        <div className="w-10 h-10 rounded-full bg-primary-container/10 border border-primary-container/30 flex items-center justify-center shrink-0">
                          <Icon name={item.icon} className="text-primary-container text-[20px]" />
                        </div>
                        <div>
                          <p className="font-label-caps text-label-caps text-on-surface-variant mb-xs">
                            {item.label}
                          </p>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="font-body-md text-body-md text-on-surface hover:text-primary-container transition-colors"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="font-body-md text-body-md text-on-surface">{item.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal variant="right" delay={140}>
              <div className="relative rounded-xl overflow-hidden glass-card h-[220px]">
                <img
                  src={CONTACT_IMAGES.mapStyle}
                  alt="Studio location city view"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-background/55" />
                <div className="absolute bottom-lg left-lg right-lg">
                  <p className="font-label-caps text-label-caps text-primary-container mb-xs">STUDIO</p>
                  <p className="font-headline-sm text-on-surface">{BRAND.location}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-xxl px-margin-desktop">
        <div className="max-w-[1440px] mx-auto">
          <Reveal className="text-center mb-xl">
            <h2 className="font-headline-md text-[32px] text-on-surface mb-sm">Before you write</h2>
            <p className="text-on-surface-variant font-body-lg">Quick answers to common questions.</p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md max-w-[1200px] mx-auto">
            {CONTACT_FAQS.map((item, i) => (
              <Reveal key={item.q} delay={i * 80}>
                <div className="glass-card rounded-lg p-lg h-full">
                  <h3 className="font-headline-sm text-on-surface mb-sm">{item.q}</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{item.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-xxl px-margin-desktop bg-surface-container-lowest">
        <Reveal>
          <div className="max-w-[900px] mx-auto text-center">
            <h2 className="font-display-lg text-[32px] md:text-[40px] text-on-surface mb-md">
              Prefer to explore first?
            </h2>
            <p className="font-body-lg text-on-surface-variant mb-xl">
              Browse selected work and transparent packages, then come back ready to build.
            </p>
            <div className="flex flex-col sm:flex-row gap-md justify-center">
              <Link
                to={ROUTES.portfolio}
                className="bg-primary-container text-on-primary-fixed font-headline-sm px-xl py-md rounded cyber-glow"
              >
                View Portfolio
              </Link>
              <Link
                to={ROUTES.pricing}
                className="border border-primary-container text-primary-container font-headline-sm px-xl py-md rounded hover:bg-primary-container/10 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  )
}

function Field({ label, id, value, onChange, error, placeholder, type = 'text' }) {
  return (
    <div>
      <label htmlFor={id} className="font-label-caps text-label-caps text-on-surface-variant block mb-sm">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full bg-surface-container-low border rounded-lg px-md py-md text-on-surface focus:outline-none transition-colors ${
          error ? 'border-error' : 'border-outline-variant/40 focus:border-primary-container'
        }`}
      />
      {error && <p className="text-error font-body-sm text-body-sm mt-xs">{error}</p>}
    </div>
  )
}
