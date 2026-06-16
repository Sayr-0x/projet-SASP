/**
 * Consistent section shell: full-width tone background + centered dossier
 * container with vertical rhythm. `tone` toggles dark/light treatment.
 */
export default function Section({ id, tone = 'dark', className = '', children }) {
  const bg =
    tone === 'ink'
      ? 'bg-ink text-bone'
      : tone === 'light'
        ? 'bg-bone text-navy'
        : 'bg-navy text-bone'

  return (
    <section id={id} className={`relative scroll-mt-20 ${bg} ${className}`}>
      <div className="mx-auto w-full max-w-dossier px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
        {children}
      </div>
    </section>
  )
}
