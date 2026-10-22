// Çeviri yardımcıları. React'ten bağımsız saf fonksiyonlar: kolayca test edilebilir.

export const LANGUAGES = ['tr', 'en']

// İlk ziyarette tarayıcı dilinden başlangıç dilini seçer:
// tercih listesinde Türkçe varsa 'tr', yoksa 'en'.
export function detectBrowserLanguage(browserLanguages = []) {
  const prefersTurkish = browserLanguages.some((code) => code.toLowerCase().startsWith('tr'))
  return prefersTurkish ? 'tr' : 'en'
}

// value iki şekilde gelebilir:
//   - düz metin ('Java')            → her dilde aynı, olduğu gibi döner
//   - çeviri nesnesi ({ tr, en })   → seçili dildeki metin döner
export function translate(value, lang) {
  if (value == null) return ''
  if (typeof value === 'string') return value

  const text = value[lang]
  if (text) return text

  // Eksik çeviri: ziyaretçi boş alan görmesin diye diğer dile düş,
  // geliştirirken de konsola uyarı yaz ki eksik fark edilsin.
  if (import.meta.env?.DEV) console.warn(`Eksik çeviri (${lang}):`, value)

  const otherLang = LANGUAGES.find((code) => code !== lang)
  return value[otherLang] ?? ''
}
