import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/common/Icon'
import Reveal from '../components/common/Reveal'
import { ROUTES } from '../constants/navigation'
import {
  COMPARISON_ROWS,
  PAYMENT_MILESTONES,
  PLAN_GROUPS,
  RATE_ADDONS,
  RATE_COMBOS,
  RATE_FAQ,
  RATE_PATHS,
  RATE_ROI,
} from '../data/pricing'
import heroImg from '../assets/packages/hero.jpg'
import starterImg from '../assets/packages/starter.jpg'
import growthImg from '../assets/packages/growth.jpg'
import enterpriseImg from '../assets/packages/enterprise.jpg'
import addonImg from '../assets/packages/addon.jpg'

const PLAN_MEDIA = [starterImg, growthImg, enterpriseImg]

const CAT_LABEL = {
  'web-design': 'Website',
  'e-comm': 'Store',
  portal: 'Portal',
  marketing: 'Growth',
}

function Val({ value }) {
  if (value === true) return <Icon name="check" className="text-primary-container text-[20px]" />
  if (value === false) return <span className="cp-dash">-</span>
  return <span>{value}</span>
}

export default function PricingPage() {
  const [category, setCategory] = useState('web-design')
  const [faqOpen, setFaqOpen] = useState(0)
  const group = PLAN_GROUPS[category]
  const activePath = RATE_PATHS.find((p) => p.id === category)

  return (
    <div className="cp-page">
      {/* ── Cinematic hero ── */}
      <section className="cp-hero">
        <div className="cp-hero-media" aria-hidden="true">
          <img src={heroImg} alt="" className="cp-hero-img" />
          <div className="cp-hero-veil" />
          <div className="cp-hero-grain" />
          <div className="cp-hero-orb cp-hero-orb-a" />
          <div className="cp-hero-orb cp-hero-orb-b" />
        </div>

        <div className="cp-hero-inner px-margin-desktop">
          <p className="cp-kicker hero-enter mb-md">NEUTRIX · PRICING</p>
          <h1 className="hero-enter hero-enter-delay-1 cp-hero-title mb-lg">
            Neutrix Lab
            <span className="cp-hero-line">Pricing with presence.</span>
          </h1>
          <p className="hero-enter hero-enter-delay-2 cp-hero-lead mb-xl">
            Pick a lane. Choose a tier. Know the craft, timeline, and investment before a single
            pixel ships.
          </p>
          <div className="hero-enter hero-enter-delay-3 flex flex-wrap gap-md">
            <a href="#plans" className="cp-btn">
              Explore plans
              <Icon name="arrow_downward" className="text-[18px]" />
            </a>
            <Link to={ROUTES.contact} className="cp-btn-ghost">
              Custom quote
            </Link>
          </div>
        </div>

        <div className="cp-scroll-hint hero-enter hero-enter-delay-4" aria-hidden="true">
          <span />
        </div>
      </section>

      {/* ── Signal strip ── */}
      <section className="cp-signals" aria-label="Pricing signals">
        <div className="cp-signals-track">
          {[...RATE_ROI, ...RATE_ROI].map((item, i) => (
            <div key={`${item.label}-${i}`} className="cp-signal">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
              <em>{item.context}</em>
            </div>
          ))}
        </div>
      </section>

      {/* ── Category cinema ── */}
      <section className="cp-cats-wrap px-margin-desktop">
        <Reveal>
          <div className="cp-cats-head">
            <p className="cp-kicker mb-md">CHOOSE YOUR LANE</p>
            <h2 className="cp-title">What are we building?</h2>
          </div>
        </Reveal>

        <div className="cp-cats" role="tablist" aria-label="Pricing categories">
          {RATE_PATHS.map((item) => {
            const on = category === item.id
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={on}
                className={`cp-cat ${on ? 'is-on' : ''}`}
                onClick={() => setCategory(item.id)}
              >
                <span className="cp-cat-icon">
                  <Icon name={item.icon} className="text-[22px]" />
                </span>
                <span className="cp-cat-copy">
                  <strong>{CAT_LABEL[item.id]}</strong>
                  <small>{item.hint}</small>
                </span>
              </button>
            )
          })}
        </div>

        {activePath ? (
          <p key={category} className="cp-cats-hint">
            {activePath.hint}
          </p>
        ) : null}
      </section>

      {/* ── Plan theater ── */}
      <section id="plans" className="cp-plans-sec px-margin-desktop">
        <div className="cp-plans-intro">
          <Reveal>
            <p className="cp-kicker mb-md">{group.anchor}</p>
            <h2 className="cp-title mb-sm">{group.title}</h2>
            <p className="cp-sub">{group.subtitle}</p>
          </Reveal>
        </div>

        <div key={category} className="cp-plans">
          {group.plans.map((plan, i) => (
            <Reveal key={plan.id} delay={i * 100} className="cp-plan-reveal">
              <article className={`cp-plan ${plan.popular ? 'is-featured' : ''}`}>
                <div className="cp-plan-media">
                  <img src={PLAN_MEDIA[i] || growthImg} alt="" />
                  <div className="cp-plan-media-veil" />
                  <span className="cp-plan-tier">{plan.tier}</span>
                  {plan.popular ? <span className="cp-plan-badge">Recommended</span> : null}
                </div>

                <div className="cp-plan-body">
                  <h3 className="cp-plan-name">{plan.name}</h3>
                  <p className="cp-plan-desc">{plan.description}</p>

                  <div className="cp-plan-price">
                    <span className="cp-plan-amount">{plan.price}</span>
                    <span className="cp-plan-note">{plan.note}</span>
                  </div>

                  <p className="cp-plan-time">
                    <Icon name="schedule" className="text-[16px]" />
                    {plan.timeline}
                  </p>

                  <ul className="cp-plan-list">
                    {plan.features.map((f) => (
                      <li key={f}>
                        <Icon name="check_circle" className="text-[18px]" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={ROUTES.contact}
                    className={plan.popular ? 'cp-btn w-full' : 'cp-btn-ghost w-full'}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Compare stage ── */}
      <section className="cp-band">
        <div className="px-margin-desktop py-xxl">
          <div className="max-w-[1100px] mx-auto">
            <Reveal>
              <div className="text-center mb-xl">
                <p className="cp-kicker mb-md">COMPARE</p>
                <h2 className="cp-title">Web design at a glance</h2>
                <p className="cp-sub mt-sm mx-auto">Side-by-side clarity. No fine print theater.</p>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="cp-table-wrap">
                <table className="cp-table">
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>Starter</th>
                      <th className="is-hot">Professional</th>
                      <th>Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARISON_ROWS.map((row) => (
                      <tr key={row.feature}>
                        <td className="cp-feature">{row.feature}</td>
                        <td>
                          <Val value={row.starter} />
                        </td>
                        <td className="is-hot">
                          <Val value={row.professional} />
                        </td>
                        <td>
                          <Val value={row.enterprise} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Payment filmstrip ── */}
      <section className="cp-pay px-margin-desktop py-xxl">
        <div className="max-w-[1100px] mx-auto">
          <Reveal>
            <div className="text-center mb-xl">
              <p className="cp-kicker mb-md">BILLING</p>
              <h2 className="cp-title">Pay as we ship</h2>
              <p className="cp-sub mt-sm mx-auto">Milestones, not mystery. Cashflow that matches craft.</p>
            </div>
          </Reveal>

          <div className="cp-miles">
            <div className="cp-miles-line" aria-hidden="true" />
            {PAYMENT_MILESTONES.map((m, i) => (
              <Reveal key={m.title} delay={i * 120}>
                <div className="cp-mile">
                  <div className="cp-mile-node">
                    <span>{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <div className="cp-mile-pct">{m.pct}</div>
                  <h3>{m.title}</h3>
                  <p>{m.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Combo panels ── */}
      <section className="cp-band">
        <div className="px-margin-desktop py-xxl">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-md mb-xl">
              <Reveal>
                <div>
                  <p className="cp-kicker mb-md">BUNDLES</p>
                  <h2 className="cp-title">Save with combos</h2>
                </div>
              </Reveal>
              <Reveal delay={60}>
                <Link to={ROUTES.comboPackages} className="cp-link">
                  All combo packages
                  <Icon name="arrow_forward" className="text-[18px]" />
                </Link>
              </Reveal>
            </div>

            <div className="cp-combos">
              {RATE_COMBOS.map((combo, i) => (
                <Reveal key={combo.id} delay={i * 100}>
                  <article className="cp-combo">
                    <div className="cp-combo-bg" aria-hidden="true">
                      <img src={i === 0 ? growthImg : enterpriseImg} alt="" />
                      <div className="cp-combo-veil" />
                    </div>
                    <div className="cp-combo-content">
                      <span className="cp-tag">{combo.save}</span>
                      <h3>{combo.name}</h3>
                      <p>{combo.description}</p>
                      <ul>
                        {combo.includes.map((inc) => (
                          <li key={inc}>
                            <Icon name="check" className="text-[16px]" />
                            {inc}
                          </li>
                        ))}
                      </ul>
                      <div className="cp-combo-foot">
                        <strong>{combo.price}</strong>
                        <Link to={ROUTES.contact} className="cp-btn">
                          Enquire
                        </Link>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Add-ons ── */}
      <section className="cp-addons px-margin-desktop py-xxl">
        <div className="max-w-[1100px] mx-auto">
          <Reveal>
            <div className="text-center mb-xl">
              <p className="cp-kicker mb-md">ADD-ONS</p>
              <h2 className="cp-title">Keep growing after launch</h2>
            </div>
          </Reveal>

          <div className="cp-addon-grid">
            {RATE_ADDONS.map((addon, i) => (
              <Reveal key={addon.id} delay={i * 80}>
                <article className="cp-addon">
                  <div className="cp-addon-icon">
                    <Icon name={addon.icon} className="text-[26px]" />
                  </div>
                  <h3>{addon.title}</h3>
                  <p>{addon.price}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="cp-faq-sec px-margin-desktop pb-xxl">
        <div className="max-w-[720px] mx-auto">
          <Reveal>
            <div className="text-center mb-xl">
              <p className="cp-kicker mb-md">FAQ</p>
              <h2 className="cp-title">Common questions</h2>
            </div>
          </Reveal>

          {RATE_FAQ.map((item, index) => {
            const open = faqOpen === index
            return (
              <Reveal key={item.question} delay={index * 50}>
                <div className={`cp-faq ${open ? 'is-open' : ''}`}>
                  <button
                    type="button"
                    className="cp-faq-btn"
                    aria-expanded={open}
                    onClick={() => setFaqOpen(open ? -1 : index)}
                  >
                    <span>{item.question}</span>
                    <Icon name={open ? 'remove' : 'add'} className="text-[20px]" />
                  </button>
                  <div className="cp-faq-panel" style={{ gridTemplateRows: open ? '1fr' : '0fr' }}>
                    <div>
                      <p className="cp-faq-a">{item.answer}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </section>

      {/* ── Finale CTA ── */}
      <section className="cp-finale">
        <div className="cp-finale-media" aria-hidden="true">
          <img src={addonImg} alt="" />
          <div className="cp-finale-veil" />
        </div>
        <div className="cp-finale-inner">
          <Reveal>
            <p className="cp-kicker mb-md">NEXT SCENE</p>
            <h2 className="cp-finale-title mb-md">Need a custom scope?</h2>
            <p className="cp-sub mb-xl mx-auto">
              Tell us the goal. We&apos;ll send a clean proposal with timeline, milestones, and
              price - no pitch theater.
            </p>
            <div className="flex flex-col sm:flex-row gap-md justify-center">
              <Link to={ROUTES.contact} className="cp-btn">
                Request a quote
              </Link>
              <Link to={ROUTES.portfolio} className="cp-btn-ghost">
                See our work
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
