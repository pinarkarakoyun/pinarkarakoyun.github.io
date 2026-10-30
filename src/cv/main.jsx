import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CvPage } from './CvPage.jsx'
import './cv.css'

// Ayarlar adres satırından okunur:
//   ?lang=en                       → İngilizce (varsayılan: tr)
//   &phone=...&refName=...&...     → başvuru sürümü için kişisel bilgiler
// Kişisel bilgiler sadece `npm run cv` tarafından, yerel cv.private.json dosyasından eklenir;
// sitede yayınlanan sayfada yoktur.
const params = new URLSearchParams(window.location.search)
const lang = params.get('lang') === 'en' ? 'en' : 'tr'
const privateInfo = {
  phone: params.get('phone'),
  reference: params.get('refName')
    ? {
        name: params.get('refName'),
        title: params.get('refTitle'),
        contact: params.get('refContact'),
      }
    : null,
}

document.documentElement.lang = lang

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CvPage lang={lang} privateInfo={privateInfo} />
  </StrictMode>,
)
