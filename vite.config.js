import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { vitePrerenderPlugin } from 'vite-prerender-plugin'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Core pages only — work/blog posts stay client-rendered so Netlify stays under 15m.
const additionalPrerenderRoutes = [
  '/',
  '/services',
  '/services/web-design',
  '/portfolio',
  '/pricing',
  '/packages',
  '/contact',
  '/blog',
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
