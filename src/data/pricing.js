export const RATE_PATHS = [
  {
    id: 'web-design',
    label: 'I need a website',
    hint: 'Brand site, landing, or corporate web',
    icon: 'language',
  },
  {
    id: 'e-comm',
    label: 'I need a store',
    hint: 'Shopify, headless, or custom commerce',
    icon: 'shopping_bag',
  },
  {
    id: 'portal',
    label: 'I need a portal',
    hint: 'Internal tools, dashboards, secure ops',
    icon: 'dashboard',
  },
  {
    id: 'marketing',
    label: 'I need growth',
    hint: 'Ads, creative, CRO retainers',
    icon: 'trending_up',
  },
]

export const PLAN_GROUPS = {
  'web-design': {
    title: 'Web Design & Development',
    subtitle: 'Sites engineered for trust, speed, and conversion.',
    anchor: 'From $1k',
    plans: [
      {
        id: 'starter',
        tier: '01',
        name: 'Starter',
        description: 'Lean presence for early brands that still need to look premium.',
        price: '$1,000',
        note: 'one-time',
        popular: false,
        timeline: '3–4 weeks',
        features: ['Up to 5 pages', 'Responsive design', 'Basic SEO', 'Contact forms'],
        cta: 'Start with Starter',
      },
      {
        id: 'professional',
        tier: '02',
        name: 'Professional',
        description: 'The growth default - CMS, motion, and SEO built to convert.',
        price: '$2,000',
        note: 'one-time',
        popular: true,
        timeline: '5–7 weeks',
        features: [
          'Up to 15 pages',
          'Advanced animations',
          'CMS integration',
          'Advanced SEO',
          'Performance pass',
        ],
        cta: 'Choose Professional',
      },
      {
        id: 'enterprise',
        tier: '03',
        name: 'Enterprise',
        description: 'Custom systems for complex orgs and high-stakes launches.',
        price: 'Custom',
        note: 'scoped',
        popular: false,
        timeline: '8–14 weeks',
        features: [
          'Unlimited pages',
          'CRM / ERP integrations',
          'Dedicated PM',
          'SLA options',
        ],
        cta: 'Talk Enterprise',
      },
    ],
  },
  'e-comm': {
    title: 'E-Commerce',
    subtitle: 'Storefronts built to reduce friction and lift revenue.',
    anchor: 'From $1k',
    plans: [
      {
        id: 'store-launch',
        tier: '01',
        name: 'Store Launch',
        description: 'Clean launch stack for brands ready to sell online.',
        price: '$1,000',
        note: 'from',
        popular: false,
        timeline: '4–6 weeks',
        features: ['Theme customization', 'Up to 50 products', 'Payments', 'Basic CRO'],
        cta: 'Launch Store',
      },
      {
        id: 'store-growth',
        tier: '02',
        name: 'Store Growth',
        description: 'Custom UX and integrations for serious sales volume.',
        price: '$2,500',
        note: 'from',
        popular: true,
        timeline: '6–10 weeks',
        features: ['Custom UI/UX', 'Up to 500 products', 'Integrations', 'SEO + analytics'],
        cta: 'Scale Store',
      },
      {
        id: 'store-elite',
        tier: '03',
        name: 'Store Elite',
        description: 'Headless / multi-region architecture for enterprise commerce.',
        price: 'Custom',
        note: 'enterprise',
        popular: false,
        timeline: '10–16 weeks',
        features: ['Headless commerce', 'Unlimited catalog', 'ERP bridges', 'Priority support'],
        cta: 'Scope Elite',
      },
    ],
  },
  portal: {
    title: 'Web Portals',
    subtitle: 'Secure operational platforms your team can run daily.',
    anchor: 'From $5k',
    plans: [
      {
        id: 'portal-standard',
        tier: '01',
        name: 'Standard Portal',
        description: 'Auth, dashboards, and admin control without bloat.',
        price: '$5,000',
        note: 'from',
        popular: false,
        timeline: '8–12 weeks',
        features: ['Custom UI/UX', 'Auth system', 'Admin dashboard', '3 months support'],
        cta: 'Build Standard',
      },
      {
        id: 'portal-enterprise',
        tier: '02',
        name: 'Enterprise Platform',
        description: 'Roles, APIs, and realtime systems for complex ops.',
        price: '$10,000',
        note: 'from',
        popular: true,
        timeline: '12–20 weeks',
        features: ['Advanced APIs', 'Roles & permissions', 'Realtime messaging', 'Analytics'],
        cta: 'Build Enterprise',
      },
      {
        id: 'portal-custom',
        tier: '03',
        name: 'Bespoke Build',
        description: 'Fully scoped platform for unique workflows.',
        price: 'Custom',
        note: 'scoped',
        popular: false,
        timeline: 'Flexible',
        features: ['Discovery workshop', 'Architecture blueprint', 'Dedicated pod', 'SLA options'],
        cta: 'Request Quote',
      },
    ],
  },
  marketing: {
    title: 'Marketing Retainers',
    subtitle: 'Creative + media loops that compound pipeline.',
    anchor: 'From $1.2k/mo',
    plans: [
      {
        id: 'mkt-spark',
        tier: '01',
        name: 'Spark',
        description: 'Focused creative and reporting for one primary channel.',
        price: '$1,200',
        note: '/mo',
        popular: false,
        timeline: 'Monthly',
        features: ['Creative pack', 'Landing tweaks', 'Monthly report', '1 channel'],
        cta: 'Start Spark',
      },
      {
        id: 'mkt-scale',
        tier: '02',
        name: 'Scale',
        description: 'Multi-channel growth with testing cadence.',
        price: '$2,800',
        note: '/mo',
        popular: true,
        timeline: 'Monthly',
        features: ['Multi-channel ads', 'CRO experiments', 'Creative testing', 'Bi-weekly reviews'],
        cta: 'Start Scale',
      },
      {
        id: 'mkt-dominate',
        tier: '03',
        name: 'Dominate',
        description: 'Full-funnel partnership with a dedicated strategist.',
        price: 'Custom',
        note: 'retainer',
        popular: false,
        timeline: 'Monthly',
        features: ['Full-funnel strategy', 'Dedicated strategist', 'Creative + media', 'Weekly standups'],
        cta: 'Talk Dominate',
      },
    ],
  },
}

export const COMPARISON_ROWS = [
  { feature: 'Custom pages', starter: 'Up to 5', professional: 'Up to 15', enterprise: 'Unlimited' },
  { feature: 'Responsive design', starter: true, professional: true, enterprise: true },
  { feature: 'Basic SEO', starter: true, professional: true, enterprise: true },
  { feature: 'CMS integration', starter: false, professional: true, enterprise: true },
  { feature: 'Advanced animations', starter: false, professional: true, enterprise: true },
  { feature: 'Custom integrations', starter: false, professional: false, enterprise: true },
  { feature: 'Dedicated PM', starter: false, professional: false, enterprise: true },
]

export const PAYMENT_MILESTONES = [
  { pct: '50%', title: 'Kickoff', text: 'Strategy locked, production begins.' },
  { pct: '25%', title: 'Design approval', text: 'Visual system signed off.' },
  { pct: '25%', title: 'Launch', text: 'Ship day - final invoice clears.' },
]

export const RATE_COMBOS = [
  {
    id: 'business-starter',
    name: 'Business Starter',
    description: 'Website + branding + basic marketing in one clean engagement.',
    price: '$2,999',
    save: 'Save ~18%',
    includes: ['Brand basics', '5–8 page site', 'Launch creative'],
  },
  {
    id: 'enterprise-scaling',
    name: 'Enterprise Scaling',
    description: 'Portal + SEO + retainer for teams ready to compound.',
    price: 'Custom',
    save: 'Priority pod',
    includes: ['Custom portal', 'Advanced SEO', 'Growth retainer'],
  },
]

export const RATE_ADDONS = [
  { id: 'maintenance', title: 'Maintenance & Hosting', price: 'From $99/mo', icon: 'cloud' },
  { id: 'seo-retainer', title: 'SEO Retainer', price: 'From $499/mo', icon: 'search' },
  { id: 'content', title: 'Content Creation', price: 'Custom', icon: 'edit_note' },
]

export const RATE_ROI = [
  { value: '+180%', label: 'Lead lift', context: 'Web relaunches' },
  { value: '+215%', label: 'Conversion lift', context: 'Commerce rebuilds' },
  { value: '4–10w', label: 'Typical sprint', context: 'Scoped projects' },
  { value: '0', label: 'Hidden fees', context: 'Written proposals only' },
]

export const RATE_FAQ = [
  {
    question: 'Do you offer payment plans?',
    answer:
      'Yes - typically 50% kickoff, 25% at design approval, 25% at launch. Enterprise scopes can be phased differently.',
  },
  {
    question: 'Are there hidden fees?',
    answer:
      'No. Scope, timeline, and cost are written before production. Change requests are quoted openly.',
  },
  {
    question: 'What happens after launch?',
    answer:
      '30 days of free support is included. Optional maintenance, SEO, and content retainers keep momentum going.',
  },
  {
    question: 'Can I mix services?',
    answer:
      'Absolutely. Most clients combine brand + web or web + commerce. Combo packages exist for cleaner pricing.',
  },
]
