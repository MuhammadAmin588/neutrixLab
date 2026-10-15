const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
}

function json(statusCode, body) {
  return {
    statusCode,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  }
}

function web3Key() {
  return String(process.env.WEB3FORMS_ACCESS_KEY || process.env.VITE_WEB3FORMS_ACCESS_KEY || '').trim()
}

export async function handler(event) {
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers: corsHeaders, body: '' }
  }

  if (event.httpMethod !== 'GET') {
    return json(405, { success: false, message: 'Method not allowed' })
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
