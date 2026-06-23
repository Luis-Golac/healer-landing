import { ImageIcon } from 'lucide-react'

/**
 * ImagePlaceholder — dashed-border box describing the asset that belongs here.
 * Every real image in the design is represented by one of these until the final
 * art is dropped in (see ASSETS_NEEDED.md).
 *
 * Props:
 *  - label:     text describing what image goes here
 *  - className: sizing/aspect classes from the caller
 *  - tone:      "light" (default) or "blue" tinted background
 */
export default function ImagePlaceholder({
  label,
  className = '',
  tone = 'light',
  children,
}) {
  const tones = {
    light: 'bg-slate-50 border-slate-300 text-muted',
    blue: 'bg-bg-light border-primary/30 text-primary',
  }

  return (
    <div
      role="img"
      aria-label={label}
      className={`flex flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed p-6 text-center ${tones[tone]} ${className}`}
    >
      <ImageIcon className="h-6 w-6 opacity-60" aria-hidden="true" />
      <span className="max-w-[22ch] text-xs font-medium leading-snug">
        {label}
      </span>
      {children}
    </div>
  )
}
