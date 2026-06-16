import { Shield, ClipboardCheck, Compass, Star, ShieldCheck } from 'lucide-react'
import Section from './Section'
import SectionHeader from './SectionHeader'
import Reveal from './Reveal'
import Plaque from './Plaque'
import Seal from './Seal'

const QUALITIES = [
  {
    icon: Shield,
    title: 'Calme',
    desc: "Garder la maîtrise en intervention et en situation de forte affluence, pour des décisions posées et fiables.",
  },
  {
    icon: ClipboardCheck,
    title: 'Responsabilité',
    desc: "Assumer le cadre, les agents et les conséquences — des supérieurs garants de la progression de leur équipe.",
  },
  {
    icon: Compass,
    title: 'Organisation',
    desc: "Une hiérarchie claire et des procédures structurées, fondations d'une faction RP crédible et durable.",
  },
]

const AGENTS = [
  {
    role: 'Capitaine — Secteur Sud',
    name: 'Sayrox',
    reference: 'ID · 001-S',
    icon: Star,
    primary: true,
    rows: [
      ['Poste visé', 'Capitaine'],
      ['Expérience', 'Encadrement · SASP'],
      ['Affluence gérée', "Jusqu'à 150 joueurs / soir"],
      ['Statut serveur', 'Modérateur'],
    ],
  },
  {
    role: 'Capitaine Adjoint — Secteur Sud',
    name: 'Kraatos',
    reference: 'ID · 002-S',
    icon: ShieldCheck,
    primary: false,
    rows: [
      ['Poste visé', 'Capitaine Adjoint'],
      ['Expérience', 'Lead · SASP'],
      ['Affluence gérée', "Jusqu'à 150 joueurs / soir"],
      ['Rôle', 'Supervision terrain'],
    ],
  },
]

export default function Presentation() {
  return (
    <Section id="presentation" tone="ink">
      {/* filigree stamp */}
      <Seal className="pointer-events-none absolute right-4 top-10 hidden h-72 w-72 text-white/[0.03] lg:block" />

      <SectionHeader index={1} eyebrow="Présentation" title="Identification des agents" />

      <div className="mt-12 max-w-3xl space-y-5 text-base leading-relaxed text-bone-dim sm:text-[1.05rem]">
        <Reveal>
          <p>
            Notre expérience RP s'est principalement construite sur des serveurs réunissant
            jusqu'à <span className="text-brass">150 joueurs par soirée</span>, où nous avons tous
            deux occupé des <span className="text-bone">postes d'encadrement au sein de la SASP</span>.
            Une expérience qui nous a permis de développer une réelle maîtrise de la gestion
            d'effectifs importants, de l'encadrement d'agents et de la coordination d'interventions
            en conditions de forte affluence.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <p>
            <span className="text-bone">Sayrox</span> et <span className="text-bone">Kraatos</span>{' '}
            forment un <span className="text-brass">binôme de commandement</span> complémentaire et
            soudé : même exigence de rigueur, même vision d'une police structurée. Là où l'un
            dirige, l'autre supervise — pour qu'aucun agent ne soit jamais livré à lui-même.
          </p>
        </Reveal>
        <Reveal delay={180}>
          <p>
            Trois qualités définissent notre approche du rôle : le calme, la responsabilité, et
            l'organisation. Nous considérons qu'un cadre structuré et une hiérarchie claire sont
            les fondations d'une faction RP crédible et durable.
          </p>
        </Reveal>
      </div>

      {/* two equal agent files */}
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {AGENTS.map((agent, i) => {
          const Icon = agent.icon
          return (
            <Reveal key={agent.name} delay={i * 100}>
              <Plaque header="Fiche d'agent" reference={agent.reference} className="h-full">
                <div className="flex items-center gap-4">
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center clip-notch ${
                      agent.primary ? 'bg-brass text-navy' : 'border border-brass/40 text-brass'
                    }`}
                  >
                    <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-display text-[0.7rem] uppercase tracking-wide3 text-brass">
                      {agent.role}
                    </p>
                    <h3 className="font-display text-2xl font-semibold uppercase tracking-wide2 text-bone">
                      {agent.name}
                    </h3>
                  </div>
                </div>

                <dl className="mt-5 divide-y divide-white/5 border-t border-white/5 font-display uppercase">
                  {agent.rows.map(([k, v]) => (
                    <div key={k} className="flex items-baseline justify-between gap-4 py-3">
                      <dt className="text-[0.7rem] tracking-wide2 text-steel-300">{k}</dt>
                      <dd className="text-right text-sm tracking-wide2 text-bone">{v}</dd>
                    </div>
                  ))}
                </dl>
              </Plaque>
            </Reveal>
          )
        })}
      </div>

      {/* three qualities */}
      <div className="mt-12 grid gap-5 sm:grid-cols-3">
        {QUALITIES.map(({ icon: Icon, title, desc }, i) => (
          <Reveal key={title} delay={i * 90}>
            <div className="group clip-notch h-full bg-navy-700/50 p-6 ring-1 ring-brass/20 transition-colors hover:ring-brass/50">
              <span className="flex h-11 w-11 items-center justify-center border border-brass/40 text-brass clip-notch">
                <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold uppercase tracking-wide2 text-bone">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-bone-dim">{desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
