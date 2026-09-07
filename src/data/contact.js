import office from '../assets/contact/office.jpg'
import mapStyle from '../assets/contact/map-style.jpg'
import team from '../assets/contact/team.jpg'
import { BRAND } from '../constants/brand'

export const CONTACT_IMAGES = { office, mapStyle, team }

export const CONTACT_DETAILS = [
  {
    icon: 'mail',
    label: 'Email',
    value: BRAND.email,
    href: BRAND.emailHref,
  },
  ...BRAND.phones.map((phone) => ({
    icon: 'call',
    label: `Phone · ${phone.region}`,
    value: phone.display,
    href: phone.href,
  })),
  {
    icon: 'schedule',
    label: 'Hours',
    value: BRAND.hours,
    href: null,
  },
  {
    icon: 'public',
    label: 'Studio',
    value: BRAND.location,
    href: null,
  },
]

export const CONTACT_REASONS = [
  'New website / redesign',
  'Branding & identity',
  'E-commerce build',
  'Mobile app',
  'Custom portal',
  'Ongoing retainer',
]

export const CONTACT_FAQS = [
  {
    q: 'How fast can we start?',
    a: 'Most projects kick off within 5–10 business days after discovery and proposal approval.',
  },
  {
    q: 'Do you work with startups and enterprises?',
    a: 'Yes. We partner with funded startups, scale-ups, and enterprise teams that want premium digital craft.',
  },
  {
    q: 'What happens after I submit this form?',
    a: 'We review your brief, reply within 1 business day, and book a free strategy consultation.',
  },
]
