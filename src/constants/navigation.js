export const ROUTES = {
  home: '/',
  portfolio: '/portfolio',
  pricing: '/pricing',
  services: '/services',
  branding: '/services/branding',
  webDesign: '/services/web-design',
  ecommerce: '/services/e-commerce',
  mobileApps: '/services/mobile-apps',
  webPortals: '/services/web-portals',
  reviews: '/reviews',
  contact: '/contact',
  comboPackages: '/packages',
  blog: '/blog',
  work: '/work',
  privacy: '/privacy',
  terms: '/terms',
}

export const NAV_LINKS = [
  { label: 'SERVICES', path: ROUTES.services, key: 'services' },
  { label: 'PORTFOLIO', path: ROUTES.portfolio, key: 'portfolio' },
  { label: 'PRICING', path: ROUTES.pricing, key: 'pricing' },
  { label: 'PACKAGES', path: ROUTES.comboPackages, key: 'combos' },
  { label: 'REVIEWS', path: ROUTES.reviews, key: 'reviews' },
  { label: 'CONTACT', path: ROUTES.contact, key: 'contact' },
]

export const PRICING_NAV_LINKS = [
  { label: 'Services', path: ROUTES.branding, key: 'services' },
  { label: 'Portfolio', path: ROUTES.portfolio, key: 'portfolio' },
  { label: 'Pricing', path: ROUTES.pricing, key: 'pricing' },
  { label: 'Reviews', path: ROUTES.reviews, key: 'reviews' },
  { label: 'Contact', path: ROUTES.contact, key: 'contact' },
]

export const FOOTER_SERVICES = [
  { label: 'Branding', path: ROUTES.branding },
  { label: 'Web Design', path: ROUTES.webDesign },
  { label: 'E-Commerce', path: ROUTES.ecommerce },
  { label: 'Mobile Apps', path: ROUTES.mobileApps },
  { label: 'Web Portals', path: ROUTES.webPortals },
]

export const FOOTER_EXPLORE = [
  { label: 'Services', path: ROUTES.services },
  { label: 'Portfolio', path: ROUTES.portfolio },
  { label: 'Pricing', path: ROUTES.pricing },
  { label: 'Packages', path: ROUTES.comboPackages },
  { label: 'Reviews', path: ROUTES.reviews },
  { label: 'Insights', path: ROUTES.blog },
  { label: 'Contact', path: ROUTES.contact },
]

export const FOOTER_LEGAL = [
  { label: 'Privacy', path: ROUTES.privacy },
  { label: 'Terms', path: ROUTES.terms },
]
