import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion.js'
import { useTypewriter } from '../hooks/useTypewriter.js'
import './TypewriterText.css'

// Görsel olarak harf harf yazılan metin + yanıp sönen blok imleç.
// - Ekran okuyucular ve arama motorları metnin tamamını tek seferde görür (visually-hidden).
// - Henüz yazılmamış harfler silinmez, görünmez durur: metin baştan son hâliyle aynı yerlere
//   dizilir. Her kelime bölünmez bir parça olduğu için imleç kelimenin ortasında satırı kırmaz.
// - Hareket azaltma açıksa metin direkt tam görünür, imleç yanıp sönmez.
export function TypewriterText({ text }) {
  const reducedMotion = usePrefersReducedMotion()
  const typedLength = useTypewriter(text, { enabled: !reducedMotion }).length

  // Her kelimenin metindeki başlangıç konumu: önceki kelimeler + aralarındaki boşluklar
  const words = text.split(' ').map((word, index, all) => ({
    word,
    wordStart: all.slice(0, index).join(' ').length + (index > 0 ? 1 : 0),
  }))

  return (
    <span className="typewriter">
      <span className="visually-hidden">{text}</span>
      <span aria-hidden="true">
        {words.map(({ word, wordStart }, index) => {
          const shown = Math.min(Math.max(typedLength - wordStart, 0), word.length)
          // İmleç, yazılan son harfin hemen ardından gelir
          const cursorHere = typedLength >= wordStart && typedLength <= wordStart + word.length
          return (
            <span key={wordStart}>
              {index > 0 && ' '}
              <span className="typewriter__word">
                {word.slice(0, shown)}
                {cursorHere && <span className="typewriter__cursor" />}
                <span className="typewriter__rest">{word.slice(shown)}</span>
              </span>
            </span>
          )
        })}
      </span>
    </span>
  )
}
