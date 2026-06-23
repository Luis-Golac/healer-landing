# HEALER TRACE — Landing page

Landing page de **HEALER TRACE**, la plataforma digital de salud musculoesquelética
para organizaciones, profesionales y pacientes.

## Stack

- **React 19** + **Vite**
- **Tailwind CSS v4** (vía `@tailwindcss/vite`, tokens en [`src/index.css`](src/index.css))
- **Lucide React** para iconografía
- JavaScript (sin TypeScript) · SPA estática · mobile-first / responsive
- Animaciones de scroll con **IntersectionObserver** (componente
  [`Reveal`](src/components/Reveal.jsx)) — sin dependencias de animación

## Scripts

```bash
npm install      # instalar dependencias
npm run dev      # servidor de desarrollo (http://localhost:5173)
npm run build    # build de producción → dist/
npm run preview  # previsualizar el build
npm run lint     # ESLint
```

## Estructura

```
src/
├── App.jsx                 # composición de todas las secciones
├── constants.js            # WhatsApp, contacto, URLs y nav (reemplazar valores reales)
├── index.css               # @theme de Tailwind v4 (paleta, fuentes, animaciones)
└── components/
    ├── Navbar.jsx          # sticky + blur + menú móvil
    ├── Hero.jsx            # título, CTA, wireframe + tarjetas de métricas articulares
    ├── Features.jsx        # grid de 6 features
    ├── UseCases.jsx        # descripción + casos de uso
    ├── SocialProof.jsx     # logos de respaldo
    ├── ExperienceSelector.jsx  # HEALER TRACE vs. Classic
    ├── Ecosystem.jsx       # administrador / profesional / paciente
    ├── FutureProducts.jsx  # Care + Guide
    ├── Security.jsx        # seguridad y cumplimiento
    ├── FinalCTA.jsx        # banda azul de cierre
    ├── Footer.jsx          # contacto + redes
    ├── WhatsAppButton.jsx  # botón flotante fijo
    └── (primitivos) Logo, Reveal, Container, Button, SectionHeading, ImagePlaceholder
```

## Paleta

| Token | Valor |
|---|---|
| `--color-primary` | `#0F6FFF` |
| `--color-dark` | `#111111` |
| `--color-muted` | `#6B7280` |
| `--color-bg-light` | `#F3F7FE` |

## Antes de publicar

Todas las imágenes son **placeholders**. Consulta
[`ASSETS_NEEDED.md`](ASSETS_NEEDED.md) para la lista de assets a reemplazar y los
valores de configuración en [`src/constants.js`](src/constants.js) (número de WhatsApp,
URLs de las apps, redes sociales).
