import useInView from '../../hooks/useInView'

export default function TextReveal({
  text,
  as: Tag = 'p',
  className = '',
  delay = 0,
  stagger = 40,
}) {
  const [ref, isInView] = useInView(0.25)
  const words = String(text)
    .trim()
    .split(/\s+/)
    .filter(Boolean)

  return (
    <Tag ref={ref} className={`text-reveal ${className}`.trim()} aria-label={text}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1
        return (
          <span key={`${word}-${i}`} className="text-reveal-word-wrap">
            <span
              className={`text-reveal-word ${isInView ? 'is-visible' : ''}`}
              style={{ transitionDelay: `${delay + i * stagger}ms` }}
            >
              {isLast ? word : `${word}\u00A0`}
            </span>
          </span>
        )
      })}
    </Tag>
  )
}
