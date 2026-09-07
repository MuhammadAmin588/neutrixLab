import hero from '../assets/ecommerce/hero.jpg'
import admin from '../assets/ecommerce/admin.jpg'
import caseStudy from '../assets/ecommerce/case.jpg'
import imgBandookWala from '../assets/portfolio/Bandook-Wala.png'
import imgBigBoyz from '../assets/portfolio/BIG-BOYS-Collection-1.png'
import imgCarters from '../assets/portfolio/CARTERS-1.png'
import imgStrathberry from '../assets/portfolio/STRATHBERRY.png'
import imgSipzz from '../assets/portfolio/Sipzz-1.png'
import imgAarum from '../assets/portfolio/AARUM-1.png'

export const ecommerceHero = {
  badge: 'PREMIUM E-COMMERCE SOLUTIONS',
  titleLine1: 'E-Commerce Experiences',
  titleHighlight: 'Designed To Sell',
  description:
    'Architecting high-performance digital storefronts for enterprise scalability. We blend technical precision with immersive glassmorphism to create frictionless buying journeys.',
  image: hero,
  imageAlt:
    'A premium 3D isometric mockup of an ultra-modern e-commerce dashboard floating in a dark, infinite cyberspace environment. The interface features sleek glassmorphism panels, glowing cyan and deep blue neon accents, and complex data visualizations.',
}

export const ecommerceStrategy = {
  title: 'Strategy Meets Design',
  description:
    "We don't just build stores; we engineer digital sales machines. Our conversion-focused approach combines data-driven UX principles with striking visual aesthetics to maximize ROI and customer lifetime value.",
}

export const ecommerceFeatures = [
  {
    icon: 'inventory_2',
    title: 'Smart Inventory',
    description: 'Real-time stock tracking, automated alerts, and multi-location management.',
  },
  {
    icon: 'local_shipping',
    title: 'Advanced Shipping',
    description: 'Dynamic rates, carrier integrations, and automated fulfillment workflows.',
  },
  {
    icon: 'manage_accounts',
    title: 'Customer Portals',
    description: 'Secure accounts, order history, wishlists, and personalized recommendations.',
  },
  {
    icon: 'reviews',
    title: 'Verified Reviews',
    description: 'Automated review requests, photo uploads, and SEO-rich rich snippets.',
  },
]

export const ecommerceAdmin = {
  title: 'Effortless Admin Control',
  description:
    'Our bespoke CMS solutions give you total command over your catalog. Easily manage product variants, complex pricing structures, and rich media assets without touching a single line of code.',
  image: admin,
  items: [
    'Bulk product imports & updates',
    'Customizable data fields & attributes',
    'Drag-and-drop category management',
  ],
}

export const ecommerceProjects = [
  { id: 1, title: 'Bandook Wala', image: imgBandookWala },
  { id: 2, title: 'Big Boyz Collection', image: imgBigBoyz },
  { id: 3, title: "Carter's", image: imgCarters },
  { id: 4, title: 'Strathberry', image: imgStrathberry },
  { id: 5, title: 'sipzz', image: imgSipzz },
  { id: 6, title: 'Aarum', image: imgAarum },
]

export const ecommerceCaseStudy = {
  label: 'CASE STUDY',
  title: "Scaling 'Aura Tech' to $5M/yr",
  description:
    'By completely redesigning their headless commerce architecture and optimizing the checkout flow, we achieved unprecedented growth metrics within 6 months.',
  image: caseStudy,
  metrics: [
    { value: '215%', label: 'CONVERSION LIFT' },
    { value: '1.2s', label: 'PAGE LOAD TIME' },
  ],
}

export const ecommercePricing = [
  {
    name: 'Startup',
    price: '$5k+',
    popular: false,
    features: ['Standard Theme Customization', 'Up to 50 Products', 'Basic Payment Gateway'],
    cta: 'Select Plan',
  },
  {
    name: 'Professional',
    price: '$12k+',
    popular: true,
    features: ['Custom UI/UX Design', 'Up to 500 Products', 'Advanced Integrations', 'SEO Optimization'],
    cta: 'Select Plan',
  },
  {
    name: 'Elite',
    price: '$25k+',
    popular: false,
    features: ['Headless Commerce Setup', 'Unlimited Products', 'Custom Middleware', 'Priority Support'],
    cta: 'Select Plan',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    popular: false,
    features: ['Multi-Region Setup', 'B2B Wholesale Portals', 'ERP/CRM Integration', 'SLA Guarantees'],
    cta: 'Contact Us',
  },
]

export const ecommerceFaq = [
  {
    question: 'What platforms do you work with?',
    answer:
      'We specialize in Shopify Plus, BigCommerce, and custom headless architectures using Next.js.',
  },
  {
    question: 'How long does a typical build take?',
    answer:
      'Standard builds take 4-8 weeks, while complex headless or enterprise solutions can take 3-6 months depending on integration requirements.',
  },
  {
    question: 'Do you provide ongoing support?',
    answer:
      'Yes, we offer retainer packages for ongoing optimization, technical support, and feature development post-launch.',
  },
]

export const ecommerceCta = {
  title: 'Ready to Scale Your Sales?',
  description:
    "Let's discuss how our technical expertise can drive measurable growth for your e-commerce brand.",
}
