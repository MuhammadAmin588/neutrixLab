import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { vitePrerenderPlugin } from 'vite-prerender-plugin'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const additionalPrerenderRoutes = [
  '/',
  '/services',
  '/services/branding',
  '/services/web-design',
  '/services/e-commerce',
  '/services/mobile-apps',
  '/services/web-portals',
  '/portfolio',
  '/pricing',
  '/packages',
  '/reviews',
  '/contact',
  '/privacy',
  '/terms',
  '/blog',
  '/blog/custom-website-vs-template',
  '/blog/ecommerce-checkout-conversion',
  '/blog/school-web-portal-development',
  '/blog/brand-identity-before-website',
  '/blog/website-design-cost-uk-us',
  '/work/bloom-kidz',
  '/work/clinia',
  '/work/dok-wallet',
  '/work/samu',
  '/work/zexal',
  '/work/iifym',
  '/work/bandook-wala',
  '/work/big-boyz',
  '/work/carters',
  '/work/strathberry',
  '/work/sipzz',
  '/work/aarum',
  '/work/beechmont',
  '/work/hush-salon',
  '/work/dr-joy',
  '/work/cr-hrms',
  '/work/trailbliss',
  '/work/tripsphere',
]

export default defineConfig({
  checks: {
    pluginTimings: false,
  },
  plugins: [
    react(),
    tailwindcss(),
    vitePrerenderPlugin({
      renderTarget: '#root',
      prerenderScript: path.resolve(__dirname, 'src/prerender.jsx'),
      additionalPrerenderRoutes,
    }),
  ],
})
