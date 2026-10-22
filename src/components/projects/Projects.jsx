import { projects } from '../../data/projects.js'
import { useLanguage } from '../../i18n/useLanguage.js'
import { ui } from '../../i18n/ui.js'
import { ProjectCard } from './ProjectCard.jsx'
import './Projects.css'

export function Projects() {
  const { t } = useLanguage()

  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <h2 className="section__title" id="projects-title">
        {t(ui.nav.projects)}
      </h2>
      <div className="projects">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
