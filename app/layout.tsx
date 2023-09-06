import './global.css'

interface LayoutConfig {
  children: React.ReactNode
}

const navItems = [
  {
    name: '璃月'
  },
  {
    name: '蒙德'
  },
  {
    name: '稻妻'
  },
  {
    name: '须弥'
  },
  {
    name: '枫丹'
  }
]

export default function RootLayout(config: LayoutConfig) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="header">
            {
              navItems.map(t => {
                return (
                  <div className="header-item" key={t.name}>{t.name}</div>
                )
              })
            }
          </div>
          {config.children}
        </div>
      </body>
    </html>
  )
}