import { Link } from 'react-router-dom'
import { ROUTES } from '../constants/navigation'

export default function LegalPage({ doc }) {
  return (
    <article className="legal-page px-margin-desktop py-xxl">
      <div className="legal-page-inner max-w-[720px] mx-auto">
        <p className="font-label-caps text-label-caps text-primary-container tracking-[0.16em] mb-md">LEGAL</p>
        <h1 className="font-display-lg text-[36px] md:text-[44px] text-on-surface mb-sm">{doc.title}</h1>
        <p className="font-body-sm text-body-sm text-on-surface-variant mb-xl">Last updated {doc.updated}</p>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl">{doc.intro}</p>
        {doc.sections.map((section) => (
          <section key={section.heading} className="legal-section mb-xl">
            <h2 className="font-headline-sm text-[20px] text-on-surface mb-md">{section.heading}</h2>
            {section.paragraphs.map((p) => (
              <p key={p.slice(0, 48)} className="font-body-md text-body-md text-on-surface-variant mb-md leading-relaxed">
                {p}
              </p>
            ))}
          </section>
        ))}
        <p className="font-body-sm text-body-sm text-on-surface-variant pt-lg border-t border-outline-variant/30">
          See also{' '}
          <Link to={ROUTES.privacy} className="text-primary-container hover:underline">
            Privacy
          </Link>
          {' · '}
          <Link to={ROUTES.terms} className="text-primary-container hover:underline">
            Terms
          </Link>
          {' · '}
          <Link to={ROUTES.contact} className="text-primary-container hover:underline">
            Contact
          </Link>
        </p>
      </div>
    </article>
  )
}
