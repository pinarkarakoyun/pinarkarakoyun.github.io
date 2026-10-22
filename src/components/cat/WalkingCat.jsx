import { useEffect, useRef, useState } from 'react'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion.js'
import { useLanguage } from '../../i18n/useLanguage.js'
import { ui } from '../../i18n/ui.js'
import { PixelSprite } from '../pixel/PixelSprite.jsx'
import { nextCatStep } from './catMovement.js'
import { catFrames, catPalette, heartPalette, heartPixels } from './catSprites.js'
import './WalkingCat.css'

// Avatar ızgarasına (64x80) göre ölçüler
const SCENE = { width: 64, height: 80 }
const CAT = { width: 17, height: 12 }
const DESK_Y = 71 // kedinin ayaklarının bastığı satırın bir altı
const BOUNDS = { min: 0, max: 33 } // 33'ten sonrası kupa
const STEP_MS = 160
const TAIL_MS = 380
const SIT_MS = 3200
const HEART_MS = 1300

export function WalkingCat() {
  const { t } = useLanguage()
  const reducedMotion = usePrefersReducedMotion()
  const [position, setPosition] = useState({ x: 12, direction: 1 })
  const [frame, setFrame] = useState(0)
  const [sitting, setSitting] = useState(false)
  const [hearts, setHearts] = useState([])
  const sitTimer = useRef(null)
  const nextHeartId = useRef(0)

  const walking = !sitting && !reducedMotion

  // Yürürken: her adımda bir piksel ilerle ve patileri değiştir
  useEffect(() => {
    if (!walking) return
    const id = setInterval(() => {
      setPosition((current) => nextCatStep(current, BOUNDS))
      setFrame((current) => 1 - current)
    }, STEP_MS)
    return () => clearInterval(id)
  }, [walking])

  // Otururken: kuyruğu salla (hareket azaltma açıksa sallamadan otur)
  useEffect(() => {
    if (walking || reducedMotion) return
    const id = setInterval(() => setFrame((current) => 1 - current), TAIL_MS)
    return () => clearInterval(id)
  }, [walking, reducedMotion])

  // Bileşen kaldırılırsa bekleyen oturma zamanlayıcısını temizle
  useEffect(() => () => clearTimeout(sitTimer.current), [])

  function handlePet() {
    setSitting(true)
    clearTimeout(sitTimer.current)
    sitTimer.current = setTimeout(() => setSitting(false), SIT_MS)

    const id = nextHeartId.current++
    setHearts((current) => [...current, id])
    setTimeout(() => setHearts((current) => current.filter((heart) => heart !== id)), HEART_MS)
  }

  const sprite = walking ? (frame ? catFrames.walkB : catFrames.walkA) : frame ? catFrames.sitB : catFrames.sitA

  return (
    <button
      type="button"
      className={`walking-cat${position.direction < 0 ? ' walking-cat--left' : ''}`}
      style={{
        left: `${(position.x / SCENE.width) * 100}%`,
        top: `${((DESK_Y - CAT.height) / SCENE.height) * 100}%`,
        width: `${(CAT.width / SCENE.width) * 100}%`,
      }}
      onClick={handlePet}
      aria-label={t(ui.cat.pet)}
      title={t(ui.cat.pet)}
    >
      <PixelSprite pixels={sprite} palette={catPalette} className="walking-cat__sprite" />
      {hearts.map((id) => (
        <PixelSprite key={id} pixels={heartPixels} palette={heartPalette} className="walking-cat__heart" />
      ))}
    </button>
  )
}
