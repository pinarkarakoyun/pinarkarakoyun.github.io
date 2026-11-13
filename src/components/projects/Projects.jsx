import { useState } from 'react'
import { projects } from '../../data/projects.js'
import { useLanguage } from '../../i18n/useLanguage.js'
import { ui } from '../../i18n/ui.js'
import { ProjectCard } from './ProjectCard.jsx'
import './Projects.css'

// Filtre sekmeleri, sırasıyla. 'all' dışındakiler projects.js'teki tags değerleriyle eşleşir.
const FILTERS = ['all', 'business', 'web', 'embedded', 'school', 'internship']

const matches = (project, filter) => filter === 'all' || project.tags.includes(filter)

export function Projects() {
  const { t } = useLanguage()
  const [filter, setFilter] = useState('all')
  const visible = projects.filter((project) => matches(project, filter))

  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <h2 className="section__title" id="projects-title">
        {t(ui.nav.projects)}
      </h2>

      <div className="project-filters" role="group" aria-label={t(ui.filters.label)}>
        {FILTERS.map((key) => (
          <button
            key={key}
            type="button"
            className="project-filters__tab"
            aria-pressed={filter === key}
            onClick={() => setFilter(key)}
          >
            {t(ui.filters[key])}
            <span className="project-filters__count">{projects.filter((project) => matches(project, key)).length}</span>
          </button>
        ))}
      </div>

      {/* Ekran okuyucular filtre değişince kaç proje kaldığını duysun */}
      <p className="visually-hidden" role="status">
        {visible.length} {t(ui.filters.showing)}
      </p>

      <div className="projects">
        {visible.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
