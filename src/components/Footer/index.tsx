import styles from './styles.module.scss'
import React from 'react'
import { Logo } from '../../../public/images/logos'

const Footer = () => {

  return (
    <footer className={styles._footerContainer}>
      <div className={styles._footer}>

        <div className={styles._logo} >
          <Logo color='#fff' />
        </div>

        <div className={styles.content}>
          <div className={styles.links}>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
