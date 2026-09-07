import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../common/Icon'
import Reveal from '../common/Reveal'
import TextReveal from '../common/TextReveal'
import useInView from '../../hooks/useInView'
import { ROUTES } from '../../constants/navigation'

export function MagLink({ to, className = '', children }) {
  const nodeRef = useRef(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const el = nodeRef.current
    if (!el) return undefined
    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      setOffset({
        x: (e.clientX - (rect.left + rect.width / 2)) * 0.18,
        y: (e.clientY - (rect.top + rect.height / 2)) * 0.18,
      })
    }
    const onLeave = () => setOffset({ x: 0, y: 0 })
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <Link
      ref={nodeRef}
      to={to}
      className={`magnetic-cta ${className}`.trim()}
      style={{ transform: `translate3d(${offset.x}px, ${offset.y}px, 0)` }}
    >
      {children}
    </Link>
  )
}

export function GhostLink({ to, className = '', children }) {
  return (
    <Link to={to} className={`home-ghost-link ${className}`.trim()}>
      {children}
    </Link>
  )
}

export function ServiceHero({
  eyebrow,
  title,
  highlight,
  description,
  image,
  primaryLabel = 'Start Project',
  primaryTo = ROUTES.contact,
  secondaryLabel = 'View Work',
  secondaryTo = ROUTES.portfolio,
}) {
  const ref = useRef(null)
  const [spot, setSpot] = useState({ x: 55, y: 40 })

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined
    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      setSpot({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      })
    }
    el.addEventListener('mousemove', onMove)
    return () => el.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section
      ref={ref}
      className="svc-hero relative min-h-[88svh] flex items-end overflow-hidden"
      style={{ '--spot-x': `${spot.x}%`, '--spot-y': `${spot.y}%` }}
    >
      <div className="absolute inset-0">
        <img src={image} alt="" className="hero-ken-burns absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/88 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/45 to-transparent" />
        <div className="absolute inset-0 home-hero-spotlight pointer-events-none" />
        <div className="absolute inset-0 hero-grid opacity-[0.12] light:opacity-[0.05]" />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-margin-desktop pt-[130px] pb-[88px]">
        <p className="hero-enter font-label-caps text-label-caps text-primary-container mb-md tracking-[0.24em]">
          {eyebrow}
        </p>
        <h1 className="hero-enter hero-enter-delay-1 font-display-lg text-[40px] sm:text-[52px] md:text-[68px] leading-[1.02] tracking-[-0.035em] text-on-surface max-w-[920px] mb-lg">
          {title}{' '}
          {highlight ? (
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F6EFF] via-[#8B5CF6] to-[#E9D5FF]">
              {highlight}
            </span>
          ) : null}
        </h1>
        <p className="hero-enter hero-enter-delay-2 font-body-lg text-body-lg text-on-surface-variant max-w-[540px] mb-xl">
          {description}
        </p>
        <div className="hero-enter hero-enter-delay-3 flex flex-col sm:flex-row gap-md">
          <MagLink
            to={primaryTo}
            className="w-full sm:w-auto text-center bg-primary-container text-on-primary-fixed font-headline-sm px-xl py-md rounded cyber-glow"
          >
            {primaryLabel}
          </MagLink>
          <GhostLink
            to={secondaryTo}
            className="w-full sm:w-auto text-center font-headline-sm px-xl py-md text-primary-container inline-flex items-center justify-center gap-sm"
          >
            {secondaryLabel}
            <Icon name="arrow_outward" className="text-[18px]" />
          </GhostLink>
        </div>
      </div>
    </section>
  )
}

export function ServiceTicker({ words }) {
  const items = [...words, ...words]
  return (
    <section className="home-ticker-section py-lg overflow-hidden border-y border-outline-variant/25 bg-surface-container-lowest">
      <div className="home-ticker home-ticker-left mb-md">
        <div className="home-ticker-track">
          {items.map((word, i) => (
            <span key={`t1-${word}-${i}`} className="home-ticker-item">
              {word}
              <span className="home-ticker-dot" />
            </span>
          ))}
        </div>
      </div>
      <div className="home-ticker home-ticker-right">
        <div className="home-ticker-track">
          {items.map((word, i) => (
            <span key={`t2-${word}-${i}`} className="home-ticker-item home-ticker-item-muted">
              {word}
              <span className="home-ticker-dot" />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ServiceManifesto({ lead, punch, body }) {
  return (
    <section className="relative px-margin-desktop py-[90px] md:py-[120px] overflow-hidden">
      <div className="absolute inset-0 home-noise opacity-[0.3] pointer-events-none" />
      <div className="max-w-[1100px] mx-auto relative">
        {lead ? (
          <TextReveal
            as="p"
            text={lead}
            className="font-display-lg text-[32px] md:text-[48px] lg:text-[58px] leading-[1.05] tracking-[-0.03em] text-on-surface-variant mb-md"
            stagger={50}
          />
        ) : null}
        <TextReveal
          as="h2"
          text={punch}
          className="font-display-lg text-[36px] md:text-[56px] lg:text-[70px] leading-[1.02] tracking-[-0.035em] text-on-surface mb-xl"
          delay={180}
          stagger={50}
        />
        {body ? (
          <TextReveal
            as="p"
            text={body}
            className="font-body-lg text-body-lg text-on-surface-variant max-w-[640px]"
            delay={420}
            stagger={26}
          />
        ) : null}
      </div>
    </section>
  )
}

export function Filmstrip({ children, label = 'Capabilities' }) {
  const ref = useRef(null)
  const drag = useRef({ active: false, startX: 0, scrollLeft: 0 })

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined
    const onDown = (e) => {
      drag.current = { active: true, startX: e.pageX - el.offsetLeft, scrollLeft: el.scrollLeft }
      el.classList.add('is-dragging')
    }
    const onUp = () => {
      drag.current.active = false
      el.classList.remove('is-dragging')
    }
    const onMove = (e) => {
      if (!drag.current.active) return
      e.preventDefault()
      el.scrollLeft = drag.current.scrollLeft - (e.pageX - el.offsetLeft - drag.current.startX) * 1.2
    }
    el.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    el.addEventListener('mousemove', onMove)
    return () => {
      el.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      el.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <div ref={ref} className="home-filmstrip" tabIndex={0} aria-label={label}>
      {children}
    </div>
  )
}

export function ServiceFilmCapabilities({ eyebrow = 'CAPABILITIES', title, subtitle, items }) {
  return (
    <section className="py-xxl overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-margin-desktop mb-xl flex flex-col md:flex-row md:items-end md:justify-between gap-md">
        <div>
          <p className="font-label-caps text-label-caps text-primary-container mb-md tracking-[0.2em]">{eyebrow}</p>
          <TextReveal
            as="h2"
            text={title}
            className="font-headline-md text-[34px] md:text-[48px] text-on-surface tracking-[-0.02em]"
            stagger={40}
          />
        </div>
        {subtitle ? <p className="text-on-surface-variant font-body-md max-w-[360px]">{subtitle}</p> : null}
      </div>
      <Filmstrip>
        {items.map((item, index) => (
          <div key={item.title || item.id || index} className="home-film-card">
            <span className="home-film-number">{String(index + 1).padStart(2, '0')}</span>
            {item.icon ? <Icon name={item.icon} className="text-primary-container text-[40px] mb-lg" /> : null}
            <h3 className="font-headline-sm text-[26px] text-on-surface mb-sm">{item.title}</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">{item.description}</p>
          </div>
        ))}
      </Filmstrip>
    </section>
  )
}

export function ServiceSplit({
  eyebrow,
  title,
  body,
  image,
  imageAlt = '',
  bullets = [],
  badgeLabel,
  badgeText,
}) {
  return (
    <section className="px-margin-desktop py-xxl">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-xxl items-start">
        <div className="home-split-sticky">
          <div className="home-split-media">
            <img src={image} alt={imageAlt} />
            <div className="home-split-media-glow" />
            {badgeText ? (
              <div className="home-split-badge">
                {badgeLabel ? (
                  <p className="font-label-caps text-label-caps text-primary-container mb-xs">{badgeLabel}</p>
                ) : null}
                <p className="font-headline-sm text-on-surface">{badgeText}</p>
              </div>
            ) : null}
          </div>
        </div>
        <div className="py-md">
          {eyebrow ? (
            <p className="font-label-caps text-label-caps text-primary-container mb-md tracking-[0.2em]">
              {eyebrow}
            </p>
          ) : null}
          <TextReveal
            as="h2"
            text={title}
            className="font-display-lg text-[34px] md:text-[48px] leading-[1.05] tracking-[-0.03em] text-on-surface mb-lg"
            stagger={42}
          />
          {body ? (
            <Reveal delay={80}>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-lg">{body}</p>
            </Reveal>
          ) : null}
          <div className="home-split-list">
            {bullets.map((bullet, i) => {
              const label = typeof bullet === 'string' ? bullet : bullet.title || bullet.label
              const desc = typeof bullet === 'string' ? null : bullet.description || bullet.d
              return (
                <Reveal key={label} delay={i * 80}>
                  <div className="home-split-row">
                    <span className="text-primary-container font-label-caps text-label-caps">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <p className="font-headline-sm text-on-surface text-[18px] mb-xs">{label}</p>
                      {desc ? <p className="font-body-sm text-body-sm text-on-surface-variant">{desc}</p> : null}
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export function ServiceProcess({ eyebrow = 'PROCESS', title, subtitle, steps }) {
  const [ref, isInView] = useInView(0.2)
  return (
    <section className="px-margin-desktop py-xxl relative overflow-hidden">
      <div className="absolute right-[-8%] top-1/4 w-[420px] h-[420px] bg-secondary-container/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="max-w-[1440px] mx-auto relative">
        <div className="mb-xl max-w-[720px]">
          <p className="font-label-caps text-label-caps text-primary-container mb-md tracking-[0.2em]">{eyebrow}</p>
          <TextReveal
            as="h2"
            text={title}
            className="font-headline-md text-[34px] md:text-[48px] text-on-surface tracking-[-0.02em] mb-md"
            stagger={42}
          />
          {subtitle ? <p className="text-on-surface-variant font-body-lg">{subtitle}</p> : null}
        </div>
        <div ref={ref} className={`home-process-rail ${isInView ? 'is-visible' : ''}`}>
          <div className="home-process-line" aria-hidden="true" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-xl lg:gap-md">
            {steps.map((step, index) => (
              <div
                key={step.title || step.number || step.step}
                className="home-process-step"
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div className="home-process-dot">
                  <span>{step.number || step.step || String(index + 1).padStart(2, '0')}</span>
                </div>
                {step.icon ? <Icon name={step.icon} className="text-primary-container text-[28px] mb-md" /> : null}
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-sm">{step.title}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant max-w-[280px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function ServiceBento({ eyebrow = 'SELECTED WORK', title, items, ctaTo = ROUTES.portfolio }) {
  const [main, ...rest] = items
  if (!main) return null

  const fitProps = (item) =>
    item?.imageFit === 'contain'
      ? {
          className: ' is-fit-contain',
          style: { '--pfolio-img-bg': item.imageBg || '#000000' },
        }
      : { className: '', style: undefined }

  const mainFit = fitProps(main)

  return (
    <section className="px-margin-desktop py-xxl bg-surface-container-lowest">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-md mb-xl">
          <div>
            <p className="font-label-caps text-label-caps text-primary-container mb-md tracking-[0.2em]">{eyebrow}</p>
            <TextReveal
              as="h2"
              text={title}
              className="font-headline-md text-[34px] md:text-[48px] text-on-surface tracking-[-0.02em]"
              stagger={42}
            />
          </div>
          <GhostLink to={ctaTo} className="inline-flex items-center gap-sm text-primary-container font-headline-sm">
            Full portfolio
            <Icon name="arrow_forward" className="text-[18px]" />
          </GhostLink>
        </div>
        <div className="home-bento">
          <Link
            to={ctaTo}
            className={`home-bento-main group${mainFit.className}`}
            style={mainFit.style}
          >
            <img src={main.image} alt={main.title} />
            <div className="home-bento-shade" />
            <div className="home-bento-meta">
              <span className="font-label-caps text-label-caps text-primary-container tracking-[0.16em]">
                {main.subtitle || main.category || 'Project'}
              </span>
              <h3 className="font-headline-md text-[28px] md:text-[34px] text-on-surface mt-sm">{main.title}</h3>
            </div>
            <span className="home-bento-arrow">
              <Icon name="arrow_outward" className="text-[22px]" />
            </span>
          </Link>
          <div className="home-bento-side">
            {rest.slice(0, 2).map((item) => {
              const fit = fitProps(item)
              return (
                <Link
                  key={item.title}
                  to={ctaTo}
                  className={`home-bento-tile group${fit.className}`}
                  style={fit.style}
                >
                  <img src={item.image} alt={item.title} />
                  <div className="home-bento-shade" />
                  <div className="home-bento-meta">
                    <span className="font-label-caps text-label-caps text-primary-container tracking-[0.16em]">
                      {item.subtitle || item.category || 'Project'}
                    </span>
                    <h3 className="font-headline-sm text-[22px] text-on-surface mt-sm">{item.title}</h3>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export function ServiceMetrics({ metrics }) {
  return (
    <section className="px-margin-desktop py-xl">
      <div className="home-impact-grid">
        {metrics.map((m, i) => (
          <Reveal key={m.label} delay={i * 80} className="home-impact-item">
            <div className="home-impact-value">{m.value}</div>
            <div className="font-label-caps text-label-caps text-on-surface-variant tracking-[0.16em]">
              {m.label}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export function ServicePricing({ eyebrow = 'ENGAGEMENT', title, tiers }) {
  return (
    <section className="py-xxl overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-margin-desktop mb-xl">
        <p className="font-label-caps text-label-caps text-primary-container mb-md tracking-[0.2em]">{eyebrow}</p>
        <TextReveal
          as="h2"
          text={title}
          className="font-headline-md text-[34px] md:text-[48px] text-on-surface tracking-[-0.02em]"
          stagger={40}
        />
      </div>
      <Filmstrip label="Pricing tiers">
        {tiers.map((tier, index) => {
          const title = tier.title || tier.name
          const recommended = tier.recommended || tier.popular
          return (
          <div
            key={tier.id || title}
            className={`home-film-card ${recommended ? 'svc-tier-featured' : ''}`}
          >
            <span className="home-film-number">{String(index + 1).padStart(2, '0')}</span>
            {recommended ? (
              <span className="inline-block mb-md px-md py-xs rounded-full border border-primary-container/40 bg-primary-container/10 font-label-caps text-label-caps text-primary-container">
                RECOMMENDED
              </span>
            ) : null}
            <h3 className="font-headline-sm text-[26px] text-on-surface mb-sm">{title}</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-lg">
              {tier.description || tier.price || ''}
            </p>
            <ul className="space-y-sm mb-xl">
              {(tier.features || []).slice(0, 5).map((f) => (
                <li key={f} className="flex items-start gap-sm text-on-surface-variant font-body-sm">
                  <Icon name="check_circle" className="text-primary-container text-[18px] mt-[2px]" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <MagLink
              to={ROUTES.contact}
              className="bg-primary-container/10 border border-primary-container text-primary-container font-headline-sm px-lg py-sm rounded hover:bg-primary-container hover:text-on-primary transition-all"
            >
              Enquire
            </MagLink>
          </div>
          )
        })}
      </Filmstrip>
    </section>
  )
}

export function ServiceFaq({ items, title = 'Questions, answered' }) {
  const [open, setOpen] = useState(0)
  return (
    <section className="px-margin-desktop py-xxl">
      <div className="max-w-[900px] mx-auto">
        <p className="font-label-caps text-label-caps text-primary-container mb-md tracking-[0.2em]">FAQ</p>
        <TextReveal
          as="h2"
          text={title}
          className="font-headline-md text-[34px] md:text-[48px] text-on-surface tracking-[-0.02em] mb-xl"
          stagger={40}
        />
        <div className="svc-faq">
          {items.map((item, index) => {
            const isOpen = open === index
            return (
              <div key={item.q || item.question} className={`svc-faq-item ${isOpen ? 'is-open' : ''}`}>
                <button
                  type="button"
                  className="svc-faq-trigger"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : index)}
                >
                  <span>{item.q || item.question}</span>
                  <Icon name={isOpen ? 'remove' : 'add'} className="text-primary-container text-[22px]" />
                </button>
                <div className="svc-faq-panel" hidden={!isOpen}>
                  <p className="font-body-md text-body-md text-on-surface-variant">{item.a || item.answer}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function ServiceFinale({
  eyebrow = 'NEXT MOVE',
  title = 'Ready to build this right?',
  body = 'Book a free consult. We’ll map a clear plan and show you exactly how we’d ship.',
  image,
}) {
  return (
    <section className="home-finale relative min-h-[62vh] flex items-center overflow-hidden">
      {image ? <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover scale-105 home-finale-bg" /> : null}
      <div className="absolute inset-0 bg-background/82" />
      <div className="absolute inset-0 home-finale-ring pointer-events-none" />
      <div className="relative z-10 w-full max-w-[860px] mx-auto px-margin-desktop text-center py-xxl">
        <p className="font-label-caps text-label-caps text-primary-container mb-md tracking-[0.24em]">{eyebrow}</p>
        <TextReveal
          as="h2"
          text={title}
          className="font-display-lg text-[36px] md:text-[56px] leading-[1.05] tracking-[-0.03em] text-on-surface mb-lg"
          stagger={48}
        />
        <Reveal delay={180}>
          <p className="font-body-lg text-on-surface-variant mb-xl max-w-[560px] mx-auto">{body}</p>
        </Reveal>
        <Reveal delay={260}>
          <div className="flex flex-col sm:flex-row gap-md justify-center">
            <MagLink
              to={ROUTES.contact}
              className="bg-primary-container text-on-primary-fixed font-headline-sm px-xxl py-lg rounded-lg cyber-glow"
            >
              Get Free Consultation
            </MagLink>
            <GhostLink
              to={ROUTES.pricing}
              className="font-headline-sm px-xxl py-lg text-primary-container inline-flex items-center justify-center"
            >
              View Pricing
            </GhostLink>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function ServiceCase({ label = 'CASE STUDY', title, description, image, metrics = [] }) {
  return (
    <section className="px-margin-desktop py-xxl">
      <div className="max-w-[1440px] mx-auto svc-case">
        <div className="svc-case-media">
          <img src={image} alt={title} />
          <div className="svc-case-glow" />
        </div>
        <div className="svc-case-copy">
          <p className="font-label-caps text-label-caps text-primary-container mb-md tracking-[0.2em]">{label}</p>
          <TextReveal
            as="h2"
            text={title}
            className="font-display-lg text-[32px] md:text-[44px] leading-[1.05] tracking-[-0.03em] text-on-surface mb-lg"
            stagger={40}
          />
          <Reveal delay={100}>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl">{description}</p>
          </Reveal>
          {metrics.length ? (
            <div className="grid grid-cols-2 gap-md">
              {metrics.map((m) => (
                <div key={m.label} className="svc-case-metric">
                  <div className="text-primary-container font-headline-md text-[28px] mb-xs">{m.value}</div>
                  <div className="font-label-caps text-label-caps text-on-surface-variant tracking-[0.14em]">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
