import { CalendarClock, Flag, CalendarRange } from 'lucide-react'
import Section from './Section'
import SectionHeader from './SectionHeader'
import Reveal from './Reveal'

const MILESTONES = [
  {
    tag: 'Phase 01',
    icon: CalendarClock,
    title: "Avant l'ouverture",
    period: '2 semaines',
    items: [
      'Finalisation de la hiérarchie et des fiches de poste pour chaque grade.',
      "Préparation des supports de formation (procédures, code radio, protocoles d'intervention).",
      "Organisation de l'équipe de direction (Capitaine Sayrox, Capitaine Adjoint Kraatos, leads de pôles).",
      'Préparation de la Police Academy (PA) de lancement.',
    ],
  },
  {
    tag: 'Phase 02',
    icon: Flag,
    title: 'Semaine 1 après ouverture',
    period: 'Lancement',
    items: [
      "Police Academy (PA) le soir du lancement pour intégrer un maximum d'effectifs dès le premier jour.",
      'Mise en place des premières patrouilles encadrées.',
      "Attribution des premiers rôles et responsabilités au sein de l'équipe.",
    ],
  },
  {
    tag: 'Phase 03',
    icon: CalendarRange,
    title: 'Mois 1',
    period: 'Consolidation',
    items: [
      'Évaluation des premiers agents recrutés et premières montées en grade.',
      'Ouverture progressive des spécialités selon les profils.',
      'Mise en place des premiers convois de saisies.',
      "Premier bilan conjoint entre Sayrox et Kraatos pour ajuster l'organisation selon les retours du terrain.",
    ],
  },
]

export default function Roadmap() {
  return (
    <Section id="roadmap" tone="dark">
      <SectionHeader index={4} eyebrow="Plan d'action" title="Feuille de route" />

      <ol className="mt-14 grid gap-6 lg:grid-cols-3 lg:gap-5">
        {MILESTONES.map((m, i) => {
          const Icon = m.icon
          return (
            <Reveal as="li" key={m.tag} delay={i * 110} className="relative">
              {/* connector line between cards on desktop */}
              {i < MILESTONES.length - 1 && (
                <span
                  className="absolute left-full top-[3.25rem] hidden h-px w-5 bg-brass/30 lg:block"
                  aria-hidden="true"
                />
              )}
              <div className="clip-notch flex h-full flex-col bg-navy-700/50 p-6 ring-1 ring-brass/20">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center bg-brass/15 text-brass clip-notch">
                    <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <span className="font-display text-[2.75rem] font-bold leading-none text-white/[0.06]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                <p className="mt-5 font-display text-xs uppercase tracking-wide3 text-brass">
                  {m.tag} · {m.period}
                </p>
                <h3 className="mt-1 font-display text-xl font-semibold uppercase tracking-wide2 text-bone">
                  {m.title}
                </h3>

                <ul className="mt-4 space-y-3 border-t border-white/5 pt-4">
                  {m.items.map((item, j) => (
                    <li key={j} className="flex gap-2.5 text-sm leading-relaxed text-bone-dim">
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-brass/70"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )
        })}
      </ol>
    </Section>
  )
}
