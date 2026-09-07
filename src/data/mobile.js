import hero from '../assets/mobile/hero.jpg'
import ux from '../assets/mobile/ux.jpg'
import caseImg from '../assets/mobile/case.jpg'
import featSamu from '../assets/portfolio/feat-samu.jpg'
import featIifym from '../assets/portfolio/feat-iifym.png'
import imgTrailBliss from '../assets/portfolio/TrailBliss-1.png'
import featZexal from '../assets/portfolio/feat-zexal.webp'
import imgTripSphere from '../assets/portfolio/TripSphere-1.png'
import featDokWallet from '../assets/portfolio/feat-dokwallet.jpg'

export const mobileHero = {
  badge: 'PREMIUM MOBILE ENGINEERING',
  titleBefore: 'Turn Your App Idea Into ',
  titleHighlight: 'Reality',
  description:
    'We architect high-performance, native and cross-platform mobile applications that dominate app stores. From seamless UI/UX to robust backend APIs, we engineer digital experiences that drive engagement and growth.',
  image: hero,
  imageAlt:
    'A highly detailed, professional 3D render of three sleek, modern smartphones floating in a dark, atmospheric cyber-space environment. The screens display abstract, cutting-edge mobile UI designs with vibrant cyan and deep blue accents, matching a premium technical aesthetic. The lighting is cinematic, with soft cyan rim lights illuminating the metallic edges of the devices against a deep black and navy background.',
}

export const mobilePlatforms = [
  {
    icon: 'file_download',
    title: 'iOS Native',
    description:
      'Swift & Objective-C applications optimized specifically for the Apple ecosystem, ensuring maximum performance and adhering to strict Human Interface Guidelines.',
  },
  {
    icon: 'android',
    title: 'Android Native',
    description:
      'Kotlin & Java development tailored for the diverse Android hardware landscape, prioritizing material design principles and deep OS integration.',
  },
  {
    icon: 'devices',
    title: 'Cross-Platform',
    description:
      'React Native & Flutter solutions that deliver near-native performance while sharing a single codebase, accelerating time-to-market and reducing development costs.',
  },
]

export const mobileFeatures = [
  {
    icon: 'lock',
    title: 'Authentication',
    description: 'Secure biometric login, OAuth, and JWT implementation.',
  },
  {
    icon: 'api',
    title: 'API Integration',
    description: 'Seamless connection with complex REST and GraphQL backends.',
  },
  {
    icon: 'payments',
    title: 'Payments',
    description: 'In-app purchases and secure gateway integrations like Stripe.',
  },
  {
    icon: 'notifications_active',
    title: 'Push Notifications',
    description: 'Targeted, real-time messaging via APNs and FCM.',
  },
]

export const mobileUx = {
  title: 'Mobile-First UI/UX Design',
  description:
    'We design with the user in mind. Every interaction, gesture, and transition is meticulously crafted to feel natural on mobile devices.',
  image: ux,
  imageAlt: 'Mobile UI/UX design interface on a smartphone screen',
  items: [
    'Intuitive gesture-based navigation',
    'Optimized touch targets and typography',
    'Fluid animations and micro-interactions',
    'Dark mode and accessibility compliance',
  ],
}

export const mobileProcess = [
  {
    step: '1',
    title: 'Strategy & Planning',
    description: 'Defining features, target audience, and tech stack.',
  },
  {
    step: '2',
    title: 'UI/UX Design',
    description: 'Creating wireframes and high-fidelity prototypes.',
  },
  {
    step: '3',
    title: 'Development',
    description: 'Agile coding sprints with regular milestone reviews.',
  },
  {
    step: '4',
    title: 'Testing & Launch',
    description: 'QA, App Store submission, and post-launch support.',
  },
]

export const mobileProjects = [
  {
    id: 1,
    mockupLabel: 'Food Delivery',
    title: 'SAMU',
    meta: 'Android • Food delivery in Abuja',
    image: featSamu,
  },
  {
    id: 2,
    mockupLabel: 'Health & Macros',
    title: 'IIFYM',
    meta: 'iOS • Meals, macros, admin',
    image: featIifym,
  },
  {
    id: 3,
    mockupLabel: 'Camping Discovery',
    title: 'TrailBliss',
    meta: 'iOS & Android • Travel',
    image: imgTrailBliss,
  },
  {
    id: 4,
    mockupLabel: 'Mobility Platform',
    title: 'Zexal',
    meta: 'App + admin • Rides & supercars',
    image: featZexal,
  },
  {
    id: 5,
    mockupLabel: 'Travel Social',
    title: 'TripSphere',
    meta: 'iOS & Android • Peer recommendations',
    image: imgTripSphere,
  },
  {
    id: 6,
    mockupLabel: 'Crypto Wallet',
    title: 'DoK Wallet',
    meta: 'iOS & Android • React Native',
    image: featDokWallet,
  },
]

export const mobileCaseStudy = {
  label: 'CASE STUDY',
  title: 'Scaling a Ride-Share Startup to 1M+ Users',
  description:
    'We partnered with RideNow to rebuild their failing legacy app into a robust, real-time Flutter application capable of handling high concurrency and complex geolocation data.',
  image: caseImg,
  imageAlt: 'Ride-share mobile app case study dashboard and metrics',
  metrics: [
    { value: '300%', label: 'Increase in active users' },
    { value: '99.9%', label: 'Crash-free rate' },
  ],
}

export const mobileFaq = [
  {
    question: 'How much does it cost to build an app?',
    answer:
      'Costs vary wildly based on complexity, platforms, and features. A basic app might start at $15k, while complex enterprise solutions can exceed $100k. We provide detailed scopes and transparent pricing before starting.',
  },
  {
    question: 'Should I build native or cross-platform?',
    answer:
      'If you need peak performance, heavy hardware integration, or complex animations, go Native. If you want faster time-to-market and lower costs while targeting both iOS and Android, React Native or Flutter are excellent choices.',
  },
  {
    question: 'How long does development take?',
    answer:
      'A typical MVP takes 3-4 months from concept to launch. More complex applications can take 6-12 months. We use agile methodologies to deliver functional builds early and often.',
  },
]

export const mobileCta = {
  title: 'Ready to build something amazing?',
  description: "Let's discuss your mobile app idea and map out a technical strategy for success.",
}
