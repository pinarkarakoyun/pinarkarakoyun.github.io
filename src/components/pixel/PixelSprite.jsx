// Metin ızgarasını (her karakter bir piksel) keskin kenarlı bir SVG'ye çevirir.
// Aynı renkteki yan yana pikseller tek bir dikdörtgende birleştirilir: örneğin avatarın
// 64x80 = 5120 pikseli yerine yaklaşık bin <rect> çizilir, tarayıcı daha az yorulur.

function toRuns(rows, palette) {
  const runs = []
  rows.forEach((row, y) => {
    let x = 0
    while (x < row.length) {
      const char = row[x]
      let end = x + 1
      while (end < row.length && row[end] === char) end++
      if (palette[char]) runs.push({ x, y, width: end - x, color: palette[char] })
      x = end
    }
  })
  return runs
}

// Aynı ızgara her render'da yeniden hesaplanmasın diye sonuçları sakla
const cache = new WeakMap()

function getRuns(pixels, palette) {
  if (!cache.has(pixels)) cache.set(pixels, toRuns(pixels, palette))
  return cache.get(pixels)
}

export function PixelSprite({ pixels, palette, className, title }) {
  const runs = getRuns(pixels, palette)
  const a11y = title ? { role: 'img', 'aria-label': title } : { 'aria-hidden': true }

  return (
    <svg
      className={className}
      viewBox={`0 0 ${pixels[0].length} ${pixels.length}`}
      shapeRendering="crispEdges"
      {...a11y}
    >
      {runs.map(({ x, y, width, color }) => (
        <rect key={`${x}-${y}`} x={x} y={y} width={width} height={1} fill={color} />
      ))}
    </svg>
  )
}
