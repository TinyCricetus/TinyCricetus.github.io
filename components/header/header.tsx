'use client'

import { triggerParticleChange } from 'components/particle'
import styles from './header.module.css'
import { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { IMAGES } from 'components/shared'

const navItems = [
  {
    name: '璃月',
    particleImage: IMAGES[5]
  },
  {
    name: '蒙德',
    particleImage: IMAGES[1]
  },
  {
    name: '稻妻',
    particleImage: IMAGES[6]
  },
  {
    name: '须弥',
    particleImage: IMAGES[3]
  },
  {
    name: '枫丹',
    particleImage: IMAGES[2]
  }
]

export function Header() {
  const router = useRouter()

  const listRef = useRef<HTMLDivElement | null>(null)
  const [floatStyle, updateFloatStyle] = useState({
    top: '0px',
    left: '0px',
    width: '0px',
    height: '0px',
    opacity: 0,
    backgroundColor: 'gray'
  })

  function onMouseEnter(index: number) {
    triggerParticleChange(navItems[index].particleImage)

    // float bg
    const list = listRef.current
    const target = list?.children.item(index)
    if (list && target) {
      const listRect = list.getBoundingClientRect()
      const targetRect = target.getBoundingClientRect()
      const { height, width } = targetRect

      updateFloatStyle({
        ...floatStyle,
        width: width + 'px',
        height: height + 'px',
        opacity: 0.2,
        backgroundColor: `var(--color-${index})`,
        top: '0px',
        left: (targetRect.left - listRect.left) + 'px',
      })
    }
  }

  function onMouseLeave() {
    triggerParticleChange('')

    updateFloatStyle({
      ...floatStyle,
      opacity: 0,
      backgroundColor: 'gray'
    })
  }

  function onClickNavItem(index: number) {
    if (index % 2 === 0) {
      router.push('/description')
    } else {
      router.push('/')
    }
  }

  return (
    <div
      className={styles.main}
      onMouseLeave={onMouseLeave}
    >
      <div
        className={styles.float_bg}
        style={floatStyle}
      ></div>
      <div ref={listRef} className={styles.nav_items}>
        {
          navItems.map((item, index) => {
            return (
              <div
                onMouseEnter={() => onMouseEnter(index)}
                onClick={() => onClickNavItem(index)}
                className={styles.nav_item}
                key={item.name}
              >
                {item.name}
              </div>
            )
          })
        }
      </div>
    </div>
  )
}