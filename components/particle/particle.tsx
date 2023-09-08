'use client'

import { useEffect, useRef } from 'react'
import styles from './particle.module.css'
import { ImageParticle } from 'text-particle'
import { getCurrentImage, particleEvent } from '.'
import { Subscription, debounceTime, fromEvent } from 'rxjs'

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
      particleGap: 5,
      particleRadius: 2,
      showMouseCircle: true,
      enableContinuousEasing: true,
      enableWebGL: true,
      moveProportionPerFrame: 60
    })

    particle.render()

    const DELAY = 12000
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

    const subscriptions: Subscription[] = []

    subscriptions.push(
      particleEvent.subscribe(() => {
        currentImage = getCurrentImage()

        if (currentImage) {
          stop()
          particle.transitionTo(currentImage)
        } else {
          animate()
        }
      }),

      fromEvent(window, 'resize').pipe(debounceTime(100)).subscribe(() => {
        particle.resize()
      })
    )

    return () => {
      subscriptions.forEach(s => s.unsubscribe())
    }
  }, [])

  return (
    <div className={styles.container}>
      <div ref={container} className={styles.particle_root}></div>
    </div>
  )
}