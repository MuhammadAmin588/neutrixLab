import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/common/Icon'
import Reveal from '../components/common/Reveal'
import { ROUTES } from '../constants/navigation'
import {
  COMBO_PACKAGES,
  PACKAGE_ADDONS,
  PACKAGE_COMPARISON,
  PACKAGE_FAQS,
  PACKAGE_STATS,
  PACKAGE_STEPS,
  PACKAGES_IMAGES,
} from '../data/packages'

function CheckValue({ value }) {
  if (value === true) {
    return <Icon name="check_circle" className="text-primary-container text-[22px]" />
  }
  if (value === false) {
    return <span className="text-on-surface-variant/40">-</span>
  }
  return <span className="text-on-surface text-body-sm">{value}</span>
}

export default function ComboPackagesPage() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[700px] flex items-center px-margin-desktop overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img src={PACKAGES_IMAGES.hero} alt="Branding and website combo packages" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/88" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/35" />
          <div className="absolute top-1/4 right-1/5 w-[520px] h-[520px] bg-primary-container/15 rounded-full blur-[140px] animate-pulse-glow" />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto w-full py-xxl grid grid-cols-1 lg:grid-cols-2 gap-xxl items-center">
          <div>
            <p className="hero-enter font-label-caps text-label-caps text-primary-container mb-md tracking-[0.18em]">
              COMBO PACKAGES · BUNDLE & SAVE
            </p>
            <h1 className="hero-enter hero-enter-delay-1 font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-lg">
              Premium packages that make clients say{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F6EFF] via-[#8B5CF6] to-[#C084FC]">
                “this is the one”
              </span>
            </h1>
            <p className="hero-enter hero-enter-delay-2 font-body-lg text-body-lg text-on-surface-variant max-w-[560px] mb-xl">
              Curated bundles of branding, web, and growth services - engineered to look elite,
              convert faster, and save you money versus buying separately.
            </p>
            <div className="hero-enter hero-enter-delay-3 flex flex-col sm:flex-row gap-md">
              <a
                href="#packages"
                className="bg-primary-container text-on-primary-fixed font-headline-sm px-xl py-md rounded cyber-glow transition-transform hover:-translate-y-1 text-center"
              >
                Explore Combos
              </a>
              <Link
                to={ROUTES.contact}
                className="border border-primary-container text-primary-container font-headline-sm px-xl py-md rounded hover:bg-primary-container/10 transition-colors text-center"
              >
                Get Custom Quote
              </Link>
            </div>
          </div>
          <div className="hero-enter hero-enter-delay-2 grid grid-cols-2 gap-md">
            {PACKAGE_STATS.map((stat) => (
              <div
                key={stat.label}
                className="glass-card rounded-lg p-lg stat-card transition-all duration-300 hover:-translate-y-1"
              >
                <div className="font-headline-md text-[28px] text-primary-container mb-xs">{stat.value}</div>
                <div className="font-body-sm text-body-sm text-on-surface-variant">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-xxl px-margin-desktop scroll-mt-28">
        <div className="max-w-[1440px] mx-auto">
          <Reveal className="text-center mb-xl">
            <p className="font-label-caps text-label-caps text-primary-container mb-md">CHOOSE YOUR STACK</p>
            <h2 className="font-headline-md text-[32px] md:text-[42px] text-on-surface mb-sm">
              Three combos. One clear path to launch.
            </h2>
            <p className="text-on-surface-variant font-body-lg max-w-[680px] mx-auto">
              Pick the package that matches your stage - or tell us what to customize.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter items-stretch">
            {COMBO_PACKAGES.map((pkg, index) => (
              <Reveal key={pkg.id} delay={index * 100}>
                <article
                  className={`package-card group relative h-full flex flex-col rounded-xl overflow-hidden glass-card transition-all duration-500 hover:-translate-y-2 ${
                    pkg.popular ? 'border-primary-container/50 shadow-[0_0_40px_rgba(139,107,255,0.15)] lg:-translate-y-3' : ''
                  }`}
                >
                  <div className="relative h-[210px] overflow-hidden">
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                    <span
                      className={`absolute top-md left-md font-label-caps text-label-caps px-md py-xs rounded-full ${
                        pkg.popular
                          ? 'bg-primary-container text-on-primary-fixed cyber-glow'
                          : 'bg-surface/80 text-primary-container border border-primary-container/30 backdrop-blur'
                      }`}
                    >
                      {pkg.badge}
                    </span>
                  </div>

                  <div className="p-xl flex flex-col grow">
                    <h3 className="font-headline-md text-[26px] text-on-surface mb-xs">{pkg.name}</h3>
                    <p className="font-body-sm text-body-sm text-primary-container mb-md">{pkg.tagline}</p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-lg">{pkg.description}</p>

                    <div className="flex items-end gap-sm mb-lg">
                      <span className="font-display-lg text-[36px] text-on-surface leading-none">{pkg.price}</span>
                      {pkg.oldPrice && (
                        <span className="font-body-sm text-body-sm text-on-surface-variant line-through mb-1">
                          {pkg.oldPrice}
                        </span>
                      )}
                    </div>

                    <p className="font-label-caps text-label-caps text-on-surface-variant mb-sm opacity-70">
                      INCLUDES
                    </p>
                    <ul className="space-y-sm mb-xl grow">
                      {pkg.includes.map((item) => (
                        <li key={item} className="flex items-start gap-sm text-on-surface font-body-sm text-body-sm">
                          <Icon name="check_circle" className="text-primary-container text-[18px] mt-[2px]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-md">
                      Ideal for: <span className="text-on-surface">{pkg.idealFor}</span>
                    </p>
                    <Link
                      to={pkg.path}
                      className={`w-full text-center font-headline-sm px-lg py-md rounded transition-all ${
                        pkg.popular
                          ? 'bg-primary-container text-on-primary-fixed cyber-glow hover:scale-[1.02]'
                          : 'border border-primary-container text-primary-container hover:bg-primary-container/10'
                      }`}
                    >
                      {pkg.cta}
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-xxl px-margin-desktop bg-surface-container-lowest relative overflow-hidden">
        <div className="absolute left-0 bottom-0 w-[380px] h-[380px] bg-secondary-container/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-[1440px] mx-auto relative">
          <Reveal className="text-center mb-xl">
            <p className="font-label-caps text-label-caps text-primary-container mb-md">SIMPLE PROCESS</p>
            <h2 className="font-headline-md text-[32px] md:text-[40px] text-on-surface mb-sm">
              From combo to launch - without chaos
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md">
            {PACKAGE_STEPS.map((step, i) => (
              <Reveal key={step.step} delay={i * 90}>
                <div className="glass-card rounded-lg p-lg h-full hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 right-0 text-[64px] font-display-lg text-primary-container/10 leading-none pr-md pt-sm select-none">
                    {step.step}
                  </div>
                  <div className="w-12 h-12 rounded-full bg-primary-container/10 border border-primary-container/30 flex items-center justify-center mb-lg">
                    <Icon name={step.icon} className="text-primary-container text-[24px]" />
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-sm">{step.title}</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-xxl px-margin-desktop">
        <div className="max-w-[1440px] mx-auto">
          <Reveal className="text-center mb-xl">
            <p className="font-label-caps text-label-caps text-primary-container mb-md">COMPARE COMBOS</p>
            <h2 className="font-headline-md text-[32px] md:text-[40px] text-on-surface mb-sm">
              See what’s included at a glance
            </h2>
          </Reveal>
          <Reveal>
            <div className="glass-card rounded-xl overflow-hidden border border-outline-variant/30">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[720px] text-left">
                  <thead>
                    <tr className="border-b border-outline-variant/30 bg-surface-container-low/60">
                      <th className="p-lg font-label-caps text-label-caps text-on-surface-variant">Feature</th>
                      <th className="p-lg font-label-caps text-label-caps text-on-surface">Launch</th>
                      <th className="p-lg font-label-caps text-label-caps text-primary-container">Growth</th>
                      <th className="p-lg font-label-caps text-label-caps text-on-surface">Dominate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {PACKAGE_COMPARISON.map((row) => (
                      <tr key={row.feature} className="border-b border-outline-variant/20 last:border-0">
                        <td className="p-lg font-body-sm text-body-sm text-on-surface-variant">{row.feature}</td>
                        <td className="p-lg"><CheckValue value={row.launch} /></td>
                        <td className="p-lg bg-primary-container/5"><CheckValue value={row.growth} /></td>
                        <td className="p-lg"><CheckValue value={row.dominate} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-xxl px-margin-desktop bg-surface-container-lowest">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-xxl items-center">
          <Reveal variant="left">
            <div className="relative rounded-xl overflow-hidden glass-card aspect-[4/3]">
              <img
                src={PACKAGES_IMAGES.addon}
                alt="Team planning package add-ons"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/85 via-transparent to-primary-container/20" />
              <div className="absolute bottom-lg left-lg right-lg glass-card rounded-lg p-lg border border-primary-container/25">
                <p className="font-headline-sm text-on-surface mb-xs">Stack more growth</p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Add retainers and creative packs after launch to keep momentum.
                </p>
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="font-label-caps text-label-caps text-primary-container mb-md">OPTIONAL ADD-ONS</p>
              <h2 className="font-headline-md text-[32px] md:text-[40px] text-on-surface mb-lg">
                Boost any combo
              </h2>
            </Reveal>
            <div className="space-y-md">
              {PACKAGE_ADDONS.map((item, i) => (
                <Reveal key={item.title} delay={i * 80}>
                  <div className="glass-card rounded-lg p-lg flex gap-md items-start hover:border-primary-container/40 transition-all">
                    <div className="w-12 h-12 rounded-full bg-primary-container/10 border border-primary-container/30 flex items-center justify-center shrink-0">
                      <Icon name={item.icon} className="text-primary-container text-[22px]" />
                    </div>
                    <div className="grow">
                      <div className="flex items-center justify-between gap-md mb-xs">
                        <h3 className="font-headline-sm text-on-surface">{item.title}</h3>
                        <span className="font-label-caps text-label-caps text-primary-container whitespace-nowrap">
                          {item.price}
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">{item.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-xxl px-margin-desktop">
        <div className="max-w-[900px] mx-auto">
          <Reveal className="text-center mb-xl">
            <h2 className="font-headline-md text-[32px] text-on-surface mb-sm">Combo FAQs</h2>
            <p className="text-on-surface-variant font-body-lg">Quick answers before you book.</p>
          </Reveal>
          <div className="space-y-md">
            {PACKAGE_FAQS.map((item, i) => {
              const open = openFaq === i
              return (
                <Reveal key={item.q} delay={i * 60}>
                  <div className="glass-card rounded-lg overflow-hidden">
                    <button
                      type="button"
                      className="w-full flex items-center justify-between gap-md p-lg text-left"
                      onClick={() => setOpenFaq(open ? -1 : i)}
                      aria-expanded={open}
                    >
                      <span className="font-headline-sm text-on-surface">{item.q}</span>
                      <Icon
                        name={open ? 'expand_less' : 'expand_more'}
                        className="text-primary-container text-[28px]"
                      />
                    </button>
                    {open && (
                      <div className="px-lg pb-lg">
                        <p className="font-body-md text-body-md text-on-surface-variant">{item.a}</p>
                      </div>
                    )}
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-xxl px-margin-desktop bg-primary-container/5 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[760px] h-[760px] bg-primary-container/10 rounded-full blur-[110px] animate-pulse-glow" />
        </div>
        <Reveal variant="scale">
          <div className="max-w-[820px] mx-auto text-center relative z-10 glass-card p-xxl rounded-xl border-primary-container/30">
            <h2 className="font-display-lg text-[36px] md:text-[44px] text-on-surface mb-md">
              Ready to lock in your combo?
            </h2>
            <p className="font-body-lg text-on-surface-variant mb-xl">
              Book a free consultation and we’ll recommend the smartest package for your goals and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-md justify-center">
              <Link
                to={ROUTES.contact}
                className="bg-primary-container text-on-primary-fixed font-headline-sm px-xxl py-lg rounded-lg cyber-glow transition-transform hover:scale-105"
              >
                Book Free Consultation
              </Link>
              <Link
                to={ROUTES.pricing}
                className="border border-primary-container text-primary-container font-headline-sm px-xxl py-lg rounded-lg hover:bg-primary-container/10 transition-colors"
              >
                Compare Full Pricing
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  )
}
