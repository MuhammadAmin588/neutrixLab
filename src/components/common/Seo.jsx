import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { BRAND } from '../../constants/brand'
import { getSeoForPath, isIndexablePath, SITE_ORIGIN } from '../../constants/seo'
import { buildSeoGraph } from '../../lib/seoSchema'

function upsertMeta(selector, attributes) {
  let node = document.head.querySelector(selector)
  if (!node) {
    node = document.createElement('meta')
    document.head.appendChild(node)
  }
  Object.entries(attributes).forEach(([key, value]) => {
    node.setAttribute(key, value)
  })
}

function upsertLink(rel, href) {
  let node = document.head.querySelector(`link[rel="${rel}"]`)
  if (!node) {
    node = document.createElement('link')
    node.setAttribute('rel', rel)
    document.head.appendChild(node)
  }
  node.setAttribute('href', href)
}

function upsertJsonLd(data) {
  let node = document.getElementById('neutrix-jsonld')
  if (!node) {
    node = document.createElement('script')
    node.id = 'neutrix-jsonld'
    node.type = 'application/ld+json'
    document.head.appendChild(node)
  }
  node.textContent = JSON.stringify(data)
}

export default function Seo() {
  const { pathname } = useLocation()

  useEffect(() => {
    const { title, description, ogType = 'website' } = getSeoForPath(pathname)
    const origin = SITE_ORIGIN
    const path = pathname === '/' ? '/' : pathname
    const url = `${origin}${path}`
    const image = `${origin}/og-share.png`
    const indexable = isIndexablePath(pathname)

    document.title = title
    upsertMeta('meta[name="description"]', { name: 'description', content: description })
    upsertMeta('meta[name="robots"]', {
      name: 'robots',
      content: indexable ? 'index, follow' : 'noindex, follow',
    })
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: title })
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: description })
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: ogType })
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: url })
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: image })
    upsertMeta('meta[property="og:image:width"]', { property: 'og:image:width', content: '1200' })
    upsertMeta('meta[property="og:image:height"]', { property: 'og:image:height', content: '630' })
    upsertMeta('meta[property="og:locale"]', { property: 'og:locale', content: 'en_GB' })
    upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: BRAND.name })
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' })
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title })
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description })
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: image })
    upsertLink('canonical', url)
    upsertJsonLd(buildSeoGraph(pathname, origin))
  }, [pathname])

  return null
}
