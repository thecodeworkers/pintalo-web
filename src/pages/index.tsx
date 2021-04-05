import Head from 'next/head'
import styles from '@styles/Home.module.scss'
import { Footer } from '../components'

export default function Home() {
  return (
    <div className={styles.container}>
      <Footer />
    </div>
  )
}
