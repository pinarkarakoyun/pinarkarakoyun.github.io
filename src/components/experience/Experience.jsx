import { certificates, education, experience } from '../../data/experience.js'
import { useLanguage } from '../../i18n/useLanguage.js'
import { ui } from '../../i18n/ui.js'
import { WindowTitle } from '../WindowTitle.jsx'
import './Experience.css'

export function Experience() {
  const { t } = useLanguage()

  return (
    <section className="section" id="experience" aria-labelledby="experience-title">
      <h2 className="section__title" id="experience-title">
        {t(ui.nav.experience)}
      </h2>

      {/* Stajlar: en yeni en üstte, solda dikey zaman çizgisi */}
      <ol className="timeline">
        {experience.map((job) => (
          <li key={job.company} className={`timeline__item${job.current ? ' timeline__item--current' : ''}`}>
            <span className="timeline__node" aria-hidden="true" />
            <article className="window">
              <WindowTitle>{job.company}</WindowTitle>
              <div className="window__body">
                <div className="timeline__meta">
                  <h3 className="timeline__role">{t(job.role)}</h3>
                  {job.current && <span className="timeline__now">{t(ui.experience.current)}</span>}
                </div>
                <p className="timeline__period">
                  {t(job.period)} · {job.location}
                </p>
                <ul className="timeline__highlights">
                  {t(job.highlights).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          </li>
        ))}
      </ol>

      <h3 className="experience__subtitle">{t(ui.experience.education)}</h3>
      {education.map((item) => (
        <article className="window" key={item.school}>
          <WindowTitle>{item.school}</WindowTitle>
          <div className="window__body">
            <p className="timeline__role">{t(item.degree)}</p>
            <p className="timeline__period">{t(item.period)}</p>
          </div>
        </article>
      ))}

      <h3 className="experience__subtitle">{t(ui.experience.certificates)}</h3>
      <div className="certificates">
        {certificates.map((group) => (
          <article className="window" key={group.issuer}>
            <WindowTitle>{group.issuer}</WindowTitle>
            <ul className="window__body certificates__list">
              {group.items.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
