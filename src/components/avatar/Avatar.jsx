import { palette, pixels } from './avatarPixels.js'

// Izgarayı SVG'ye çevirir. Aynı renkteki yan yana pikselleri tek bir dikdörtgende birleştirir:
// 64x80 = 5120 piksel yerine birkaç yüz <rect> çizilir, tarayıcı daha az yorulur.
function toRuns(rows) {
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

const runs = toRuns(pixels)
const width = pixels[0].length
const height = pixels.length

export function Avatar({ title }) {
  return (
    <svg
      className="avatar"
      viewBox={`0 0 ${width} ${height}`}
      shapeRendering="crispEdges"
      role="img"
      aria-label={title}
    >
      {runs.map(({ x, y, width: w, color }) => (
        <rect key={`${x}-${y}`} x={x} y={y} width={w} height={1} fill={color} />
      ))}
    </svg>
  )
}
