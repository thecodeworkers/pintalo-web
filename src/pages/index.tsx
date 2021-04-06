import Head from 'next/head'
import styles from '@styles/Home.module.scss'
import { Footer, Navbar, Menu } from '../components'

export default function Home() {

  return (
    <div >
      <Navbar />
      <Menu />
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <Footer />
    </div>
  )
}
