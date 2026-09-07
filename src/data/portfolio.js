import featBloomKidz from '../assets/portfolio/feat-bloom-kidz.jpg'
import featClinia from '../assets/portfolio/feat-clinia.jpg'
import featDokWallet from '../assets/portfolio/feat-dokwallet.jpg'
import featSamu from '../assets/portfolio/feat-samu.jpg'
import featZexal from '../assets/portfolio/feat-zexal.webp'
import featIifym from '../assets/portfolio/feat-iifym.png'
import imgBandookWala from '../assets/portfolio/Bandook-Wala.png'
import imgBigBoyz from '../assets/portfolio/BIG-BOYS-Collection-1.png'
import imgCarters from '../assets/portfolio/CARTERS-1.png'
import imgStrathberry from '../assets/portfolio/STRATHBERRY.png'
import imgSipzz from '../assets/portfolio/Sipzz-1.png'
import imgAarum from '../assets/portfolio/AARUM-1.png'
import imgBeechmont from '../assets/portfolio/Beechmont-1.png'
import imgTrailBliss from '../assets/portfolio/TrailBliss-1.png'
import imgHushSalon from '../assets/portfolio/hush-saloon-1.png'
import imgDrJoy from '../assets/portfolio/DR.JOY-1.png'
import imgTripSphere from '../assets/portfolio/TripSphere-1.png'
import imgCrHrms from '../assets/portfolio/CR-HRMS-1.png'

export const INDUSTRIES = [
  { id: 'all', label: 'All Industries' },
  { id: 'education', label: 'Education & EdTech' },
  { id: 'finance', label: 'Finance & FinTech' },
  { id: 'healthcare', label: 'Healthcare & MedTech' },
  { id: 'food', label: 'Food & Delivery' },
  { id: 'lifestyle', label: 'Lifestyle & Services' },
  { id: 'mobility', label: 'Mobility & Transport' },
  { id: 'ecommerce', label: 'E-Commerce' },
  { id: 'logistics', label: 'Logistics' },
  { id: 'saas', label: 'SaaS & Enterprise' },
]

export const TYPE_FILTERS = [
  { id: 'all', label: 'All Work' },
  { id: 'web-app', label: 'Web App' },
  { id: 'ecommerce', label: 'E-Commerce' },
  { id: 'mobile-app', label: 'Mobile App' },
  { id: 'branding', label: 'Branding' },
  { id: 'marketing', label: 'Marketing' },
]

export const METRICS = [
  { value: '48+', label: 'Live Client Projects' },
  { value: '3.2×', label: 'Avg. Conversion Lift' },
  { value: '98%', label: 'Client Retention' },
  { value: '12', label: 'Industries Served' },
]

export const FEATURED_CASES = [
  {
    id: 'bloom-kidz',
    tag: 'EdTech · School OS',
    title: 'Bloom Kidz School OS',
    image: featBloomKidz,
    imageAlt: 'Bloom Kidz school management dashboards for admin, staff, and families',
    imageFit: 'contain',
    imageBg: '#34A6B1',
    year: '2024',
    metric: '12+ modules, one platform',
    href: 'https://bloomkidz.co.uk',
    challenge:
      'Nurseries and schools were running academics, attendance, finance, and parent comms across scattered tools. Staff lost hours to admin, and families had no single place to stay in the loop.',
    approach:
      'We built a React and Node school operating system with role-based dashboards covering administration, academics, teachers, students, parents, staff, library, finance, attendance, timetable, exams, grading, and communication.',
    result:
      'Bloom Kidz now runs live at bloomkidz.co.uk — one login for operations, classrooms, and family communication instead of a patchwork of spreadsheets and apps.',
  },
  {
    id: 'clinia',
    tag: 'HealthTech · Navigation',
    title: 'Clinia Health Navigation',
    image: featClinia,
    imageAlt: 'Clinia healthcare navigation platform homepage and product sections',
    imageFit: 'contain',
    imageBg: '#1F2D36',
    year: '2025',
    metric: 'AI-powered care discovery',
    href: 'https://clinia.com',
    challenge:
      'Health organizations needed a way to drop personalized, health-grade navigation into their own digital platforms — without building search, classification, and trusted-resource discovery from scratch.',
    approach:
      "We engineered a React, Next.js, and Express navigation system with AI infrastructure that understands each user's situation, classifies approved health resources, and scales with the largest digital health companies.",
    result:
      'Clinia now ships as live infrastructure at clinia.com — search, data fabric, and trusted pathways that health teams can embed and deploy inside their own products.',
  },
  {
    id: 'dok-wallet',
    tag: 'FinTech · Mobile App',
    title: 'DoK Wallet',
    image: featDokWallet,
    imageAlt: 'DoK Wallet sign-in and crypto asset dashboard on two phones',
    imageFit: 'contain',
    imageBg: '#222222',
    year: '2020',
    metric: 'iOS + Android, one wallet',
    href: 'https://apps.apple.com/il/app/dokwallet-crypto-wallet/id1533065700',
    links: [
      { label: 'App Store', href: 'https://apps.apple.com/il/app/dokwallet-crypto-wallet/id1533065700' },
      { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.dok.wallet' },
    ],
    challenge:
      'Crypto users were juggling multiple wallets and exchanges just to see balances, send assets, and keep keys safe. There was no single, trustworthy place to manage coins and tokens on mobile.',
    approach:
      'We built DoK Wallet in React Native as a secure blockchain wallet: seed-phrase recovery, a clean sign-in flow, and a single dashboard for Bitcoin, Ethereum, and hundreds of coins and tokens.',
    result:
      'Live on the App Store and Google Play — users manage all their crypto assets from one location, with a product designed for both iOS and Android.',
  },
  {
    id: 'samu',
    tag: 'Food Delivery · Mobile App',
    title: 'SAMU — Food Delivery in Abuja',
    image: featSamu,
    imageAlt: 'SAMU food delivery app screens for tracking, offers, and home marketplace',
    imageFit: 'contain',
    imageBg: '#0B2617',
    year: '2024',
    metric: '100k+ downloads',
    href: 'https://play.google.com/store/apps/details?id=com.samuapp',
    links: [
      { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.samuapp' },
    ],
    challenge:
      'Abuja needed a delivery app built for the city — local Nigerian dishes, international cuisine, groceries, and neighborhoods from Wuse to Asokoro — not a generic template that ignored how people actually order food.',
    approach:
      'We designed SAMU around real-time tracking, category browsing (restaurants, grocery, pharmacies), promo offers, and a lightweight mobile experience that stays fast on typical Android devices and local payment rails.',
    result:
      'Live on Google Play with 100k+ downloads: meals from hundreds of restaurants, plus groceries, delivered across Abuja in a few taps.',
  },
  {
    id: 'zexal',
    tag: 'Mobility · App + Admin',
    title: 'Zexal Transportation',
    image: featZexal,
    imageAlt: 'Zexal admin dashboard on laptop and hire-a-driver mobile app on phone',
    imageFit: 'contain',
    imageBg: '#050505',
    year: '2024',
    metric: 'Rides + supercars, one platform',
    challenge:
      'Operators needed more than a simple taxi tap: drivers, vehicles, bookings, trips, chat, and earnings had to live in one system — while riders wanted a fast way to hire a driver or a supercar without friction.',
    approach:
      'We built Zexal as an all-in-one mobility product: a dark, high-contrast rider app for real-time booking and tracking, plus an admin dashboard for users, drivers, vehicles, jobs, bookings, trips, chat, and earnings.',
    result:
      'A single platform for commute or long-haul travel — operators run the fleet from the dashboard, and riders book a driver or supercar in two taps.',
  },
  {
    id: 'iifym',
    tag: 'Health · Food App',
    title: 'IIFYM',
    image: featIifym,
    imageAlt: 'IIFYM food app home screen on iPhone with macros, meals, and categories',
    imageFit: 'contain',
    imageBg: '#000000',
    year: '2024',
    metric: 'Macros, meals, and admin in one',
    href: 'https://apps.apple.com/sa/app/iifym/id6478547442',
    links: [
      { label: 'App Store', href: 'https://apps.apple.com/sa/app/iifym/id6478547442' },
    ],
    challenge:
      'Macro tracking is usually a spreadsheet problem: protein, fat, and carbs live in one app, meals in another, and ops still manage users, products, and orders by hand.',
    approach:
      'We built IIFYM as a food platform with a simple iOS app — search, categories, customized macros, and meal recommendations — plus an admin panel for accounts, listings, subscriptions, and order tracking.',
    result:
      'Live on the App Store: users hit personalized dietary goals with flexible meals, while the backend keeps catalog, plans, and orders running as one system.',
  },
]

export const ARCHIVE_PROJECTS = [
  {
    id: 'bloom-kidz',
    title: 'Bloom Kidz',
    type: 'web-app',
    typeLabel: 'Web App',
    industry: 'education',
    image: featBloomKidz,
    alt: 'Bloom Kidz school management system dashboards',
    imageFit: 'contain',
    imageBg: '#34A6B1',
    summary: 'React & Node school OS for academics, attendance, finance, and parent comms.',
    href: 'https://bloomkidz.co.uk',
  },
  {
    id: 'clinia',
    title: 'Clinia',
    type: 'web-app',
    typeLabel: 'Web App',
    industry: 'healthcare',
    image: featClinia,
    alt: 'Clinia healthcare navigation platform for personalized care discovery',
    imageFit: 'contain',
    imageBg: '#1F2D36',
    summary: 'React, Next.js & Express AI navigation for trusted health resources.',
    href: 'https://clinia.com',
  },
  {
    id: 'dok-wallet',
    title: 'DoK Wallet',
    type: 'mobile-app',
    typeLabel: 'Mobile App',
    industry: 'finance',
    image: featDokWallet,
    alt: 'DoK Wallet crypto wallet sign-in and assets dashboard',
    imageFit: 'contain',
    imageBg: '#222222',
    summary: 'React Native blockchain wallet for coins and tokens on iOS and Android.',
    href: 'https://apps.apple.com/il/app/dokwallet-crypto-wallet/id1533065700',
  },
  {
    id: 'samu',
    title: 'SAMU',
    type: 'mobile-app',
    typeLabel: 'Mobile App',
    industry: 'food',
    image: featSamu,
    alt: 'SAMU food delivery app for restaurants, groceries, and real-time tracking in Abuja',
    imageFit: 'contain',
    imageBg: '#0B2617',
    summary: 'Food, grocery, and pharmacy delivery across Abuja — 100k+ downloads on Google Play.',
    href: 'https://play.google.com/store/apps/details?id=com.samuapp',
  },
  {
    id: 'zexal',
    title: 'Zexal',
    type: 'mobile-app',
    typeLabel: 'Mobile App',
    industry: 'mobility',
    image: featZexal,
    alt: 'Zexal transportation app and admin dashboard for drivers, vehicles, and bookings',
    imageFit: 'contain',
    imageBg: '#050505',
    summary: 'Ride booking, live driver tracking, and an admin OS for fleet, trips, and earnings.',
  },
  {
    id: 'iifym',
    title: 'IIFYM',
    type: 'mobile-app',
    typeLabel: 'Mobile App',
    industry: 'food',
    image: featIifym,
    alt: 'IIFYM If It Fits Your Macros food app on iPhone',
    imageFit: 'contain',
    imageBg: '#000000',
    summary: 'Macro tracking, customized meals, and an admin panel for users, plans, and orders.',
    href: 'https://apps.apple.com/sa/app/iifym/id6478547442',
  },
  {
    id: 'bandook-wala',
    title: 'Bandook Wala',
    type: 'ecommerce',
    typeLabel: 'E-Commerce',
    industry: 'ecommerce',
    image: imgBandookWala,
    alt: 'Bandook Wala firearms and gun accessories store',
    imageFit: 'contain',
    imageBg: '#000000',
    summary: 'Karachi firearms & accessories store with product catalog, retailer listings, and quote flow.',
  },
  {
    id: 'big-boyz',
    title: 'Big Boyz Collection',
    type: 'ecommerce',
    typeLabel: 'E-Commerce',
    industry: 'ecommerce',
    image: imgBigBoyz,
    alt: 'Big Boyz Collection plus-size menswear ecommerce store',
    imageFit: 'contain',
    imageBg: '#000000',
    summary: 'Plus-size menswear storefront with collections, sale tags, and PKR checkout.',
  },
  {
    id: 'carters',
    title: "Carter's",
    type: 'ecommerce',
    typeLabel: 'E-Commerce',
    industry: 'ecommerce',
    image: imgCarters,
    alt: "Carter's UAE kids clothing ecommerce store",
    imageFit: 'contain',
    imageBg: '#000000',
    summary: "Localized Carter's kidswear store for UAE — categories, promos, and AED checkout.",
  },
  {
    id: 'strathberry',
    title: 'Strathberry',
    type: 'ecommerce',
    typeLabel: 'E-Commerce',
    industry: 'ecommerce',
    image: imgStrathberry,
    alt: 'Strathberry luxury handbags ecommerce website',
    imageFit: 'contain',
    imageBg: '#000000',
    summary: 'Luxury handbag storefront with collections, bestsellers, and editorial product grids.',
  },
  {
    id: 'sipzz',
    title: 'sipzz',
    type: 'ecommerce',
    typeLabel: 'E-Commerce',
    industry: 'ecommerce',
    image: imgSipzz,
    alt: 'sipzz insulated bottles and tumblers ecommerce store',
    imageFit: 'contain',
    imageBg: '#000000',
    summary: 'Bottle and tumbler shop with collections, color variants, and RM pricing.',
  },
  {
    id: 'aarum',
    title: 'Aarum',
    type: 'ecommerce',
    typeLabel: 'E-Commerce',
    industry: 'ecommerce',
    image: imgAarum,
    alt: 'Aarum luxury leather handbags ecommerce site',
    imageFit: 'contain',
    imageBg: '#000000',
    summary: 'Quiet-luxury leather goods store with signature collections and lookbook gallery.',
  },
  {
    id: 'beechmont',
    title: 'Beechmont',
    type: 'web-app',
    typeLabel: 'Web App',
    industry: 'lifestyle',
    image: imgBeechmont,
    alt: 'Beechmont community and trails website',
    imageFit: 'contain',
    imageBg: '#000000',
    summary: 'Community site for hikes, maps, history, and local news since 1904.',
  },
  {
    id: 'hush-salon',
    title: 'Hush Salon',
    type: 'web-app',
    typeLabel: 'Web App',
    industry: 'lifestyle',
    image: imgHushSalon,
    alt: 'Hush Salon UAE hair and beauty website',
    imageFit: 'contain',
    imageBg: '#000000',
    summary: 'Multi-location Dubai salon site with services, branches, and book-now flow.',
  },
  {
    id: 'dr-joy',
    title: 'Dr. Joy Dental Clinic',
    type: 'web-app',
    typeLabel: 'Web App',
    industry: 'healthcare',
    image: imgDrJoy,
    alt: 'Dr Joy Dental Clinic Dubai website',
    imageFit: 'contain',
    imageBg: '#000000',
    summary: 'Award-winning Dubai dental clinics site — services, cases, and appointment booking.',
  },
  {
    id: 'cr-hrms',
    title: 'CR HRMS',
    type: 'web-app',
    typeLabel: 'Web App',
    industry: 'saas',
    image: imgCrHrms,
    alt: 'Concept Recall HRMS workforce management platform',
    imageFit: 'contain',
    imageBg: '#000000',
    summary: 'HR OS for records, payroll, attendance, leave, loans, and employee self-service.',
  },
  {
    id: 'trailbliss',
    title: 'TrailBliss',
    type: 'mobile-app',
    typeLabel: 'Mobile App',
    industry: 'mobility',
    image: imgTrailBliss,
    alt: 'TrailBliss camping and adventure discovery mobile app',
    imageFit: 'contain',
    imageBg: '#000000',
    summary: 'Camping discovery app for spots, routes, ratings, and nearby campsites.',
  },
  {
    id: 'tripsphere',
    title: 'TripSphere',
    type: 'mobile-app',
    typeLabel: 'Mobile App',
    industry: 'mobility',
    image: imgTripSphere,
    alt: 'TripSphere travel recommendation and map sharing app',
    imageFit: 'contain',
    imageBg: '#000000',
    summary: 'Peer travel tips on a map — private or public profiles and tagged destinations.',
  },
]

export const ARTICLES = [
  {
    category: 'Case Notes',
    title: 'How Bloom Kidz replaced a patchwork of school tools with one OS',
    description:
      'Role-based dashboards, attendance, finance, and parent comms — designed so nurseries can run the day without juggling five apps.',
  },
  {
    category: 'Product Design',
    title: "Designing Clinia's health navigation for trust at scale",
    description:
      'Serif authority, calm color, and developer-ready docs — so health orgs can embed personalized care discovery without looking like a generic SaaS template.',
  },
  {
    category: 'Mobile Product',
    title: 'Shipping DoK Wallet as one React Native app on two stores',
    description:
      'A secure sign-in, seed-phrase recovery, and a single assets dashboard — so users can hold Bitcoin, Ethereum, and hundreds of tokens without hopping wallets.',
  },
  {
    category: 'Marketplace',
    title: 'Building SAMU for Abuja, not a generic food-app template',
    description:
      'Real-time tracking, local cuisine, groceries, and neighborhood coverage — a delivery product that matches how the city actually eats.',
  },
  {
    category: 'Mobility',
    title: 'Why Zexal needed a rider app and an ops dashboard',
    description:
      'Hire a driver or a supercar on mobile — while operators manage fleet, bookings, trips, and earnings from one dark admin console.',
  },
  {
    category: 'Health Product',
    title: 'IIFYM: macros in the app, operations in the admin',
    description:
      'Personalized protein, fat, and carb goals with meal recommendations — plus accounts, listings, subscriptions, and order tracking for the team behind it.',
  },
]

export const INITIAL_VISIBLE_COUNT = 9
