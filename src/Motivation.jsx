import { Sparkles, ListChecks } from 'lucide-react'
import Section from './Section'
import SectionHeader from './SectionHeader'
import Reveal from './Reveal'
import Plaque from './Plaque'

const VISION_POINTS = [
  'Une hiérarchie claire où chaque grade a un rôle et des responsabilités définies.',
  "Une formation rigoureuse pour chaque nouvel agent avant sa prise de fonction sur le terrain.",
  "Des standards d'intervention cohérents et professionnels.",
  "Une présence RP régulière et crédible sur l'ensemble du secteur.",
]

export default function Motivation() {
  return (
    <Section id="motivation" tone="dark">
      <SectionHeader index={2} eyebrow="Motivation" title="Rapport de motivation" />

      <div className="mt-12 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
        <div className="space-y-5 text-base leading-relaxed text-bone-dim sm:text-[1.05rem]">
          <Reveal>
            <p>
              Le lancement de ce serveur représente une opportunité unique : celle de construire
              une faction sur des <span className="text-bone">bases saines, dès le premier jour</span>,
              sans avoir à corriger les habitudes ou les dérives qui s'installent parfois avec le
              temps.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <p>
              Ma vision pour le secteur Sud est celle d'une{' '}
              <span className="text-brass">police de proximité, cadrée et bien formée</span>.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <p>
              Mon objectif n'est pas seulement de diriger un PDP, mais de poser les fondations
              d'une section qui inspire confiance, tant aux joueurs civils qu'aux autres factions.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <p>
              Cette vision, je la construis et la porte main dans la main avec{' '}
              <span className="text-bone">Kraatos</span>, mon Capitaine Adjoint. À deux, nous
              garantissons une direction présente, réactive et cohérente, capable d'encadrer les
              effectifs sans jamais laisser un agent livré à lui-même.
            </p>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <Plaque header="Vision — Secteur Sud" reference="OBJ · 02">
            <div className="mb-4 flex items-center gap-2 text-brass">
              <Sparkles size={16} aria-hidden="true" />
              <span className="font-display text-xs uppercase tracking-wide2">
                Concrètement, cela signifie
              </span>
            </div>
            <ul className="space-y-3.5">
              {VISION_POINTS.map((point, i) => (
                <li key={i} className="flex gap-3">
                  <span
                    className="mt-1 font-display text-xs font-semibold text-brass"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm leading-relaxed text-bone-dim">{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex items-start gap-2 border-t border-white/5 pt-4 text-sm text-bone-dim">
              <ListChecks size={16} className="mt-0.5 shrink-0 text-brass" aria-hidden="true" />
              <p>
                Une section qui inspire confiance aux civils comme aux autres factions.
              </p>
            </div>
          </Plaque>
        </Reveal>
      </div>
    </Section>
  )
}
