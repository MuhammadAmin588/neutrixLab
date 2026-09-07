import useInView from '../../hooks/useInView'

export default function Reveal({
  children,
  className = '',
  delay = 0,
  variant = 'up',
}) {
  const [ref, isInView] = useInView()

  return (
    <div
      ref={ref}
      className={`reveal reveal-${variant} ${isInView ? 'is-visible' : ''} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
