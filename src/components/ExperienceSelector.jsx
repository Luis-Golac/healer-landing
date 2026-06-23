import { Check, ArrowRight } from 'lucide-react'
import Container from './Container'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import ImagePlaceholder from './ImagePlaceholder'
import { APP_URL, APP_CLASSIC_URL } from '../constants'
import mockupHealerTraceClassic from "../assets/mockup-healer-trace-classic.png";
import mockupHealerTrace from "../assets/mockup-healer-trace-dashboard.png";


const EXPERIENCES = [
  {
    name: 'HEALER TRACE',
    tagline: 'La nueva generación de la plataforma.',
    mockup: mockupHealerTrace,
    features: [
      'Interfaz renovada',
      'Telemonitoreo avanzado',
      'Reportes inteligentes',
      'WhatsApp integrado (Próximamente)',
      'IA aplicada a rehabilitación',
    ],
    cta: 'Ingresar a HEALER TRACE',
    href: APP_URL,
    variant: 'primary',
  },
  {
    name: 'HEALER TRACE Classic',
    tagline: 'La primera generación de la plataforma.',
    mockup: mockupHealerTraceClassic,
    features: [
      'Acceso para usuarios actuales',
      'Compatibilidad con implementaciones previas',
      'Continuidad operativa',
    ],
    cta: 'Ingresar a HEALER TRACE Classic',
    href: APP_CLASSIC_URL,
    variant: 'outline',
  },
]

function ExperienceCard({ experience }) {
  const isPrimary = experience.variant === 'primary'
  return (
    <article
      className={`flex h-full flex-col overflow-hidden rounded-3xl border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
        isPrimary
          ? 'border-primary/40 shadow-lg shadow-primary/10'
          : 'border-slate-200 shadow-sm'
      }`}
    >
<div className="aspect-[16/9] overflow-hidden border-b border-slate-200 bg-slate-50">
  <img
    src={experience.mockup}
    alt={`Mockup de ${experience.name}`}
    className="h-full w-full object-cover"
    loading="lazy"
  />
</div>

      <div className="flex flex-1 flex-col p-7 sm:p-8">
        <h3 className="text-xl font-extrabold text-dark">{experience.name}</h3>
        <p className="mt-1 text-sm text-muted">{experience.tagline}</p>

        <ul className="mt-6 space-y-3">
          {experience.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                <Check className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              <span className="text-sm text-dark">{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex-1" />

        <a
          href={experience.href}
          className={`group/btn inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-200 ${
            isPrimary
              ? 'bg-primary text-white hover:bg-primary-dark'
              : 'border border-primary/40 bg-white text-primary hover:bg-bg-light'
          }`}
        >
          {experience.cta}
          <ArrowRight
            className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-0.5"
            aria-hidden="true"
          />
        </a>
      </div>
    </article>
  )
}

export default function ExperienceSelector() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          title="Elige tu experiencia HEALER TRACE"
          highlight="HEALER TRACE"
        />

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-2">
          {EXPERIENCES.map((experience, i) => (
            <Reveal key={experience.name} delay={i * 120} className="h-full">
              <ExperienceCard experience={experience} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
