// Geçici önizleme: dil geçişini gerçek veriyle denemek için.
// 4. adımda yerini Navbar ve Hero bileşenleri alacak.

import { LanguageToggle } from './components/LanguageToggle.jsx'
import { profile } from './data/profile.js'
import { projects } from './data/projects.js'
import { useLanguage } from './i18n/useLanguage.js'
import { ui } from './i18n/ui.js'

const windowStyle = {
  background: 'var(--color-window)',
  border: 'var(--border-width) solid var(--color-border)',
  boxShadow: 'var(--shadow-pixel)',
  marginTop: 'var(--space-md)',
}

const titlebarStyle = {
  background: 'var(--color-titlebar)',
  color: 'var(--color-on-titlebar)',
  fontFamily: 'var(--font-heading)',
  fontSize: '0.625rem',
  padding: '0.5rem 0.75rem',
  borderBottom: 'var(--border-width) solid var(--color-border)',
}

function App() {
  const { t } = useLanguage()
  const project = projects[0]

  return (
    <main style={{ maxWidth: 'var(--content-width)', margin: '0 auto', padding: 'var(--space-lg) var(--space-sm)' }}>
      <LanguageToggle />
      <h1 style={{ marginTop: 'var(--space-md)' }}>
        {t(ui.hero.greeting)} {profile.name}
      </h1>
      <h2>{t(profile.title)}</h2>
      <p style={{ color: 'var(--color-ink-soft)' }}>{t(profile.tagline)}</p>

      <section style={windowStyle}>
        <div style={titlebarStyle}>{project.id}.exe</div>
        <div style={{ padding: 'var(--space-sm)' }}>
          <h3>{project.title}</h3>
          <p>
            <strong>{t(ui.project.problem)}:</strong> {t(project.problem)}
          </p>
          <p>
            <strong>{t(ui.project.solution)}:</strong> {t(project.solution)}
          </p>
          <span
            style={{
              background: 'var(--color-secondary)',
              color: 'var(--color-on-secondary)',
              padding: '0.1rem 0.75rem',
              border: '2px solid var(--color-border)',
            }}
          >
            {t(ui.status[project.status])}
          </span>
        </div>
      </section>
    </main>
  )
}

export default App
