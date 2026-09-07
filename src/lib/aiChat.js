/** Intent-based AI assistant for Neutrix Lab live chat. */
import { BRAND } from '../constants/brand'

const QUICK_REPLIES = [
  'Our services',
  'Pricing',
  'How long does a project take?',
  'Talk to a human',
]

function normalize(text) {
  return text.toLowerCase().replace(/[^\w\s+$]/g, ' ').replace(/\s+/g, ' ').trim()
}

function includesAny(text, words) {
  return words.some((w) => text.includes(w))
}

export function getQuickReplies() {
  return QUICK_REPLIES
}

export function getWelcomeMessage() {
  return {
    id: `ai-${Date.now()}`,
    role: 'assistant',
    text:
      "Hi! I'm NEUTRIX's AI assistant. I can help with services, pricing, timelines, and next steps - or connect you to a human anytime.",
    quickReplies: QUICK_REPLIES,
  }
}

/** True when the visitor clearly wants a live person (not just contact info). */
export function wantsHumanHandoff(userText) {
  const text = normalize(userText)
  return includesAny(text, [
    'talk to a human',
    'talk to human',
    'human agent',
    'live agent',
    'real person',
    'real human',
    'speak to someone',
    'speak to a person',
    'customer support',
    'live chat agent',
    'kisi insan',
    'insaan se',
    'human se',
  ]) || text === 'human' || text === 'agent'
}

/**
 * Generate an AI reply from site knowledge.
 * Returns { text, quickReplies?, action? }
 */
export async function generateAiReply(userText, history = []) {
  const text = normalize(userText)
  // Small delay so the UI feels conversational
  await new Promise((r) => setTimeout(r, 450 + Math.random() * 350))

  if (wantsHumanHandoff(userText)) {
    return {
      action: 'handoff_human',
      text:
        "Absolutely - connecting you with a NEUTRIX team member now. The live chat window will open so you can talk to a human.",
      quickReplies: ['Our services', 'Pricing'],
    }
  }

  if (includesAny(text, ['hello', 'hi', 'hey', 'salam', 'assalam', 'namaste', 'hola'])) {
    return {
      text: "Hey! Welcome to Neutrix Lab. Ask me about branding, websites, e-commerce, apps, portals, pricing, or timelines - or tap Talk to a human anytime.",
      quickReplies: QUICK_REPLIES,
    }
  }

  if (includesAny(text, ['service', 'offer', 'what do you', 'kya karte', 'services'])) {
    return {
      text:
        'We specialize in five lanes:\n\n' +
        '• Branding - identity, voice, guidelines\n' +
        '• Web Design - high-converting sites\n' +
        '• E-Commerce - stores built to sell\n' +
        '• Mobile Apps - iOS / Android / RN\n' +
        '• Web Portals - secure ops dashboards\n\n' +
        'Which one fits your project?',
      quickReplies: ['Branding', 'Website', 'E-commerce', 'Mobile app', 'Portal'],
    }
  }

  if (includesAny(text, ['brand', 'logo', 'identity'])) {
    return {
      text:
        'Branding is one of our core strengths - logos, voice, visual systems, and guidelines so your brand looks premium everywhere.\n\n' +
        'Typical branding work runs about 4–6 weeks. Want pricing ranges or to book a free consult?',
      quickReplies: ['Pricing', 'Book a consult', 'Other services'],
    }
  }

  if (includesAny(text, ['website', 'web design', 'web site', 'landing'])) {
    return {
      text:
        'For websites we engineer for speed, trust, and conversion - not template filler.\n\n' +
        'Starter from ~$1,000 (3–4 weeks)\n' +
        'Professional from ~$2,000 (5–7 weeks)\n' +
        'Enterprise - custom scope\n\n' +
        'Want me to open the pricing page path or help you choose a tier?',
      quickReplies: ['Starter details', 'Professional details', 'Book a consult'],
    }
  }

  if (includesAny(text, ['ecom', 'e-com', 'shop', 'store', 'shopify', 'commerce'])) {
    return {
      text:
        'Our e-commerce builds focus on checkout flow, catalog UX, and conversion lift - Shopify, headless, or custom.\n\n' +
        'Share your product count and whether you need Shopify or custom, and I can suggest a starting path.',
      quickReplies: ['Pricing', 'Book a consult', 'Our services'],
    }
  }

  if (includesAny(text, ['app', 'mobile', 'ios', 'android', 'flutter', 'react native'])) {
    return {
      text:
        'We build native and cross-platform mobile apps (React Native / Flutter) with clean UX and solid backends.\n\n' +
        'A typical MVP takes about 3–4 months; more complex products 6–12 months. Want a free consult to scope yours?',
      quickReplies: ['Book a consult', 'Pricing', 'Our services'],
    }
  }

  if (includesAny(text, ['portal', 'dashboard', 'admin', 'saas'])) {
    return {
      text:
        'Web portals are for secure ops - roles, workflows, dashboards, and data platforms your team can run the business on.\n\n' +
        'These are usually custom-scoped. A short discovery call is the fastest way to get a clear estimate.',
      quickReplies: ['Book a consult', 'Our services', 'Pricing'],
    }
  }

  if (includesAny(text, ['price', 'pricing', 'cost', 'budget', 'kitna', 'charge', 'rate', 'package'])) {
    return {
      text:
        'Transparent starting ranges:\n\n' +
        '• Website Starter - from $1,000\n' +
        '• Website Professional - from $2,000\n' +
        '• Enterprise / apps / portals - custom quote\n\n' +
        'Combo packages are also available if you need brand + web together. Tell me your budget range and goal - I can recommend a fit.',
      quickReplies: ['Website', 'Combo packages', 'Book a consult'],
    }
  }

  if (includesAny(text, ['starter'])) {
    return {
      text:
        'Starter is ideal for early brands that still need to look premium:\n' +
        'Up to 5 pages · responsive · basic SEO · contact forms · ~3–4 weeks · from $1,000.\n\n' +
        'If you expect growth soon, Professional is usually the better long-term bet.',
      quickReplies: ['Professional details', 'Book a consult', 'Pricing'],
    }
  }

  if (includesAny(text, ['professional', 'pro '])) {
    return {
      text:
        'Professional is our growth default:\n' +
        'Up to 15 pages · advanced motion · CMS · advanced SEO · performance pass · ~5–7 weeks · from $2,000.\n\n' +
        'Most growing brands start here. Want to book a free strategy consult?',
      quickReplies: ['Book a consult', 'Starter details', 'Pricing'],
    }
  }

  if (includesAny(text, ['combo', 'package', 'bundle'])) {
    return {
      text:
        'Combo packages bundle brand + web (and more) so you launch as one system instead of piecing vendors together.\n\n' +
        'Visit /packages on the site, or tell me what you need bundled and I will outline a sensible starting combo.',
      quickReplies: ['Our services', 'Pricing', 'Book a consult'],
    }
  }

  if (includesAny(text, ['time', 'timeline', 'how long', 'duration', 'kitne din', 'week', 'month'])) {
    return {
      text:
        'Typical timelines:\n\n' +
        '• Branding - 4–6 weeks\n' +
        '• Website Starter - 3–4 weeks\n' +
        '• Website Professional - 5–7 weeks\n' +
        '• Mobile MVP - 3–4 months\n\n' +
        'Most projects kick off within 5–10 business days after discovery and proposal approval.',
      quickReplies: ['Pricing', 'Book a consult', 'Our services'],
    }
  }

  if (
    includesAny(text, [
      'call',
      'consult',
      'contact',
      'email',
      'phone',
      'book',
      'meeting',
      'strategist',
    ])
  ) {
    return {
      text:
        "I can connect you with a strategist two ways:\n\n" +
        '1) Tap “Talk to a human” for live chat with our team\n' +
        `2) Email ${BRAND.email} or call ${BRAND.phones.map((p) => p.display).join(' / ')}.\n` +
        `Hours: ${BRAND.hours}`,
      quickReplies: ['Talk to a human', 'Our services', 'Pricing'],
    }
  }

  if (includesAny(text, ['portfolio', 'work', 'example', 'case'])) {
    return {
      text:
        "We've delivered 120+ projects across 15+ industries with ~98% client retention.\n\n" +
        'Browse the Portfolio page for selected work, or tell me your industry and I can suggest what to look for.',
      quickReplies: ['Our services', 'Book a consult', 'Pricing'],
    }
  }

  if (includesAny(text, ['location', 'where', 'udaipur', 'office', 'remote'])) {
    return {
      text:
        'We work from our studio network with remote delivery worldwide. Wherever you are, we can collaborate asynchronously and on live calls.',
      quickReplies: ['Book a consult', 'Our services'],
    }
  }

  if (includesAny(text, ['thanks', 'thank', 'shukriya', 'ok', 'okay', 'cool', 'great'])) {
    return {
      text: "You're welcome! Whenever you're ready, I can help compare packages or get you to a free consult.",
      quickReplies: QUICK_REPLIES,
    }
  }

  // Light context from history for follow-ups
  const lastUser = [...history].reverse().find((m) => m.role === 'user')
  if (lastUser && includesAny(normalize(lastUser.text), ['price', 'pricing']) && text.length < 40) {
    return {
      text:
        'Got it. Based on what you shared, the best next step is a free consult so we can scope accurately - cookie-cutter quotes miss the mark on custom work.\n\n' +
        `Email ${BRAND.email}, call ${BRAND.phones.map((p) => p.display).join(' / ')}, or use the Contact form.`,
      quickReplies: ['Book a consult', 'Our services'],
    }
  }

  return {
    text:
      "I can help with NEUTRIX's services, pricing ranges, timelines, and how to book a free consult.\n\n" +
      'Try asking something like “What does a Professional website include?” or pick a quick reply below.',
    quickReplies: QUICK_REPLIES,
  }
}
