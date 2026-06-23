import { useEffect, useState } from 'react'
import { Menu, X, MessageCircle } from 'lucide-react'
import Container from './Container'
import Logo from './Logo'
import Button from './Button'
import { NAV_LINKS, WHATSAPP_URL } from '../constants'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-slate-200/70 bg-white/80 backdrop-blur-md'
          : 'border-b border-transparent bg-white/0'
      }`}
    >
      <Container className="flex h-[4.25rem] items-center justify-between">
        <Logo />

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-dark"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            icon={MessageCircle}
            className="group/btn"
          >
            Hablar con nuestro equipo
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-dark transition-colors hover:bg-slate-100 lg:hidden"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-slate-200 bg-white/95 backdrop-blur-md lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted transition-colors hover:bg-bg-light hover:text-dark"
              >
                {link.label}
              </a>
            ))}
            <Button
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              icon={MessageCircle}
              className="mt-2 w-full"
              onClick={() => setOpen(false)}
            >
              Hablar con nuestro equipo
            </Button>
          </Container>
        </div>
      )}
    </header>
  )
}
