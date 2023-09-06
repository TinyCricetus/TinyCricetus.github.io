import { Subject } from 'rxjs'

const _particleEvent = new Subject<void>()
export const particleEvent = _particleEvent.asObservable()

let currentImage = ''
export function triggerParticleChange(image: string) {
  currentImage = image
  _particleEvent.next()
}

export function getCurrentImage() {
  return currentImage
}
