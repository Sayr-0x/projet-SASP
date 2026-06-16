/**
 * Subtle circular "official stamp" watermark used as a filigree on key
 * sections. Decorative only — hidden from assistive tech.
 */
export default function Seal({ className = '', label = 'SAN ANDREAS STATE POLICE' }) {
  const id = label.replace(/\s+/g, '-').toLowerCase()
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <path
          id={`circle-${id}`}
          d="M 100,100 m -74,0 a 74,74 0 1,1 148,0 a 74,74 0 1,1 -148,0"
        />
      </defs>
      <circle cx="100" cy="100" r="92" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="100" cy="100" r="84" fill="none" stroke="currentColor" strokeWidth="0.75" />
      <circle cx="100" cy="100" r="52" fill="none" stroke="currentColor" strokeWidth="1" />
      <text fill="currentColor" fontSize="11" fontFamily="Oswald, sans-serif" letterSpacing="2">
        <textPath href={`#circle-${id}`} startOffset="0%">
          {label} · SECTEUR SUD ·
        </textPath>
      </text>
      {/* central star */}
      <path
        d="M100 66 l8.2 16.6 18.3 2.7 -13.2 12.9 3.1 18.2 -16.4 -8.6 -16.4 8.6 3.1 -18.2 -13.2 -12.9 18.3 -2.7 z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
    </svg>
  )
}
