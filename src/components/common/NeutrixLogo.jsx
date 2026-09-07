import { Link } from 'react-router-dom'
import { ROUTES } from '../../constants/navigation'
import { BRAND } from '../../constants/brand'
import neutrixMark from '../../assets/neutrix-mark.png'
import neutrixLockup from '../../assets/neutrix-lockup.png'

/**
 * Brand logo.
 * - variant="mark" (navbar): transparent N + Neutrix Lab wordmark
 * - variant="lockup" (footer / hero): full circular badge, no extra text
 */
export default function NeutrixLogo({
  to = ROUTES.home,
  className = '',
  markClassName,
  showWordmark,
  variant = 'mark',
  as = 'link',
}) {
  const isLockup = variant === 'lockup'
  const imgClass = markClassName || (isLockup ? 'w-[92px] h-[92px]' : 'w-10 h-10 md:w-11 md:h-11')
  const withWordmark = showWordmark ?? !isLockup

  const content = (
    <>
      <span className="relative shrink-0 inline-flex items-center justify-center">
        <img
          src={isLockup ? neutrixLockup : neutrixMark}
          alt=""
          className={`${imgClass} object-contain ${isLockup ? 'drop-shadow-lg' : ''}`}
          aria-hidden="true"
        />
      </span>
      {withWordmark && (
        <span className="leading-none tracking-tight">
          <span className="font-semibold">Neutrix</span>
          <span className="font-light opacity-90"> Lab</span>
        </span>
      )}
    </>
  )

  const wrapClass = `inline-flex items-center ${isLockup ? '' : 'gap-sm'} ${className}`.trim()

  if (as === 'div') {
    return (
      <div className={wrapClass} aria-label={BRAND.name}>
        {content}
      </div>
    )
  }

  return (
    <Link to={to} className={wrapClass} aria-label={BRAND.name}>
      {content}
    </Link>
  )
}
