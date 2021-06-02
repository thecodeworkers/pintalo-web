import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { setMenuShow, modalClose } from '@store/actions'
import { GeneralButton } from '@components'
import { ToggleIcon } from './elements'
import { Logo } from '../../../public/images/logos'
import styles from './styles.module.scss'

const DesktopMenu = ({ navigation, closeMenu }) => (
  <>
    <div className={styles._container}>
      <div className={styles._topLinks}>
        <ul className={styles._list}>
          <li> Menú </li>
          <li onClick={() => navigation('/')}> Home </li>
          <li onClick={() => navigation('/about-us')}> Pintalo </li>
          <li onClick={() => navigation('/shop')}> Shop </li>
          <li onClick={() => navigation('/inspo')}> Inspirate </li>
          <li onClick={() => navigation('/painters')}> Pintores </li>
        </ul>

        <div onClick={closeMenu}>
          <img src='/images/icons/close.svg' alt='close' ></img>
        </div>

      </div>
      <div className={styles._bottomLinks}>
        <div>
          <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'>
            <img src='/images/logos/instagram.svg' alt='instagram' ></img>
          </a>

          <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer'>
            <img src='/images/logos/facebook.svg' alt='facebook'></img>
          </a>

          <a href='https://www.twitter.com/' target='_blank' rel='noopener noreferrer'>
            <img src='/images/logos/twitter.svg' alt='twitter'></img>
          </a>
        </div>

        <p>©CopyrightPintalo.C.A</p>
      </div>
    </div>

    <div className={styles._line}></div>
    <div className={styles._bubbleOne}></div>
    <div className={styles._bubbleTwo}></div>
  </>
)

const MobileMenu = ({ navigation, closeMenu }) => {
  const dispatch = useDispatch()

  return (
    <div className={styles._menuContainer}>
      <div className={styles._header}>
        <div onClick={closeMenu}>
          <ToggleIcon />
        </div>
        <div className={styles._logoParent} onClick={() => navigation('/')}>
          <Logo color='#FFFFFF' />
        </div>
      </div>
      <div className={styles._listContainer}>
        <ul className={styles._responsiveList}>
          <li onClick={() => navigation('/')}>Home</li>
          <hr className={styles._separator}></hr>

          <li onClick={() => navigation('/about-us')}>Pintalo</li>
          <hr className={styles._separator}></hr>

          <li onClick={() => navigation('/shop')}>Shop</li>
          <hr className={styles._separator}></hr>

          <li onClick={() => navigation('/inspo')}>Inspirate</li>
          <hr className={styles._separator}></hr>

          <li onClick={() => navigation('/painters')}>Pintores</li>
        </ul>
      </div>
      <div className={styles._buttonContainer}>
        <GeneralButton backgroundColor="#FFFFFF" textColor={'#fff'} bold={false} method={() => navigation('/register')} large="2.2rem" adjustWidth>
          <p className={styles._registerTitle}>Registrate</p>
        </GeneralButton>

        <GeneralButton
          backgroundColor="#FDCA40"
          textColor={'#fff'}
          bold={false}
          method={() => dispatch(modalClose(true))}
          large="2.2rem"
          adjustWidth
        >
          <p>Contacto</p>
        </GeneralButton>

        <div className={styles._socialMediaContainer}>
          <div className={styles._socialMedia}>
            <img src='/images/logos/instagram.svg' width={15} />
            <img src='/images/logos/facebook.svg' width={15} />
            <img src='/images/logos/twitter.svg' width={15} />
          </div>
        </div>
      </div>

      <div className={styles._footer}>
        <p>©CopyrightPintalo.C.A</p>
        <div className={styles._logoContainer}>
          <div className={styles._logo}>
            <a href='https://www.thecodeworkers.com' >
              <img src='/images/logos/tcw-logo.svg' />
            </a>
          </div>
          <div className={styles._logo}>
            <img src='/images/logos/banana-logo.svg' />
          </div>
        </div>
      </div>
    </div>
  )
}

const Menu = ({ showMenu }) => {
  const dispatch = useDispatch()
  const router = useRouter()

  useEffect(() => {
    const element = document.querySelector('#menu');
    element.addEventListener('touchmove', (e) => { e.preventDefault() });
    return () => { element.removeEventListener('touchmove', () => { }) }
  }, []);

  const returnStyles = () => {
    if (showMenu === 0) return styles._staticMenu
    if (showMenu === 1) return styles._mainMenu
    if (showMenu === 2) return styles._reduceMenu
  }

  const navigation = (route) => {
    if (router.pathname != route) {
      router.push(route)
      dispatch(setMenuShow({ showMenu: 2 }))
    }
  }

  const closeMenu = () => dispatch(setMenuShow({ showMenu: 2 }))

  return (
    <div className={returnStyles()}>
      <div className={styles._desktopMenu}>
        <DesktopMenu
          navigation={navigation}
          closeMenu={closeMenu}
        />
      </div>

      <div className={styles._mobileMenu} id="menu">
        <MobileMenu
          navigation={navigation}
          closeMenu={closeMenu}
        />
      </div>
    </div>
  )
}

export default Menu
