import './global.css'

interface LayoutConfig {
  children: React.ReactNode
}

export default function RootLayout(config: LayoutConfig) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="nav">
            {
              ['导航', '导航', '导航', '导航'].map(t => {
                return (
                  <div className="nav-item">{t}</div>
                )
              })
            }
          </div>
          <div>
            {config.children}
          </div>
        </div>
      </body>
    </html>
  )
}