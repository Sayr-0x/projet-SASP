import Reveal from './Reveal'

/**
 * Standard section heading: large stencil-style report number in the
 * background, an eyebrow ("RAPPORT N°0X"), and the section title.
 */
export default function SectionHeader({ index, eyebrow, title, tone = 'dark', align = 'left' }) {
  const isDark = tone === 'dark'
  const num = String(index).padStart(2, '0')
  return (
    <div className={`relative ${align === 'center' ? 'text-center' : ''}`}>
      {/* faint watermark number */}
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute -top-10 select-none font-display text-[7rem] font-bold leading-none sm:text-[9rem] ${
          align === 'center' ? 'left-1/2 -translate-x-1/2' : '-left-1'
        } ${isDark ? 'text-white/[0.04]' : 'text-navy/[0.05]'}`}
      >
        {num}
      </span>

      <Reveal>
        <div className={`relative flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}>
          <span className="h-px w-8 bg-brass" aria-hidden="true" />
          <p className="font-display text-xs uppercase tracking-wide3 text-brass">
            Rapport N°{num} · {eyebrow}
          </p>
        </div>
        <h2
          className={`relative mt-3 font-display text-3xl font-semibold uppercase tracking-wide2 sm:text-4xl lg:text-5xl ${
            isDark ? 'text-bone' : 'text-navy'
          }`}
        >
          {title}
        </h2>
      </Reveal>
    </div>
  )
}
