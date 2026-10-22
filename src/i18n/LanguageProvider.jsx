import { useEffect, useState } from 'react'
import { LanguageContext } from './languageContext.js'
import { LANGUAGES, detectBrowserLanguage } from './translate.js'

const STORAGE_KEY = 'portfolio-lang'

// Başlangıç dili: daha önce seçilmişse o, yoksa tarayıcı dili.
// localStorage gizli pencerede veya kapalıyken hata verebilir, bu yüzden try/catch.
function getInitialLanguage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (LANGUAGES.includes(saved)) return saved
  } catch {
    // Kayıt okunamadı, tarayıcı diline geç
  }
  return detectBrowserLanguage(navigator.languages ?? [navigator.language])
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLanguage)

  // Dil değişince <html lang> özelliğini güncelle (ekran okuyucular ve arama motorları için)
  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  function changeLanguage(next) {
    setLang(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // Kaydedilemezse sadece bu ziyaret için geçerli olur
    }
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang: changeLanguage }}>{children}</LanguageContext.Provider>
  )
}
