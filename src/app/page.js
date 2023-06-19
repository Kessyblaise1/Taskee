import styles from './page.module.css'
import Aside from '@/components/Aside/_layout'

export default function Home() {
  return (
    <main className={styles.main}>
      <Aside />
    </main>
  )
}
