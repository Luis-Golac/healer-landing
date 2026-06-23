import {
  ShieldCheck,
  Users,
  Network,
  Lock,
  Server,
  Scale,
} from 'lucide-react'
import Container from './Container'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

const ITEMS = [
  { icon: Users, label: 'Roles y permisos' },
  { icon: Network, label: 'Trazabilidad' },
  { icon: Lock, label: 'Protección de datos' },
  { icon: Server, label: 'Arquitectura multiusuario' },
  { icon: Scale, label: 'Centro legal integrado' },
]

export default function Security() {
  return (
    <section className="bg-bg-light py-20 sm:py-24">
      <Container>
        <SectionHeading
          title="Seguridad y cumplimiento en cada proceso"
          highlight="cada proceso"
        />

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">
          {/* List */}
          <Reveal>
            <ul className="space-y-4">
              {ITEMS.map((item) => {
                const Icon = item.icon
                return (
                  <li
                    key={item.label}
                    className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:border-primary/30 hover:shadow-md hover:shadow-primary/5"
                  >
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-bg-light text-primary">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="text-base font-semibold text-dark">
                      {item.label}
                    </span>
                  </li>
                )
              })}
            </ul>
          </Reveal>

          {/* Shield visual */}
          <Reveal delay={140} className="order-first lg:order-last">
            <div className="relative mx-auto flex aspect-square w-full max-w-sm items-center justify-center">
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-full bg-primary/10 blur-2xl"
              />
              <div className="relative flex h-48 w-48 items-center justify-center rounded-[2rem] bg-gradient-to-br from-primary to-primary-dark shadow-xl shadow-primary/30 sm:h-56 sm:w-56">
                <ShieldCheck
                  className="h-24 w-24 text-white sm:h-28 sm:w-28"
                  aria-hidden="true"
                  strokeWidth={1.5}
                />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
