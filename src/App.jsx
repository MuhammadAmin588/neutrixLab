import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import BrandingPage from './pages/BrandingPage'
import EcommercePage from './pages/EcommercePage'
import MobileAppsPage from './pages/MobileAppsPage'
import WebDesignPage from './pages/WebDesignPage'
import WebPortalsPage from './pages/WebPortalsPage'
import PortfolioPage from './pages/PortfolioPage'
import PricingPage from './pages/PricingPage'
import ReviewsPage from './pages/ReviewsPage'
import ContactPage from './pages/ContactPage'
import ComboPackagesPage from './pages/ComboPackagesPage'
import PrivacyPage from './pages/PrivacyPage'
import TermsPage from './pages/TermsPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="packages" element={<ComboPackagesPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="services/branding" element={<BrandingPage />} />
          <Route path="services/e-commerce" element={<EcommercePage />} />
          <Route path="services/mobile-apps" element={<MobileAppsPage />} />
          <Route path="services/web-design" element={<WebDesignPage />} />
          <Route path="services/web-portals" element={<WebPortalsPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
