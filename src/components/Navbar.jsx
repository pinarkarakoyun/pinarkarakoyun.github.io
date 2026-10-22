import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../i18n/useLanguage.js'
import { ui } from '../i18n/ui.js'
import { LanguageToggle } from './LanguageToggle.jsx'
import { PixelIcon } from './PixelIcon.jsx'
import { ThemeToggle } from './ThemeToggle.jsx'
import { WindowTitle } from './WindowTitle.jsx'
import './Navbar.css'

// Menüdeki bölümler: id, sayfadaki <section id="..."> ile eşleşir
const sections = ['about', 'projects', 'experience', 'skills', 'contact']

export function Navbar() {
  const { t } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef(null)
  const mobileMenuRef = useRef(null)

  // Mobil menü açılınca klavye odağı ilk linke geçsin;
  // Escape ile kapanınca menü düğmesine geri dönsün (kullanıcı nerede kaldığını kaybetmesin)
  useEffect(() => {
    if (!menuOpen) return
    mobileMenuRef.current?.querySelector('a')?.focus()
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  const links = sections.map((id) => (
    <li key={id}>
      <a href={`#${id}`} onClick={() => setMenuOpen(false)}>
        {t(ui.nav[id])}
      </a>
    </li>
  ))

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <a href="#top" className="navbar__logo">
          PINAR<span>.exe</span>
        </a>

        <nav aria-label={t(ui.menu.main)} className="navbar__desktop">
          <ul className="navbar__links">{links}</ul>
        </nav>

        <div className="navbar__actions">
          <LanguageToggle />
          <ThemeToggle />
          <button
            ref={menuButtonRef}
            type="button"
            className="icon-button navbar__menu-button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? t(ui.menu.close) : t(ui.menu.open)}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <PixelIcon name={menuOpen ? 'close' : 'menu'} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav ref={mobileMenuRef} id="mobile-menu" aria-label={t(ui.menu.main)} className="window navbar__mobile">
          <WindowTitle>{t(ui.menu.title)}</WindowTitle>
          <ul className="navbar__mobile-links">{links}</ul>
        </nav>
      )}
    </header>
  )
}
