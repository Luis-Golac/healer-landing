import { ArrowRight } from 'lucide-react'

/**
 * Button — anchor styled as a button, with three variants used across the page.
 *  - primary: solid blue (default)
 *  - outline: bordered, transparent
 *  - white:   white fill (for use on the blue CTA band)
 *
 * Pass `withArrow` to append the trailing arrow icon, and `icon` to prepend one.
 */
export default function Button({
  href = '#',
  children,
  variant = 'primary',
  withArrow = false,
  icon: Icon,
  className = '',
  ...rest
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary/60'

  const variants = {
    primary:
      'bg-primary text-white shadow-sm shadow-primary/30 hover:bg-primary-dark hover:shadow-md hover:shadow-primary/30',
    outline:
      'border border-slate-300 bg-white text-dark hover:border-primary hover:text-primary',
    white:
      'bg-white text-primary shadow-sm hover:bg-blue-50 focus-visible:ring-white/70 focus-visible:ring-offset-primary',
  }

  return (
    <a
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...rest}
    >
      {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
      {children}
      {withArrow && (
        <ArrowRight
          className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-0.5"
          aria-hidden="true"
        />
      )}
    </a>
  )
}
