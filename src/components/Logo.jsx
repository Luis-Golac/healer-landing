/**
 * Placeholder logo for HEALER TRACE.
 * Hexagon "H" mark + wordmark, drawn inline as SVG so it scales crisply and
 * can be recolored via `currentColor` / Tailwind text utilities.
 *
 * Replace with the official brand SVG when available (see ASSETS_NEEDED.md).
 */

import logoHealerTrace from "../assets/logo-healer-trace.png";

export default function Logo({ className = '' }) {
  return (
    <a
      href="#top"
      className={`flex items-center select-none ${className}`}
      aria-label="HEALER TRACE — inicio"
    >
      <img
        src={logoHealerTrace}
        alt="HEALER TRACE"
        className="h-9 w-auto"
      />
    </a>
  )
}
