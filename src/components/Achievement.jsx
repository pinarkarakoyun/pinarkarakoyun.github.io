import { useCallback, useEffect, useRef, useState } from 'react'
import { useKonamiCode } from '../hooks/useKonamiCode.js'
import { useLanguage } from '../i18n/useLanguage.js'
import { ui } from '../i18n/ui.js'
import { PixelIcon } from './PixelIcon.jsx'
import './Achievement.css'

const VISIBLE_MS = 5000

// Konami kodu girilince sağ altta Xbox/Steam tarzı bir başarım bildirimi gösterir.
export function Achievement() {
  const { t } = useLanguage()
  const [visible, setVisible] = useState(false)
  const hideTimer = useRef(null)

  const unlock = useCallback(() => {
    setVisible(true)
    clearTimeout(hideTimer.current)
    hideTimer.current = setTimeout(() => setVisible(false), VISIBLE_MS)
  }, [])

  useKonamiCode(unlock)

  // Konsola bakan geliştiricilere küçük bir ipucu
  useEffect(() => {
    console.info('%cPsst… ↑↑↓↓←→←→BA 🎮', 'color:#6ee7b7;font-family:monospace;font-size:14px')
  }, [])

  useEffect(() => () => clearTimeout(hideTimer.current), [])

  return (
    // role="status": ekran okuyucular bildirim görünür olunca metni seslendirir
    <div className="achievement-region" role="status">
      {visible && (
        <div className="achievement">
          <span className="achievement__icon" aria-hidden="true">
            <PixelIcon name="trophy" size={28} />
          </span>
          <span className="achievement__text">
            <span className="achievement__label">{t(ui.achievement.unlocked)}</span>
            <span className="achievement__title">Konami Master</span>
            <span className="achievement__detail">{t(ui.achievement.detail)}</span>
          </span>
        </div>
      )}
    </div>
  )
}
