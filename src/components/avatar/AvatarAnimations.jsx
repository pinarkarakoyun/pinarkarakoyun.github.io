import { useEffect, useState } from 'react'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion.js'
import { PixelSprite } from '../pixel/PixelSprite.jsx'
import { blink, steam } from './avatarLayers.js'
import './AvatarAnimations.css'

const SCENE = { width: 64, height: 80 }
const STEAM_FRAME_MS = 260
const BLINK_CLOSED_MS = 140

// Avatar ızgarasındaki bir bölgeyi yüzdeyle konumlar: avatar hangi boyutta olursa olsun hizalı kalır
function layerStyle(x, y, pixels) {
  return {
    left: `${(x / SCENE.width) * 100}%`,
    top: `${(y / SCENE.height) * 100}%`,
    width: `${(pixels[0].length / SCENE.width) * 100}%`,
  }
}

function Steam({ animate }) {
  const [frame, setFrame] = useState(0)

  useEffect(() => {
    if (!animate) return
    const id = setInterval(() => setFrame((current) => (current + 1) % steam.frames.length), STEAM_FRAME_MS)
    return () => clearInterval(id)
  }, [animate])

  const pixels = steam.frames[frame]
  return (
    <div className="avatar-layer" style={layerStyle(steam.x, steam.y, pixels)}>
      <PixelSprite pixels={pixels} palette={steam.palette} />
    </div>
  )
}

// 2,5-5,5 saniyede bir göz kırpar; arada bir (yaklaşık 5'te 1) art arda iki kez
function Blink() {
  const [closed, setClosed] = useState(false)

  useEffect(() => {
    let timer
    const schedule = (delay, doubleBlink) => {
      timer = setTimeout(() => {
        setClosed(true)
        timer = setTimeout(() => {
          setClosed(false)
          if (doubleBlink) schedule(180, false)
          else schedule(2500 + Math.random() * 3000, Math.random() < 0.2)
        }, BLINK_CLOSED_MS)
      }, delay)
    }
    schedule(1800, false)
    return () => clearTimeout(timer)
  }, [])

  if (!closed) return null
  return (
    <div className="avatar-layer" style={layerStyle(blink.x, blink.y, blink.pixels)}>
      <PixelSprite pixels={blink.pixels} palette={blink.palette} />
    </div>
  )
}

// Hareket azaltma açıksa: buhar sabit durur, göz kırpma olmaz
export function AvatarAnimations() {
  const reducedMotion = usePrefersReducedMotion()
  return (
    <>
      <Steam animate={!reducedMotion} />
      {!reducedMotion && <Blink />}
    </>
  )
}
