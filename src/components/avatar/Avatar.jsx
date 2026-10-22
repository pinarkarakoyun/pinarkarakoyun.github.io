import { PixelSprite } from '../pixel/PixelSprite.jsx'
import { palette, pixels } from './avatarPixels.js'

export function Avatar({ title }) {
  return <PixelSprite pixels={pixels} palette={palette} className="avatar" title={title} />
}
