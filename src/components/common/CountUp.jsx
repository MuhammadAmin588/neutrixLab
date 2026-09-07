import { useEffect, useRef, useState } from 'react'
import useInView from '../../hooks/useInView'

export default function CountUp({ end, suffix = '', duration = 1600, className = '' }) {
  const [ref, isInView] = useInView(0.4)
  const [value, setValue] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    if (!isInView || started.current) return undefined
    started.current = true
    const start = performance.now()
    let frame

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - (1 - progress) ** 3
      setValue(Math.round(end * eased))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [isInView, end, duration])

  return (
    <span ref={ref} className={className}>
      {value}
      {suffix}
    </span>
  )
}
