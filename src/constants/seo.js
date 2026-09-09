import { BRAND, SITE_DESCRIPTION } from './brand'
import { BLOG_POSTS, getPostBySlug } from '../data/blog'
import { getWorkSeo, WORK_SEO } from '../data/workMeta'

const DEFAULT_TITLE = `Custom Websites, Branding & Apps | ${BRAND.name}`
const DEFAULT_DESCRIPTION = SITE_DESCRIPTION

export const SITE_ORIGIN = String(
  import.meta.env?.VITE_SITE_URL || 'https://neutrixlab.com',
).replace(/\/$/, '')

/** Public indexable routes — keep in sync with App.jsx */
export const PUBLIC_PATHS = [
  '/',
  '/services',
  '/services/branding',
  '/services/web-design',
  '/services/e-commerce',
  '/services/mobile-apps',
  '/services/web-portals',
  '/portfolio',
  '/pricing',
  '/packages',
  '/reviews',
  '/contact',
  '/privacy',
  '/terms',
  '/blog',
  ...BLOG_POSTS.map((post) => `/blog/${post.slug}`),
  ...WORK_SEO.map((item) => `/work/${item.slug}`),
]

export const SEO_BY_PATH = {
  '/': {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  '/portfolio': {
    title: `Web, App & Brand Case Studies | ${BRAND.name}`,
    description:
      'Selected Neutrix Lab work: education platforms, healthcare, ecommerce stores, mobile apps, and custom web portals.',
  },
  '/pricing': {
    title: `Website, App & Branding Pricing | ${BRAND.name}`,
    description:
      'Starting prices for custom website design, branding, ecommerce, mobile apps, and portals. Written scope before production — UK & US remote.',
  },
  '/packages': {
    title: `Branding & Website Packages | ${BRAND.name}`,
    description:
      'Combo packages that bundle brand identity and website design with one studio — clearer scope than hiring separate vendors.',
  },
  '/reviews': {
    title: `Client Reviews | ${BRAND.name}`,
    description:
      'Client feedback on Neutrix Lab website design, branding, ecommerce, and app projects.',
  },
  '/contact': {
    title: `Contact a Website & Branding Studio | ${BRAND.name}`,
    description: `Request a quote for a custom website, brand, app, or portal. Email ${BRAND.email} or call ${BRAND.phones.map((p) => p.display).join(' or ')}. Reply within one business day.`,
  },
  '/services': {
    title: `Digital Design & Development Services | ${BRAND.name}`,
    description:
      'Branding, custom website design, ecommerce development, mobile apps, and web portals from one remote studio.',
  },
  '/services/branding': {
    title: `Brand Identity Design for Startups & Teams | ${BRAND.name}`,
    description:
      'Logo, voice, and visual identity systems so your brand stays consistent on web, product, and print.',
  },
  '/services/web-design': {
    title: `Custom Website Design Agency | ${BRAND.name}`,
    description:
      'Custom websites built for speed, clarity, and conversion — not generic templates. Remote delivery for UK, US, and worldwide.',
  },
  '/services/e-commerce': {
    title: `Ecommerce Website Development | ${BRAND.name}`,
    description:
      'Online stores with catalog, checkout, and operations designed around how you sell — including Shopify-class commerce builds.',
  },
  '/services/mobile-apps': {
    title: `iOS & Android App Development | ${BRAND.name}`,
    description:
      'Native and cross-platform mobile apps with UX, backend, and launch support so you ship a real product.',
  },
  '/services/web-portals': {
    title: `Custom Web Portal Development | ${BRAND.name}`,
    description:
      'Secure dashboards, school and ops portals, roles, and workflows your team can run in the browser.',
  },
  '/blog': {
    title: `Website Design & Product Insights | ${BRAND.name}`,
    description:
      'Notes from Neutrix Lab on custom website design, ecommerce conversion, brand identity, mobile apps, and school web portals.',
  },
  '/privacy': {
    title: `Privacy Policy | ${BRAND.name}`,
    description: 'How Neutrix Lab handles contact-form and chat information you send us.',
  },
  '/terms': {
    title: `Terms of Use | ${BRAND.name}`,
    description: 'Website terms for Neutrix Lab. Project work is governed by the proposal you accept.',
  },
}

const BREADCRUMB_LABELS = {
  services: 'Services',
  branding: 'Branding',
  'web-design': 'Web Design',
  'e-commerce': 'Ecommerce',
  'mobile-apps': 'Mobile Apps',
  'web-portals': 'Web Portals',
  portfolio: 'Portfolio',
  pricing: 'Pricing',
  packages: 'Packages',
  reviews: 'Reviews',
  contact: 'Contact',
  privacy: 'Privacy',
  terms: 'Terms',
  blog: 'Insights',
  work: 'Work',
}

export function getSeoForPath(pathname) {
  if (SEO_BY_PATH[pathname]) return SEO_BY_PATH[pathname]

  if (pathname.startsWith('/blog/')) {
    const post = getPostBySlug(pathname.slice('/blog/'.length))
    if (post) {
      return {
        title: `${post.title} | ${BRAND.name}`,
        description: post.description,
        ogType: 'article',
      }
    }
  }

  if (pathname.startsWith('/work/')) {
    const work = getWorkSeo(pathname.slice('/work/'.length))
    if (work) {
      return {
        title: `${work.title} | ${BRAND.name}`,
        description: work.description,
      }
    }
  }

  return {
    title: `Page not found | ${BRAND.name}`,
    description: DEFAULT_DESCRIPTION,
  }
}

export function isIndexablePath(pathname) {
  if (Object.prototype.hasOwnProperty.call(SEO_BY_PATH, pathname)) return true
  if (pathname.startsWith('/blog/') && getPostBySlug(pathname.slice('/blog/'.length))) return true
  if (pathname.startsWith('/work/') && getWorkSeo(pathname.slice('/work/'.length))) return true
  return false
}

export function getBreadcrumbs(pathname) {
  const crumbs = [{ name: 'Home', path: '/' }]
  if (pathname === '/') return crumbs

  const parts = pathname.split('/').filter(Boolean)
  let acc = ''
  parts.forEach((part) => {
    acc += `/${part}`
    let name = BREADCRUMB_LABELS[part] || part
    if (acc.startsWith('/blog/') && part !== 'blog') {
      name = getPostBySlug(part)?.title || part
    } else if (acc.startsWith('/work/') && part !== 'work') {
      name = getWorkSeo(part)?.title || part
    }
    crumbs.push({ name, path: acc })
  })
  return crumbs
}
