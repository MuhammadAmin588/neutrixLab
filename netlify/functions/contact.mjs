const WINDOW_MS = 10 * 60 * 1000
const MAX_READS = 20
const hits = new Map()

function clientIp(event) {
  const headers = event.headers || {}
  const raw =
    headers['x-nf-client-connection-ip'] ||
    headers['x-forwarded-for'] ||
    headers['client-ip'] ||
    ''
  return String(raw).split(',')[0].trim() || 'unknown'
}

function tooMany(ip) {
  const now = Date.now()
  const recent = (hits.get(ip) || []).filter((stamp) => now - stamp < WINDOW_MS)
  if (recent.length >= MAX_READS) {
    hits.set(ip, recent)
    return true
  }
  recent.push(now)
  hits.set(ip, recent)
  return false
}

function json(statusCode, body, extraHeaders = {}) {
  return {
    statusCode,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
      ...extraHeaders,
    },
    body: JSON.stringify(body),
  }
}

function web3Key() {
  return String(process.env.WEB3FORMS_ACCESS_KEY || '').trim()
}

export async function handler(event) {
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers: { Allow: 'GET, OPTIONS' }, body: '' }
  }

  if (event.httpMethod !== 'GET') {
    return json(405, { success: false, message: 'Method not allowed' })
  }

  if (tooMany(clientIp(event))) {
    return json(
      429,
      { success: false, message: 'Too many requests. Please wait a few minutes and try again.' },
      { 'Retry-After': '60' },
    )
  }

  const accessKey = web3Key()
  if (!accessKey) {
    return json(500, {
      success: false,
      message: 'Contact form is not configured. Add WEB3FORMS_ACCESS_KEY in Netlify.',
    })
  }

  return json(200, { success: true, access_key: accessKey })
}
