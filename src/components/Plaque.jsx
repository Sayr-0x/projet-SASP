/**
 * The signature "official plaque": a fine-bordered card with notched corners,
 * a small SASP header strip and an optional reference number. Reused for
 * cards, grade steps, roadmap milestones, etc.
 */
export default function Plaque({
  children,
  header,
  reference,
  className = '',
  tone = 'dark', // 'dark' | 'light'
}) {
  const isDark = tone === 'dark'
  return (
    <div
      className={`clip-notch relative ${
        isDark
          ? 'bg-navy-700/60 ring-1 ring-brass/25'
          : 'bg-white ring-1 ring-steel/20'
      } ${className}`}
    >
      {/* inner border to reinforce the plaque outline within the clip */}
      <div
        className={`clip-notch pointer-events-none absolute inset-[3px] ${
          isDark ? 'ring-1 ring-white/5' : 'ring-1 ring-steel/10'
        }`}
        aria-hidden="true"
      />
      {(header || reference) && (
        <div
          className={`flex items-center justify-between gap-3 px-5 pt-4 text-[0.65rem] font-display uppercase tracking-wide2 ${
            isDark ? 'text-brass' : 'text-brass-dim'
          }`}
        >
          <span className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rotate-45 bg-brass" aria-hidden="true" />
            {header}
          </span>
          {reference && <span className="text-steel-300">{reference}</span>}
        </div>
      )}
      <div className="relative px-5 pb-5 pt-4">{children}</div>
    </div>
  )
}
