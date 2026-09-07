import {
  ServiceBento,
  ServiceCase,
  ServiceFaq,
  ServiceFilmCapabilities,
  ServiceFinale,
  ServiceHero,
  ServiceManifesto,
  ServiceProcess,
  ServiceSplit,
  ServiceTicker,
} from '../components/services/ServiceKit'
import {
  mobileCaseStudy,
  mobileCta,
  mobileFaq,
  mobileFeatures,
  mobileHero,
  mobilePlatforms,
  mobileProcess,
  mobileProjects,
  mobileUx,
} from '../data/mobile'

export default function MobileAppsPage() {
  const portfolio = mobileProjects.map((p) => ({
    title: p.title,
    subtitle: p.meta,
    image: p.image,
    imageFit: 'contain',
    imageBg: '#000000',
  }))

  const processSteps = mobileProcess.map((s) => ({
    number: String(s.step).padStart(2, '0'),
    title: s.title,
    description: s.description,
  }))

  return (
    <div className="svc-page">
      <ServiceHero
        eyebrow={mobileHero.badge}
        title={mobileHero.titleBefore.trim()}
        highlight={mobileHero.titleHighlight}
        description={mobileHero.description}
        image={mobileHero.image}
        primaryLabel="Build My App"
      />
      <ServiceTicker words={['iOS', 'ANDROID', 'FLUTTER', 'REACT NATIVE', 'UX', 'LAUNCH']} />
      <ServiceManifesto
        lead="App ideas are cheap."
        punch="Ship-ready products are rare."
        body="We design and engineer mobile experiences people keep opening - native feel, clean systems, real retention."
      />
      <ServiceFilmCapabilities
        eyebrow="PLATFORMS"
        title="Build for the right stack"
        subtitle="Native when it matters. Cross-platform when speed wins."
        items={mobilePlatforms}
      />
      <ServiceFilmCapabilities
        title="Product capabilities"
        subtitle="Auth, APIs, payments, notifications - production ready."
        items={mobileFeatures}
      />
      <ServiceSplit
        eyebrow="MOBILE UX"
        title={mobileUx.title}
        body={mobileUx.description}
        image={mobileUx.image}
        imageAlt={mobileUx.imageAlt}
        bullets={mobileUx.items}
        badgeLabel="CRAFT"
        badgeText="Gestures, motion, and touch targets that feel native"
      />
      <ServiceProcess
        title="From idea to App Store"
        subtitle="A clear build rhythm with milestones you can feel."
        steps={processSteps}
      />
      <ServiceBento title="Apps in the wild" items={portfolio} />
      <ServiceCase
        label={mobileCaseStudy.label}
        title={mobileCaseStudy.title}
        description={mobileCaseStudy.description}
        image={mobileCaseStudy.image}
        metrics={mobileCaseStudy.metrics}
      />
      <ServiceFaq items={mobileFaq} title="Mobile FAQs" />
      <ServiceFinale title={mobileCta.title} body={mobileCta.description} image={mobileHero.image} />
    </div>
  )
}
