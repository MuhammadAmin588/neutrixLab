import { useCallback, useEffect, useState } from 'react'
import Icon from './Icon'

function Stars({ count = 5 }) {
  return (
    <div className="flex items-center gap-xs text-primary-container" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Icon key={i} name="star" fill className="text-[18px]" />
      ))}
    </div>
  )
}

export default function ReviewSlider({ reviews, autoPlay = true, interval = 5500 }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const total = reviews.length
  const current = reviews[index] || reviews[0]

  const goTo = useCallback(
    (next) => {
      if (!total) return
      setIndex(((next % total) + total) % total)
    },
    [total],
  )

  const next = useCallback(() => goTo(index + 1), [goTo, index])
  const prev = useCallback(() => goTo(index - 1), [goTo, index])

  useEffect(() => {
    if (!autoPlay || paused || total <= 1) return undefined
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % total)
    }, interval)
    return () => window.clearInterval(id)
  }, [autoPlay, paused, interval, total])

  if (!current) return null

  return (
    <div
      className="review-slider relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="glass-card rounded-xl overflow-hidden border border-primary-container/20 relative">
        <div className="absolute -top-16 -right-10 w-72 h-72 bg-primary-container/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-10 w-64 h-64 bg-secondary-container/15 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] min-h-[420px]">
          <div key={current.id} className="review-slide-panel p-xl md:p-xxl flex flex-col justify-center relative z-10">
            <div className="flex items-center justify-between gap-md mb-lg">
              <Stars count={current.rating} />
              <span className="font-label-caps text-label-caps text-primary-container px-md py-xs rounded-full border border-primary-container/30 bg-primary-container/10">
                {current.result}
              </span>
            </div>
            <Icon name="format_quote" className="text-primary-container text-[44px] mb-md opacity-80" />
            <p className="font-display-lg text-[26px] md:text-[34px] leading-tight text-on-surface mb-xl">
              &ldquo;{current.quote}&rdquo;
            </p>
            <div className="flex items-center gap-md">
              <img
                src={current.image}
                alt={current.name}
                className="w-12 h-16 object-contain bg-[#05050a] border border-primary-container/40"
              />
              <div>
                <p className="font-headline-sm text-on-surface">{current.name}</p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">{current.role}</p>
              </div>
            </div>
          </div>

          <div className="review-photo-well relative min-h-[280px] lg:min-h-full overflow-hidden bg-[#05050a]">
            <img
              key={`img-${current.id}`}
              src={current.image}
              alt={current.name}
              className="review-slide-image absolute inset-0 w-full h-full object-contain object-center"
            />
            <div className="review-slide-veil absolute inset-0 pointer-events-none" />
            <div className="absolute bottom-lg left-lg right-lg glass-card rounded-lg p-md border border-primary-container/25">
              <p className="font-label-caps text-label-caps text-primary-container mb-xs">
                REVIEW {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
              </p>
              <p className="font-body-sm text-body-sm text-on-surface">
                Verified client feedback from real NEUTRIX engagements.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-md mt-lg">
        <div className="flex items-center gap-sm">
          <button
            type="button"
            aria-label="Previous review"
            onClick={prev}
            className="w-11 h-11 rounded-full glass-card border border-outline-variant/40 text-on-surface hover:border-primary-container hover:text-primary-container transition-all flex items-center justify-center"
          >
            <Icon name="arrow_back" className="text-[22px]" />
          </button>
          <button
            type="button"
            aria-label="Next review"
            onClick={next}
            className="w-11 h-11 rounded-full bg-primary-container text-on-primary-fixed cyber-glow hover:scale-105 transition-transform flex items-center justify-center"
          >
            <Icon name="arrow_forward" className="text-[22px]" />
          </button>
        </div>

        <div className="flex items-center gap-sm" role="tablist" aria-label="Review slides">
          {reviews.map((review, i) => (
            <button
              key={review.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Go to review ${i + 1}`}
              onClick={() => goTo(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === index
                  ? 'w-8 bg-primary-container shadow-[0_0_16px_rgba(139,107,255,0.45)]'
                  : 'w-2.5 bg-outline-variant/50 hover:bg-primary-container/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
