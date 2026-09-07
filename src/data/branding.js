import hero from '../assets/branding/hero.jpg'
import strategy from '../assets/branding/strategy.jpg'
import guidelines from '../assets/branding/guidelines.jpg'
import stationery from '../assets/branding/stationery.jpg'
import portfolio1 from '../assets/branding/portfolio-1.jpg'
import portfolio2 from '../assets/branding/portfolio-2.jpg'
import portfolio3 from '../assets/branding/portfolio-3.jpg'
import portfolio4 from '../assets/branding/portfolio-4.jpg'
import { ROUTES } from '../constants/navigation'

export const BRANDING_IMAGES = { hero, strategy, guidelines, stationery }

export const STRATEGY_BULLETS = [
  'Market Research & Analysis',
  'Competitor Benchmarking',
  'Brand Voice Definition',
  'Positioning Architecture',
]

export const CAPABILITIES = [
  {
    id: 'logo',
    title: 'Logo Conceptualization',
    description:
      'We forge memorable, scalable marks that anchor your visual identity across all technical and corporate touchpoints.',
    icon: 'edit',
    bgIcon: 'draw',
    colSpan: 'md:col-span-2',
    bodyClass: 'font-body-md text-body-md text-on-surface-variant max-w-[32rem]',
    link: { label: 'Explore Logomarks', href: ROUTES.portfolio },
    image: portfolio1,
  },
  {
    id: 'identity',
    title: 'Visual Identity',
    description:
      'Defining typography, color logic, and structural grids for cohesive brand deployment.',
    icon: 'fingerprint',
    colSpan: '',
    bodyClass: 'font-body-sm text-body-sm text-on-surface-variant',
    glow: true,
    image: portfolio2,
  },
  {
    id: 'guidelines',
    title: 'Brand Guidelines',
    description:
      'Comprehensive technical manuals ensuring strict adherence to brand standards.',
    icon: 'menu_book',
    colSpan: '',
    bodyClass: 'font-body-sm text-body-sm text-on-surface-variant',
    image: guidelines,
  },
  {
    id: 'stationary',
    title: 'Corporate Stationery',
    description:
      'Business cards, letterheads, and executive documentation designed with authoritative precision.',
    icon: 'contact_mail',
    colSpan: 'md:col-span-2',
    bodyClass: 'font-body-md text-body-md text-on-surface-variant max-w-[32rem]',
    backgroundImage: stationery,
    backgroundAlt: 'Premium corporate stationery on a dark desk',
  },
]

export const PORTFOLIO_ITEMS = [
  { icon: 'token', title: 'Nexus Systems', subtitle: 'Tech / Rebrand', image: portfolio1 },
  { icon: 'hexagon', title: 'Aura Finance', subtitle: 'Fintech / Identity', image: portfolio2 },
  { icon: 'change_history', title: 'Vanguard Logic', subtitle: 'Enterprise / Core', image: portfolio3 },
  { icon: 'all_inclusive', title: 'Omni Corp', subtitle: 'Logistics / Global', image: portfolio4 },
]

export const PRICING_TIERS = [
  {
    id: 'logo-core',
    title: 'Logo Core',
    description: 'Essential identity for startups.',
    recommended: false,
    features: ['Primary Logo Design', 'Color Palette', 'Typography Selection'],
  },
  {
    id: 'brand-identity',
    title: 'Brand Identity',
    description: 'Comprehensive visual system.',
    recommended: true,
    features: [
      'Everything in Core',
      'Full Brand Guidelines',
      'Corporate Stationery',
      'Social Media Kit',
    ],
  },
  {
    id: 'enterprise',
    title: 'Enterprise Strategy',
    description: 'Full scale positioning.',
    recommended: false,
    features: [
      'Everything in Identity',
      'Deep Market Research',
      'Brand Voice & Messaging',
      'Custom Packaging Design',
    ],
  },
]

export const FAQ_ITEMS = [
  {
    question: 'How long does a branding project take?',
    answer:
      'A typical full brand identity project requires 4 to 6 weeks from initial research to final guideline delivery.',
  },
  {
    question: 'Do you provide source files?',
    answer:
      'Yes. You receive editable source files (AI/SVG/PDF) plus exported assets ready for web and print.',
  },
  {
    question: 'Can you refresh an existing brand?',
    answer:
      'Absolutely. We specialize in brand evolutions that preserve equity while modernizing perception and systems.',
  },
]
