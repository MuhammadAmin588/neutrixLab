import { mkdir, readdir, rm, writeFile } from 'node:fs/promises'
import path from 'node:path'

const root = path.resolve('public/fonts')
await mkdir(root, { recursive: true })
for (const name of await readdir(root)) {
  if (name.endsWith('.woff2') || name === 'fonts.css') {
    await rm(path.join(root, name))
  }
}

const icons = [
  'account_tree', 'add', 'ads_click', 'all_inclusive', 'analytics', 'android', 'api',
  'architecture', 'arrow_back', 'arrow_downward', 'arrow_forward', 'arrow_outward',
  'brush', 'call', 'campaign', 'change_history', 'chat', 'check', 'check_circle',
  'chevron_right', 'close', 'cloud', 'code', 'code_blocks', 'contact_mail',
  'dashboard', 'dashboard_customize', 'database', 'design_services', 'developer_mode',
  'devices', 'domain', 'draw', 'edit', 'edit_note', 'file_download', 'fingerprint',
  'format_quote', 'forum', 'hexagon', 'hub', 'inventory_2', 'language', 'lightbulb',
  'local_shipping', 'lock', 'mail', 'manage_accounts', 'mark_email_read',
  'medical_services', 'menu', 'menu_book', 'monitoring', 'notifications_active',
  'palette', 'payments', 'public', 'query_stats', 'real_estate_agent', 'remove',
  'reviews', 'rocket_launch', 'schedule', 'search', 'security', 'send', 'shield_lock',
  'shopping_bag', 'shopping_cart', 'smart_toy', 'smartphone', 'speed', 'star',
  'support_agent', 'terminal', 'token', 'travel_explore', 'trending_up', 'verified',
  'video_library', 'web', 'dark_mode', 'light_mode', 'expand_less', 'expand_more',
].join(',')

const ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
const requests = [
  'https://fonts.googleapis.com/css2?family=Inter:wght@400&display=swap',
  'https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap',
  'https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap',
  'https://fonts.googleapis.com/css2?family=Outfit:wght@600&display=swap',
  'https://fonts.googleapis.com/css2?family=Outfit:wght@700&display=swap',
  `https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0..1,0&display=swap&icon_names=${icons}`,
]

const saved = new Map()
let cssOut = ''
let n = 0

for (const url of requests) {
  const cssRes = await fetch(url, { headers: { 'User-Agent': ua } })
  const css = await cssRes.text()
  if (!cssRes.ok || css.includes('<html')) {
    throw new Error(`Font CSS ${cssRes.status} for ${url}\n${css.slice(0, 160)}`)
  }
  const blocks = css.split(/(?=\/\*)/).filter((block) => /\/\* (latin|latin-ext) \*\//.test(block) || block.includes('Material Symbols'))
  let local = blocks.join('')
  const found = [...new Set([...local.matchAll(/url\((https:\/\/[^)]+)\)/g)].map((m) => m[1]))]
  for (const fontUrl of found) {
    let file = saved.get(fontUrl)
    if (!file) {
      file = `f${++n}.woff2`
      const buf = Buffer.from(await (await fetch(fontUrl)).arrayBuffer())
      await writeFile(path.join(root, file), buf)
      saved.set(fontUrl, file)
      console.log('FONT', buf.length, file)
    }
    local = local.split(fontUrl).join(`/fonts/${file}`)
  }
  cssOut += `${local}\n`
}

cssOut = cssOut.replace(
  '-webkit-font-smoothing: antialiased;\n}',
  '-webkit-font-smoothing: antialiased;\n  font-variation-settings: \'FILL\' 0, \'wght\' 400, \'GRAD\' 0, \'opsz\' 24;\n}',
)
await writeFile(path.join(root, 'fonts.css'), cssOut)
console.log('FILES', n, 'CSS', cssOut.length)
