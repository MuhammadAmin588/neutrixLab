import hero from '../assets/portals/hero.jpg'
import architecture from '../assets/portals/architecture.jpg'
import imgCrHrms from '../assets/portfolio/CR-HRMS-1.png'
import featBloomKidz from '../assets/portfolio/feat-bloom-kidz.jpg'

export const PORTAL_IMAGES = {
  hero,
  architecture,
  medsync: imgCrHrms,
  nexus: featBloomKidz,
}

export const PORTAL_TYPES = [
  {
    icon: 'domain',
    title: 'Enterprise',
    description:
      'Streamline internal operations, employee management, and resource allocation with powerful corporate portals.',
  },
  {
    icon: 'medical_services',
    title: 'Medical',
    description:
      'Secure, HIPAA-compliant patient portals, telemedicine platforms, and electronic health record systems.',
  },
  {
    icon: 'real_estate_agent',
    title: 'Real Estate',
    description:
      'Property management dashboards, broker CRMs, and immersive client portals for real estate agencies.',
  },
  {
    icon: 'hub',
    title: 'Social Networks',
    description:
      'Custom community platforms, membership sites, and specialized social networking applications.',
  },
]

export const ARCHITECTURE_FEATURES = [
  {
    icon: 'shield_lock',
    title: 'Bank-Grade Security',
    description:
      'End-to-end encryption, multi-factor authentication, and robust vulnerability protection standard.',
  },
  {
    icon: 'speed',
    title: 'Elastic Scalability',
    description:
      'Cloud-native infrastructure that automatically scales resources up during traffic spikes.',
  },
  {
    icon: 'database',
    title: 'Custom Databases',
    description:
      'Optimized database schemas designed specifically for your unique data structures and query needs.',
  },
]

export const ADMIN_CONTROLS = [
  {
    icon: 'monitoring',
    title: 'Analytics Dashboards',
    description:
      "Real-time data visualization, KPI tracking, and customizable reporting tools to monitor your platform's health and user engagement.",
  },
  {
    icon: 'forum',
    title: 'Messaging Systems',
    description:
      'Integrated communication hubs for broadcast announcements, targeted notifications, and real-time chat with users.',
  },
  {
    icon: 'manage_accounts',
    title: 'User Roles & Permissions',
    description:
      'Granular access control systems allowing you to define custom roles and restrict access to sensitive features or data.',
  },
]

export const PORTFOLIO_ITEMS = [
  {
    id: 'cr-hrms',
    title: 'CR HRMS',
    subtitle: 'Workforce Management Portal',
    image: imgCrHrms,
    imageAlt: 'Concept Recall HRMS platform for payroll, attendance, and employee records',
    imageFit: 'contain',
    imageBg: '#000000',
  },
  {
    id: 'bloom-kidz',
    title: 'Bloom Kidz',
    subtitle: 'School Operations Portal',
    image: featBloomKidz,
    imageAlt: 'Bloom Kidz school management dashboards',
    imageFit: 'contain',
    imageBg: '#34A6B1',
  },
]

export const PRICING_TIERS = [
  {
    id: 'standard',
    title: 'Standard Portal',
    description: 'Perfect for internal corporate tools and unified dashboards.',
    price: 'From $5k',
    features: [
      'Custom UI/UX Design',
      'Secure User Authentication',
      'Admin Dashboard',
      'Basic Database Integration',
      '3 Months Post-Launch Support',
    ],
    recommended: false,
    ctaVariant: 'outline',
  },
  {
    id: 'enterprise',
    title: 'Enterprise Platform',
    description: 'For highly scalable, multi-tenant applications and complex workflows.',
    price: 'From $10k',
    features: [
      'Everything in Standard',
      'Advanced API Integrations',
      'Complex Roles & Permissions',
      'Real-time Messaging/Sockets',
      'Custom Analytics Engine',
    ],
    recommended: true,
    ctaVariant: 'solid',
  },
]

export const FAQ_ITEMS = [
  {
    question: 'How long does it take to build a custom portal?',
    answer:
      'Timelines vary greatly depending on complexity. A standard portal typically takes 3-4 months, while enterprise-level platforms can take 6-9 months from discovery to deployment.',
  },
  {
    question: 'Do you provide ongoing support and maintenance?',
    answer:
      'Yes, all our portal projects include a standard post-launch support period. We also offer comprehensive SLA-backed retainer packages for ongoing feature development, security patches, and server maintenance.',
  },
  {
    question: 'Can you integrate with our existing legacy systems?',
    answer:
      'Absolutely. A significant part of our portal development involves creating secure API bridges to connect with your existing ERPs, CRMs, or legacy databases to ensure seamless data flow.',
  },
]
