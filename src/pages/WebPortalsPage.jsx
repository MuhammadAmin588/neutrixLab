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
  ADMIN_CONTROLS,
  ARCHITECTURE_FEATURES,
  FAQ_ITEMS,
  PORTAL_IMAGES,
  PORTAL_TYPES,
  PORTFOLIO_ITEMS,
  PRICING_TIERS,
} from '../data/webPortals'

export default function WebPortalsPage() {
  return (
    <div className="svc-page">
      <ServiceHero
        eyebrow="WEB PORTALS"
        title="Secure systems for"
        highlight="complex operations."
        description="Enterprise portals engineered for scale - dashboards, roles, workflows, and data that stays locked down."
        image={PORTAL_IMAGES.hero}
        primaryLabel="Plan My Portal"
      />
      <ServiceTicker words={['ENTERPRISE', 'MEDICAL', 'ADMIN', 'ROLES', 'SECURITY', 'SCALE']} />
      <ServiceManifesto
        lead="Internal tools shouldn’t feel outdated."
        punch="Portals can feel premium too."
        body="We build operational platforms that teams actually enjoy using - secure, fast, and designed for clarity."
      />
      <ServiceFilmCapabilities
        eyebrow="PORTAL TYPES"
        title="Built for specialized domains"
        subtitle="Enterprise, medical, real estate, communities - custom to the workflow."
        items={PORTAL_TYPES}
      />
      <ServiceSplit
        eyebrow="ARCHITECTURE"
        title="Infrastructure that doesn’t flinch"
        body="Bank-grade security, elastic scale, and schemas designed around how your data actually works."
        image={PORTAL_IMAGES.architecture}
        imageAlt="Portal system architecture"
        bullets={ARCHITECTURE_FEATURES}
        badgeLabel="CORE"
        badgeText="Security + scale as standard"
      />
      <ServiceFilmCapabilities
        title="Admin control systems"
        subtitle="Dashboards, messaging, and permissions that keep ops sharp."
        items={ADMIN_CONTROLS}
      />
      <ServiceBento title="Portals in production" items={PORTFOLIO_ITEMS} />
      <ServicePricing title="Portal engagements" tiers={PRICING_TIERS} />
      <ServiceFaq items={FAQ_ITEMS} title="Portal questions, answered" />
      <ServiceFinale
        title="Ready to modernize your operations?"
        body="We’ll map a portal architecture that fits your workflows - and ships secure."
        image={PORTAL_IMAGES.nexus}
      />
    </div>
  )
}
