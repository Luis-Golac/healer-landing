import {
  MonitorSmartphone,
  Building2,
  Hospital,
  Activity,
  HardHat,
} from 'lucide-react'
import Container from './Container'
import Reveal from './Reveal'

const USE_CASES = [
  { icon: Building2, label: 'Clínicas' },
  { icon: Hospital, label: 'Hospitales' },
  { icon: Activity, label: 'Centros de terapia física' },
  { icon: HardHat, label: 'Salud ocupacional' },
]

export default function UseCases() {
  return (
    <section id="casos-de-uso" className="scroll-mt-24 py-12 sm:py-16">
      <Container className="grid items-stretch gap-6 lg:grid-cols-2">
        {/* Left — descriptive block */}
        <Reveal className="h-full">
          <div className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-8 sm:p-10">
            <span className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-bg-light text-primary">
              <MonitorSmartphone className="h-7 w-7" aria-hidden="true" />
            </span>
            <h2 className="text-2xl font-extrabold leading-snug text-dark">
              Gestión digital para rehabilitación musculoesquelética
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              HEALER TRACE es una plataforma diseñada para clínicas, hospitales,
              centros de terapia física y profesionales de la salud que buscan
              gestionar programas terapéuticos, realizar telemonitoreo y dar
              seguimiento a pacientes con desórdenes musculoesqueléticos.
            </p>
          </div>
        </Reveal>

        {/* Right — use cases */}
        <Reveal delay={120} className="h-full">
          <div className="flex h-full flex-col rounded-3xl border border-slate-200 bg-bg-light p-8 sm:p-10">
            <h2 className="text-2xl font-extrabold text-dark">Casos de uso</h2>
            <div className="mt-8 grid flex-1 grid-cols-2 gap-4">
              {USE_CASES.map((useCase) => {
                const Icon = useCase.icon
                return (
                  <div
                    key={useCase.label}
                    className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                  >
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-bg-light text-primary">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <span className="text-sm font-semibold text-dark">
                      {useCase.label}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
