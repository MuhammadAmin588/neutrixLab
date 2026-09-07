const LOGO_PATHS = {
  nexus: (
    <>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
  aura: (
    <>
      <path
        d="M4 16c2-6 4-10 8-10s6 4 8 10"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="12" cy="8" r="2" fill="currentColor" />
    </>
  ),
  vanguard: (
    <>
      <path d="M5 18L12 4l7 14" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinejoin="round" />
      <path d="M8.5 14h7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </>
  ),
  omniflow: (
    <>
      <rect x="4" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <rect x="13" y="13" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M11 7.5h2.5A3.5 3.5 0 0 1 17 11v2" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </>
  ),
  vitality: (
    <>
      <path
        d="M4 12h3l2-5 3 10 2-5h6"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  axiom: (
    <>
      <path d="M12 3l8 14H4L12 3z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
      <path d="M8.5 14h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
}

export default function BrandLogo({ id, name, src, invertOnDark, className = '' }) {
  if (src) {
    return (
      <div
        className={`brand-logo-mark ${invertOnDark ? 'invert-on-dark' : ''} ${className}`.trim()}
        aria-label={name}
      >
        <img src={src} alt={name} />
      </div>
    )
  }

  return (
    <div
      className={`brand-logo-type ${className}`.trim()}
      aria-label={name}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        {LOGO_PATHS[id]}
      </svg>
      <span className="font-display-lg">{name}</span>
    </div>
  )
}
