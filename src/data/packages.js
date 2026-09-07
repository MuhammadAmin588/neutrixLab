import hero from '../assets/packages/hero.jpg'
import starter from '../assets/packages/starter.jpg'
import growth from '../assets/packages/growth.jpg'
import enterprise from '../assets/packages/enterprise.jpg'
import addon from '../assets/packages/addon.jpg'
import { ROUTES } from '../constants/navigation'

export const PACKAGES_IMAGES = { hero, addon }

export const PACKAGE_STATS = [
  { value: '30%', label: 'Avg. Bundle Savings' },
  { value: '3-in-1', label: 'Services Combined' },
  { value: '14 days', label: 'Typical Kickoff' },
  { value: '1 PM', label: 'Dedicated Manager' },
]

export const COMBO_PACKAGES = [
  {
    id: 'launch',
    badge: 'BEST FOR STARTUPS',
    name: 'Launch Combo',
    tagline: 'Brand + Website + Launch Kit',
    price: '$2,999',
    oldPrice: '$4,200',
    popular: false,
    image: starter,
    description:
      'Everything you need to look premium online fast - identity essentials, a conversion-ready website, and launch assets.',
    includes: [
      'Logo + color system',
      '5-page custom website',
      'Mobile responsive UI',
      'Basic SEO setup',
      'Social launch creatives',
      '2 revision rounds',
    ],
    idealFor: 'New brands & early startups',
    cta: 'Choose Launch Combo',
    path: ROUTES.contact,
  },
  {
    id: 'growth',
    badge: 'MOST POPULAR',
    name: 'Growth Combo',
    tagline: 'Website + Branding + Marketing',
    price: '$5,499',
    oldPrice: '$7,800',
    popular: true,
    image: growth,
    description:
      'A full growth stack: polished brand system, high-performance website, and campaign-ready marketing foundations.',
    includes: [
      'Complete brand identity',
      'Up to 12 custom pages',
      'CMS + animations',
      'Advanced SEO setup',
      'Ad creatives + landing support',
      'Analytics dashboard setup',
    ],
    idealFor: 'Scaling companies',
    cta: 'Choose Growth Combo',
    path: ROUTES.contact,
  },
  {
    id: 'dominate',
    badge: 'ENTERPRISE',
    name: 'Dominate Combo',
    tagline: 'Portal + SEO + Retainer',
    price: 'Custom',
    oldPrice: null,
    popular: false,
    image: enterprise,
    description:
      'Built for ambitious teams: custom portal architecture, technical SEO, and ongoing optimization with senior support.',
    includes: [
      'Custom web portal / app',
      'Role-based admin system',
      'Security + scalability setup',
      'Technical SEO program',
      'Monthly growth retainer',
      'Dedicated project manager',
    ],
    idealFor: 'Enterprises & funded teams',
    cta: 'Request Custom Quote',
    path: ROUTES.contact,
  },
]

export const PACKAGE_STEPS = [
  {
    step: '01',
    title: 'Pick your combo',
    description: 'Choose Launch, Growth, or Dominate based on your stage and goals.',
    icon: 'inventory_2',
  },
  {
    step: '02',
    title: 'Strategy call',
    description: 'We map scope, timeline, and success metrics in a free consultation.',
    icon: 'forum',
  },
  {
    step: '03',
    title: 'Design & build',
    description: 'Brand, UI, and development move together with weekly progress demos.',
    icon: 'architecture',
  },
  {
    step: '04',
    title: 'Launch & scale',
    description: 'Go live with training, support, and optional retainers for continuous growth.',
    icon: 'rocket_launch',
  },
]

export const PACKAGE_COMPARISON = [
  { feature: 'Brand Identity', launch: true, growth: true, dominate: true },
  { feature: 'Custom Website', launch: '5 pages', growth: '12 pages', dominate: 'Portal / App' },
  { feature: 'Advanced Animations', launch: false, growth: true, dominate: true },
  { feature: 'CMS Integration', launch: false, growth: true, dominate: true },
  { feature: 'Marketing Assets', launch: 'Launch kit', growth: 'Full set', dominate: 'Custom' },
  { feature: 'SEO Program', launch: 'Basic', growth: 'Advanced', dominate: 'Technical + Retainer' },
  { feature: 'Dedicated PM', launch: false, growth: true, dominate: true },
  { feature: 'Ongoing Retainer', launch: false, growth: 'Optional', dominate: true },
]

export const PACKAGE_ADDONS = [
  {
    icon: 'cloud',
    title: 'Hosting & Care',
    description: 'Updates, backups, uptime monitoring, and priority fixes.',
    price: 'From $99/mo',
  },
  {
    icon: 'query_stats',
    title: 'SEO Accelerator',
    description: 'Monthly technical + content optimization to climb rankings.',
    price: 'From $499/mo',
  },
  {
    icon: 'campaign',
    title: 'Paid Ads Creative Pack',
    description: 'High-converting ad visuals and landing page variants.',
    price: 'From $799',
  },
]

export const PACKAGE_FAQS = [
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
]
