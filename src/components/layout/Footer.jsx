import { Link } from 'react-router-dom'
import NeutrixLogo from '../common/NeutrixLogo'
import { FOOTER_EXPLORE, FOOTER_LEGAL, FOOTER_SERVICES } from '../../constants/navigation'
import { BRAND } from '../../constants/brand'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-grid">
        <div className="site-footer-brand">
          <NeutrixLogo className="site-footer-logo text-on-surface" />
          <p className="site-footer-tagline">{BRAND.tagline}</p>
          <div className="site-footer-contact">
            <a href={BRAND.emailHref}>{BRAND.email}</a>
            {BRAND.phones.map((phone) => (
              <a key={phone.id} href={phone.href}>
                {phone.display}
                <span> · {phone.region}</span>
              </a>
            ))}
          </div>
        </div>

        <nav className="site-footer-nav" aria-label="Footer">
          <div>
            <h4>Services</h4>
            <ul>
              {FOOTER_SERVICES.map((item) => (
                <li key={item.label}>
                  <Link to={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              {FOOTER_EXPLORE.map((item) => (
                <li key={item.label}>
                  <Link to={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>

      <div className="site-footer-bar">
        <p>© 2026 {BRAND.name}. All rights reserved.</p>
        <div className="site-footer-legal">
          {FOOTER_LEGAL.map((item) => (
            <Link key={item.label} to={item.path}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
