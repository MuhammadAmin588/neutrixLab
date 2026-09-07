import { BRAND, SITE_DESCRIPTION } from './brand'

const DEFAULT_TITLE = `${BRAND.name} | Branding, Web, Apps & Portals`
const DEFAULT_DESCRIPTION = SITE_DESCRIPTION

export const SEO_BY_PATH = {
  '/': {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  '/portfolio': {
    title: `Portfolio | ${BRAND.name}`,
    description: 'Selected Neutrix Lab work across education, health, commerce, mobility, and consumer apps.',
  },
  '/pricing': {
    title: `Pricing | ${BRAND.name}`,
    description: 'Starting ranges for websites, branding, apps, and portals. Final quotes follow a written scope.',
  },
  '/packages': {
    title: `Combo Packages | ${BRAND.name}`,
    description: 'Bundled brand and web packages when you want one team instead of separate vendors.',
  },
  '/reviews': {
    title: `Client Reviews | ${BRAND.name}`,
    description: 'Client feedback from Neutrix Lab projects across web, branding, apps, and commerce.',
  },
  '/contact': {
    title: `Contact | ${BRAND.name}`,
    description: `Tell us about your project. Email ${BRAND.email} or call ${BRAND.phones.map((p) => p.display).join(' or ')}.`,
  },
  '/services': {
    title: `Services | ${BRAND.name}`,
    description: 'Branding, web design, e-commerce, mobile apps, and web portals — scoped to your brief.',
  },
  '/services/branding': {
    title: `Branding | ${BRAND.name}`,
    description: 'Identity, voice, and visual systems so your brand looks consistent across channels.',
  },
  '/services/web-design': {
    title: `Web Design | ${BRAND.name}`,
    description: 'Custom websites focused on clarity, speed, and conversion — not generic templates.',
  },
  '/services/e-commerce': {
    title: `E-Commerce | ${BRAND.name}`,
    description: 'Online stores with catalog, checkout, and operations built around how you actually sell.',
  },
  '/services/mobile-apps': {
    title: `Mobile Apps | ${BRAND.name}`,
    description: 'iOS and Android apps with the UX and backend needed to ship a real product.',
  },
  '/services/web-portals': {
    title: `Web Portals | ${BRAND.name}`,
    description: 'Secure dashboards and internal platforms for teams that run operations in the browser.',
  },
  '/privacy': {
    title: `Privacy | ${BRAND.name}`,
    description: 'How Neutrix Lab handles contact-form and chat information you send us.',
  },
  '/terms': {
    title: `Terms | ${BRAND.name}`,
    description: 'Website terms for Neutrix Lab. Project work is governed by the proposal you accept.',
  },
}

export function getSeoForPath(pathname) {
  return (
    SEO_BY_PATH[pathname] || {
      title: BRAND.name,
      description: DEFAULT_DESCRIPTION,
    }
  )
}
