// Geçici stil önizlemesi: palet, fontlar ve pencere görünümünü görmek için.
// 4. adımda yerini Navbar ve Hero bileşenleri alacak.

const badges = [
  { name: 'Tamamlandı', bg: 'var(--color-accent)', fg: 'var(--color-on-accent)' },
  { name: 'Devam ediyor', bg: 'var(--color-secondary)', fg: 'var(--color-on-secondary)' },
]

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
  return (
    <main style={{ maxWidth: 'var(--content-width)', margin: '0 auto', padding: 'var(--space-lg) var(--space-sm)' }}>
      <h1>Merhaba, ben Pınar</h1>
      <h2>Gerçek problemlere çözüm</h2>
      <p style={{ color: 'var(--color-ink-soft)' }}>
        Bu sayfa geçici bir stil önizlemesi. Türkçe karakter testi: ığüşöç İĞÜŞÖÇ
      </p>

      <section style={windowStyle}>
        <div style={titlebarStyle}>proje_01.exe</div>
        <div style={{ padding: 'var(--space-sm)' }}>
          <h3>Mustan Tailoring</h3>
          <p>Terzi dükkânı için web sitesi ve sipariş takibi.</p>
          <div style={{ display: 'flex', gap: 'var(--space-xs)', flexWrap: 'wrap' }}>
            {badges.map((b) => (
              <span
                key={b.name}
                style={{ background: b.bg, color: b.fg, padding: '0.1rem 0.75rem', border: '2px solid var(--color-border)' }}
              >
                {b.name}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
