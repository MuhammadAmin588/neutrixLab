import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/common/Icon'
import Reveal from '../components/common/Reveal'
import { ROUTES } from '../constants/navigation'
import {
  FEATURED_QUOTE,
  REVIEW_FILTERS,
  REVIEW_STATS,
  REVIEWS,
} from '../data/reviews'

function Stars({ count = 5 }) {
  return (
    <div className="rev-stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Icon key={i} name="star" fill className="text-[16px]" />
      ))}
    </div>
  )
}

export default function ReviewsPage() {
  const [filter, setFilter] = useState('all')
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  const filtered = useMemo(() => {
    if (filter === 'all') return REVIEWS
    return REVIEWS.filter((r) => r.category === filter)
  }, [filter])

  useEffect(() => {
    setActive(0)
  }, [filter])

  useEffect(() => {
    if (paused || filtered.length <= 1) return undefined
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % filtered.length)
    }, 5000)
    return () => window.clearInterval(id)
  }, [paused, filtered])

  const current = filtered[active] || filtered[0] || REVIEWS[0]

  return (
    <div className="rev-page">
      {/* Quote theater hero */}
      <section className="rev-hero px-margin-desktop">
        <div className="rev-hero-mark" aria-hidden="true">
          ”
        </div>
        <div className="max-w-[1440px] mx-auto relative z-10 min-h-[78vh] py-[110px] grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-xxl items-end">
          <div>
            <p className="rev-kicker hero-enter mb-md">CLIENT SIGNAL</p>
            <h1 className="hero-enter hero-enter-delay-1 rev-hero-title mb-lg">
              Proof in their
              <br />
              <em>own words.</em>
            </h1>
            <p className="hero-enter hero-enter-delay-2 font-body-lg text-body-lg text-on-surface-variant max-w-[480px] mb-xl">
              Founders, CMOs, and product leaders who hired NEUTRIX - and felt the difference in trust,
              speed, and revenue.
            </p>
            <div className="hero-enter hero-enter-delay-3 flex flex-wrap gap-md">
              <Link to={ROUTES.contact} className="rev-btn-solid">
                Become a client story
              </Link>
              <Link to={ROUTES.portfolio} className="rev-btn-ghost">
                See the work
              </Link>
            </div>
          </div>

          <Reveal delay={120} className="rev-spotlight">
            <Stars count={FEATURED_QUOTE.rating || 5} />
            <blockquote className="rev-spotlight-quote">
              “{FEATURED_QUOTE.quote}”
            </blockquote>
            <div className="rev-spotlight-person">
              <img src={FEATURED_QUOTE.image} alt={FEATURED_QUOTE.name} />
              <div>
                <p className="font-headline-sm text-on-surface">{FEATURED_QUOTE.name}</p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">{FEATURED_QUOTE.role}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats strip */}
      <section className="rev-stats px-margin-desktop">
        <div className="rev-stats-row">
          {REVIEW_STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 70} className="rev-stat">
              <div className="rev-stat-value">{stat.value}</div>
              <div className="font-label-caps text-label-caps text-on-surface-variant tracking-[0.14em]">
                {stat.label}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Live quote stage */}
      <section
        className="rev-stage px-margin-desktop py-xxl"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-md mb-xl">
            <div>
              <p className="rev-kicker mb-md">LIVE STAGE</p>
              <h2 className="rev-section-title">One voice at a time</h2>
            </div>
            <div className="flex items-center gap-sm">
              <button
                type="button"
                aria-label="Previous review"
                className="rev-nav-btn"
                onClick={() => setActive((i) => (i - 1 + filtered.length) % filtered.length)}
              >
                <Icon name="arrow_back" className="text-[20px]" />
              </button>
              <button
                type="button"
                aria-label="Next review"
                className="rev-nav-btn is-solid"
                onClick={() => setActive((i) => (i + 1) % filtered.length)}
              >
                <Icon name="arrow_forward" className="text-[20px]" />
              </button>
            </div>
          </div>

          <div className="rev-filters mb-xl" role="tablist" aria-label="Review categories">
            {REVIEW_FILTERS.map((item) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={filter === item.id}
                onClick={() => setFilter(item.id)}
                className={`rev-filter ${filter === item.id ? 'is-on' : ''}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {current ? (
            <div key={`${filter}-${current.id}`} className="rev-stage-panel">
              <div className="rev-stage-media">
                <img src={current.image} alt={current.name} />
                <div className="rev-stage-media-shade" />
                <div className="rev-stage-media-meta">
                  <p className="font-label-caps text-label-caps text-primary-container tracking-[0.16em] mb-xs">
                    {current.result}
                  </p>
                  <p className="font-headline-sm text-[22px] text-on-surface">{current.name}</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{current.role}</p>
                </div>
              </div>
              <div className="rev-stage-copy">
                <Stars count={current.rating} />
                <p className="rev-stage-count">
                  {String(active + 1).padStart(2, '0')} / {String(filtered.length).padStart(2, '0')}
                </p>
                <blockquote className="rev-stage-quote">“{current.quote}”</blockquote>
                <div className="rev-stage-progress" aria-hidden="true">
                  <span key={`${filter}-${current.id}-bar`} className="rev-stage-progress-fill" />
                </div>
              </div>
            </div>
          ) : null}

          <div className="rev-stage-thumbs mt-lg" role="tablist" aria-label="Jump to review">
            {filtered.map((review, i) => (
              <button
                key={review.id}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-label={`Show review by ${review.name}`}
                className={`rev-thumb ${i === active ? 'is-on' : ''}`}
                onClick={() => setActive(i)}
              >
                <img src={review.image} alt="" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Quote wall */}
      <section className="rev-wall px-margin-desktop py-xxl">
        <div className="max-w-[1440px] mx-auto">
          <p className="rev-kicker mb-md">SIGNAL WALL</p>
          <h2 className="rev-section-title mb-xl max-w-[620px]">
            Every review is a result - not a compliment farm.
          </h2>
          <div className="rev-wall-grid">
            {REVIEWS.map((review, i) => (
              <Reveal key={review.id} delay={(i % 6) * 60} className={`rev-wall-cell rev-wall-${(i % 4) + 1}`}>
                <article className="rev-wall-card">
                  <div className="flex items-center justify-between gap-sm mb-md">
                    <Stars count={review.rating} />
                    <span className="rev-result">{review.result}</span>
                  </div>
                  <p className="rev-wall-quote">“{review.quote}”</p>
                  <div className="rev-wall-person">
                    <img src={review.image} alt={review.name} />
                    <div>
                      <p className="font-headline-sm text-[16px] text-on-surface">{review.name}</p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">{review.role}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trust note */}
      <section className="px-margin-desktop py-xl">
        <div className="max-w-[900px] mx-auto text-center">
          <Reveal>
            <p className="rev-kicker mb-md">VERIFIED ENGAGEMENTS</p>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              These are real project partners - web, branding, commerce, and mobile - with outcomes you
              can measure, not vague praise.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="rev-cta px-margin-desktop py-[110px]">
        <div className="max-w-[820px] mx-auto text-center">
          <p className="rev-kicker mb-md">NEXT STORY</p>
          <h2 className="rev-section-title mb-md">Ready to write yours?</h2>
          <p className="font-body-lg text-on-surface-variant mb-xl max-w-[520px] mx-auto">
            Book a free consult. We’ll map a clear plan for a digital presence clients trust - and
            remember.
          </p>
          <div className="flex flex-col sm:flex-row gap-md justify-center">
            <Link to={ROUTES.contact} className="rev-btn-solid">
              Book free consultation
            </Link>
            <Link to={ROUTES.services} className="rev-btn-ghost">
              Explore services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
