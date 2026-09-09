import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { LiveChatProvider } from '../../context/LiveChatContext'
import LiveChatWidget from '../chat/LiveChatWidget'
import TawkToWidget from '../chat/TawkToWidget'
import Seo from '../common/Seo'
import Navbar from './Navbar'
import Footer from './Footer'

function getActiveKey(pathname) {
  if (pathname.startsWith('/portfolio') || pathname.startsWith('/work')) return 'portfolio'
  if (pathname.startsWith('/pricing')) return 'pricing'
  if (pathname.startsWith('/services')) return 'services'
  if (pathname.startsWith('/reviews')) return 'reviews'
  if (pathname.startsWith('/contact')) return 'contact'
  if (pathname.startsWith('/packages')) return 'combos'
  if (pathname === '/') return 'home'
  return ''
}

export default function Layout() {
  const location = useLocation()
  const activeKey = getActiveKey(location.pathname)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <LiveChatProvider>
      <Seo />
      <div className="bg-background text-on-background font-body-md antialiased overflow-x-hidden min-h-screen transition-colors duration-500">
        <Navbar activeKey={activeKey} />
        <main className="pt-16">
          <Outlet />
        </main>
        <Footer />
        <LiveChatWidget />
        <TawkToWidget />
      </div>
    </LiveChatProvider>
  )
}
