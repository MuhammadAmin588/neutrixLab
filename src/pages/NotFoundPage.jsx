import { Link } from 'react-router-dom'
import { ROUTES } from '../constants/navigation'

export default function NotFoundPage() {
  return (
    <section className="px-margin-desktop py-xxl min-h-[62vh] flex items-center">
      <div className="max-w-[640px]">
        <p className="font-label-caps text-label-caps text-primary-container tracking-[0.18em] mb-md">
          404
        </p>
        <h1 className="font-display-lg text-[36px] md:text-[48px] text-on-surface mb-md leading-tight">
          This page is not on Neutrix Lab
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl max-w-[520px]">
          The link may be old or typed incorrectly. Head home, browse services, or send a project
          brief.
        </p>
        <div className="flex flex-col sm:flex-row gap-md">
          <Link
            to={ROUTES.home}
            className="text-center bg-primary-container text-on-primary-fixed font-headline-sm text-headline-sm px-xl py-md rounded"
          >
            Back home
          </Link>
          <Link
            to={ROUTES.contact}
            className="text-center border border-primary-container text-primary-container font-headline-sm text-headline-sm px-xl py-md rounded hover:bg-primary-container/10 transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </section>
  )
}
