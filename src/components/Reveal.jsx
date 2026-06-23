import { useEffect, useRef, useState } from 'react'

/**
 * Reveal — wraps children and fades/slides them in the first time they enter
 * the viewport, using IntersectionObserver (no animation library needed).
 *
 * Props:
 *  - as:        element/component to render (default "div")
 *  - delay:     ms to wait before animating (used for staggered groups)
 *  - className: forwarded classes
 *  - y:         initial vertical offset in px (default 28)
 *  - once:      animate only the first time it becomes visible (default true)
 */
export default function Reveal({
  as: Tag = 'div',
  children,
  delay = 0,
  y = 28,
  once = true,
  className = '',
  ...rest
}) {
  const ref = useRef(null)
  // Seed visibility from the reduced-motion preference so we never call
  // setState synchronously inside the effect (and content shows instantly
  // for users who opt out of motion).
  const [visible, setVisible] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    const node = ref.current
    if (!node) return

    // Reduced motion: already visible from the initial state — skip observing.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (once) observer.unobserve(entry.target)
        } else if (!once) {
          setVisible(false)
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [once])

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : `translateY(${y}px)`,
        transition:
          'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)',
        transitionDelay: `${delay}ms`,
        willChange: 'opacity, transform',
      }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
