import { Link, useParams } from 'react-router-dom'
import Icon from '../components/common/Icon'
import { ROUTES } from '../constants/navigation'
import { ARCHIVE_PROJECTS, FEATURED_CASES } from '../data/portfolio'
import { getWorkSeo } from '../data/workMeta'
import NotFoundPage from './NotFoundPage'

export default function WorkPage() {
  const { slug } = useParams()
  const featured = FEATURED_CASES.find((item) => item.id === slug)
  const archive = ARCHIVE_PROJECTS.find((item) => item.id === slug)

  if (!featured && !archive) return <NotFoundPage />

  const seo = getWorkSeo(slug)
  const title = featured?.title || archive.title
  const image = featured?.image || archive.image
  const alt = featured?.imageAlt || archive.alt || title
  const tag = featured?.tag || archive.typeLabel
  const year = featured?.year
  const metric = featured?.metric
  const summary = archive?.summary
  const liveLinks = featured?.links?.length
    ? featured.links
    : featured?.href || archive?.href
      ? [{ label: 'Visit live site', href: featured?.href || archive.href }]
      : []

  return (
    <article className="insight-page px-margin-desktop py-xxl">
      <div className="max-w-[860px] mx-auto">
        <p className="font-label-caps text-label-caps text-primary-container tracking-[0.16em] mb-md">
          CASE STUDY{year ? ` · ${year}` : ''}
        </p>
        <h1 className="font-display-lg text-[32px] md:text-[48px] text-on-surface mb-md leading-tight">
          {title}
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant mb-xl">
          {[tag, metric].filter(Boolean).join(' · ')}
        </p>
        {seo?.description ? (
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl">{seo.description}</p>
        ) : null}
        <img
          src={image}
          alt={alt}
          className="w-full max-h-[420px] object-contain rounded-xl mb-xl bg-surface-container-lowest border border-outline-variant/20"
        />
        {featured ? (
          <div className="space-y-xl mb-xl">
            <section>
              <h2 className="font-headline-sm text-[20px] text-on-surface mb-md">Challenge</h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {featured.challenge}
              </p>
            </section>
            <section>
              <h2 className="font-headline-sm text-[20px] text-on-surface mb-md">Approach</h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {featured.approach}
              </p>
            </section>
            <section>
              <h2 className="font-headline-sm text-[20px] text-on-surface mb-md">Result</h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {featured.result}
              </p>
            </section>
          </div>
        ) : summary && summary !== seo?.description ? (
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl">{summary}</p>
        ) : null}
        <div className="flex flex-wrap gap-md mb-xl">
          {liveLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-sm text-primary-container font-headline-sm"
            >
              {link.label}
              <Icon name="arrow_outward" className="text-[18px]" />
            </a>
          ))}
          <Link
            to={ROUTES.contact}
            className="inline-flex items-center gap-sm text-primary-container font-headline-sm"
          >
            Start a similar project
            <Icon name="arrow_forward" className="text-[18px]" />
          </Link>
        </div>
        <p className="font-body-sm text-body-sm text-on-surface-variant">
          <Link to={ROUTES.portfolio} className="hover:text-primary-container">
            All work
          </Link>
          {' · '}
          <Link to={ROUTES.blog} className="hover:text-primary-container">
            Insights
          </Link>
        </p>
      </div>
    </article>
  )
}
