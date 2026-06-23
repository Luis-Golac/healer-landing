import { UserCog, Stethoscope, User } from 'lucide-react'
import Container from './Container'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

const ACTORS = [
  {
    icon: UserCog,
    title: 'Administrador',
    description:
      'Gestiona usuarios, organizaciones, permisos y configuraciones.',
  },
  {
    icon: Stethoscope,
    title: 'Profesional',
    description:
      'Diseña programas, monitorea pacientes y genera reportes clínicos.',
  },
  {
    icon: User,
    title: 'Paciente',
    description:
      'Accede a ejercicios, registra información y participa activamente en su recuperación.',
  },
]

export default function Ecosystem() {
  return (
    <section className="bg-bg-light py-20 sm:py-24">
      <Container>
        <SectionHeading
          title="Un ecosistema que conecta a todos los actores"
          highlight="todos los actores"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {ACTORS.map((actor, i) => {
            const Icon = actor.icon
            return (
              <Reveal key={actor.title} delay={i * 120}>
                <article className="flex h-full flex-col items-center rounded-3xl border border-slate-200 bg-white p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5">
                  <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-8 w-8" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-lg font-bold text-dark">
                    {actor.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {actor.description}
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
