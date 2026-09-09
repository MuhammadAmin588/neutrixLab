import { BRAND, SITE_DESCRIPTION } from '../constants/brand'
import { getBreadcrumbs, getSeoForPath, SITE_ORIGIN } from '../constants/seo'
import { getPostBySlug } from '../data/blog'
import { getWorkSeo } from '../data/workMeta'

const FAQ_BY_PATH = {
  '/contact': [
    {
      q: 'How fast can we start?',
      a: 'Most projects kick off within 5–10 business days after discovery and proposal approval.',
    },
    {
      q: 'Do you work with startups and enterprises?',
      a: 'Yes. We partner with funded startups, scale-ups, and enterprise teams that want premium digital craft.',
    },
    {
      q: 'What happens after I submit this form?',
      a: 'We review your brief, reply within 1 business day, and book a free strategy consultation.',
    },
  ],
  '/services': [
    {
      q: 'Not sure which service to start with?',
      a: 'Start with the outcome. If trust is weak, begin with branding. If traffic doesn’t convert, start with web or commerce. If ops are messy, start with a portal. We’ll recommend the sharpest path on a free consult.',
    },
    {
      q: 'Can you combine multiple services?',
      a: 'Yes - most high-performing clients bundle brand + web, or web + commerce. Our combo packages exist for exactly that.',
    },
    {
      q: 'How fast can we start?',
      a: 'Typically within 1–2 weeks of kickoff, depending on scope and asset readiness. Discovery can begin as soon as the brief is clear.',
    },
    {
      q: 'Do you only work with big brands?',
      a: 'No. We work with ambitious startups and established teams - as long as you care about craft, clarity, and measurable results.',
    },
  ],
  '/services/branding': [
    {
      q: 'How long does a branding project take?',
      a: 'A typical full brand identity project requires 4 to 6 weeks from initial research to final guideline delivery.',
    },
    {
      q: 'Do you provide source files?',
      a: 'Yes. You receive editable source files (AI/SVG/PDF) plus exported assets ready for web and print.',
    },
    {
      q: 'Can you refresh an existing brand?',
      a: 'Absolutely. We specialize in brand evolutions that preserve equity while modernizing perception and systems.',
    },
  ],
  '/services/web-design': [
    {
      q: 'How long does a typical build take?',
      a: 'Standard corporate builds average 4-6 weeks. Complex integrations or custom web applications require 8-12 weeks for rigorous execution and testing.',
    },
    {
      q: 'Do you provide ongoing maintenance?',
      a: 'Yes. We offer retainer packages for security patching, performance monitoring, and continuous iterative improvements.',
    },
    {
      q: 'Can we update content ourselves?',
      a: 'Absolutely. We integrate intuitive CMS backends (like Webflow, WordPress, or Headless options) ensuring your team maintains operational agility.',
    },
  ],
  '/services/mobile-apps': [
    {
      q: 'How much does it cost to build an app?',
      a: 'Costs vary wildly based on complexity, platforms, and features. A basic app might start at $15k, while complex enterprise solutions can exceed $100k. We provide detailed scopes and transparent pricing before starting.',
    },
    {
      q: 'Should I build native or cross-platform?',
      a: 'If you need peak performance, heavy hardware integration, or complex animations, go Native. If you want faster time-to-market and lower costs while targeting both iOS and Android, React Native or Flutter are excellent choices.',
    },
    {
      q: 'How long does development take?',
      a: 'A typical MVP takes 3-4 months from concept to launch. More complex applications can take 6-12 months. We use agile methodologies to deliver functional builds early and often.',
    },
  ],
  '/services/web-portals': [
    {
      q: 'How long does it take to build a custom portal?',
      a: 'Timelines vary greatly depending on complexity. A standard portal typically takes 3-4 months, while enterprise-level platforms can take 6-9 months from discovery to deployment.',
    },
    {
      q: 'Do you provide ongoing support and maintenance?',
      a: 'Yes, all our portal projects include a standard post-launch support period. We also offer comprehensive SLA-backed retainer packages for ongoing feature development, security patches, and server maintenance.',
    },
    {
      q: 'Can you integrate with our existing legacy systems?',
      a: 'Absolutely. A significant part of our portal development involves creating secure API bridges to connect with your existing ERPs, CRMs, or legacy databases to ensure seamless data flow.',
    },
  ],
  '/pricing': [
    {
      q: 'Do you offer payment plans?',
      a: 'Yes - typically 50% kickoff, 25% at design approval, 25% at launch. Enterprise scopes can be phased differently.',
    },
    {
      q: 'Are there hidden fees?',
      a: 'No. Scope, timeline, and cost are written before production. Change requests are quoted openly.',
    },
    {
      q: 'What happens after launch?',
      a: '30 days of free support is included. Optional maintenance, SEO, and content retainers keep momentum going.',
    },
    {
      q: 'Can I mix services?',
      a: 'Absolutely. Most clients combine brand + web or web + commerce. Combo packages exist for cleaner pricing.',
    },
  ],
  '/packages': [
    {
      q: 'Can I customize a combo?',
      a: 'Yes. Combos are starting frameworks - we tailor scope, pages, and deliverables to your business.',
    },
    {
      q: 'Do combos include revisions?',
      a: 'Every package includes structured revision rounds. Extra rounds can be added if needed.',
    },
    {
      q: 'How do payments work?',
      a: 'Usually 50% to start, then milestone-based payments through design approval and launch.',
    },
  ],
}

const PUBLISHED_REVIEWS = [
  {
    name: 'Aykut Sadi',
    rating: 5,
    quote:
      'NEUTRIX rebuilt our entire digital presence in 8 weeks. The site looks elite, loads insanely fast, and our demo bookings jumped immediately. Absolute professionals.',
  },
  {
    name: 'Karim Elnaggar',
    rating: 5,
    quote:
      'They don’t just design - they think like growth partners. Every section was intentional, premium, and conversion-focused. Our brand finally feels enterprise-ready.',
  },
  {
    name: 'Priya Desai',
    rating: 5,
    quote:
      'From branding to launch, the process was seamless. Clients now tell us our product alone made them trust us. That is the power of great digital craft.',
  },
  {
    name: 'Yanal Ektielate',
    rating: 5,
    quote:
      'Clear communication, sharp timelines, and world-class UI. Our internal portal transformed operations and the team still raves about the experience.',
  },
  {
    name: 'Amelia Chen',
    rating: 5,
    quote:
      'Checkout friction vanished. Visual design is stunning and the conversion lift paid for the project multiple times over in the first quarter.',
  },
  {
    name: 'Marcus Webb',
    rating: 5,
    quote:
      'Rare mix of aesthetics and engineering depth. Clean code, excellent performance, and a site that finally matches the quality of our product.',
  },
]

const SERVICE_BY_PATH = {
  '/services/branding': {
    name: 'Brand identity design',
    type: 'Brand identity and visual systems for growing companies.',
  },
  '/services/web-design': {
    name: 'Custom website design',
    type: 'Custom websites focused on performance, UX, and conversion.',
  },
  '/services/e-commerce': {
    name: 'Ecommerce website development',
    type: 'Online stores, catalog UX, and checkout built to sell.',
  },
  '/services/mobile-apps': {
    name: 'Mobile app development',
    type: 'iOS and Android apps with product UX and backend.',
  },
  '/services/web-portals': {
    name: 'Custom web portal development',
    type: 'Secure dashboards and operational web platforms.',
  },
}

function absoluteUrl(origin, path) {
  if (path === '/') return `${origin}/`
  return `${origin}${path}`
}

function toIsoDate(value) {
  const parsed = Date.parse(value)
  if (Number.isNaN(parsed)) return '2026-09-08'
  return new Date(parsed).toISOString().slice(0, 10)
}

function organizationNode(origin) {
  return {
    '@type': ['Organization', 'ProfessionalService'],
    '@id': `${origin}/#organization`,
    name: BRAND.name,
    url: `${origin}/`,
    email: BRAND.email,
    description: SITE_DESCRIPTION,
    telephone: BRAND.phones.map((p) => p.e164),
    areaServed: ['GB', 'US', 'Worldwide'],
    availableLanguage: ['English'],
    image: `${origin}/og-share.png`,
    logo: {
      '@type': 'ImageObject',
      url: `${origin}/favicon.svg`,
    },
  }
}

function websiteNode(origin) {
  return {
    '@type': 'WebSite',
    '@id': `${origin}/#website`,
    url: `${origin}/`,
    name: BRAND.name,
    description: SITE_DESCRIPTION,
    inLanguage: 'en-GB',
    publisher: { '@id': `${origin}/#organization` },
  }
}

function breadcrumbNode(origin, pathname) {
  const crumbs = getBreadcrumbs(pathname)
  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(origin, crumb.path),
    })),
  }
}

function faqNode(pathname) {
  const items = FAQ_BY_PATH[pathname]
  if (!items?.length) return null
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }
}

function serviceNode(origin, pathname) {
  const service = SERVICE_BY_PATH[pathname]
  if (!service) return null
  return {
    '@type': 'Service',
    name: service.name,
    description: service.type,
    url: absoluteUrl(origin, pathname),
    provider: { '@id': `${origin}/#organization` },
    areaServed: ['GB', 'US', 'Worldwide'],
  }
}

function reviewGraph(origin) {
  const avg =
    PUBLISHED_REVIEWS.reduce((sum, review) => sum + review.rating, 0) /
    PUBLISHED_REVIEWS.length

  return {
    '@type': 'ProfessionalService',
    '@id': `${origin}/#reviews`,
    name: BRAND.name,
    url: `${origin}/reviews`,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: avg.toFixed(1),
      bestRating: '5',
      worstRating: '1',
      reviewCount: String(PUBLISHED_REVIEWS.length),
    },
    review: PUBLISHED_REVIEWS.map((review) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: review.name },
      reviewBody: review.quote,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: String(review.rating),
        bestRating: '5',
      },
    })),
  }
}

export function buildSeoGraph(pathname, origin = SITE_ORIGIN) {
  const graph = [organizationNode(origin), websiteNode(origin), breadcrumbNode(origin, pathname)]

  const webPage = {
    '@type': 'WebPage',
    '@id': `${absoluteUrl(origin, pathname)}#webpage`,
    url: absoluteUrl(origin, pathname),
    name: BRAND.name,
    isPartOf: { '@id': `${origin}/#website` },
  }
  graph.push(webPage)

  const faq = faqNode(pathname)
  if (faq) graph.push(faq)

  const service = serviceNode(origin, pathname)
  if (service) graph.push(service)

  if (pathname === '/reviews') graph.push(reviewGraph(origin))

  if (pathname.startsWith('/blog/')) {
    const post = getPostBySlug(pathname.slice('/blog/'.length))
    if (post) {
      graph.push({
        '@type': 'Article',
        headline: post.title,
        description: post.description,
        datePublished: toIsoDate(post.date),
        author: { '@type': 'Organization', name: BRAND.name },
        publisher: { '@id': `${origin}/#organization` },
        mainEntityOfPage: absoluteUrl(origin, pathname),
        image: `${origin}/og-share.png`,
      })
    }
  }

  if (pathname.startsWith('/work/')) {
    const work = getWorkSeo(pathname.slice('/work/'.length))
    if (work) {
      graph.push({
        '@type': 'CreativeWork',
        name: work.title,
        description: work.description,
        url: absoluteUrl(origin, pathname),
        creator: { '@id': `${origin}/#organization` },
      })
    }
  }

  const pageSeo = getSeoForPath(pathname)
  webPage.name = pageSeo.title
  webPage.description = pageSeo.description

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  }
}
