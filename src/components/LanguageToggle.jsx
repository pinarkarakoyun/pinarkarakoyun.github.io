import { useLanguage } from '../i18n/useLanguage.js'
import { LANGUAGES } from '../i18n/translate.js'
import { ui } from '../i18n/ui.js'
import './LanguageToggle.css'

// TR | EN düğmesi. Seçili dil aria-pressed ile işaretlenir (ekran okuyucular için).
export function LanguageToggle() {
  const { lang, setLang, t } = useLanguage()

  return (
    <div className="language-toggle" role="group" aria-label={t(ui.languageToggle.label)}>
      {LANGUAGES.map((code) => (
        <button
          key={code}
          type="button"
          className="language-toggle__button"
          aria-pressed={lang === code}
          onClick={() => setLang(code)}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
