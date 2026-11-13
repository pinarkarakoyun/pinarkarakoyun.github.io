import { useRef } from 'react'
import { useLanguage } from '../../i18n/useLanguage.js'
import { ui } from '../../i18n/ui.js'
import { PixelIcon } from '../PixelIcon.jsx'

// "Detayı oku" butonu + vaka çalışması penceresi.
// Tarayıcının <dialog> öğesi kullanılır: showModal() odağı pencerenin içinde tutar,
// Escape ile kapanır, kapanınca odak tekrar butona döner, arka plan tıklanamaz olur.
export function CaseStudyDialog({ project }) {
  const { t } = useLanguage()
  const dialogRef = useRef(null)
  const openButtonRef = useRef(null)
  const { id, title, caseStudy } = project
  const titleId = `${id}-case-title`

  // Kapat ve odağı "Detayı oku" butonuna geri ver (X ve dış alana tıklama için)
  function closeDialog() {
    dialogRef.current.close()
    openButtonRef.current.focus()
  }

  // Pencerenin dışındaki karartılmış alana tıklayınca kapansın
  function handleBackdropClick(event) {
    if (event.target === dialogRef.current) closeDialog()
  }

  return (
    <>
      <button
        ref={openButtonRef}
        type="button"
        className="pixel-button project-card__link"
        onClick={() => dialogRef.current.showModal()}
      >
        <PixelIcon name="note" size={16} />
        {t(ui.caseStudy.open)}
        <span className="visually-hidden">: {t(title)}</span>
      </button>

      {/* onClose: Escape ile kapanınca da odak butona dönsün (Safari'de tıklanan buton odak almaz) */}
      <dialog
        ref={dialogRef}
        className="case-study window"
        aria-labelledby={titleId}
        onClick={handleBackdropClick}
        onClose={() => openButtonRef.current?.focus()}
      >
        <div className="window__titlebar">
          {id}/case-study.txt
          <button
            type="button"
            className="case-study__close"
            onClick={closeDialog}
            aria-label={t(ui.caseStudy.close)}
          >
            <PixelIcon name="close" size={12} />
          </button>
        </div>

        <div className="window__body case-study__body">
          <h3 id={titleId}>{t(title)}</h3>

          <h4>{t(ui.caseStudy.approach)}</h4>
          <p>{t(caseStudy.approach)}</p>

          <h4>{t(ui.caseStudy[caseStudy.pointsTitle])}</h4>
          <ul>
            {t(caseStudy.points).map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>

          <h4>{t(ui.caseStudy.outcome)}</h4>
          <p>{t(caseStudy.outcome)}</p>

          <h4>{t(ui.caseStudy.different)}</h4>
          <p>{t(caseStudy.different)}</p>
        </div>
      </dialog>
    </>
  )
}
