'use client'

import { useEffect, useRef } from 'react'
import styles from './particle.module.css'
import { ImageParticle } from 'text-particle'
import { getCurrentImage, particleEvent } from '.'

export function Particle() {
  const container = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    let currentImage = '/images/1.png'

    const images = Array.from({ length: 7 }).map((_, i) => {
      return `/images/${i + 1}.png`
    })

    const particle = new ImageParticle(container.current!, {
      source: currentImage,
      autoFit: true,
      color: '#FFFFFF',
      particleGap: 6,
      particleRadius: 1,
      showMouseCircle: true,
      enableContinuousEasing: true,
      // enableWebGL: true,
      pixelFilter: (r, g, b, a) => {
        return a > 0
      }
    })

    particle.render()

    const DELAY = 10000
    let index = 0
    let timer: any = null
    const animate = () => {
      timer = setTimeout(() => {
        index = (index + 1) % images.length
        particle.transitionTo(images[index])

        animate()
      }, DELAY)
    }

    const stop = () => {
      clearTimeout(timer)
    }

    animate()

    const subscription = particleEvent.subscribe(() => {
      currentImage = getCurrentImage()

      if (currentImage) {
        stop()
        particle.transitionTo(currentImage)
      } else {
        animate()
      }
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  return (
    <div ref={container} className={styles.container}></div>
  )
}