import { MessageCircle, Bone, Spline, CircleDot, Activity, Footprints } from 'lucide-react'
import Container from './Container'
import Button from './Button'
import Reveal from './Reveal'
import ImagePlaceholder from './ImagePlaceholder'
import { WHATSAPP_URL } from '../constants'
import heroWireframeRunner from "../assets/hero-wireframe-runner.png";

const METRICS = [
]

function MetricCard({ metric, className = '' }) {
  const { joint, movement, value, icon: Icon } = metric
  return (
    <div
      className={`flex items-center gap-3 rounded-2xl border border-slate-100 bg-white/95 px-4 py-3 shadow-lg shadow-slate-900/5 backdrop-blur ${className}`}
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-bg-light text-primary">
        <Icon className="h-4 w-4" aria-hidden="true" />
      </span>
      <div className="leading-tight">
        <p className="text-[0.6rem] font-bold uppercase tracking-wider text-dark">
          {joint}
        </p>
        <p className="text-[0.7rem] text-muted">{movement}</p>
      </div>
      <span className="ml-2 text-lg font-extrabold text-primary">{value}</span>
    </div>
  )
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-bg-light/60 to-white pt-28 pb-16 sm:pt-32 lg:pb-24"
    >
      {/* soft decorative blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
      />

      <Container className="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
        {/* Left — copy */}
        <div className="max-w-xl">
          <Reveal>
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-bg-light px-3.5 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-primary">
              Plataforma digital de salud musculoesquelética
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-dark sm:text-5xl">
              La plataforma de rehabilitación musculoesquelética para{' '}
              <span className="text-primary">
                organizaciones, profesionales y pacientes.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
              Gestión clínica, programas de rehabilitación, telemonitoreo,
              WhatsApp e inteligencia artificial en una sola plataforma.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8">
              <Button
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                icon={MessageCircle}
                withArrow
                className="group/btn px-6 py-3.5 text-base"
              >
                Hablar con nuestro equipo
              </Button>
            </div>
          </Reveal>
        </div>

        {/* Right — wireframe visual + floating metric cards */}
        <div className="relative">
          <Reveal delay={120}>
            <img
              src={heroWireframeRunner}
              alt="Figura humana wireframe corriendo con puntos articulares"
              className="mx-auto aspect-[3/4] w-full max-w-sm lg:max-w-md object-contain"
              loading="eager"
            />
          </Reveal>

          {/* Desktop: absolutely-positioned floating cards (staggered reveal) */}
          <div className="pointer-events-none absolute inset-0 hidden lg:block">
            {METRICS.map((metric, i) => (
              <Reveal
                key={metric.joint}
                delay={400 + i * 130}
                y={16}
                className={`pointer-events-auto absolute ${metric.pos}`}
              >
                <div
                  className="animate-float"
                  style={{ animationDelay: `${i * 0.6}s` }}
                >
                  <MetricCard metric={metric} className="w-52" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Mobile / tablet: metric cards laid out in a grid below the visual */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:hidden">
          {METRICS.map((metric, i) => (
            <Reveal key={metric.joint} delay={i * 90} y={16}>
              <MetricCard metric={metric} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
