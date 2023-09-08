import './global.css'
import { Header } from '../components'

interface LayoutConfig {
  children: React.ReactNode
}

export default function RootLayout(config: LayoutConfig) {
  return (
    <html lang="en">
      <body>
        <Header />
        {config.children}
      </body>
    </html>
  )
}