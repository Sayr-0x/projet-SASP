import { Star, Users, ShieldCheck } from 'lucide-react'
import Section from './Section'
import SectionHeader from './SectionHeader'
import Reveal from './Reveal'
import Seal from './Seal'

const LEADS = [
  {
    role: 'Capitaine',
    name: 'Sayrox',
    note: "Direction du secteur Sud. Expérience d'encadrement au sein de la SASP, gestion d'effectifs jusqu'à 150 joueurs / soir.",
    tags: ['Direction générale', 'Hiérarchie & fiches de poste', 'Police Academy'],
    primary: true,
  },
  {
    role: 'Capitaine Adjoint',
    name: 'Kraatos',
    note: "Bras droit de la direction et co-pilote du projet. Forte expérience de lead SASP sur un serveur de 150 joueurs par soirée, il assure la supervision terrain, l'encadrement des agents et le bon déroulement des formations aux côtés du Capitaine.",
    tags: ['Co-direction', 'Supervision terrain', 'Formation & spécialités'],
    primary: false,
  },
]

export default function Team() {
  return (
    <Section id="equipe" tone="ink">
      <Seal className="pointer-events-none absolute -left-12 bottom-8 hidden h-72 w-72 text-white/[0.03] lg:block" />

      <SectionHeader index={5} eyebrow="Mon équipe" title="Effectifs de direction" />

      <Reveal className="mt-10 max-w-2xl">
        <p className="text-base leading-relaxed text-bone-dim sm:text-[1.05rem]">
          Pour mener à bien ce projet, je serai épaulé par <span className="text-bone">Kraatos</span>,
          mon Capitaine Adjoint, avec qui je forme le binôme de commandement du secteur Sud. Autour
          de nous, un noyau de direction solide et expérimenté, capable d'encadrer les premiers
          effectifs dès le lancement.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {LEADS.map((lead, i) => (
          <Reveal key={lead.name} delay={i * 100}>
            <article
              className={`clip-notch relative h-full p-7 ${
                lead.primary
                  ? 'bg-brass/10 ring-1 ring-brass/50'
                  : 'bg-navy-700/50 ring-1 ring-white/10'
              }`}
            >
              <div className="flex items-start justify-between">
                <span
                  className={`flex h-14 w-14 items-center justify-center clip-notch ${
                    lead.primary
                      ? 'bg-brass text-navy'
                      : 'border border-brass/40 text-brass'
                  }`}
                >
                  {lead.primary ? (
                    <Star size={24} strokeWidth={1.75} aria-hidden="true" />
                  ) : (
                    <ShieldCheck size={24} strokeWidth={1.75} aria-hidden="true" />
                  )}
                </span>
                <span className="font-display text-[0.65rem] uppercase tracking-wide3 text-steel-300">
                  Direction
                </span>
              </div>
              <p
                className={`mt-5 font-display text-xs uppercase tracking-wide3 ${
                  lead.primary ? 'text-brass' : 'text-steel-300'
                }`}
              >
                {lead.role}
              </p>
              <h3 className="mt-1 font-display text-2xl font-semibold uppercase tracking-wide2 text-bone">
                {lead.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-bone-dim">{lead.note}</p>

              <ul className="mt-5 flex flex-wrap gap-2 border-t border-white/10 pt-4">
                {lead.tags.map((tag) => (
                  <li
                    key={tag}
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 font-display text-[0.65rem] uppercase tracking-wide2 clip-notch ${
                      lead.primary
                        ? 'bg-brass/15 text-brass'
                        : 'bg-navy/60 text-bone-dim ring-1 ring-brass/20'
                    }`}
                  >
                    <span className="h-1 w-1 rotate-45 bg-brass" aria-hidden="true" />
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>

      {/* additional staff badge */}
      <Reveal delay={120} className="mt-5">
        <div className="clip-notch flex flex-wrap items-center gap-4 bg-navy-700/40 px-6 py-5 ring-1 ring-brass/20">
          <span className="flex h-12 w-12 items-center justify-center border border-brass/40 text-brass clip-notch">
            <Users size={22} strokeWidth={1.75} aria-hidden="true" />
          </span>
          <div className="flex items-baseline gap-3">
            <span className="font-display text-3xl font-bold text-brass">+7</span>
            <span className="font-display text-sm uppercase tracking-wide2 text-bone">
              agents expérimentés
            </span>
          </div>
          <p className="ml-auto max-w-sm text-sm leading-relaxed text-bone-dim">
            Un noyau supplémentaire à nos côtés pour encadrer les premiers effectifs dès le
            lancement.
          </p>
        </div>
      </Reveal>
    </Section>
  )
}
