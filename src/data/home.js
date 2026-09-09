import { ROUTES } from '../constants/navigation'
import heroWorkspace from '../assets/home/hero-workspace.jpg'
import heroCinematic from '../assets/home/hero-cinematic.jpg'
import heroFeatured from '../assets/home/hero-featured.jpg'
import agencyTeam from '../assets/home/agency-team.jpg'
import processStrategy from '../assets/home/process-strategy.jpg'
import featBloomKidz from '../assets/portfolio/feat-bloom-kidz.jpg'
import featClinia from '../assets/portfolio/feat-clinia.jpg'
import featDokWallet from '../assets/portfolio/feat-dokwallet.jpg'
import brandingCard from '../assets/branding/stationery.jpg'
import webDesignCard from '../assets/web-design/project-1.jpg'
import webDevCard from '../assets/home/hero-workspace.jpg'
import ecommerceCard from '../assets/ecommerce/store-1.jpg'
import mobileCard from '../assets/mobile/hero.jpg'
import marketingCard from '../assets/packages/growth.jpg'
import seoCard from '../assets/web-design/hero.jpg'
import motionCard from '../assets/home/hero-featured.jpg'
import assetLogo from '../assets/trusted/asset-logo.png'
import linkupLogo from '../assets/trusted/linkup-logo.png'
import bloomKidzLogo from '../assets/trusted/bloom-kidz.png'
import samuLogo from '../assets/trusted/samu-logo.png'
import beemachineLogo from '../assets/trusted/beemachine-logo.png'
import gamerviewLogo from '../assets/trusted/gamerview-logo.png'
import coverLogo from '../assets/trusted/cover-logo.png'
import iifymLogo from '../assets/trusted/iifym-logo.png'
import reliLogo from '../assets/trusted/reli-logo.png'
import faactLogo from '../assets/trusted/faact-logo.png'
import starryightLogo from '../assets/trusted/starryight-logo.png'
import overflowLogo from '../assets/trusted/overflow-logo.png'

export const TRUSTED_LOGOS = [
  {
    id: 'asset-schools',
    name: 'ASSET',
    src: assetLogo,
  },
  {
    id: 'linkup',
    name: 'LinkUp',
    src: linkupLogo,
  },
  {
    id: 'bloom-kidz',
    name: 'Bloom Kidz',
    src: bloomKidzLogo,
  },
  {
    id: 'samu',
    name: 'SAMU',
    src: samuLogo,
  },
  {
    id: 'beemachine',
    name: 'BEEMACHINE',
    src: beemachineLogo,
  },
  {
    id: 'gamerview',
    name: 'GAMERVIEW',
    src: gamerviewLogo,
  },
  {
    id: 'cover',
    name: 'COVER',
    src: coverLogo,
  },
  {
    id: 'iifym',
    name: 'iifym',
    src: iifymLogo,
  },
  {
    id: 'reli',
    name: 'reli',
    src: reliLogo,
  },
  {
    id: 'faact',
    name: 'faact',
    src: faactLogo,
    invertOnDark: true,
  },
  {
    id: 'starryight',
    name: 'Starryight',
    src: starryightLogo,
  },
  {
    id: 'overflow',
    name: 'Overflow',
    src: overflowLogo,
  },
]

export const HERO_STATS = [
  { end: 48, suffix: '+', label: 'Live Client Projects' },
  { end: 98, suffix: '%', label: 'Client Retention' },
  { end: 49, suffix: '', label: 'Avg Rating', display: '4.9★' },
  { end: 12, suffix: '+', label: 'Industries Served' },
]

export const HERO_ROTATING = ['Websites', 'Brands', 'Products', 'Experiences']

export const HERO_FEATURED = {
  title: 'Professional Websites',
  category: 'Web Design',
  result: 'SEO · speed · growth',
  image: heroFeatured,
  path: ROUTES.webDesign,
}

export const TICKER_WORDS = [
  'BRANDING',
  'WEB DESIGN',
  'E-COMMERCE',
  'MOBILE APPS',
  'SEO',
  'ANIMATION',
  'STRATEGY',
  'GROWTH',
]

export const MANIFESTO = {
  lead: 'Most agencies decorate.',
  punch: 'We build digital weapons.',
  body: 'Every pixel, page, and product is engineered to earn trust fast and turn attention into revenue.',
}

export const FEATURES = [
  {
    icon: 'lightbulb',
    title: 'Strategy',
    description:
      'Data-driven roadmaps that align technical execution with overarching business objectives for measurable ROI.',
  },
  {
    icon: 'design_services',
    title: 'Design',
    description:
      'Immersive user experiences and striking visual identities crafted to captivate audiences and drive conversions.',
  },
  {
    icon: 'code',
    title: 'Development',
    description:
      'Scalable, high-performance architectures utilizing cutting-edge frameworks for robust digital platforms.',
  },
]

export const SERVICES = [
  {
    number: '01',
    icon: 'brush',
    title: 'Branding',
    subtitle: 'Identity systems that feel inevitable',
    path: ROUTES.branding,
    cta: 'Explore branding',
    image: brandingCard,
  },
  {
    number: '02',
    icon: 'web',
    title: 'Web Design',
    subtitle: 'Interfaces that convert on first glance',
    path: ROUTES.webDesign,
    cta: 'Explore web design',
    image: webDesignCard,
  },
  {
    number: '03',
    icon: 'developer_mode',
    title: 'Web Dev',
    subtitle: 'Fast, scalable engineering',
    path: ROUTES.webDesign,
    cta: 'Explore development',
    image: webDevCard,
  },
  {
    number: '04',
    icon: 'shopping_cart',
    title: 'E-Commerce',
    subtitle: 'Stores built to sell harder',
    path: ROUTES.ecommerce,
    cta: 'Explore ecommerce',
    image: ecommerceCard,
  },
  {
    number: '05',
    icon: 'smartphone',
    title: 'Mobile Apps',
    subtitle: 'Products people keep opening',
    path: ROUTES.mobileApps,
    cta: 'Explore apps',
    image: mobileCard,
  },
  {
    number: '06',
    icon: 'campaign',
    title: 'Marketing',
    subtitle: 'Campaigns with clear ROI',
    path: ROUTES.comboPackages,
    cta: 'View packages',
    image: marketingCard,
  },
  {
    number: '07',
    icon: 'search',
    title: 'SEO',
    subtitle: 'Visibility that compounds',
    path: ROUTES.comboPackages,
    cta: 'View packages',
    image: seoCard,
  },
  {
    number: '08',
    icon: 'video_library',
    title: 'Motion',
    subtitle: 'Animation with purpose',
    path: ROUTES.portfolio,
    cta: 'View the work',
    image: motionCard,
  },
]

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discover',
    description: 'We audit your brand, audience, and goals to define a clear digital north star.',
    icon: 'search',
  },
  {
    step: '02',
    title: 'Design',
    description: 'Wireframes and high-fidelity UI that look premium and convert with intent.',
    icon: 'draw',
  },
  {
    step: '03',
    title: 'Build',
    description: 'Clean, fast engineering with performance, SEO, and scalability baked in.',
    icon: 'terminal',
  },
  {
    step: '04',
    title: 'Launch & Grow',
    description: 'Ship, measure, optimize - then keep compounding results after go-live.',
    icon: 'rocket_launch',
  },
]

export const FEATURED_WORK = [
  {
    title: 'Bloom Kidz School OS',
    category: 'EdTech · School OS',
    result: '12+ modules, one platform',
    image: featBloomKidz,
    imageFit: 'contain',
    imageBg: '#34A6B1',
    path: `${ROUTES.work}/bloom-kidz`,
    size: 'large',
  },
  {
    title: 'DoK Wallet',
    category: 'FinTech · Mobile App',
    result: 'iOS + Android, one wallet',
    image: featDokWallet,
    imageFit: 'contain',
    imageBg: '#222222',
    path: `${ROUTES.work}/dok-wallet`,
    size: 'tall',
  },
  {
    title: 'Clinia Health Navigation',
    category: 'HealthTech · Navigation',
    result: 'AI-powered care discovery',
    image: featClinia,
    imageFit: 'contain',
    imageBg: '#1F2D36',
    path: `${ROUTES.work}/clinia`,
    size: 'wide',
  },
]

export const HOME_IMAGES = {
  heroWorkspace,
  heroCinematic,
  heroFeatured,
  agencyTeam,
  processStrategy,
}
