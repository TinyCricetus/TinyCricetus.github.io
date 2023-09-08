import styles from './description.module.css'

interface LayoutConfig {
  children: React.ReactNode
}

export default function RootLayout(config: LayoutConfig) {
  return (
    <div className={styles.root}>
      {config.children}
    </div>
  )
}