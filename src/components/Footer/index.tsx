import { useState } from "react";
import { useRouter } from 'next/router'
import { Logo } from '../../../public/images/logos'
import { ShortButton, GeneralModal } from '@components'
import styles from './styles.module.scss'

const Footer = () => {

  const [showModal, setShowModal] = useState(false)
  const router = useRouter()

  const navigation = (route) => {
    if (router.pathname != route) router.push(route)
  }

  return (
    <footer className={styles._footerContainer}>
      <div className={'_main'}>

        <div className={styles._logoMain} >
          <Logo color='#fff' />
        </div>

        <div className={styles._content}>
          <div className={styles._leftContainer}>

            <div className={styles._linksContainer}>
              <p className={styles._link} onClick={() => navigation('/inspo')}>Inspirate</p>
              <p className={styles._link} onClick={() => navigation('/about-us')}>Pintalo</p>
              <p className={styles._link} onClick={() => navigation('/painters')}>Pintores</p>
              <p className={styles._link}>Promociones</p>
            </div>

            <div className={styles._buttonContainer}>
              <ShortButton backgroundColor={'#FDCA40'} textColor={'#262833'} bold={true} text={'Contácto'} method={() => setShowModal(true)}/>
            </div>

            <GeneralModal onClose={() => setShowModal(false)} show={showModal} width={'60%'} title={'Enviar'}>
              <div className={styles._body}>
                <form className={styles._formContainer}>
                  <div className={styles._inputContainerRow}>
                    <input placeholder='Nombre' className={styles._inputRow} />
                    <input placeholder='Cargo' className={styles._input} />
                  </div>

                  <div className={styles._inputContainerColumn}>
                    <input placeholder='Apellido' className={styles._input} />
                    <input placeholder='Correo' className={styles._input} />
                  </div>

                  <textarea placeholder='Descripción' className={styles._textArea} />

                  <div className={styles._buttonContainer}>
                    <ShortButton backgroundColor={'#FDCA40'} textColor={'#262833'} bold={true} text={'Enviar'} method={() => setShowModal(false)}/>
                  </div>
                </form>
              </div>
            </GeneralModal>

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
