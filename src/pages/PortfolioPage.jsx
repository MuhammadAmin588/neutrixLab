import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/common/Icon'
import Reveal from '../components/common/Reveal'
import { ROUTES } from '../constants/navigation'
import {
  ARCHIVE_PROJECTS,
  ARTICLES,
  FEATURED_CASES,
  INDUSTRIES,
  INITIAL_VISIBLE_COUNT,
  METRICS,
  TYPE_FILTERS,
} from '../data/portfolio'
import useInView from '../hooks/useInView'

function fitStyle(item) {
  return item?.imageFit === 'contain' && item.imageBg
    ? { '--pfolio-img-bg': item.imageBg }
    : undefined
}

function fitClass(item, extra = '') {
  return `${extra} ${item?.imageFit === 'contain' ? 'is-fit-contain' : ''}`.trim()
}

function FeaturedChapter({ item, index }) {
  const [ref, isInView] = useInView(0.25)
  const odd = index % 2 === 1

  return (
    <article
      ref={ref}
      className={`pfolio-chapter ${odd ? 'is-odd' : ''} ${isInView ? 'is-visible' : ''}`}
    >
      <div className={fitClass(item, 'pfolio-chapter-media')} style={fitStyle(item)}>
        <img src={item.image} alt={item.imageAlt} />
        <div className="pfolio-chapter-shade" />
        <span className="pfolio-chapter-index">{String(index + 1).padStart(2, '0')}</span>
      </div>
      <div className="pfolio-chapter-copy">
        <div className="flex flex-wrap items-center gap-md mb-md">
          <span className="pfolio-chip">{item.tag}</span>
          <span className="font-label-caps text-label-caps text-on-surface-variant tracking-[0.14em]">
            {item.year}
          </span>
        </div>
        <h3 className="pfolio-chapter-title">{item.title}</h3>
        <p className="pfolio-metric">{item.metric}</p>
        <div className="pfolio-story">
          <div>
            <h4>Challenge</h4>
            <p>{item.challenge}</p>
          </div>
          <div>
            <h4>Approach</h4>
            <p>{item.approach}</p>
          </div>
          <div>
            <h4>Result</h4>
            <p>{item.result}</p>
          </div>
        </div>
        <div className="pfolio-chapter-links">
          {(item.links?.length ? item.links : item.href ? [{ label: 'Visit live site', href: item.href }] : []).map(
            (link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="pfolio-text-link"
              >
                {link.label}
                <Icon name="arrow_outward" className="text-[18px]" />
              </a>
            ),
          )}
          <Link to={`${ROUTES.work}/${item.id}`} className="pfolio-text-link">
            Read case study
            <Icon name="arrow_forward" className="text-[18px]" />
          </Link>
          <Link to={ROUTES.contact} className="pfolio-text-link">
            Discuss a similar build
            <Icon name="arrow_forward" className="text-[18px]" />
          </Link>
        </div>
      </div>
    </article>
  )
}

function ArchiveCardBody({ project }) {
  const inner = (
    <>
      <div className={fitClass(project, 'pfolio-card-media')} style={fitStyle(project)}>
        <img src={project.image} alt={project.alt || project.title} />
        <div className="pfolio-card-shade" />
        <span className="pfolio-card-view">
          Case study
          <Icon name="arrow_forward" className="text-[16px]" />
        </span>
      </div>
      <div className="pfolio-card-meta">
        <span className="pfolio-chip">{project.typeLabel}</span>
        <h3>{project.title}</h3>
        {project.summary ? (
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">
            {project.summary}
          </p>
        ) : null}
      </div>
    </>
  )

  if (!project.href && !project.id) return inner

  return (
    <Link to={`${ROUTES.work}/${project.id}`} className="pfolio-card-hit">
      {inner}
    </Link>
  )
}

export default function PortfolioPage() {
  const [industry, setIndustry] = useState('all')
  const [type, setType] = useState('all')
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT)
  const [spotlight, setSpotlight] = useState(0)

  useEffect(() => {
    setVisibleCount(INITIAL_VISIBLE_COUNT)
  }, [industry, type])

  useEffect(() => {
    const id = window.setInterval(() => {
      setSpotlight((i) => (i + 1) % FEATURED_CASES.length)
    }, 4200)
    return () => window.clearInterval(id)
  }, [])

  const filteredProjects = useMemo(() => {
    return ARCHIVE_PROJECTS.filter((project) => {
      const industryMatch = industry === 'all' || project.industry === industry
      const typeMatch = type === 'all' || project.type === type
      return industryMatch && typeMatch
    })
  }, [industry, type])

  const visibleProjects = filteredProjects.slice(0, visibleCount)
  const hasMore = visibleCount < filteredProjects.length
  const heroCase = FEATURED_CASES[spotlight]

  return (
    <div className="pfolio-page">
      {/* Immersive full-bleed gallery hero */}
      <section className="pfolio-hero">
        <div className="pfolio-hero-bg" aria-hidden="true">
          {FEATURED_CASES.map((c, i) => (
            <img
              key={c.id}
              src={c.image}
              alt=""
              className={fitClass(c, `pfolio-hero-bg-img ${i === spotlight ? 'is-active' : ''}`)}
              style={fitStyle(c)}
            />
          ))}
          <div className="pfolio-hero-veil" />
          <div className="pfolio-hero-grain" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-margin-desktop min-h-[92svh] flex flex-col justify-end pb-xl pt-[140px]">
          <div className="max-w-[720px]">
            <p className="pfolio-kicker hero-enter mb-md">NEUTRIX · PORTFOLIO</p>
            <h1 className="hero-enter hero-enter-delay-1 pfolio-hero-title mb-lg">
              Work that earns
              <br />
              a second look.
            </h1>
            <p className="hero-enter hero-enter-delay-2 font-body-lg text-body-lg text-on-surface-variant max-w-[480px] mb-xl">
              Case studies in custom website design, ecommerce, mobile apps, branding, and web
              portals — curated like a private exhibition.
            </p>
            <div className="hero-enter hero-enter-delay-3 flex flex-wrap gap-md mb-xl">
              <a href="#featured" className="pfolio-btn-solid">
                Explore featured
              </a>
              <a href="#archive" className="pfolio-btn-ghost">
                Open archive
              </a>
            </div>
          </div>

          <div className="hero-enter hero-enter-delay-4 pfolio-hero-rail">
            <div className="pfolio-hero-now">
              <span className="font-label-caps text-label-caps text-primary-container tracking-[0.16em]">
                NOW SHOWING
              </span>
              <div className="pfolio-hero-now-copy">
                <strong>{heroCase.title}</strong>
                <span>{heroCase.metric}</span>
              </div>
            </div>

            <div className="pfolio-hero-thumbs" role="tablist" aria-label="Featured previews">
              {FEATURED_CASES.map((c, i) => (
                <button
                  key={c.id}
                  type="button"
                  role="tab"
                  aria-selected={i === spotlight}
                  aria-label={`Show ${c.title}`}
                  className={fitClass(c, `pfolio-thumb ${i === spotlight ? 'is-on' : ''}`)}
                  style={fitStyle(c)}
                  onClick={() => setSpotlight(i)}
                >
                  <img src={c.image} alt={c.title} />
                  <span>{String(i + 1).padStart(2, '0')}</span>
                </button>
              ))}
            </div>

            <div className="pfolio-hero-progress" aria-hidden="true">
              <span key={spotlight} className="pfolio-hero-progress-fill" />
            </div>
          </div>
        </div>
      </section>

      {/* Elegant metrics strip */}
      <section className="pfolio-metrics px-margin-desktop">
        <div className="pfolio-metrics-row">
          {METRICS.map((metric, index) => (
            <Reveal key={metric.label} delay={index * 80} className="pfolio-metric-item">
              <div className="pfolio-metric-value">
                <span>{metric.value}</span>
              </div>
              <div className="font-label-caps text-label-caps text-on-surface-variant tracking-[0.16em]">
                {metric.label}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Featured chapters */}
      <section id="featured" className="px-margin-desktop py-xxl">
        <div className="max-w-[1440px] mx-auto mb-xl">
          <p className="pfolio-kicker mb-md">FEATURED DEPLOYMENTS</p>
          <h2 className="pfolio-section-title max-w-[640px]">
            Deep cuts from partnerships that moved the needle.
          </h2>
        </div>
        <div className="max-w-[1440px] mx-auto flex flex-col gap-xxl">
          {FEATURED_CASES.map((item, index) => (
            <FeaturedChapter key={item.id} item={item} index={index} />
          ))}
        </div>
      </section>

      {/* Archive with refined filters */}
      <section id="archive" className="pfolio-archive px-margin-desktop py-xxl">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-lg mb-xl">
            <div>
              <p className="pfolio-kicker mb-md">COMPLETE ARCHIVE</p>
              <h2 className="pfolio-section-title">Every piece, filterable.</h2>
            </div>
            <p className="text-on-surface-variant font-body-md max-w-[320px]">
              {`${filteredProjects.length} project${filteredProjects.length === 1 ? '' : 's'} in view - refine by industry and craft.`}
            </p>
          </div>

          <div className="pfolio-filters mb-lg">
            <div className="pfolio-filter-row" role="tablist" aria-label="Industry">
              {INDUSTRIES.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={industry === item.id}
                  onClick={() => setIndustry(item.id)}
                  className={`pfolio-filter ${industry === item.id ? 'is-on' : ''}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="pfolio-filter-row pfolio-filter-row-types" role="tablist" aria-label="Type">
              {TYPE_FILTERS.map((filter) => (
                <button
                  key={filter.id}
                  type="button"
                  role="tab"
                  aria-selected={type === filter.id}
                  onClick={() => setType(filter.id)}
                  className={`pfolio-type ${type === filter.id ? 'is-on' : ''}`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          <div className="pfolio-masonry" key={`${industry}-${type}`}>
            {visibleProjects.map((project, index) => (
              <Reveal
                key={project.id}
                delay={(index % 6) * 60}
                className={`pfolio-tile pfolio-tile-${(index % 5) + 1}`}
              >
                <article className="pfolio-card group">
                  <ArchiveCardBody project={project} />
                </article>
              </Reveal>
            ))}
          </div>

          {filteredProjects.length === 0 ? (
            <div className="text-center py-xxl">
              <p className="text-on-surface-variant mb-lg">
                No projects match these filters. Try another combination.
              </p>
              <button
                type="button"
                onClick={() => {
                  setIndustry('all')
                  setType('all')
                }}
                className="pfolio-btn-ghost"
              >
                Reset filters
              </button>
            </div>
          ) : null}

          {hasMore ? (
            <div className="mt-xl text-center">
              <button
                type="button"
                onClick={() => setVisibleCount(filteredProjects.length)}
                className="pfolio-btn-ghost"
              >
                Load all {filteredProjects.length} projects
              </button>
            </div>
          ) : null}
        </div>
      </section>

      {/* Insights */}
      <section className="px-margin-desktop py-xxl">
        <div className="max-w-[1100px] mx-auto">
          <p className="pfolio-kicker mb-md">FIELD NOTES</p>
          <h2 className="pfolio-section-title mb-xl">Process notes from the studio</h2>
          <div className="pfolio-notes">
            {ARTICLES.map((article, index) => (
              <Reveal key={article.title} delay={index * 90}>
                <article className="pfolio-note">
                  <span className="pfolio-note-n">{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <p className="font-label-caps text-label-caps text-primary-container tracking-[0.14em] mb-sm">
                      {article.category}
                    </p>
                    <h3 className="font-headline-sm text-[24px] text-on-surface mb-sm">{article.title}</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">{article.description}</p>
                    {article.to ? (
                      <Link
                        to={article.to}
                        className="inline-flex items-center gap-sm text-primary-container font-label-caps text-label-caps tracking-[0.14em] mt-md"
                      >
                        Read case study
                        <Icon name="arrow_forward" className="text-[16px]" />
                      </Link>
                    ) : null}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pfolio-cta px-margin-desktop py-[110px]">
        <div className="max-w-[820px] mx-auto text-center">
          <p className="pfolio-kicker mb-md">COMMISSION</p>
          <h2 className="pfolio-section-title mb-md">Have a project worth exhibiting?</h2>
          <p className="font-body-lg text-on-surface-variant mb-xl max-w-[520px] mx-auto">
            Tell us the outcome. We&apos;ll map the craft, timeline, and path to a piece you&apos;re
            proud to show.
          </p>
          <div className="flex flex-col sm:flex-row gap-md justify-center">
            <Link to={ROUTES.contact} className="pfolio-btn-solid">
              Start a conversation
            </Link>
            <Link to={ROUTES.services} className="pfolio-btn-ghost">
              Explore services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
