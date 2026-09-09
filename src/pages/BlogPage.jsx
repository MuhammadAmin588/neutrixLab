import { Link } from 'react-router-dom'
import { ROUTES } from '../constants/navigation'
import { BLOG_POSTS } from '../data/blog'

export default function BlogPage() {
  return (
    <div className="insight-page px-margin-desktop py-xxl">
      <div className="max-w-[920px] mx-auto">
        <p className="font-label-caps text-label-caps text-primary-container tracking-[0.18em] mb-md">
          INSIGHTS
        </p>
        <h1 className="font-display-lg text-[36px] md:text-[48px] text-on-surface mb-md leading-tight">
          Website design, branding, and product notes
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl max-w-[640px]">
          Practical writing from Neutrix Lab on custom websites, ecommerce, brand identity, mobile
          apps, and web portals — written to answer the searches we hear on consults.
        </p>
        <ul className="space-y-lg">
          {BLOG_POSTS.map((post) => (
            <li key={post.slug}>
              <Link
                to={`${ROUTES.blog}/${post.slug}`}
                className="block border border-outline-variant/30 rounded-xl p-xl hover:border-primary-container/50 transition-colors"
              >
                <p className="font-label-caps text-label-caps text-primary-container mb-sm tracking-[0.14em]">
                  {post.category} · {post.read}
                </p>
                <h2 className="font-headline-md text-[22px] md:text-[26px] text-on-surface mb-sm">
                  {post.title}
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">{post.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
