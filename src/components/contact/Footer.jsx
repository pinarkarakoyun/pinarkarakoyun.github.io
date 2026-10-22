import { profile } from '../../data/profile.js'

// Yıl, sayfa yüklenirken bir kez hesaplanır; render'ı saf (her seferinde aynı) tutar
const CURRENT_YEAR = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="footer">
      <p>
        © {CURRENT_YEAR} {profile.name}
      </p>
    </footer>
  )
}
