import { readdir, mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { build as viteBuild } from 'vite'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const distDir = path.join(root, 'dist')
const ssrDir = path.join(root, 'dist-ssr')

function escapeAttr(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
}

function serializeElement(el) {
  const attrs = Object.entries(el.props || {})
    .map(([key, value]) => `${key}="${escapeAttr(value)}"`)
    .join(' ')
  if (el.type === 'script') {
    return `<script ${attrs}>${el.children ?? ''}</script>`
  }
  return `<${el.type} ${attrs}>`
}

function matcherForElement(el) {
  const props = el.props || {}
  if (el.type === 'meta' && props.name) {
    return new RegExp(`<meta\\s+name="${escapeRegExp(props.name)}"[^>]*>`, 'i')
  }
  if (el.type === 'meta' && props.property) {
    return new RegExp(`<meta\\s+property="${escapeRegExp(props.property)}"[^>]*>`, 'i')
  }
  if (el.type === 'link' && props.rel) {
    return new RegExp(`<link\\s+rel="${escapeRegExp(props.rel)}"[^>]*>`, 'i')
  }
  if (el.type === 'script' && props.id) {
    return new RegExp(
      `<script\\s[^>]*id="${escapeRegExp(props.id)}"[^>]*>[\\s\\S]*?<\\/script>`,
      'i',
    )
  }
  return null
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function applyHead(template, head) {
  let html = template.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeAttr(head.title)}</title>`)
  html = html.replace(/<html\b([^>]*)>/i, (match, attrs) => {
    if (/\blang=/.test(attrs)) {
      return `<html${attrs.replace(/\blang="[^"]*"/, `lang="${head.lang}"`)}>`
    }
    return `<html${attrs} lang="${head.lang}">`
  })

  for (const el of head.elements) {
    const tag = serializeElement(el)
    const matcher = matcherForElement(el)
    if (matcher?.test(html)) {
      html = html.replace(matcher, tag)
    } else {
      html = html.replace('</head>', `    ${tag}\n  </head>`)
    }
  }

  return html
}

function applyBody(template, markup) {
  if (template.includes('<div id="root"></div>')) {
    return template.replace('<div id="root"></div>', `<div id="root">${markup}</div>`)
  }
  return template.replace(/<div id="root">[\s\S]*?<\/div>/, `<div id="root">${markup}</div>`)
}

function fileForRoute(route) {
  if (route === '/') return path.join(distDir, 'index.html')
  return path.join(distDir, route.replace(/^\//, ''), 'index.html')
}

async function bundlePrerender() {
  await viteBuild({
    configFile: path.join(root, 'vite.config.js'),
    root,
    logLevel: 'warn',
    build: {
      ssr: path.join(root, 'src/prerender.jsx'),
      outDir: ssrDir,
      emptyOutDir: true,
      copyPublicDir: false,
      ssrEmitAssets: false,
    },
  })

  const files = await readdir(ssrDir)
  const bundle = files.find((file) => file.startsWith('prerender.') && file.endsWith('.js'))
  if (!bundle) {
    throw new Error(`SSR prerender bundle not found in ${ssrDir}: ${files.join(', ') || '(empty)'}`)
  }

  const { prerender, PUBLIC_PATHS } = await import(pathToFileURL(path.join(ssrDir, bundle)).href)
  return { prerender, routes: PUBLIC_PATHS }
}

async function main() {
  const template = await readFile(path.join(distDir, 'index.html'), 'utf8')
  const { prerender, routes } = await bundlePrerender()

  for (const route of routes) {
    const result = await prerender({ url: route })
    const html = applyBody(applyHead(template, result.head), result.html)
    const outfile = fileForRoute(route)
    await mkdir(path.dirname(outfile), { recursive: true })
    await writeFile(outfile, html, 'utf8')
  }

  await rm(ssrDir, { recursive: true, force: true })
  console.log(`Prerendered ${routes.length} pages`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
