import { useRef, useState } from 'react'
import {
  Layers,
  GraduationCap,
  Map,
  Handshake,
  Truck,
  ArrowUpRight,
  ChevronRight,
} from 'lucide-react'
import Section from './Section'
import SectionHeader from './SectionHeader'
import Reveal from './Reveal'
import Plaque from './Plaque'
import { HIERARCHY, HIERARCHY_TIERS, SPECIALTIES } from '../data/plan'

const TABS = [
  { id: 'hierarchie', label: 'Hiérarchie', short: 'A', icon: Layers },
  { id: 'specialites', label: 'Spécialités', short: 'B', icon: GraduationCap },
  { id: 'patrouilles', label: 'Patrouilles', short: 'C', icon: Map },
  { id: 'relations', label: 'Relations', short: 'D', icon: Handshake },
  { id: 'evenements', label: 'Événements', short: 'E', icon: Truck },
]

function tierFor(index) {
  return HIERARCHY_TIERS.find((t) => index >= t.from && index < t.to)?.label ?? ''
}

function Hierarchy() {
  return (
    <div>
      <p className="mb-8 max-w-2xl text-sm leading-relaxed text-bone-dim sm:text-base">
        Une progression hiérarchique en <span className="text-brass">13 grades</span>, du
        premier jour de service jusqu'au commandement. Chaque échelon ouvre de nouvelles
        responsabilités et conditionne l'accès aux spécialités.
      </p>

      <ol className="relative space-y-2.5">
        {/* vertical spine */}
        <span
          className="absolute left-[1.35rem] top-2 bottom-2 w-px bg-gradient-to-b from-brass/10 via-brass/40 to-brass"
          aria-hidden="true"
        />
        {HIERARCHY.map((grade, i) => {
          const isTop = i === HIERARCHY.length - 1
          const isDeputy = i === HIERARCHY.length - 2
          const tier = tierFor(i)
          const showTier = i === 0 || tierFor(i - 1) !== tier
          return (
            <li key={grade}>
              {showTier && (
                <p className="mb-1.5 ml-14 mt-4 font-display text-[0.65rem] uppercase tracking-wide3 text-steel-300 first:mt-0">
                  {tier}
                </p>
              )}
              <Reveal
                delay={Math.min(i * 30, 240)}
                className="group flex items-center gap-4"
                as="div"
              >
                {/* numbered node */}
                <span
                  className={`relative z-10 flex h-11 w-11 shrink-0 items-center justify-center font-display text-sm font-semibold clip-notch ${
                    isTop
                      ? 'bg-brass text-navy'
                      : isDeputy
                        ? 'border border-brass/70 bg-navy text-brass'
                        : 'border border-brass/25 bg-navy-700 text-steel-300'
                  }`}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div
                  className={`clip-notch flex flex-1 items-center justify-between gap-3 px-4 py-3 transition-colors ${
                    isTop
                      ? 'bg-brass/15 ring-1 ring-brass/60'
                      : 'bg-navy-700/50 ring-1 ring-white/5 group-hover:ring-brass/30'
                  }`}
                >
                  <span
                    className={`font-display text-sm uppercase tracking-wide2 sm:text-base ${
                      isTop ? 'font-semibold text-brass' : 'text-bone'
                    }`}
                  >
                    {grade}
                  </span>
                  {isTop && (
                    <span className="font-display text-[0.6rem] uppercase tracking-wide3 text-brass">
                      Sayrox · Poste visé
                    </span>
                  )}
                  {isDeputy && (
                    <span className="font-display text-[0.6rem] uppercase tracking-wide3 text-brass">
                      Kraatos
                    </span>
                  )}
                </div>
              </Reveal>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

function Specialties() {
  return (
    <div>
      <p className="mb-8 max-w-2xl text-sm leading-relaxed text-bone-dim sm:text-base">
        Les spécialités sont accessibles selon le grade et l'expérience. Cette progressivité
        garantit que chaque spécialité est confiée à des agents ayant l'expérience et la
        maturité RP nécessaires.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        {SPECIALTIES.map((s, i) => (
          <Reveal key={s.grade} delay={i * 80}>
            <div className="clip-notch h-full bg-navy-700/50 p-5 ring-1 ring-brass/20">
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-2 font-display text-xs uppercase tracking-wide2 text-brass">
                  <span className="h-1.5 w-1.5 rotate-45 bg-brass" aria-hidden="true" />À partir
                  de {s.grade}
                </span>
              </div>
              <h4 className="mt-3 font-display text-lg font-semibold uppercase tracking-wide2 text-bone">
                {s.access}
              </h4>
              <p className="mt-1.5 text-sm leading-relaxed text-bone-dim">{s.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}

function TextPanel({ icon: Icon, lead, children }) {
  return (
    <Reveal>
      <Plaque header={lead} reference="OPS">
        <div className="flex gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-brass/40 text-brass clip-notch">
            <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
          </span>
          <p className="text-sm leading-relaxed text-bone-dim sm:text-base">{children}</p>
        </div>
      </Plaque>
    </Reveal>
  )
}

function Patrols() {
  return (
    <TextPanel icon={Map} lead="Patrouilles & présence RP">
      Une présence régulière et organisée sur le secteur Sud, avec une attention particulière
      portée aux <span className="text-bone">axes stratégiques</span> et aux{' '}
      <span className="text-bone">zones à risque</span> (convois de saisies, zones sensibles),
      pour garantir une couverture crédible et réactive.
    </TextPanel>
  )
}

function Relations() {
  return (
    <TextPanel icon={Handshake} lead="Relations inter-factions">
      Une collaboration fluide et professionnelle avec la{' '}
      <span className="text-bone">SASP Nord</span> et les{' '}
      <span className="text-bone">groupes illégaux dans le cadre RP</span>, basée sur le respect
      des protocoles et une communication claire entre les différentes chaînes de commandement.
    </TextPanel>
  )
}

function Events() {
  return (
    <TextPanel icon={Truck} lead="Événements RP">
      Mise en place de <span className="text-brass">convois de transport de saisies</span>,
      pouvant faire l'objet de braquages par les factions illégales — une dynamique RP qui
      favorise les interactions entre joueurs légaux et illégaux tout en valorisant le travail de
      la SASP.
    </TextPanel>
  )
}

const PANELS = {
  hierarchie: Hierarchy,
  specialites: Specialties,
  patrouilles: Patrols,
  relations: Relations,
  evenements: Events,
}

export default function Plan() {
  const [active, setActive] = useState('hierarchie')
  const tabRefs = useRef([])

  // Roving tabindex / arrow-key navigation for the tablist (a11y).
  const onKeyDown = (e) => {
    const idx = TABS.findIndex((t) => t.id === active)
    let next = null
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = (idx + 1) % TABS.length
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = (idx - 1 + TABS.length) % TABS.length
    if (e.key === 'Home') next = 0
    if (e.key === 'End') next = TABS.length - 1
    if (next !== null) {
      e.preventDefault()
      setActive(TABS[next].id)
      tabRefs.current[next]?.focus()
    }
  }

  const ActivePanel = PANELS[active]

  return (
    <Section id="plan" tone="ink">
      <SectionHeader index={3} eyebrow="Vision & projet" title="Plan opérationnel" />

      <div className="mt-12 grid gap-8 lg:grid-cols-[16rem_1fr] lg:gap-12">
        {/* tab list */}
        <Reveal>
          <div
            role="tablist"
            aria-label="Sections du plan opérationnel"
            aria-orientation="vertical"
            onKeyDown={onKeyDown}
            className="flex gap-2 overflow-x-auto pb-2 lg:sticky lg:top-24 lg:flex-col lg:overflow-visible lg:pb-0"
          >
            {TABS.map((tab, i) => {
              const isActive = active === tab.id
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  ref={(el) => (tabRefs.current[i] = el)}
                  role="tab"
                  id={`tab-${tab.id}`}
                  aria-selected={isActive}
                  aria-controls={`panel-${tab.id}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActive(tab.id)}
                  className={`group flex shrink-0 items-center gap-3 px-4 py-3 text-left font-display text-sm uppercase tracking-wide2 transition-colors clip-notch ${
                    isActive
                      ? 'bg-navy-700 text-brass ring-1 ring-brass/40'
                      : 'text-bone-dim ring-1 ring-white/5 hover:text-bone hover:ring-brass/20'
                  }`}
                >
                  <span
                    className={`font-display text-xs ${isActive ? 'text-brass' : 'text-steel-300'}`}
                  >
                    {tab.short}
                  </span>
                  <Icon size={16} strokeWidth={1.75} aria-hidden="true" />
                  <span className="flex-1">{tab.label}</span>
                  <ChevronRight
                    size={15}
                    aria-hidden="true"
                    className={`hidden transition-transform lg:block ${
                      isActive ? 'translate-x-0 text-brass' : '-translate-x-1 text-transparent'
                    }`}
                  />
                </button>
              )
            })}
          </div>
        </Reveal>

        {/* active panel */}
        <div
          role="tabpanel"
          id={`panel-${active}`}
          aria-labelledby={`tab-${active}`}
          tabIndex={0}
          className="min-w-0 rounded-sm focus:outline-none"
          key={active}
        >
          <ActivePanel />
        </div>
      </div>

      <Reveal className="mt-10">
        <a
          href="#roadmap"
          className="inline-flex items-center gap-2 font-display text-xs uppercase tracking-wide2 text-brass underline-offset-4 hover:underline"
        >
          Voir la feuille de route
          <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </Reveal>
    </Section>
  )
}
