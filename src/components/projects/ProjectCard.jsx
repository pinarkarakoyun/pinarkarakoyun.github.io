import { useLanguage } from '../../i18n/useLanguage.js'
import { ui } from '../../i18n/ui.js'
import { PixelIcon } from '../PixelIcon.jsx'
import { WindowTitle } from '../WindowTitle.jsx'
import { StatusBadge } from './StatusBadge.jsx'

// Tek bir proje: "Problem → Çözüm" anlatımlı pencere kartı.
// context, next, tech ve links.github isteğe bağlı; yoksa o kısım çizilmez.
export function ProjectCard({ project }) {
  const { t } = useLanguage()
  const { id, title, status, context, problem, solution, progress, next, tech, links } = project

  return (
    <article className="window project-card" aria-labelledby={`${id}-title`}>
      <WindowTitle>{id}.exe</WindowTitle>

      <div className="window__body project-card__body">
        <header className="project-card__header">
          <h3 id={`${id}-title`}>{title}</h3>
          <StatusBadge status={status} />
        </header>
        {context && <p className="project-card__context">{t(context)}</p>}

        <dl className="project-card__story">
          <dt>{t(ui.project.problem)}</dt>
          <dd>{t(problem)}</dd>
          <dt>{t(ui.project.solution)}</dt>
          <dd>{t(solution)}</dd>
          {progress && (
            <>
              <dt>{t(ui.project.progress)}</dt>
              <dd>{t(progress)}</dd>
            </>
          )}
          {next && (
            <>
              <dt>{t(ui.project.next)}</dt>
              <dd>{t(next)}</dd>
            </>
          )}
        </dl>

        <footer className="project-card__footer">
          {tech.length > 0 && (
            <ul className="project-card__tech" aria-label={t(ui.project.tech)}>
              {tech.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          )}
          {links.github && (
            <a className="pixel-button project-card__link" href={links.github} target="_blank" rel="noreferrer">
              <PixelIcon name="github" size={16} />
              {t(ui.project.github)}
              <span className="visually-hidden">: {title}</span>
            </a>
          )}
        </footer>
      </div>
    </article>
  )
}
