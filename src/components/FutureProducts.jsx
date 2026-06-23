import { MessageCircle, Brain, Check } from 'lucide-react'
import Container from './Container'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

const PRODUCTS = [
  {
    icon: MessageCircle,
    accent: 'green',
    name: 'HEALER TRACE Care',
    description:
      'Convierte WhatsApp en el principal canal de interacción entre paciente y profesional.',
    items: [
      'Recordatorios',
      'Seguimiento continuo',
      'Registro simplificado',
      'Mayor adherencia',
    ],
  },
  {
    icon: Brain,
    accent: 'blue',
    name: 'HEALER TRACE Guide',
    description: 'Orientación musculoesquelética impulsada por IA.',
    items: [
      'Educación preventiva',
      'Programas personalizados',
      'Orientación inicial',
    ],
  },
]

const ACCENTS = {
  green: {
    iconWrap: 'bg-green-100 text-green-600',
    check: 'bg-green-100 text-green-600',
  },
  blue: {
    iconWrap: 'bg-primary/10 text-primary',
    check: 'bg-primary/10 text-primary',
  },
}

function ProductCard({ product }) {
  const Icon = product.icon
  const accent = ACCENTS[product.accent]
  return (
    <article className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5">
      <div className="flex items-center gap-4">
        <span
          className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${accent.iconWrap}`}
        >
          <Icon className="h-6 w-6" aria-hidden="true" />
        </span>
        <div>
          <h3 className="text-lg font-extrabold text-dark">{product.name}</h3>
          <span className="mt-1 inline-flex items-center rounded-full bg-bg-light px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-primary">
            Próximamente
          </span>
        </div>
      </div>

      <p className="mt-5 text-sm leading-relaxed text-muted">
        {product.description}
      </p>

      <ul className="mt-6 space-y-3">
        {product.items.map((item) => (
          <li key={item} className="flex items-center gap-3">
            <span
              className={`inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${accent.check}`}
            >
              <Check className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
            <span className="text-sm text-dark">{item}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}

export default function FutureProducts() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          title="El futuro del cuidado musculoesquelético"
          highlight="cuidado musculoesquelético"
        />

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-2">
          {PRODUCTS.map((product, i) => (
            <Reveal key={product.name} delay={i * 120} className="h-full">
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
