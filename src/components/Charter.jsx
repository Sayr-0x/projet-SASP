import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import Section from './Section'
import SectionHeader from './SectionHeader'
import Reveal from './Reveal'

const ARTICLES = [
  {
    title: 'Respect de la hiérarchie',
    body: "Toute décision suit la chaîne de commandement. Les agents respectent les ordres de leurs supérieurs, et les supérieurs sont garants du bien-être et de la progression de leurs agents.",
  },
  {
    title: 'Assiduité et engagement',
    body: "Une présence régulière est attendue de chaque agent. Les absences prolongées sans justification peuvent entraîner une rétrogradation.",
  },
  {
    title: 'Professionnalisme RP',
    body: "Chaque intervention doit respecter les protocoles établis. Le RP doit primer sur la performance ou la rapidité d'exécution.",
  },
  {
    title: 'Formation continue',
    body: "Aucune spécialité n'est accordée sans formation validée. Chaque agent est responsable de progresser dans ses compétences.",
  },
  {
    title: "Esprit d'équipe",
    body: "Le respect mutuel entre agents, quel que soit leur grade, est non négociable. Toute dérive sera traitée par la hiérarchie.",
  },
  {
    title: 'Communication',
    body: "Toute information importante (changement de procédure, événement, absence) doit être communiquée via les canaux officiels (Discord).",
  },
]

export default function Charter() {
  const [open, setOpen] = useState(0)

  return (
    <Section id="charte" tone="dark">
      <SectionHeader index={6} eyebrow="Règlement" title="Charte interne — PDP Sud" />

      <Reveal className="mt-10 max-w-2xl">
        <p className="text-base leading-relaxed text-bone-dim sm:text-[1.05rem]">
          Six articles fondateurs qui encadrent le fonctionnement de la section et garantissent
          un environnement RP rigoureux, équitable et durable.
        </p>
      </Reveal>

      <div className="mt-10 divide-y divide-white/5 border-y border-white/5">
        {ARTICLES.map((article, i) => {
          const isOpen = open === i
          const num = String(i + 1).padStart(2, '0')
          return (
            <Reveal key={article.title} delay={Math.min(i * 50, 200)} as="div">
              <h3>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`article-${i}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="group flex w-full items-center gap-4 py-5 text-left"
                >
                  <span
                    className={`font-display text-sm font-semibold tracking-wide2 transition-colors ${
                      isOpen ? 'text-brass' : 'text-steel-300 group-hover:text-brass'
                    }`}
                  >
                    Art. {num}
                  </span>
                  <span
                    className={`flex-1 font-display text-lg uppercase tracking-wide2 transition-colors sm:text-xl ${
                      isOpen ? 'text-bone' : 'text-bone-dim group-hover:text-bone'
                    }`}
                  >
                    {article.title}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center border transition-colors clip-notch ${
                      isOpen ? 'border-brass text-brass' : 'border-white/15 text-steel-300 group-hover:border-brass/50'
                    }`}
                    aria-hidden="true"
                  >
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>
              </h3>
              <div
                id={`article-${i}`}
                role="region"
                className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out ${
                  isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="min-h-0">
                  <p className="max-w-2xl pb-6 pl-[3.75rem] text-sm leading-relaxed text-bone-dim sm:text-base">
                    {article.body}
                  </p>
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
