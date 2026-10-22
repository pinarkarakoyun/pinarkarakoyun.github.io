// Win95 tarzı pencerenin başlık çubuğu: dosya adı + süs düğmeleri.
export function WindowTitle({ children }) {
  return (
    <div className="window__titlebar">
      {children}
      <span className="window__controls" aria-hidden="true">
        <span />
        <span />
      </span>
    </div>
  )
}
