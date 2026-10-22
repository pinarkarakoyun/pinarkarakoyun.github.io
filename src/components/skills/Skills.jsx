import { languages, skillGroups } from '../../data/skills.js'
import { useLanguage } from '../../i18n/useLanguage.js'
import { ui } from '../../i18n/ui.js'
import { WindowTitle } from '../WindowTitle.jsx'
import './Skills.css'

const MAX_BARS = 5

export function Skills() {
  const { t } = useLanguage()

  return (
    <section className="section" id="skills" aria-labelledby="skills-title">
      <h2 className="section__title" id="skills-title">
        {t(ui.nav.skills)}
      </h2>

      <div className="skills">
        {skillGroups.map((group) => (
          <article className="window" key={group.id} aria-labelledby={`skills-${group.id}`}>
            <WindowTitle>inventory/{group.id}</WindowTitle>
            <div className="window__body">
              <h3 className="skills__group-title" id={`skills-${group.id}`}>
                {t(group.title)}
              </h3>
              <ul className="skills__items">
                {group.items.map((item) => (
                  <li key={t(item)}>{t(item)}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}

        {/* Diller: seviye barlı ayrı pencere */}
        <article className="window skills__languages" aria-labelledby="skills-languages">
          <WindowTitle>inventory/languages</WindowTitle>
          <div className="window__body">
            <h3 className="skills__group-title" id="skills-languages">
              {t(ui.skills.languages)}
            </h3>
            <dl className="languages">
              {languages.map((language) => (
                <div className="languages__row" key={t(language.name)}>
                  <dt>{t(language.name)}</dt>
                  <dd>
                    <span className="languages__bar" aria-hidden="true">
                      {Array.from({ length: MAX_BARS }, (_, index) => (
                        <span key={index} className={index < language.bars ? 'is-filled' : undefined} />
                      ))}
                    </span>
                    {t(language.level)}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </article>
      </div>
    </section>
  )
}
