import './global.css'

interface LayoutConfig {
  children: React.ReactNode
}

export default function RootLayout(config: LayoutConfig) {
  return (
    <html lang="en">
      <body>{config.children}</body>
    </html>
  )
}