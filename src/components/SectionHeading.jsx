import Reveal from './Reveal'

/**
 * SectionHeading — eyebrow + title (with an optional primary-colored highlight)
 * + optional supporting copy. Centered by default.
 *
 * Render the highlighted fragment by splitting the title around `highlight`:
 *   <SectionHeading title="Todo lo que necesitas en una sola plataforma"
 *                   highlight="una sola plataforma" />
 */
export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = 'center',
  className = '',
}) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left'

  let titleNode = title
  if (highlight && title.includes(highlight)) {
    const [before, after] = title.split(highlight)
    titleNode = (
      <>
        {before}
        <span className="text-primary">{highlight}</span>
        {after}
      </>
    )
  }

  return (
    <Reveal className={`max-w-2xl ${alignment} ${className}`}>
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-extrabold leading-tight text-dark sm:text-3xl md:text-[2rem]">
        {titleNode}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted">
          {description}
        </p>
      )}
    </Reveal>
  )
}
