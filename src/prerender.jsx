import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { AppRoutes } from './App'
import { ThemeProvider } from './context/ThemeContext'
import { getSeoForPath, isIndexablePath, SITE_ORIGIN } from './constants/seo'
import { buildSeoGraph } from './lib/seoSchema'

export async function prerender(data) {
  const url = data?.url || '/'
  const pathname = url.replace(/[?#].*$/, '') || '/'
  const html = renderToString(
    <ThemeProvider>
      <StaticRouter location={pathname}>
        <AppRoutes />
      </StaticRouter>
    </ThemeProvider>,
  )

  const seo = getSeoForPath(pathname)
  const origin = SITE_ORIGIN
  const canonical = pathname === '/' ? `${origin}/` : `${origin}${pathname}`
  const image = `${origin}/og-share.png`
  const indexable = isIndexablePath(pathname)
  const graph = JSON.stringify(buildSeoGraph(pathname, origin))
  const ogType = seo.ogType || 'website'

  return {
    html,
    links: new Set(),
    head: {
      lang: 'en',
      title: seo.title,
      elements: new Set([
        { type: 'meta', props: { name: 'description', content: seo.description } },
        {
          type: 'meta',
          props: { name: 'robots', content: indexable ? 'index, follow' : 'noindex, follow' },
        },
        { type: 'link', props: { rel: 'canonical', href: canonical } },
        { type: 'meta', props: { property: 'og:title', content: seo.title } },
        { type: 'meta', props: { property: 'og:description', content: seo.description } },
        { type: 'meta', props: { property: 'og:type', content: ogType } },
        { type: 'meta', props: { property: 'og:url', content: canonical } },
        { type: 'meta', props: { property: 'og:locale', content: 'en_GB' } },
        { type: 'meta', props: { property: 'og:site_name', content: 'Neutrix Lab' } },
        { type: 'meta', props: { property: 'og:image', content: image } },
        { type: 'meta', props: { property: 'og:image:width', content: '1200' } },
        { type: 'meta', props: { property: 'og:image:height', content: '630' } },
        { type: 'meta', props: { name: 'twitter:card', content: 'summary_large_image' } },
        { type: 'meta', props: { name: 'twitter:title', content: seo.title } },
        { type: 'meta', props: { name: 'twitter:description', content: seo.description } },
        { type: 'meta', props: { name: 'twitter:image', content: image } },
        {
          type: 'script',
          props: { type: 'application/ld+json', id: 'neutrix-jsonld' },
          children: graph,
        },
      ]),
    },
  }
}
