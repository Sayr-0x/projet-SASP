import { ChevronDown } from 'lucide-react'
import Seal from './Seal'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-navy"
    >
      {/* depth gradient */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(110% 80% at 50% 0%, #16263F 0%, #0A1628 45%, #070F1C 100%)',
        }}
      />

      {/* subtle stylized city-map grid */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full text-brass/[0.06]"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="grid" width="64" height="64" patternUnits="userSpaceOnUse">
            <path d="M64 0H0V64" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
          <pattern id="grid-lg" width="256" height="256" patternUnits="userSpaceOnUse">
            <path d="M256 0H0V256" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <rect width="100%" height="100%" fill="url(#grid-lg)" />
        {/* a couple of diagonal "main roads" */}
        <line x1="0" y1="78%" x2="100%" y2="42%" stroke="currentColor" strokeWidth="2" />
        <line x1="12%" y1="0" x2="62%" y2="100%" stroke="currentColor" strokeWidth="2" />
      </svg>

      {/* filigree seal */}
      <Seal className="pointer-events-none absolute -right-16 top-1/2 hidden h-[34rem] w-[34rem] -translate-y-1/2 text-brass/[0.05] md:block" />

      {/* bottom fade into next section */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-ink"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-dossier px-5 py-28 sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          {/* eyebrow / report tag */}
          <div className="reveal is-visible flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 border border-brass/40 px-3 py-1.5 font-display text-[0.7rem] uppercase tracking-wide3 text-brass clip-notch">
              <span className="h-1.5 w-1.5 rotate-45 bg-brass" aria-hidden="true" />
              Dossier de candidature
            </span>
            <span className="font-display text-[0.7rem] uppercase tracking-wide3 text-steel-300">
              Réf. SASP-S/CPT · Confidentiel
            </span>
          </div>

          <h1 className="mt-6 font-display font-bold uppercase leading-[0.92] tracking-wide2 text-bone">
            <span className="block text-5xl sm:text-7xl lg:text-8xl">Capitaine</span>
            <span className="mt-2 flex items-center gap-4 text-5xl sm:text-7xl lg:text-8xl">
              <span className="text-brass">SASP</span>
              <span className="text-bone">Sud</span>
            </span>
          </h1>

          <div className="mt-7 flex items-center gap-3">
            <span className="h-px w-10 bg-brass" aria-hidden="true" />
            <p className="font-display text-lg uppercase tracking-wide2 text-bone-dim sm:text-xl">
              Sayrox <span className="text-steel-300">&</span> Kraatos
            </p>
          </div>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-bone-dim sm:text-lg">
            Une police de proximité, structurée et exemplaire pour le secteur Sud.
          </p>

          <p className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 font-display text-xs uppercase tracking-wide2 text-steel-300">
            <span className="text-brass">Binôme de commandement</span>
            <span aria-hidden="true">·</span>
            <span className="text-bone-dim">Sayrox — Capitaine</span>
            <span aria-hidden="true">·</span>
            <span className="text-bone-dim">Kraatos — Capitaine Adjoint</span>
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#presentation"
              className="group inline-flex items-center gap-3 bg-brass px-7 py-3.5 font-display text-sm font-semibold uppercase tracking-wide2 text-navy transition-colors hover:bg-bone clip-notch"
            >
              Découvrir le dossier
              <ChevronDown
                size={18}
                className="transition-transform group-hover:translate-y-0.5"
                aria-hidden="true"
              />
            </a>
            <a
              href="#plan"
              className="inline-flex items-center gap-2 px-2 py-3.5 font-display text-sm uppercase tracking-wide2 text-bone-dim underline-offset-4 transition-colors hover:text-brass hover:underline"
            >
              Plan opérationnel
            </a>
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <a
        href="#presentation"
        aria-label="Aller à la section suivante"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-steel-300 transition-colors hover:text-brass sm:flex"
      >
        <span className="font-display text-[0.6rem] uppercase tracking-wide3">Défiler</span>
        <ChevronDown size={18} className="animate-bounce" aria-hidden="true" />
      </a>
    </section>
  )
}
