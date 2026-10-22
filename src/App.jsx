import { About } from './components/About.jsx'
import { Experience } from './components/experience/Experience.jsx'
import { Hero } from './components/Hero.jsx'
import { Navbar } from './components/Navbar.jsx'
import { Projects } from './components/projects/Projects.jsx'
import { Skills } from './components/skills/Skills.jsx'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
      </main>
    </>
  )
}

export default App
