import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { Logo } from '../../../public/images/logos'
import { GeneralButton } from '@components'
import { showModal, seletedReference } from '@store/actions'
import styles from './styles.module.scss'

const Footer = () => {
  const router = useRouter()
  const dispatch = useDispatch()

  const { scrollReference } = useSelector((state: any) => state)

  const navigation = (route, reference = null, key = '') => {

    if (router.pathname != route) {

      if (reference) dispatch(seletedReference({ [key]: { current: reference } }))
      router.push(route)
    }

    if (reference) {

      dispatch(seletedReference({
        [key]: {
          current: reference,
          [reference]: !scrollReference.homeReference[reference]
        }
      }))
    }
  }

  return (
    <>
      <footer className={styles._footerContainer}>
        <div className={'_main'}>
          <div className={styles._logoContainer}>
            <div className={styles._logoMain} >
              <Logo color='#fff' />
            </div>

            <div className={styles._mobileLogos}>
              <div className={styles._logos}>
                <div className={styles._logo}>
                  <a href='https://www.thecodeworkers.com' >
                    <img src='/images/logos/tcw-logo.svg' />
                  </a>
                </div>
                <div className={`${styles._logo} ${styles._separation}`}>
                  <img src='/images/logos/banana-logo.svg' />
                </div>
              </div>
            </div>
          </div>

          <div className={styles._content}>
            <div className={styles._leftContainer}>

              <div className={styles._linksContainer}>
                <p className={styles._link} onClick={() => navigation('/inspo')}>Inspirate</p>
                <p className={styles._link} onClick={() => navigation('/about-us')}>Píntalo</p>
                <p className={styles._link} onClick={() => navigation('/painters')}>Pintores</p>
                <p className={styles._link} onClick={() => navigation('/', 'promotions', 'homeReference')}>Promociones</p>
              </div>

              <div className={styles._buttonContainer}>
                <GeneralButton backgroundColor={'#FDCA40'} textColor={'#262833'} bold={true} method={() => dispatch(showModal('contact', true))}>
                  Contácto
                </GeneralButton>
              </div>

              <div className={styles._socialMediaContainer}>
                <div className={styles._socialMedia}>
                  <img src='/images/logos/instagram.svg' width={15} />
                  <img src='/images/logos/facebook.svg' width={15} />
                  <img src='/images/logos/twitter.svg' width={15} />
                </div>
                <div className={styles._titleContainer}>
                  <p className={styles._speechTitle}>©CopyrightPintalo.C.A</p>
                </div>
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
                      <img src='/images/logos/tcw-logo.svg' />
                    </a>
                  </div>
                  <div className={styles._logo}>
                    <img src='/images/logos/banana-logo.svg' />
                  </div>
                </div>
                <p className={styles._copyrightTitle}>©CopyrightPintalo.C.A</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
