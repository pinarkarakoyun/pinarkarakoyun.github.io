import { profile } from '../data/profile.js'
import { useLanguage } from '../i18n/useLanguage.js'
import { ui } from '../i18n/ui.js'
import { PixelIcon } from './PixelIcon.jsx'
import { WindowTitle } from './WindowTitle.jsx'
import './About.css'

export function About() {
  const { t } = useLanguage()

  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <h2 className="section__title" id="about-title">
        {t(ui.nav.about)}
      </h2>

      <div className="about">
        <article className="window">
          <WindowTitle>about_me.txt</WindowTitle>
          <div className="window__body about__text">
            {t(profile.about).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>

        <aside className="window">
          <WindowTitle>player_info.txt</WindowTitle>
          <dl className="window__body about__facts">
            {profile.facts.map((fact) => (
              <div className="about__fact" key={fact.icon}>
                <dt>
                  <PixelIcon name={fact.icon} size={18} />
                  {t(fact.label)}
                </dt>
                <dd>{t(fact.value)}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  )
}
