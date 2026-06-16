/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0A1628',
        'navy-700': '#0F1E33',
        'navy-600': '#16263F',
        ink: '#0D0D0F',
        bone: '#F5F5F0',
        'bone-dim': '#D8D8D0',
        steel: '#4A5568',
        'steel-300': '#7B8794',
        brass: '#C9A961',
        'brass-dim': '#9A7E45',
      },
      fontFamily: {
        display: ['Oswald', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        wide2: '0.12em',
        wide3: '0.22em',
      },
      maxWidth: {
        dossier: '72rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
    },
  },
  plugins: [],
}
