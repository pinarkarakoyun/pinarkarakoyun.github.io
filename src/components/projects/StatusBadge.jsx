import { useLanguage } from '../../i18n/useLanguage.js'
import { ui } from '../../i18n/ui.js'
import { PixelIcon } from '../PixelIcon.jsx'
import './StatusBadge.css'

// Proje durumu → görünüm. Renkler StatusBadge.css'teki sınıflarda, metin ui.status'ta.
// Yeni bir durum eklenirse buraya bir satır, ui.js'e bir çeviri ve CSS'e bir renk eklenir.
const STATUS_STYLES = {
  done: { icon: 'check', className: 'status-badge--done' },
  prototype: { icon: 'flask', className: 'status-badge--prototype' },
  'in-progress': { icon: 'hourglass', className: 'status-badge--in-progress' },
  planning: { icon: 'note', className: 'status-badge--planning' },
}

export function StatusBadge({ status }) {
  const { t } = useLanguage()
  const style = STATUS_STYLES[status] ?? STATUS_STYLES.planning

  return (
    <span className={`status-badge ${style.className}`}>
      <PixelIcon name={style.icon} size={14} />
      {t(ui.status[status])}
    </span>
  )
}
