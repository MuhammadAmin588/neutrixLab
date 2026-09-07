const contactEmail =
  import.meta.env.VITE_CONTACT_EMAIL?.trim() || 'info@neutrixlab.com'

export const BRAND = {
  name: 'Neutrix Lab',
  shortName: 'Neutrix',
  tagline: 'Precision digital engineering for ambitious brands.',
  email: contactEmail,
  emailHref: `mailto:${contactEmail}`,
  hours: 'Mon–Fri, 9:00 AM – 6:00 PM',
  location: 'Remote worldwide',
  phones: [
    {
      id: 'uk',
      region: 'UK',
      e164: '+447476434698',
      display: '+44 7476 434698',
      href: 'tel:+447476434698',
    },
    {
      id: 'us',
      region: 'US',
      e164: '+16092456096',
      display: '+1 609 245 6096',
      href: 'tel:+16092456096',
    },
  ],
}

export const BRAND_TITLE = (page) => (page ? `${page} | ${BRAND.name}` : BRAND.name)

export const SITE_DESCRIPTION =
  'Neutrix Lab builds branding, websites, e-commerce, mobile apps, and web portals for growing brands.'
