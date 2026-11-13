import { About } from './components/About.jsx'
import { Achievement } from './components/Achievement.jsx'
import { Contact } from './components/contact/Contact.jsx'
import { Footer } from './components/contact/Footer.jsx'
import { Experience } from './components/experience/Experience.jsx'
import { Hero } from './components/Hero.jsx'
import { Navbar } from './components/Navbar.jsx'
import { Projects } from './components/projects/Projects.jsx'
import { Skills } from './components/skills/Skills.jsx'
import { useScrollReveal } from './hooks/useScrollReveal.js'
import { useLanguage } from './i18n/useLanguage.js'
import { ui } from './i18n/ui.js'

function App() {
  const { t } = useLanguage()
  useScrollReveal()

  return (
    <>
      <a className="skip-link" href="#main">
        {t(ui.skipLink)}
      </a>
      <Navbar />
      {/* tabIndex={-1}: "İçeriğe atla" ile gelen klavye odağı main'e taşınabilsin */}
      <main id="main" tabIndex={-1}>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <Achievement />
    </>
  )
}

export default App
