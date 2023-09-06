import './global.css'
import { Header } from '../components'

interface LayoutConfig {
  children: React.ReactNode
}

export default function RootLayout(config: LayoutConfig) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <Header />
          {config.children}
        </div>
      </body>
    </html>
  )
}