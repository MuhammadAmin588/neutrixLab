export const WORK_SEO = [
  {
    slug: 'bloom-kidz',
    title: 'Bloom Kidz school portal case study',
    description:
      'Custom web portal development for Bloom Kidz: a school OS for academics, attendance, finance, and parent communication.',
  },
  {
    slug: 'clinia',
    title: 'Clinia health navigation case study',
    description:
      'Healthcare web platform case study: AI-powered care discovery and trusted resource navigation for health organisations.',
  },
  {
    slug: 'dok-wallet',
    title: 'DoK Wallet mobile app case study',
    description:
      'iOS and Android app development case study: a React Native crypto wallet shipped on the App Store and Google Play.',
  },
  {
    slug: 'samu',
    title: 'SAMU food delivery app case study',
    description:
      'Mobile app development for SAMU: food, grocery, and local delivery across Abuja with 100k+ downloads.',
  },
  {
    slug: 'zexal',
    title: 'Zexal transportation app case study',
    description:
      'Custom app and admin portal for rides and supercar hire — fleet, bookings, trips, and earnings in one platform.',
  },
  {
    slug: 'iifym',
    title: 'IIFYM food app case study',
    description:
      'iOS app development case study: macros, meals, and an admin panel for catalog, plans, and orders.',
  },
  {
    slug: 'bandook-wala',
    title: 'Bandook Wala ecommerce case study',
    description: 'Ecommerce website development case study for Bandook Wala.',
  },
  {
    slug: 'big-boyz',
    title: 'BIG BOYS Collection ecommerce case study',
    description: 'Ecommerce website and storefront case study for BIG BOYS Collection.',
  },
  {
    slug: 'carters',
    title: 'Carters ecommerce case study',
    description: 'Ecommerce website development case study for Carters.',
  },
  {
    slug: 'strathberry',
    title: 'Strathberry ecommerce case study',
    description: 'Ecommerce website case study for Strathberry.',
  },
  {
    slug: 'sipzz',
    title: 'Sipzz ecommerce case study',
    description: 'Ecommerce website development case study for Sipzz.',
  },
  {
    slug: 'aarum',
    title: 'Aarum case study',
    description: 'Digital product and website case study for Aarum.',
  },
  {
    slug: 'beechmont',
    title: 'Beechmont case study',
    description: 'Website and digital product case study for Beechmont.',
  },
  {
    slug: 'trailbliss',
    title: 'TrailBliss camping app case study',
    description: 'Mobile app development case study for TrailBliss camping discovery.',
  },
  {
    slug: 'hush-salon',
    title: 'Hush Salon website case study',
    description: 'Custom website design case study for Hush Salon.',
  },
  {
    slug: 'dr-joy',
    title: 'Dr Joy Dental website case study',
    description: 'Custom website design for Dr Joy Dental Clinic Dubai — services, cases, booking.',
  },
  {
    slug: 'cr-hrms',
    title: 'CR HRMS portal case study',
    description: 'Custom web portal development: HR OS for payroll, attendance, leave, and self-service.',
  },
  {
    slug: 'tripsphere',
    title: 'TripSphere travel app case study',
    description: 'Mobile app development case study for TripSphere travel recommendations.',
  },
]

export function getWorkSeo(slug) {
  return WORK_SEO.find((item) => item.slug === slug) || null
}
