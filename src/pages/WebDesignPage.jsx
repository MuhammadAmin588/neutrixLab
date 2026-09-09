import {
  ServiceBento,
  ServiceCase,
  ServiceFaq,
  ServiceFilmCapabilities,
  ServiceFinale,
  ServiceHero,
  ServiceManifesto,
  ServicePricing,
  ServiceProcess,
  ServiceTicker,
} from '../components/services/ServiceKit'
import {
  CASE_STUDY,
  CORE_CAPABILITIES,
  FAQ_ITEMS,
  HERO,
  PORTFOLIO_ITEMS,
  PRICING_TIERS,
  PROCESS_STEPS,
  WEBSITE_TYPES,
} from '../data/webDesign'

export default function WebDesignPage() {
  const portfolio = PORTFOLIO_ITEMS.map((p) => ({
    title: p.title,
    subtitle: p.category,
    image: p.image,
    imageFit: 'contain',
    imageBg: '#000000',
  }))

  return (
    <div className="svc-page">
      <ServiceHero
        eyebrow={HERO.badge}
        title="High-performance sites that"
        highlight="feel elite."
        description={HERO.description}
        image={HERO.image}
        imageAlt={HERO.imageAlt}
        primaryLabel="Initiate Project"
      />
      <ServiceTicker words={['UI/UX', 'PERFORMANCE', 'SEO', 'CMS', 'LANDING', 'CORPORATE']} />
      <ServiceManifesto
        lead="Templates get ignored."
        punch="Precision gets hired."
        body="We architect digital experiences that demand attention - fast, structured, and built to convert."
      />
      <ServiceFilmCapabilities
        eyebrow="ARCHITECTURES"
        title="Website types we specialize in"
        subtitle="From pitch sites to complex web apps - each built for a clear job."
        items={WEBSITE_TYPES}
      />
      <ServiceFilmCapabilities
        title="Engineering capabilities"
        subtitle="Speed, security, SEO, and systems that stay maintainable."
        items={CORE_CAPABILITIES}
      />
      <ServiceProcess
        title="Six steps. Zero chaos."
        subtitle="A delivery rhythm that keeps quality high and timelines honest."
        steps={PROCESS_STEPS.slice(0, 4)}
      />
      <ServiceBento title="Sites that win trust" items={portfolio} />
      <ServiceCase
        label={CASE_STUDY.label}
        title={CASE_STUDY.title}
        description={CASE_STUDY.description}
        image={CASE_STUDY.image}
        metrics={[
          { value: '300%', label: 'FASTER LOAD' },
          { value: '45%', label: 'LEAD UPLIFT' },
        ]}
      />
      <ServicePricing title="Web design engagements" tiers={PRICING_TIERS} />
      <ServiceFaq items={FAQ_ITEMS} title="Web design FAQs" />
      <ServiceFinale
        title="Ready to rebuild the first impression?"
        body="We’ll map a site that looks premium, loads fast, and converts like a sales asset."
        image={HERO.image}
        imageAlt={HERO.imageAlt}
      />
    </div>
  )
}
