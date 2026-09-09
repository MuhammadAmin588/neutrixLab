import {
  ServiceBento,
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
  BRANDING_IMAGES,
  CAPABILITIES,
  FAQ_ITEMS,
  PORTFOLIO_ITEMS,
  PRICING_TIERS,
  STRATEGY_BULLETS,
} from '../data/branding'

export default function BrandingPage() {
  return (
    <div className="svc-page">
      <ServiceHero
        eyebrow="BRANDING"
        title="Build a brand people"
        highlight="remember."
        description="High-performance identities engineered for authority, clarity, and long-term market dominance."
        image={BRANDING_IMAGES.hero}
        imageAlt="Brand identity design and logo exploration"
        primaryLabel="Initiate Branding"
      />
      <ServiceTicker words={['IDENTITY', 'LOGO', 'VOICE', 'GUIDELINES', 'STRATEGY', 'SYSTEMS']} />
      <ServiceManifesto
        lead="Most brands look fine."
        punch="Few look inevitable."
        body="We engineer visual systems that communicate absolute clarity - so clients trust you before they read a word."
      />
      <ServiceSplit
        eyebrow="BRAND STRATEGY"
        title="Beyond visuals. Strategic positioning."
        body="We dig into market, competitors, and core values - then forge a brand architecture built for dominance."
        image={BRANDING_IMAGES.strategy}
        imageAlt="Brand strategy workshop"
        bullets={STRATEGY_BULLETS}
        badgeLabel="SIGNAL"
        badgeText="Clarity that converts attention into trust"
      />
      <ServiceFilmCapabilities
        title="Core branding capabilities"
        subtitle="Precision assets designed for immediate impact and long-term consistency."
        items={CAPABILITIES}
      />
      <ServiceBento title="Identity work that sticks" items={PORTFOLIO_ITEMS} />
      <ServicePricing title="Choose your brand engagement" tiers={PRICING_TIERS} />
      <ServiceFaq items={FAQ_ITEMS} title="Branding questions, answered" />
      <ServiceFinale
        title="Ready to look unforgettable?"
        body="Book a consult. We’ll map a brand system that feels premium - and works hard."
        image={BRANDING_IMAGES.guidelines}
        imageAlt="Brand guidelines and identity system"
      />
    </div>
  )
}
