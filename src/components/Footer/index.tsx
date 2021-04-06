import { useState } from "react";
import styles from './styles.module.scss'
import { Logo } from '../../../public/images/logos'
import ShortButton from '../ShortButton'
import ContactModal from '../ContactModal'
import Link from 'next/link'

const Footer = () => {

  const [showModal, setShowModal] = useState(false);

  return (
    <footer className={styles._footerContainer}>
      <div className={styles._footer}>

        <div className={styles._logoMain} >
          <Logo color='#fff' />
        </div>

        <div className={styles._content}>
          <div className={styles._leftContainer}>

            <div className={styles._linksContainer}>
              <Link href='/inspo'>
                <p className={styles._link} >Inspirate</p>
              </Link>
              <Link href='/about-us'>
                <p className={styles._link}>Pintalo</p>
              </Link>
              <Link href='/painters'>
                <p className={styles._link}>Pintores</p>
              </Link>
              <p className={styles._link}>Promociones</p>
            </div>


            <div className={styles._buttonContainer}>
              <ShortButton backgroundColor={'#FDCA40'} textColor={'#262833'} bold={true} text={'Contácto'} method={() => setShowModal(true)} />
            </div>

            <ContactModal onClose={() => setShowModal(false)} show={showModal} />

            <div className={styles._socialMedia}>
              <img src='images/logos/instagram.svg' width={15} />
              <img src='images/logos/facebook.svg' width={15} />
              <img src='images/logos/twitter.svg' width={15} />
            </div>
          </div>
          <div className={styles._rightContainer}>
            <p className={styles._speechTitle}>Política de privacidad</p>

            <p className={styles._speechText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>

            <p className={styles._speechTitle}>Términos y condiciones </p>

            <p className={styles._speechText}>Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua</p>

            <div className={styles._copyrightContainer}>
              <div className={styles._logos}>
                <div className={styles._logo}>
                  <a href='https://www.thecodeworkers.com' >
                    <img src='images/logos/tcw-logo.svg' />
                  </a>
                </div>

                <div className={styles._logo}>
                  <img src='images/logos/banana-logo.svg' />
                </div>

              </div>
              <p className={styles._speechTitle}>©CopyrightPintalo.C.A</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
