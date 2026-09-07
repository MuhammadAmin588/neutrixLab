import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Icon from '../common/Icon'
import NeutrixLogo from '../common/NeutrixLogo'
import ThemeToggle from '../common/ThemeToggle'
import { NAV_LINKS, ROUTES } from '../../constants/navigation'
import { useTheme } from '../../context/ThemeContext'

function linkClass(isActive) {
  return isActive
    ? 'text-on-surface border-b-2 border-primary-container pb-0.5'
    : 'text-on-surface/75 light:text-on-surface/90 hover:text-on-surface transition-colors duration-300'
}

export default function Navbar({ activeKey = 'home' }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const { isLight } = useTheme()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`site-header fixed top-0 w-full z-50 backdrop-blur-xl border-b transition-colors duration-300 ${
        isLight
          ? 'bg-background/95 border-outline-variant'
          : `border-outline-variant/25 ${scrolled ? 'bg-surface/90' : 'bg-transparent border-transparent'}`
      }`}
    >
      <div className="flex justify-between items-center px-margin-desktop h-16 max-w-[1440px] mx-auto">
        <NeutrixLogo className="text-[16px] text-on-surface tracking-tight" />
        <div className="hidden lg:flex items-center gap-6 font-label-caps text-label-caps">
          {NAV_LINKS.map((link) => (
            <Link key={link.key} to={link.path} className={linkClass(activeKey === link.key)}>
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            to={ROUTES.contact}
            className={`hidden md:inline-flex bg-primary-container text-on-primary-fixed font-label-caps text-label-caps px-5 py-2 rounded-md ${
              isLight ? 'site-cta-light' : 'cyber-glow'
            }`}
          >
            Get Started
          </Link>
          <button
            type="button"
            aria-label="Open Menu"
            aria-expanded={open}
            className="lg:hidden text-on-surface p-1"
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? 'close' : 'menu'} className="text-[22px]" />
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-outline-variant/30 bg-background px-margin-desktop py-md flex flex-col gap-md">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.key}
              to={link.path}
              className={`font-label-caps text-label-caps py-sm ${
                activeKey === link.key ? 'text-primary-container' : 'text-on-surface-variant'
              }`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to={ROUTES.contact}
            className="bg-primary-container text-on-primary-fixed font-label-caps text-label-caps px-lg py-sm rounded-md text-center"
            onClick={() => setOpen(false)}
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  )
}
