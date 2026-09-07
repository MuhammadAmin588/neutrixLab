import { Link } from 'react-router-dom'
import NeutrixLogo from '../common/NeutrixLogo'
import { FOOTER_EXPLORE, FOOTER_LEGAL, FOOTER_SERVICES, ROUTES } from '../../constants/navigation'
import { BRAND } from '../../constants/brand'

export default function Footer() {
  return (
    <footer className="relative w-full bottom-0 bg-surface-container-lowest border-t border-outline-variant/20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-desktop py-xxl max-w-[1440px] mx-auto">
        <div className="md:col-span-2">
          <NeutrixLogo className="mb-lg text-[17px] text-on-surface" />
          <p className="font-body-md text-body-md text-on-surface-variant max-w-[320px] mb-lg">
            {BRAND.tagline}
          </p>
          <div className="space-y-sm font-body-md text-body-md">
            <a
              href={BRAND.emailHref}
              className="block text-on-surface-variant hover:text-primary-container transition-colors"
            >
              {BRAND.email}
            </a>
            {BRAND.phones.map((phone) => (
              <a
                key={phone.id}
                href={phone.href}
                className="block text-on-surface-variant hover:text-primary-container transition-colors"
              >
                {phone.display}
                <span className="text-on-surface-variant/70"> · {phone.region}</span>
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-label-caps text-label-caps text-on-surface mb-lg opacity-50">SERVICES</h4>
          <ul className="space-y-md font-body-md text-body-md">
            {FOOTER_SERVICES.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.path}
                  className="text-on-surface-variant hover:text-primary transition-all"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-label-caps text-label-caps text-on-surface mb-lg opacity-50">EXPLORE</h4>
          <ul className="space-y-md font-body-md text-body-md">
            {FOOTER_EXPLORE.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.path}
                  className="text-on-surface-variant hover:text-primary transition-all"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            {FOOTER_LEGAL.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.path}
                  className="text-on-surface-variant hover:text-primary transition-all"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-outline-variant/20 py-lg px-margin-desktop">
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-md">
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            © 2026 {BRAND.name}. All Rights Reserved.
          </p>
          <div className="flex items-center gap-lg font-body-sm text-body-sm">
            <Link to={ROUTES.privacy} className="text-on-surface-variant hover:text-primary-container">
              Privacy
            </Link>
            <Link to={ROUTES.terms} className="text-on-surface-variant hover:text-primary-container">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
