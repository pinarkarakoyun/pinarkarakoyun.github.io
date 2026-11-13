import { useEffect } from 'react'

// ↑ ↑ ↓ ↓ ← → ← → B A: klasik Nintendo hile kodu
const SEQUENCE = ['arrowup', 'arrowup', 'arrowdown', 'arrowdown', 'arrowleft', 'arrowright', 'arrowleft', 'arrowright', 'b', 'a']

// Kod sırayla yazılınca onUnlock'u çağırır. Yanlış bir tuş diziyi baştan başlatır
// (o tuş kodun ilk tuşuysa yeni bir deneme olarak sayılır).
export function useKonamiCode(onUnlock) {
  useEffect(() => {
    let position = 0

    function onKeyDown(event) {
      const key = event.key.toLowerCase()
      if (key === SEQUENCE[position]) {
        position++
        if (position === SEQUENCE.length) {
          position = 0
          onUnlock()
        }
      } else {
        position = key === SEQUENCE[0] ? 1 : 0
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onUnlock])
}
