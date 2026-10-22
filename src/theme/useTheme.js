import { useEffect, useState } from 'react'

// Gece/gündüz teması.
// - Ziyaretçi düğmeye hiç basmadıysa sistem ayarı takip edilir (html'de data-theme yok).
// - Bastıysa seçimi localStorage'a yazılır ve html[data-theme] ile sistem ayarı ezilir.
// Sayfa açılırken kayıtlı temayı uygulayan küçük betik index.html'de: React yüklenmeden
// önce çalışır, böylece gündüz seçen biri bir an gece ekranı görmez.

export const THEME_STORAGE_KEY = 'portfolio-theme'
const lightQuery = '(prefers-color-scheme: light)'

function readSavedTheme() {
  try {
    const saved = localStorage.getItem(THEME_STORAGE_KEY)
    return saved === 'day' || saved === 'night' ? saved : null
  } catch {
    return null
  }
}

function systemTheme() {
  return window.matchMedia(lightQuery).matches ? 'day' : 'night'
}

export function useTheme() {
  const [savedTheme, setSavedTheme] = useState(readSavedTheme)
  const [currentSystemTheme, setCurrentSystemTheme] = useState(systemTheme)

  // Kayıtlı seçim yoksa sistem ayarı değiştiğinde (ör. akşam otomatik koyu mod) güncelle
  useEffect(() => {
    const media = window.matchMedia(lightQuery)
    const onChange = () => setCurrentSystemTheme(systemTheme())
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  // Kayıtlı seçimi html'e yansıt
  useEffect(() => {
    if (savedTheme) document.documentElement.dataset.theme = savedTheme
  }, [savedTheme])

  const theme = savedTheme ?? currentSystemTheme

  function toggleTheme() {
    const next = theme === 'night' ? 'day' : 'night'
    setSavedTheme(next)
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next)
    } catch {
      // Kaydedilemezse sadece bu ziyaret için geçerli olur
    }
  }

  return { theme, toggleTheme }
}
