import { useContext } from 'react'
import { LanguageContext } from './languageContext.js'
import { translate } from './translate.js'

// Bileşenlerde kullanım:
//   const { lang, setLang, t } = useLanguage()
//   <h2>{t(ui.sections.projects)}</h2>
export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage, LanguageProvider içinde kullanılmalı')
  }
  const t = (value) => translate(value, context.lang)
  return { ...context, t }
}
