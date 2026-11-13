import { useEffect } from 'react'
import { usePrefersReducedMotion } from './usePrefersReducedMotion.js'

// Hero dışındaki bölüm başlıklarını ve pencereleri, ekrana girdiklerinde belirtir.
// - Gizleme JavaScript ile eklenir: JS çalışmazsa içerik zaten görünür kalır.
// - Hareket azaltma açıksa hiçbir şey gizlenmez.
// - Sonradan eklenen öğeler (ör. filtre değişince gelen kartlar) bu sınıfı almaz, direkt görünür.
// dialog hariç: vaka çalışması penceresi kapalıyken ekrana hiç girmez, gizli kalırdı
const SELECTOR =
  'main > section:not(.hero) :is(.section__title, .experience__subtitle, .project-filters, .window:not(dialog))'

export function useScrollReveal() {
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (reducedMotion) return

    const elements = [...document.querySelectorAll(SELECTOR)]
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('is-revealed')
          observer.unobserve(entry.target) // bir kez belirmesi yeterli
        }
      },
      { rootMargin: '0px 0px -10% 0px' }, // öğe ekranın alt kısmına biraz girince
    )

    for (const element of elements) {
      // Aynı kapsayıcıdaki komşular sırayla gelsin (ör. yan yana iki kart)
      const index = [...element.parentElement.children].indexOf(element)
      element.style.setProperty('--reveal-delay', `${(index % 3) * 80}ms`)
      element.classList.add('reveal')
      observer.observe(element)
    }

    return () => {
      observer.disconnect()
      for (const element of elements) element.classList.remove('reveal', 'is-revealed')
    }
  }, [reducedMotion])
}
