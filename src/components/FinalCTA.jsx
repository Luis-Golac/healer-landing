import { HeartHandshake, MessageCircle } from 'lucide-react'
import Container from './Container'
import Reveal from './Reveal'
import Button from './Button'
import { WHATSAPP_URL } from '../constants'

export default function FinalCTA() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-primary px-7 py-12 sm:px-12 sm:py-14">
            {/* decorative glows */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-16 -right-10 h-64 w-64 rounded-full bg-white/10 blur-2xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-white/10 blur-2xl"
            />

            <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <span className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white">
                  <HeartHandshake className="h-7 w-7" aria-hidden="true" />
                </span>
                <h2 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                  Extiende el cuidado más allá del consultorio
                </h2>
                <p className="mt-4 text-base leading-relaxed text-white/85">
                  HEALER TRACE permite a organizaciones y profesionales de la
                  salud gestionar programas terapéuticos, monitorear la
                  evolución de sus pacientes y mejorar la continuidad del cuidado
                  musculoesquelético.
                </p>
              </div>

              <div className="shrink-0">
                <Button
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="white"
                  icon={MessageCircle}
                  withArrow
                  className="group/btn px-6 py-3.5 text-base"
                >
                  Hablar con nuestro equipo
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
