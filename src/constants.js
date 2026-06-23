// Centralized config — swap these for the real values before going live.

// WhatsApp "click to chat" link used by every "Hablar con nuestro equipo" CTA
// and by the floating WhatsApp button. Replace the number with the real one.
export const WHATSAPP_NUMBER = '51999999999' // formato internacional, sin "+"
export const WHATSAPP_MESSAGE =
  'Hola, me gustaría conocer más sobre la plataforma HEALER TRACE.'
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`

export const CONTACT_EMAIL = 'contact@healertrace.com'

// Destinos de las apps (placeholder — reemplazar por las URLs reales)
export const APP_URL = '#'
export const APP_CLASSIC_URL = '#'

export const SOCIAL_LINKS = {
  linkedin: '#',
  instagram: '#',
}

// Enlaces de navegación interna del navbar
export const NAV_LINKS = [
  // { label: 'Plataforma', href: '#plataforma' },
  // { label: 'Casos de uso', href: '#casos-de-uso' },
  // { label: 'Respaldo', href: '#respaldo' },
  // { label: 'Contacto', href: '#contacto' },
]
