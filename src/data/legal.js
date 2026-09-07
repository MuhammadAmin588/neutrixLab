import { BRAND } from '../constants/brand'

const UPDATED = '7 September 2026'
const PHONE_LINE = BRAND.phones.map((p) => `${p.display} (${p.region})`).join(' and ')

export const PRIVACY_DOC = {
  title: 'Privacy',
  updated: UPDATED,
  intro:
    'This notice explains what information we collect when you use the Neutrix Lab website, and why. It is a practical description of how this site works — not a claim that we run a certified privacy programme, and not legal advice.',
  sections: [
    {
      heading: 'Who we are',
      paragraphs: [
        `Neutrix Lab is a digital studio. For privacy questions, email ${BRAND.email} or call ${PHONE_LINE}. We work remotely and do not publish a public walk-in office address.`,
      ],
    },
    {
      heading: 'What we collect',
      paragraphs: [
        'If you submit the contact form, we receive the details you type: name, email, phone, company (if any), budget (if any), project type, and your message.',
        'If you use live chat, the chat provider may process the messages you send so we can reply. We do not ask you to send passwords, payment-card numbers, or government IDs in chat or the form.',
        'The site stores your theme choice (dark or light) in your browser. We do not use that to identify you.',
      ],
    },
    {
      heading: 'How we use it',
      paragraphs: [
        'We use enquiry and chat details to reply, quote, and — if you hire us — to deliver the work. We do not sell your information, and we do not use contact-form data for unrelated advertising lists.',
      ],
    },
    {
      heading: 'Who else sees it',
      paragraphs: [
        'Form messages are delivered through a form service (currently Web3Forms) to our inbox. Live chat, if enabled, is provided by Tawk.to. Hosting and email providers may process data as needed to run those tools.',
        'We only share what is needed to operate the site and answer you. If a project later needs extra tools (for example a repo or project board), that would be agreed with you at the time — this page does not grant that in advance.',
      ],
    },
    {
      heading: 'Cookies and similar storage',
      paragraphs: [
        'We use local storage for the theme you pick. Tawk.to may set its own cookies if you open human chat. This site does not currently run a separate marketing-analytics pixel from us. Third-party scripts can change; if we add analytics later, we will update this page.',
      ],
    },
    {
      heading: 'How long we keep it',
      paragraphs: [
        'We keep enquiry records long enough to reply and, if we work together, to run the project and handle invoices. We do not promise a fixed deletion date on this page. If you want your enquiry removed, email us and we will delete what we reasonably control, unless we must keep a record for a live project, invoice, or legal duty.',
      ],
    },
    {
      heading: 'Your requests',
      paragraphs: [
        'You can ask what enquiry data we hold, ask us to correct it, or ask us to delete it. We will handle reasonable requests sent to the email or numbers above. Response times depend on the request — we do not guarantee a same-day legal SLA.',
      ],
    },
    {
      heading: 'Children',
      paragraphs: [
        'This website is aimed at businesses and adult clients. Do not send us personal information about children through the form or chat.',
      ],
    },
    {
      heading: 'Changes',
      paragraphs: [
        `We may update this notice when the site or our tools change. The date at the top (${UPDATED}) is the last revision. Continued use of the site after a change means the updated notice applies to new visits.`,
      ],
    },
  ],
}

export const TERMS_DOC = {
  title: 'Terms of use',
  updated: UPDATED,
  intro:
    'These terms cover use of the Neutrix Lab website. They are not a project contract, a service-level agreement, or a guarantee of results. Paid work is governed by the written proposal, scope, and invoices you accept.',
  sections: [
    {
      heading: 'The website',
      paragraphs: [
        'Content on this site is for information. We try to keep it accurate, but pages, prices, timelines, and case studies can change and may contain mistakes. Starting ranges are not a binding offer.',
      ],
    },
    {
      heading: 'Contact and chat',
      paragraphs: [
        'Sending a form or chat message is a request for information, not a contract. We aim to reply on business days during posted hours, but we do not guarantee a response time on this page.',
      ],
    },
    {
      heading: 'Project work',
      paragraphs: [
        'A project starts only after both sides agree a written scope and commercial terms. Until then, nothing on the website commits us to a price, deadline, feature list, or ongoing retainer.',
        'Deliverables, payment schedule, revision rounds, and third-party licences (fonts, stock, plugins, app-store accounts) are whatever that proposal says. If something is not in the scope, it is not included.',
      ],
    },
    {
      heading: 'Intellectual property',
      paragraphs: [
        'You keep rights in materials you supply (brand assets, copy, data). We keep rights in our pre-existing tools, components, and methods. Rights in original work we create for you are set in the proposal — typically after relevant invoices are paid. This page does not transfer IP on its own.',
      ],
    },
    {
      heading: 'No outcome promises',
      paragraphs: [
        'We do not guarantee rankings, conversion lift, app-store approval, uptime of third-party platforms, or a specific revenue number. Past client results are examples, not a forecast for your project.',
      ],
    },
    {
      heading: 'Acceptable use',
      paragraphs: [
        'Do not misuse the site: no scraping at a volume that harms the service, no injecting malware, and no submitting false or abusive content. We may block access if we reasonably believe the site is being abused.',
      ],
    },
    {
      heading: 'Liability',
      paragraphs: [
        'The website is provided as-is. To the extent allowed by law, Neutrix Lab is not liable for indirect or consequential loss arising from use of the website.',
        'For paid project work, any liability is limited to the fees you actually paid us for that engagement, except where the law does not allow a limit (for example fraud). Project contracts can set different terms; those terms win if they conflict with this page.',
      ],
    },
    {
      heading: 'Contact',
      paragraphs: [
        `Questions about these terms: ${BRAND.email}, ${PHONE_LINE}.`,
      ],
    },
    {
      heading: 'Changes',
      paragraphs: [
        `We may revise these terms when the site changes. Last updated ${UPDATED}.`,
      ],
    },
  ],
}
