import { useEffect, useRef, useState } from 'react'
import { profile } from '../../data/profile.js'
import { useLanguage } from '../../i18n/useLanguage.js'
import { ui } from '../../i18n/ui.js'
import { PixelIcon } from '../PixelIcon.jsx'
import { WindowTitle } from '../WindowTitle.jsx'
import './Contact.css'

const FEEDBACK_MS = 2500

export function Contact() {
  const { t } = useLanguage()
  const { email, github, linkedin } = profile.links
  // 'idle' | 'copied' | 'failed'
  const [copyState, setCopyState] = useState('idle')
  const resetTimer = useRef(null)

  useEffect(() => () => clearTimeout(resetTimer.current), [])

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email)
      setCopyState('copied')
    } catch {
      // Pano izni yoksa (eski tarayıcı, http, izin reddi) kullanıcıya söyle
      setCopyState('failed')
    }
    clearTimeout(resetTimer.current)
    resetTimer.current = setTimeout(() => setCopyState('idle'), FEEDBACK_MS)
  }

  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <h2 className="section__title" id="contact-title">
        {t(ui.nav.contact)}
      </h2>

      <div className="window contact">
        <WindowTitle>contact.exe</WindowTitle>
        <div className="window__body contact__body">
          <p className="contact__invite">{t(ui.contact.invite)}</p>

          <div className="contact__email">
            <a className="pixel-button pixel-button--primary" href={`mailto:${email}`}>
              <PixelIcon name="mail" size={16} />
              {t(ui.contact.email)}
            </a>
            <code className="contact__address">{email}</code>
            <button
              type="button"
              className="pixel-button contact__copy"
              onClick={copyEmail}
              aria-label={t(ui.contact.copyLabel)}
            >
              <PixelIcon name="copy" size={16} />
              {t(ui.contact.copy)}
            </button>
            {/* Ekran okuyucular kopyalama sonucunu da duysun */}
            <span className="contact__feedback" role="status">
              {copyState === 'copied' && t(ui.contact.copied)}
              {copyState === 'failed' && t(ui.contact.copyFailed)}
            </span>
          </div>

          <div className="contact__links">
            <a className="pixel-button" href={github} target="_blank" rel="noreferrer">
              <PixelIcon name="github" size={16} />
              GitHub
            </a>
            <a className="pixel-button" href={linkedin} target="_blank" rel="noreferrer">
              <PixelIcon name="linkedin" size={16} />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
