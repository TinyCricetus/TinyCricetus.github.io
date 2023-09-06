'use client'

import { triggerParticleChange } from 'components/particle'
import styles from './header.module.css'

const navItems = [
  {
    name: '璃月',
    particleImage: '/images/6.webp'
  },
  {
    name: '蒙德',
    particleImage: '/images/2.webp'
  },
  {
    name: '稻妻',
    particleImage: '/images/7.webp'
  },
  {
    name: '须弥',
    particleImage: '/images/4.webp'
  },
  {
    name: '枫丹',
    particleImage: '/images/3.webp'
  }
]

export function Header() {
  return (
    <div className={styles.header} onMouseLeave={() => triggerParticleChange('')}>
      {
        navItems.map(item => {
          return (
            <div
              onMouseEnter={() => triggerParticleChange(item.particleImage)}
              className={styles['header-item']}
              key={item.name}
            >
              {item.name}
            </div>
          )
        })
      }
    </div>
  )
}