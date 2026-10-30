import { useLanguage } from '../i18n/useLanguage.js'
import { ui } from '../i18n/ui.js'
import { PixelIcon } from './PixelIcon.jsx'

// Seçili dile göre TR ya da EN CV'yi indirir. PDF'ler `npm run cv` ile public/cv altına üretilir.
export function CvDownloadLink({ className = 'pixel-button' }) {
  const { lang, t } = useLanguage()
  const fileName = `pinar-karakoyun-cv-${lang}.pdf`

  return (
    <a className={className} href={`${import.meta.env.BASE_URL}cv/${fileName}`} download={fileName}>
      <PixelIcon name="download" size={16} />
      {t(ui.cv.download)}
      <span className="visually-hidden"> (PDF)</span>
    </a>
  )
}
