import hero from '../assets/reviews/hero.jpg'
import r3 from '../assets/reviews/r3.jpg'
import r5 from '../assets/reviews/r5.jpg'
import r6 from '../assets/reviews/r6.jpg'
import aykutSadi from '../assets/reviews/aykut-sadi.jpg'
import karimElnaggar from '../assets/reviews/karim-elnaggar.jpg'
import yanalEktielate from '../assets/reviews/yanal-ektielate.jpg'

export const REVIEWS_IMAGES = { hero }

export const REVIEW_STATS = [
  { value: '4.9/5', label: 'Average Rating' },
  { value: '120+', label: 'Happy Clients' },
  { value: '98%', label: 'Would Recommend' },
  { value: '40+', label: '5-Star Reviews' },
]

export const REVIEW_FILTERS = [
  { id: 'all', label: 'All Reviews' },
  { id: 'web', label: 'Web Design' },
  { id: 'branding', label: 'Branding' },
  { id: 'mobile', label: 'Mobile Apps' },
  { id: 'ecommerce', label: 'E-Commerce' },
]

export const REVIEWS = [
  {
    id: 1,
    name: 'Aykut Sadi',
    role: 'COE, ASSET for Schools',
    category: 'web',
    rating: 5,
    quote:
      'NEUTRIX rebuilt our entire digital presence in 8 weeks. The site looks elite, loads insanely fast, and our demo bookings jumped immediately. Absolute professionals.',
    image: aykutSadi,
    result: '+180% qualified leads',
  },
  {
    id: 2,
    name: 'Karim Elnaggar',
    role: 'Project Head, Overflow Team',
    category: 'branding',
    rating: 5,
    quote:
      'They don’t just design - they think like growth partners. Every section was intentional, premium, and conversion-focused. Our brand finally feels enterprise-ready.',
    image: karimElnaggar,
    result: 'Brand trust uplift',
  },
  {
    id: 3,
    name: 'Priya Desai',
    role: 'Project Head, Vascular Health',
    category: 'mobile',
    rating: 5,
    quote:
      'From branding to launch, the process was seamless. Clients now tell us our product alone made them trust us. That is the power of great digital craft.',
    image: r3,
    result: '1M+ app users',
  },
  {
    id: 4,
    name: 'Yanal Ektielate',
    role: 'COO, Bloom Kidz',
    category: 'web',
    rating: 5,
    quote:
      'Clear communication, sharp timelines, and world-class UI. Our internal portal transformed operations and the team still raves about the experience.',
    image: yanalEktielate,
    result: '+45% ops efficiency',
  },
  {
    id: 5,
    name: 'Amelia Chen',
    role: 'Head of Growth, Lumina',
    category: 'ecommerce',
    rating: 5,
    quote:
      'Checkout friction vanished. Visual design is stunning and the conversion lift paid for the project multiple times over in the first quarter.',
    image: r5,
    result: '+215% conversions',
  },
  {
    id: 6,
    name: 'Marcus Webb',
    role: 'CTO, Vanguard Logic',
    category: 'web',
    rating: 5,
    quote:
      'Rare mix of aesthetics and engineering depth. Clean code, excellent performance, and a site that finally matches the quality of our product.',
    image: r6,
    result: 'Sub-1s load times',
  },
]

export const FEATURED_QUOTE = REVIEWS.find((review) => review.id === 2)
