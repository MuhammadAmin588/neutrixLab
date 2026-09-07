import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/common/Icon'
import Reveal from '../components/common/Reveal'
import useInView from '../hooks/useInView'
import { ROUTES } from '../constants/navigation'
import {
  ENGAGEMENT_MODELS,
  SERVICE_CARDS,
  SERVICE_CHAPTERS,
  SERVICE_COMPARE,
  SERVICE_DELIVERABLES,
  SERVICE_HUB_FAQ,
  SERVICE_INDUSTRIES,
  SERVICE_OUTCOMES,
} from '../data/services'

function OutcomeBars() {
  const [ref, isInView] = useInView(0.3)
  return (
    <div ref={ref} className="shub-outcomes">
      {SERVICE_OUTCOMES.map((item, i) => (
        <div key={item.label} className="shub-outcome" style={{ transitionDelay: `${i * 90}ms` }}>
          <div className="flex items-end justify-between gap-md mb-sm">
            <div>
              <p className="font-label-caps text-label-caps text-on-surface-variant tracking-[0.14em] mb-xs">
                {item.label}
              </p>
              <p className="font-body-sm text-body-sm text-on-surface-variant/70">{item.note}</p>
            </div>
            <p className="font-display-lg text-[36px] md:text-[44px] text-on-surface leading-none tracking-[-0.03em]">
              {item.value}
              <span className="text-primary-container">{item.suffix}</span>
            </p>
          </div>
          <div className="shub-bar-track">
            <div
              className={`shub-bar-fill ${isInView ? 'is-on' : ''}`}
              style={{
                width: isInView ? `${item.bar}%` : '0%',
                transitionDelay: `${150 + i * 100}ms`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default function ServicesPage() {
  const [active, setActive] = useState(0)
  const [faqOpen, setFaqOpen] = useState(0)
  const current = SERVICE_CARDS[active] || SERVICE_CARDS[0]

  return (
    <div className="shub-page">
      {/* 1 - Editorial index hero (NOT cinematic like home) */}
      <section className="shub-hero px-margin-desktop">
        <div className="shub-hero-watermark" aria-hidden="true">
          05
        </div>
        <div className="max-w-[1440px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-xxl items-end min-h-[78vh] py-[100px]">
          <div>
            <p className="shub-kicker hero-enter">SERVICE INDEX</p>
            <h1 className="hero-enter hero-enter-delay-1 shub-hero-title">
              Five disciplines.
              <br />
              <em>One standard.</em>
            </h1>
            <p className="hero-enter hero-enter-delay-2 font-body-lg text-body-lg text-on-surface-variant max-w-[480px] mt-lg mb-xl">
              An editorial map of everything we build - pick a lane, preview the work, go deep. No
              recycled homepage layout.
            </p>
            <div className="hero-enter hero-enter-delay-3 flex flex-wrap gap-md">
              <a href="#disciplines" className="shub-btn-solid">
                Browse disciplines
              </a>
              <Link to={ROUTES.contact} className="shub-btn-line">
                Book a consult
              </Link>
            </div>
          </div>

          <div className="hero-enter hero-enter-delay-2 shub-hero-panel">
            <p className="font-label-caps text-label-caps text-on-surface-variant tracking-[0.16em] mb-md">
              QUICK JUMP
            </p>
            <ul className="shub-jump">
              {SERVICE_CARDS.map((s) => (
                <li key={s.number}>
                  <Link to={s.path} className="shub-jump-link">
                    <span className="shub-jump-num">{s.number}</span>
                    <span className="shub-jump-title">{s.title}</span>
                    <Icon name="arrow_outward" className="text-[18px] opacity-50" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 2 - Interactive discipline selector */}
      <section id="disciplines" className="shub-selector px-margin-desktop py-xxl">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-md mb-xl">
            <div>
              <p className="shub-kicker mb-md">DISCIPLINES</p>
              <h2 className="shub-section-title">
                Hover a service.
                <br />
                See the world it lives in.
              </h2>
            </div>
            <p className="text-on-surface-variant font-body-md max-w-[320px]">
              Left = index. Right = live preview. Click through when you find your lane.
            </p>
          </div>

          <div className="shub-selector-grid">
            <div className="shub-selector-list" role="tablist" aria-label="Services">
              {SERVICE_CARDS.map((service, index) => {
                const isActive = index === active
                return (
                  <button
                    key={service.number}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`shub-selector-item ${isActive ? 'is-active' : ''}`}
                    onMouseEnter={() => setActive(index)}
                    onFocus={() => setActive(index)}
                    onClick={() => setActive(index)}
                  >
                    <span className="shub-selector-num">{service.number}</span>
                    <span className="shub-selector-copy">
                      <span className="shub-selector-name">{service.title}</span>
                      <span className="shub-selector-sub">{service.subtitle}</span>
                    </span>
                    <Icon name="chevron_right" className="shub-selector-chevron" />
                  </button>
                )
              })}
            </div>

            <div className="shub-selector-preview" key={current.number}>
              <img src={current.image} alt="" className="shub-preview-img" />
              <div className="shub-preview-shade" />
              <div className="shub-preview-meta">
                <p className="font-label-caps text-label-caps text-primary-container tracking-[0.16em] mb-sm">
                  {current.outcome}
                </p>
                <h3 className="font-headline-md text-[28px] md:text-[34px] text-on-surface mb-sm">
                  {current.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-lg max-w-[420px]">
                  {current.blurb}
                </p>
                <div className="flex flex-wrap gap-sm mb-lg">
                  {current.tags.map((tag) => (
                    <span key={tag} className="shub-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link to={current.path} className="shub-btn-solid inline-flex items-center gap-sm">
                  Open {current.title}
                  <Icon name="arrow_forward" className="text-[18px]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 - Outcome bars */}
      <section className="shub-band px-margin-desktop py-xxl">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-xxl items-start">
          <div>
            <p className="shub-kicker mb-md">PROOF IN MOTION</p>
            <h2 className="shub-section-title mb-md">Outcomes we optimize for</h2>
            <p className="text-on-surface-variant font-body-lg max-w-[380px]">
              Not vanity metrics. The numbers clients actually feel after we ship.
            </p>
          </div>
          <OutcomeBars />
        </div>
      </section>

      {/* 4 - Deliverables mosaic */}
      <section className="px-margin-desktop py-xxl">
        <div className="max-w-[1440px] mx-auto">
          <p className="shub-kicker mb-md">WHAT YOU GET</p>
          <h2 className="shub-section-title mb-xl max-w-[640px]">
            A full-stack delivery system - not a single deliverable dump.
          </h2>
          <div className="shub-mosaic">
            {SERVICE_DELIVERABLES.map((item, i) => (
              <Reveal key={item.title} delay={i * 70} className={`shub-mosaic-cell shub-mosaic-${i + 1}`}>
                <Icon name={item.icon} className="text-primary-container text-[28px] mb-md" />
                <h3 className="font-headline-sm text-[22px] text-on-surface mb-sm">{item.title}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5 - Chapters / process (vertical, different from home rail) */}
      <section className="shub-chapters px-margin-desktop py-xxl">
        <div className="max-w-[980px] mx-auto">
          <p className="shub-kicker mb-md text-center">HOW ENGAGEMENTS MOVE</p>
          <h2 className="shub-section-title text-center mb-xl">Four chapters. No fog.</h2>
          <div className="shub-chapter-list">
            {SERVICE_CHAPTERS.map((ch, i) => (
              <Reveal key={ch.n} delay={i * 90}>
                <article className="shub-chapter">
                  <span className="shub-chapter-n">{ch.n}</span>
                  <div>
                    <h3 className="font-headline-sm text-[26px] text-on-surface mb-sm">{ch.title}</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">{ch.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6 - Engagement models */}
      <section className="px-margin-desktop py-xxl bg-surface-container-lowest">
        <div className="max-w-[1440px] mx-auto">
          <p className="shub-kicker mb-md">WAYS TO WORK</p>
          <h2 className="shub-section-title mb-xl">Pick an engagement model</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            {ENGAGEMENT_MODELS.map((model, i) => (
              <Reveal key={model.title} delay={i * 90}>
                <div className="shub-model">
                  <p className="font-label-caps text-label-caps text-primary-container tracking-[0.14em] mb-md">
                    {model.time}
                  </p>
                  <h3 className="font-headline-sm text-[26px] text-on-surface mb-sm">{model.title}</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-lg">
                    Best for: {model.best}
                  </p>
                  <ul className="space-y-sm mb-lg">
                    {model.points.map((p) => (
                      <li key={p} className="flex items-center gap-sm font-body-sm text-on-surface">
                        <span className="shub-dot" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  {model.path ? (
                    <Link to={model.path} className="shub-btn-line inline-flex items-center gap-sm">
                      View packages
                      <Icon name="arrow_forward" className="text-[16px]" />
                    </Link>
                  ) : (
                    <Link to={ROUTES.contact} className="shub-btn-line inline-flex items-center gap-sm">
                      Talk scope
                      <Icon name="arrow_forward" className="text-[16px]" />
                    </Link>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7 - Not sure? Compare table */}
      <section className="px-margin-desktop py-xxl">
        <div className="max-w-[1100px] mx-auto">
          <p className="shub-kicker mb-md">DECISION HELP</p>
          <h2 className="shub-section-title mb-xl">Not sure where to start?</h2>
          <div className="shub-compare">
            <div className="shub-compare-head">
              <span>If you need…</span>
              <span>Start here</span>
            </div>
            {SERVICE_COMPARE.map((row, i) => (
              <Reveal key={row.pick} delay={i * 60}>
                <Link to={row.path} className="shub-compare-row">
                  <span className="text-on-surface-variant">{row.need}</span>
                  <span className="shub-compare-pick">
                    {row.pick}
                    <Icon name="arrow_outward" className="text-[16px]" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8 - Industries */}
      <section className="px-margin-desktop py-xxl shub-industries-band">
        <div className="max-w-[1440px] mx-auto text-center">
          <p className="shub-kicker mb-md">INDUSTRIES</p>
          <h2 className="shub-section-title mb-xl">Built across sectors that move fast</h2>
          <div className="shub-industries">
            {SERVICE_INDUSTRIES.map((name, i) => (
              <Reveal key={name} delay={i * 40}>
                <span className="shub-industry">{name}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9 - Packages teaser (inverted accent band - unique vs home) */}
      <section className="shub-invert px-margin-desktop py-xxl">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-xl items-center">
          <div>
            <p className="font-label-caps text-label-caps tracking-[0.18em] mb-md opacity-70">COMBOS</p>
            <h2 className="font-display-lg text-[36px] md:text-[52px] leading-[1.05] tracking-[-0.03em] mb-md">
              Need more than one discipline?
            </h2>
            <p className="font-body-lg text-[18px] leading-relaxed opacity-80 max-w-[480px]">
              Bundle branding, web, and growth into a single engagement - cleaner strategy, better
              pricing, faster momentum.
            </p>
          </div>
          <div className="flex flex-col gap-md items-start md:items-end">
            <Link to={ROUTES.comboPackages} className="shub-btn-invert-dark">
              Explore combo packages
            </Link>
            <Link to={ROUTES.pricing} className="shub-btn-invert-ghost">
              Or view pricing →
            </Link>
          </div>
        </div>
      </section>

      {/* 10 - FAQ */}
      <section className="px-margin-desktop py-xxl">
        <div className="max-w-[860px] mx-auto">
          <p className="shub-kicker mb-md">FAQ</p>
          <h2 className="shub-section-title mb-xl">Before you pick a lane</h2>
          <div className="shub-faq">
            {SERVICE_HUB_FAQ.map((item, index) => {
              const open = faqOpen === index
              return (
                <div key={item.question} className={`shub-faq-item ${open ? 'is-open' : ''}`}>
                  <button
                    type="button"
                    className="shub-faq-trigger"
                    aria-expanded={open}
                    onClick={() => setFaqOpen(open ? -1 : index)}
                  >
                    <span>{item.question}</span>
                    <Icon name={open ? 'remove' : 'add'} className="text-[22px]" />
                  </button>
                  {open ? (
                    <p className="shub-faq-answer font-body-md text-body-md text-on-surface-variant">
                      {item.answer}
                    </p>
                  ) : null}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 11 - Solid CTA (no photo finale like home) */}
      <section className="shub-cta px-margin-desktop py-[100px]">
        <div className="max-w-[900px] mx-auto text-center">
          <p className="shub-kicker mb-md">NEXT STEP</p>
          <h2 className="shub-section-title mb-md">Tell us the outcome. We’ll pick the lane.</h2>
          <p className="font-body-lg text-on-surface-variant mb-xl max-w-[560px] mx-auto">
            Free consult. Clear recommendation. No recycled pitch deck energy.
          </p>
          <div className="flex flex-col sm:flex-row gap-md justify-center">
            <Link to={ROUTES.contact} className="shub-btn-solid">
              Get free consultation
            </Link>
            <Link to={ROUTES.portfolio} className="shub-btn-line">
              See portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
