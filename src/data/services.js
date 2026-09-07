import { ROUTES } from '../constants/navigation'
import brandingHero from '../assets/branding/hero.jpg'
import webHero from '../assets/web-design/hero.jpg'
import ecomHero from '../assets/ecommerce/hero.jpg'
import mobileHero from '../assets/mobile/hero.jpg'
import portalsHero from '../assets/portals/hero.jpg'

export const SERVICE_CARDS = [
  {
    number: '01',
    title: 'Branding',
    subtitle: 'Identity systems that feel inevitable',
    blurb:
      'Logos, voice, guidelines, and visual systems built so your brand looks premium in every room it enters.',
    path: ROUTES.branding,
    image: brandingHero,
    tags: ['Logo', 'Guidelines', 'Voice'],
    outcome: 'Stronger recall + clearer positioning',
  },
  {
    number: '02',
    title: 'Web Design',
    subtitle: 'Interfaces that convert on first glance',
    blurb:
      'High-performance websites engineered for speed, trust, and conversion - not template filler.',
    path: ROUTES.webDesign,
    image: webHero,
    tags: ['UI/UX', 'Performance', 'SEO'],
    outcome: 'More demos, faster decisions',
  },
  {
    number: '03',
    title: 'E-Commerce',
    subtitle: 'Storefronts engineered to sell harder',
    blurb:
      'Checkout flows, catalog UX, and commerce architecture built to lift conversion and reduce friction.',
    path: ROUTES.ecommerce,
    image: ecomHero,
    tags: ['Shopify', 'Checkout', 'CRO'],
    outcome: 'Higher AOV + conversion lift',
  },
  {
    number: '04',
    title: 'Mobile Apps',
    subtitle: 'Products people keep opening',
    blurb:
      'Native and cross-platform apps with clean UX, solid backends, and retention-minded product craft.',
    path: ROUTES.mobileApps,
    image: mobileHero,
    tags: ['iOS', 'Android', 'RN'],
    outcome: 'Retention + crash-free launches',
  },
  {
    number: '05',
    title: 'Web Portals',
    subtitle: 'Secure systems for complex operations',
    blurb:
      'Dashboards, roles, workflows, and secure data platforms your team can actually run the business on.',
    path: ROUTES.webPortals,
    image: portalsHero,
    tags: ['Enterprise', 'Admin', 'Data'],
    outcome: 'Ops clarity + secure scale',
  },
]

export const SERVICE_OUTCOMES = [
  { label: 'Lead quality uplift', value: 180, suffix: '%', note: 'Avg. across relaunches', bar: 92 },
  { label: 'Checkout conversion', value: 215, suffix: '%', note: 'Commerce rebuilds', bar: 100 },
  { label: 'Page speed gains', value: 3, suffix: '×', note: 'Core Web Vitals focus', bar: 75 },
  { label: 'Client retention', value: 98, suffix: '%', note: 'Would hire again', bar: 98 },
]

export const SERVICE_DELIVERABLES = [
  {
    title: 'Discovery & strategy',
    text: 'Goals, audience, competitors, and a clear success metric before design starts.',
    icon: 'travel_explore',
  },
  {
    title: 'UX architecture',
    text: 'Wireframes and flows that remove friction and make the next click obvious.',
    icon: 'account_tree',
  },
  {
    title: 'Visual system',
    text: 'Typography, color, components, and motion that feel premium and consistent.',
    icon: 'palette',
  },
  {
    title: 'Engineering',
    text: 'Clean, fast builds with SEO, analytics, and scalability baked in from day one.',
    icon: 'terminal',
  },
  {
    title: 'QA & launch',
    text: 'Device testing, performance passes, and a calm go-live with handover docs.',
    icon: 'verified',
  },
  {
    title: 'Growth loops',
    text: 'Post-launch iteration - measure, learn, ship improvements that compound.',
    icon: 'trending_up',
  },
]

export const ENGAGEMENT_MODELS = [
  {
    title: 'Project sprint',
    time: '4–10 weeks',
    best: 'Defined scope, clear launch date',
    points: ['Fixed milestones', 'Dedicated pod', 'Full design + build'],
  },
  {
    title: 'Product partnership',
    time: 'Ongoing',
    best: 'Roadmap work after launch',
    points: ['Monthly capacity', 'Priority support', 'Continuous optimization'],
  },
  {
    title: 'Combo package',
    time: 'Bundled',
    best: 'Brand + web + growth together',
    points: ['Multi-discipline', 'Shared strategy', 'Better unit economics'],
    path: ROUTES.comboPackages,
  },
]

export const SERVICE_INDUSTRIES = [
  'SaaS',
  'Fintech',
  'Healthcare',
  'E-commerce',
  'Real estate',
  'Logistics',
  'Education',
  'Professional services',
  'Consumer apps',
  'Enterprise ops',
]

export const SERVICE_CHAPTERS = [
  {
    n: '01',
    title: 'Clarify the job',
    text: 'What should this digital asset do in 90 days? We lock the outcome before pixels.',
  },
  {
    n: '02',
    title: 'Design the system',
    text: 'Structure, hierarchy, and craft - every section earns trust or drives action.',
  },
  {
    n: '03',
    title: 'Build for speed',
    text: 'Performance, accessibility, and clean engineering so the experience feels effortless.',
  },
  {
    n: '04',
    title: 'Launch & compound',
    text: 'Ship, measure, refine. Growth is a loop - not a handoff and goodbye.',
  },
]

export const SERVICE_COMPARE = [
  { need: 'Need a brand that feels premium', pick: 'Branding', path: ROUTES.branding },
  { need: 'Need a site that books more calls', pick: 'Web Design', path: ROUTES.webDesign },
  { need: 'Need a store that converts harder', pick: 'E-Commerce', path: ROUTES.ecommerce },
  { need: 'Need an app people return to', pick: 'Mobile Apps', path: ROUTES.mobileApps },
  { need: 'Need secure internal workflows', pick: 'Web Portals', path: ROUTES.webPortals },
]

export const SERVICE_HUB_FAQ = [
  {
    question: 'Not sure which service to start with?',
    answer:
      'Start with the outcome. If trust is weak, begin with branding. If traffic doesn’t convert, start with web or commerce. If ops are messy, start with a portal. We’ll recommend the sharpest path on a free consult.',
  },
  {
    question: 'Can you combine multiple services?',
    answer:
      'Yes - most high-performing clients bundle brand + web, or web + commerce. Our combo packages exist for exactly that.',
  },
  {
    question: 'How fast can we start?',
    answer:
      'Typically within 1–2 weeks of kickoff, depending on scope and asset readiness. Discovery can begin as soon as the brief is clear.',
  },
  {
    question: 'Do you only work with big brands?',
    answer:
      'No. We work with ambitious startups and established teams - as long as you care about craft, clarity, and measurable results.',
  },
]
