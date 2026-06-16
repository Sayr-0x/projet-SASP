import { Shield, ArrowUp } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-brass/15 bg-ink">
      <div className="mx-auto max-w-dossier px-5 py-10 sm:px-8 lg:px-10">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2.5 text-steel-300">
            <span className="flex h-7 w-7 items-center justify-center border border-brass/40 text-brass clip-notch">
              <Shield size={14} strokeWidth={1.75} aria-hidden="true" />
            </span>
            <span className="font-display text-xs uppercase tracking-wide2">
              SASP Sud · Dossier de candidature
            </span>
          </div>
          <p className="font-display text-[0.65rem] uppercase tracking-wide2 text-steel-300">
            Document RP / FiveM · Sayrox
          </p>
          <a
            href="#hero"
            className="inline-flex items-center gap-2 font-display text-[0.7rem] uppercase tracking-wide2 text-bone-dim transition-colors hover:text-brass"
          >
            Haut de page
            <ArrowUp size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
