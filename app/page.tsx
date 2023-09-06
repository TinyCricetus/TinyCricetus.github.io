import { Metadata } from 'next'
import { Particle } from '../components/particle'

export const metadata: Metadata = {
  title: '仓鼠庭'
}

export default function Page() {
  return (
    <div className="page-main">
      <Particle></Particle>
    </div>
  )
}