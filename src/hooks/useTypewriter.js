import { useEffect, useState } from 'react'

// Metni döngüde harf harf yazar ve siler: yaz → bekle → sil → bekle → tekrar.
// enabled false ise (ör. hareket azaltma açık) metnin tamamını hemen döndürür.
export function useTypewriter(text, { typeMs = 90, deleteMs = 50, holdMs = 2500, pauseMs = 600, enabled = true } = {}) {
  const [length, setLength] = useState(enabled ? 0 : text.length)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (!enabled) return

    let delay
    let next
    if (!deleting && length < text.length) {
      delay = typeMs
      next = () => setLength(length + 1)
    } else if (!deleting) {
      delay = holdMs // tamamı yazıldı: biraz okunsun
      next = () => setDeleting(true)
    } else if (length > 0) {
      delay = deleteMs
      next = () => setLength(length - 1)
    } else {
      delay = pauseMs // tamamen silindi: kısa bir boşluk
      next = () => setDeleting(false)
    }

    const id = setTimeout(next, delay)
    return () => clearTimeout(id)
  }, [enabled, deleting, length, text, typeMs, deleteMs, holdMs, pauseMs])

  return enabled ? text.slice(0, length) : text
}
