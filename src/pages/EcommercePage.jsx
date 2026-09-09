import {
  ServiceBento,
  ServiceCase,
  ServiceFaq,
  ServiceFilmCapabilities,
  ServiceFinale,
  ServiceHero,
  ServiceManifesto,
  ServicePricing,
  ServiceSplit,
  ServiceTicker,
} from '../components/services/ServiceKit'
import {
  ecommerceAdmin,
  ecommerceCaseStudy,
  ecommerceCta,
  ecommerceFaq,
  ecommerceFeatures,
  ecommerceHero,
  ecommercePricing,
  ecommerceProjects,
  ecommerceStrategy,
} from '../data/ecommerce'

export default function EcommercePage() {
  const portfolio = ecommerceProjects.map((p) => ({
    title: p.title,
    subtitle: 'Storefront',
    image: p.image,
    imageFit: 'contain',
    imageBg: '#000000',
  }))

  return (
    <div className="svc-page">
      <ServiceHero
        eyebrow={ecommerceHero.badge}
        title={ecommerceHero.titleLine1}
        highlight={ecommerceHero.titleHighlight}
        description={ecommerceHero.description}
        image={ecommerceHero.image}
        imageAlt={ecommerceHero.imageAlt}
        primaryLabel="Build My Store"
      />
      <ServiceTicker words={['CHECKOUT', 'CONVERSION', 'SHOPIFY', 'HEADLESS', 'CRO', 'GROWTH']} />
      <ServiceManifesto
        lead={ecommerceStrategy.title}
        punch="We don’t decorate stores. We engineer sales machines."
        body={ecommerceStrategy.description}
      />
      <ServiceFilmCapabilities
        title="Commerce capabilities that sell"
        subtitle="Inventory, shipping, accounts, reviews - wired for conversion."
        items={ecommerceFeatures}
      />
      <ServiceSplit
        eyebrow="ADMIN CONTROL"
        title={ecommerceAdmin.title}
        body={ecommerceAdmin.description}
        image={ecommerceAdmin.image}
        imageAlt="E-commerce admin dashboard"
        bullets={ecommerceAdmin.items}
        badgeLabel="OPS"
        badgeText="Catalog control without developer dependency"
      />
      <ServiceBento title="Storefronts that convert" items={portfolio} />
      <ServiceCase
        label={ecommerceCaseStudy.label}
        title={ecommerceCaseStudy.title}
        description={ecommerceCaseStudy.description}
        image={ecommerceCaseStudy.image}
        metrics={ecommerceCaseStudy.metrics}
      />
      <ServicePricing title="E-commerce engagements" tiers={ecommercePricing} />
      <ServiceFaq items={ecommerceFaq} title="Commerce questions, answered" />
      <ServiceFinale
        title={ecommerceCta.title}
        body={ecommerceCta.description}
        image={ecommerceHero.image}
        imageAlt={ecommerceHero.imageAlt}
      />
    </div>
  )
}
