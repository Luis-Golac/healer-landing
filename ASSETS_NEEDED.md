# ASSETS_NEEDED.md — HEALER TRACE Landing

Esta landing está construida con **placeholders** en todos los puntos donde irá una
imagen, logo o mockup real. Cada placeholder es un `<div>` con borde punteado y una
etiqueta que describe qué debe ir ahí (componente
[`ImagePlaceholder`](src/components/ImagePlaceholder.jsx)).

Este documento lista **todos los assets a reemplazar**, agrupados por categoría. Para
cada uno se indica: nombre de archivo sugerido, sección, dimensiones, formato,
descripción y de dónde obtenerlo.

> **Dónde colocarlos:** sube los archivos a [`public/`](public/) (p. ej.
> `public/assets/`) y referéncialos como `/assets/nombre.ext`, o impórtalos desde
> `src/assets/` si quieres que Vite los optimice y haga hashing en el build.

---

## 1. Imágenes hero

| Asset | Detalle |
|---|---|
| **Nombre sugerido** | `hero-wireframe-runner.png` (o `.webp`) |
| **Sección** | Hero — columna derecha ([`src/components/Hero.jsx`](src/components/Hero.jsx)) |
| **Reemplaza** | Placeholder `[Hero: Figura humana wireframe corriendo]` |
| **Dimensiones** | 900 × 1200 px (relación 3:4). Exportar a 2× (1800 × 2400) para pantallas retina |
| **Formato** | **WebP** preferido (con **PNG** de respaldo) — necesita transparencia |
| **Qué debe mostrar** | Figura humana masculina/neutra en vista lateral corriendo, renderizada como **malla wireframe azul** (`#0F6FFF`) sobre fondo transparente, con puntos articulares resaltados (hombro, columna, cadera, rodilla, tobillo) que conectan visualmente con las tarjetas de métricas. Estilo técnico/médico, líneas finas, glow sutil. |
| **Dónde obtenerla** | Render 3D custom (Blender / Cinema 4D) o ilustración a medida. Alternativas: bancos como [Freepik](https://www.freepik.com), [Adobe Stock](https://stock.adobe.com) (buscar "human body wireframe running"), o generación con IA + retoque. Idealmente **export desde Figma** si el equipo de diseño ya tiene el render. |

> **Nota:** Las 5 tarjetas de métricas articulares (Hombro 180°, Columna Lumbar 80°,
> Cadera 45°, Rodilla 135°, Tobillo 20°) **no requieren imágenes** — están construidas
> en HTML/CSS con íconos de Lucide. Solo se reemplaza la figura de fondo.

---

## 2. Mockups de producto

Ambos van en el **Selector de experiencia**
([`src/components/ExperienceSelector.jsx`](src/components/ExperienceSelector.jsx)).

### 2.1 Mockup HEALER TRACE (nueva generación)

| Campo | Valor |
|---|---|
| **Nombre sugerido** | `mockup-healer-trace-dashboard.png` |
| **Reemplaza** | `[Mockup: Dashboard HEALER TRACE en monitor]` |
| **Dimensiones** | 1280 × 720 px (16:9), 2× recomendado |
| **Formato** | **PNG** o **WebP** |
| **Qué debe mostrar** | Captura real del dashboard de la nueva plataforma (gráficas de evolución, paciente, rango de movimiento) montada dentro de un monitor de escritorio. |
| **Dónde obtenerla** | Screenshot real del producto + montaje en mockup (Figma, [shots.so](https://shots.so), [Mockuuups Studio](https://mockuuups.studio)). |

### 2.2 Mockup HEALER TRACE Classic

| Campo | Valor |
|---|---|
| **Nombre sugerido** | `mockup-healer-trace-classic.png` |
| **Reemplaza** | `[Mockup: HEALER TRACE Classic en laptop]` |
| **Dimensiones** | 1280 × 720 px (16:9), 2× recomendado |
| **Formato** | **PNG** o **WebP** |
| **Qué debe mostrar** | Captura de la plataforma de primera generación dentro de una laptop. |
| **Dónde obtenerla** | Screenshot real del producto Classic + montaje en mockup de laptop. |

---

## 3. Logos de terceros (social proof)

Sección **"Acompañado y reconocido por"**
([`src/components/SocialProof.jsx`](src/components/SocialProof.jsx)). Actualmente son
texto en escala de grises. Reemplazar por los logotipos oficiales.

| Logo | Nombre sugerido | Formato | Dimensiones aprox. | Fuente recomendada |
|---|---|---|---|---|
| UTEC | `logo-utec.svg` | **SVG** | alto ~40 px | Brand kit oficial UTEC / dpto. de marketing |
| UTEC Ventures | `logo-utec-ventures.svg` | **SVG** | alto ~40 px | UTEC Ventures (sitio oficial) |
| Google | `logo-google.svg` | **SVG** | alto ~40 px | [Google Partners brand guidelines](https://about.google/brand-resource-center/) |
| Cleveland Clinic | `logo-cleveland-clinic.svg` | **SVG** | alto ~40 px | Cleveland Clinic brand/press kit |
| ProInnóvate | `logo-proinnovate.svg` | **SVG** | alto ~40 px | ProInnóvate (Ministerio de la Producción, Perú) |

**Recomendaciones:**
- Usar **SVG** siempre que sea posible (nitidez perfecta + control de color para el
  efecto escala de grises / `grayscale`).
- Versión monocromática u oficial a color; el CSS aplica `grayscale` y lo revierte en
  hover.
- ⚠️ **Verificar derechos de uso de marca** antes de publicar cada logo de tercero.

---

## 4. Logo de marca HEALER TRACE

| Campo | Valor |
|---|---|
| **Nombre sugerido** | `logo-healer-trace.svg` + `logo-healer-trace-mark.svg` (solo el ícono hexagonal) |
| **Sección** | Navbar y Footer ([`src/components/Logo.jsx`](src/components/Logo.jsx)) |
| **Estado actual** | Placeholder SVG inline (hexágono azul con "H" + texto "HEALER TRACE") |
| **Formato** | **SVG** |
| **Dimensiones** | Vectorial; el ícono se usa a 34 × 34 px en el navbar |
| **Qué debe mostrar** | Logotipo oficial de la marca (isotipo + wordmark). Sustituir el SVG inline del componente por el archivo oficial. |
| **Dónde obtenerlo** | **Export desde Figma** del brand kit interno / equipo de diseño. |
| **Favicon** | Reemplazar [`public/favicon.svg`](public/favicon.svg) por el isotipo de la marca (32 × 32 px mínimo; añadir `favicon.ico` y `apple-touch-icon.png` 180 × 180 px para compatibilidad). |

---

## 5. Íconos custom (no resueltos con Lucide)

La gran mayoría de la iconografía está resuelta con **[Lucide React](https://lucide.dev)**
(features, casos de uso, ecosistema, seguridad, métricas articulares, etc.), por lo que
**no requieren assets**.

Excepciones inlinadas como SVG (no necesitan archivo, pero se documentan):

| Ícono | Ubicación | Motivo |
|---|---|---|
| **WhatsApp** (glifo oficial) | [`WhatsAppButton.jsx`](src/components/WhatsAppButton.jsx) y botones CTA | Lucide no incluye logos de marca; se usa el glifo oficial inline. |
| **LinkedIn** / **Instagram** | [`Footer.jsx`](src/components/Footer.jsx) | Lucide eliminó los íconos de marca; inlinados como SVG. |

> Si el equipo de diseño desea íconos articulares **anatómicos a medida** (en lugar de
> los genéricos de Lucide: `Bone`, `Spline`, `CircleDot`, `Activity`, `Footprints`),
> entregarlos como SVG de 24 × 24 px (`icon-hombro.svg`, `icon-cadera.svg`, etc.) y
> sustituir los imports en [`Hero.jsx`](src/components/Hero.jsx).

---

## Resumen rápido (checklist)

- [ ] `hero-wireframe-runner.webp` — figura wireframe corriendo (900 × 1200)
- [ ] `mockup-healer-trace-dashboard.png` — dashboard nueva plataforma (1280 × 720)
- [ ] `mockup-healer-trace-classic.png` — plataforma Classic (1280 × 720)
- [ ] `logo-utec.svg`
- [ ] `logo-utec-ventures.svg`
- [ ] `logo-google.svg`
- [ ] `logo-cleveland-clinic.svg`
- [ ] `logo-proinnovate.svg`
- [ ] `logo-healer-trace.svg` (+ favicon oficial)
- [ ] (Opcional) Íconos articulares anatómicos custom

## Datos de configuración a reemplazar (no son imágenes)

En [`src/constants.js`](src/constants.js):

- [ ] `WHATSAPP_NUMBER` — número real de WhatsApp Business (actualmente `51999999999`)
- [ ] `APP_URL` / `APP_CLASSIC_URL` — URLs reales de acceso a las plataformas
- [ ] `SOCIAL_LINKS.linkedin` / `SOCIAL_LINKS.instagram` — perfiles reales
- [ ] `CONTACT_EMAIL` — confirmar `contact@healertrace.com`
