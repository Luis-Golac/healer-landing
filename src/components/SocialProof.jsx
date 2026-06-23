import Container from './Container'
import Reveal from './Reveal'

// Third-party logos shown as text placeholders in grayscale.
// Replace each with the official logo SVG (see ASSETS_NEEDED.md).
const PARTNERS = [
  'UTEC',
  'UTEC Ventures',
  'Google',
  'Cleveland Clinic',
  'ProInnóvate',
]

export default function SocialProof() {
  return (
    <section id="respaldo" className="scroll-mt-24 bg-bg-light py-16">
      <Container>
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted">
            Acompañado y reconocido por
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-8 sm:gap-x-14">
            {PARTNERS.map((partner) => (
              <div
                key={partner}
                title={`Logo ${partner}`}
                className="flex h-10 items-center rounded-md border border-dashed border-slate-300 px-4 text-base font-bold uppercase tracking-wide text-slate-400 grayscale transition-all duration-300 hover:text-slate-600 hover:grayscale-0"
              >
                {partner}
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
