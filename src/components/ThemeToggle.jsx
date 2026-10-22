import { useLanguage } from '../i18n/useLanguage.js'
import { ui } from '../i18n/ui.js'
import { useTheme } from '../theme/useTheme.js'
import { PixelIcon } from './PixelIcon.jsx'

// Gece/gündüz düğmesi. Düğmede, basınca geçilecek temanın ikonu görünür.
export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const { t } = useLanguage()
  const label = theme === 'night' ? t(ui.theme.toDay) : t(ui.theme.toNight)

  return (
    <button type="button" className="icon-button" onClick={toggleTheme} aria-label={label} title={label}>
      <PixelIcon name={theme === 'night' ? 'sun' : 'moon'} />
    </button>
  )
}
