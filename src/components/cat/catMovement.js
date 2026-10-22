// Kedinin bir sonraki adımı. Saf fonksiyon: React'ten bağımsız, kolayca test edilebilir.
//   position:  { x, direction }  x = avatar ızgarasındaki piksel, direction = 1 (sağ) / -1 (sol)
//   bounds:    { min, max }      kedinin sol kenarının gidebileceği aralık
// Sınırı geçecekse o adımda yerinde kalıp arkasını döner, sonraki adımda geri yürür.
export function nextCatStep({ x, direction }, { min, max }) {
  const nextX = x + direction
  if (nextX < min || nextX > max) return { x, direction: -direction }
  return { x: nextX, direction }
}
