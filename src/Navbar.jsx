import { useEffect, useState } from 'react'
import { Menu, X, Shield } from 'lucide-react'
import { SECTIONS } from '../data/sections'

const NAV_ITEMS = SECTIONS.filter((s) => s.nav)

export default function Navbar() {
  const [active, setActive] = useState('presentation')
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  // Track the section currently in view to highlight the matching link.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5] },
    )
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'border-b border-brass/20 bg-navy/90 backdrop-blur-md'
          : 'border-b border-transparent bg-navy/40 backdrop-blur-sm'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-dossier items-center justify-between px-5 sm:px-8 lg:px-10">
        <a
          href="#hero"
          className="group flex items-center gap-2.5 rounded-sm"
          aria-label="Retour en haut — SASP Sud"
        >
          <span className="flex h-8 w-8 items-center justify-center border border-brass/50 text-brass clip-notch">
            <Shield size={16} strokeWidth={1.75} />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-sm font-semibold uppercase tracking-wide2 text-bone">
              SASP <span className="text-brass">Sud</span>
            </span>
            <span className="font-display text-[0.6rem] uppercase tracking-wide3 text-steel-300">
              Dossier candidature
            </span>
          </span>
        </a>

        {/* desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.id
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative block px-3 py-2 font-display text-xs uppercase tracking-wide2 transition-colors ${
                    isActive ? 'text-brass' : 'text-bone-dim hover:text-bone'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute inset-x-3 -bottom-px h-px bg-brass transition-transform duration-300 ${
                      isActive ? 'scale-x-100' : 'scale-x-0'
                    }`}
                    aria-hidden="true"
                  />
                </a>
              </li>
            )
          })}
        </ul>

        {/* mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center text-bone lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* mobile drawer */}
      <div
        id="mobile-nav"
        className={`overflow-hidden border-t border-brass/15 bg-navy/95 backdrop-blur-md lg:hidden ${
          open ? 'max-h-[28rem]' : 'max-h-0'
        } transition-[max-height] duration-300 ease-out`}
      >
        <ul className="flex flex-col px-5 py-2 sm:px-8">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className={`block border-b border-white/5 py-3 font-display text-sm uppercase tracking-wide2 ${
                  active === item.id ? 'text-brass' : 'text-bone-dim'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
