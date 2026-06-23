import {
  ClipboardList,
  Dumbbell,
  Wifi,
  BarChart3,
  MessageCircle,
  Brain,
} from 'lucide-react'
import Container from './Container'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

const FEATURES = [
  {
    icon: ClipboardList,
    title: 'Gestión clínica',
    description:
      'Centraliza la información clínica de tus pacientes en un solo lugar.',
  },
  {
    icon: Dumbbell,
    title: 'Programas de rehabilitación',
    description:
      'Diseña y asigna ejercicios personalizados basados en evidencia.',
  },
  {
    icon: Wifi,
    title: 'Telemonitoreo',
    description:
      'Realiza seguimiento remoto del dolor y del rango de movimiento mediante IA.',
  },
  {
    icon: BarChart3,
    title: 'Reportes clínicos',
    description:
      'Visualiza resultados y evolución para una mejor toma de decisiones.',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp integrado',
    description: 'Extiende el cuidado más allá del consultorio.',
  },
  {
    icon: Brain,
    title: 'Inteligencia artificial',
    description: 'Acompaña, educa y potencia la adherencia terapéutica.',
  },
]

export default function Features() {
  return (
    <section id="plataforma" className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <SectionHeading
          title="Todo lo que necesitas en una sola plataforma"
          highlight="una sola plataforma"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon
            return (
              <Reveal key={feature.title} delay={(i % 3) * 100}>
                <article className="group h-full rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
                  <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-bg-light text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-bold text-dark">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {feature.description}
                  </p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
