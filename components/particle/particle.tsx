'use client'

import { useEffect, useRef } from 'react'
import styles from './particle.module.css'
import { ImageParticle, useRAF } from 'text-particle'

export function Particle() {
  const container = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const images = Array.from({ length: 7 }).map((_, i) => {
      return `/images/${i + 1}.webp`
    })

    const particle = new ImageParticle(container.current!, {
      source: '/images/1.webp',
      autoFit: true,
      color: '#FFFFFF',
      particleGap: 4,
      particleRadius: 2,
      showMouseCircle: true,
      enableContinuousEasing: true,
      enableWebGL: true,
      pixelFilter: (r, g, b, a) => {
        return (r < 255 && g < 255)
      }
    })

    particle.render()

    const DELAY = 10000
    let index = 0
    const animate = () => {
      setTimeout(() => {
        index = (index + 1) % images.length
        particle.transitionTo(images[index])

        animate()
      }, DELAY)
    }

    animate()
  }, [])

  return (
    <div ref={container} className={styles.container}></div>
  )
}