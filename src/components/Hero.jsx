import { profile } from '../data/profile.js'
import { useLanguage } from '../i18n/useLanguage.js'
import { ui } from '../i18n/ui.js'
import { Avatar } from './avatar/Avatar.jsx'
import { WalkingCat } from './cat/WalkingCat.jsx'
import { WindowTitle } from './WindowTitle.jsx'
import './Hero.css'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="hero" id="top">
      <div className="hero__text">
        <p className="hero__player">{t(ui.hero.player)}</p>
        <h1 className="hero__title">
          <span className="hero__greeting">{t(ui.hero.greeting)}</span>
          {profile.name}
        </h1>
        <p className="hero__role">{t(profile.title)}</p>
        <p className="hero__tagline">{t(profile.tagline)}</p>
        <div className="hero__actions">
          <a href="#projects" className="pixel-button pixel-button--primary">
            ▶ {t(ui.hero.cta)}
          </a>
          <a href={profile.links.github} className="pixel-button" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>

      <div className="window hero__avatar">
        <WindowTitle>player_01.png</WindowTitle>
        <div className="hero__avatar-body">
          <div className="hero__scene">
            <Avatar title={t(ui.hero.avatarAlt)} />
            <WalkingCat />
          </div>
        </div>
      </div>
    </section>
  )
}
