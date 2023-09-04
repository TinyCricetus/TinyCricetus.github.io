import { Metadata } from 'next'
import { Particle } from '../components/particle'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '仓鼠庭'
}

export default function Page() {
  return (
    <div>
      <Link href="/dashboard">navigate</Link>
      <Particle></Particle>
    </div>
  )
}