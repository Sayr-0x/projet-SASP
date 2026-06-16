import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Presentation from './components/Presentation'
import Motivation from './components/Motivation'
import Plan from './components/Plan'
import Roadmap from './components/Roadmap'
import Team from './components/Team'
import Charter from './components/Charter'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <a
        href="#presentation"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-brass focus:px-4 focus:py-2 focus:font-display focus:text-sm focus:uppercase focus:tracking-wide2 focus:text-navy"
      >
        Aller au contenu
      </a>
      <Navbar />
      <main>
        <Hero />
        <Presentation />
        <Motivation />
        <Plan />
        <Roadmap />
        <Team />
        <Charter />
      </main>
      <Footer />
    </>
  )
}
