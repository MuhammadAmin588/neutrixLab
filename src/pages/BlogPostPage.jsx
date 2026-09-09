import { Link, useParams } from 'react-router-dom'
import { ROUTES } from '../constants/navigation'
import { getPostBySlug, getRelatedPosts } from '../data/blog'
import NotFoundPage from './NotFoundPage'

export default function BlogPostPage() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  if (!post) return <NotFoundPage />

  const related = getRelatedPosts(post)

  return (
    <article className="insight-page px-margin-desktop py-xxl">
      <div className="max-w-[720px] mx-auto">
        <p className="font-label-caps text-label-caps text-primary-container tracking-[0.16em] mb-md">
          {post.category}
        </p>
        <h1 className="font-display-lg text-[32px] md:text-[44px] text-on-surface mb-md leading-tight">
          {post.title}
        </h1>
        <p className="font-body-sm text-body-sm text-on-surface-variant mb-lg">
          {post.date} · {post.read} · Neutrix Lab
        </p>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl">{post.description}</p>
        {post.sections.map((section) => (
          <section key={section.heading} className="mb-xl">
            <h2 className="font-headline-sm text-[20px] md:text-[22px] text-on-surface mb-md">
              {section.heading}
            </h2>
            {section.paragraphs.map((p) => (
              <p
                key={p.slice(0, 40)}
                className="font-body-md text-body-md text-on-surface-variant mb-md leading-relaxed"
              >
                {p}
              </p>
            ))}
          </section>
        ))}
        <p className="font-body-md text-body-md text-on-surface-variant mb-xl">
          Want this applied to your product?{' '}
          <Link to={ROUTES.contact} className="text-primary-container hover:underline">
            Contact Neutrix Lab
          </Link>.
        </p>
        {related.length ? (
          <div className="pt-xl border-t border-outline-variant/30">
            <p className="font-label-caps text-label-caps text-on-surface-variant mb-md tracking-[0.14em]">
              RELATED
            </p>
            <ul className="space-y-md">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link
                    to={`${ROUTES.blog}/${item.slug}`}
                    className="text-on-surface hover:text-primary-container"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </article>
  )
}
