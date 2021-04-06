import { useSelector } from 'react-redux'
import styles from './styles.module.scss'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { setMenuShow } from '../../store/actions'

const Menu = () => {

  const dispatch = useDispatch()
  const router = useRouter()
  const { showMenu } = useSelector((state: any) => state.intermitence)

  const returnStyles = () => {
    if (showMenu === 0) return styles._staticMenu
    if (showMenu === 1) return styles._mainMenu
    if (showMenu === 2) return styles._reduceMenu
  }

  const navigation = (route) => {
    if (router.pathname != route)  {
      router.push(route)
      dispatch(setMenuShow({ showMenu: 0 }))
    }
  }

  const closeMenu = () => dispatch(setMenuShow({ showMenu: 2 }))

  return (
    <div className={returnStyles()}>
      <div className={styles._container}>
        <div className={styles._topLinks}>
          <ul className={styles._list}>
            <li> Menu </li>
            <li onClick={() => navigation('/')}> Home </li>
            <li onClick={() => navigation('/about-us')}> Pintalo </li>
            <li onClick={() => navigation('/shop')}> Shop </li>
            <li onClick={() => navigation('/inspo')}> Inspirate </li>
            <li onClick={() => navigation('/painters')}> Pintores </li>
          </ul>

          <div onClick={closeMenu}>
            <img src='images/icons/close.svg' alt='close' ></img>
          </div>

        </div>
        <div className={styles._bottomLinks}>
          <div>
            <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'>
              <img src='images/icons/instagram.svg' alt='instagram' ></img>
            </a>

            <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer'>
              <img src='images/icons/facebook.svg' alt='facebook'></img>
            </a>

            <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer'>
              <img src='images/icons/twitter.svg' alt='twitter'></img>
            </a>
          </div>

          <p>©CopyrightPintalo.C.A</p>
        </div>
      </div>

      <div className={styles._line}></div>
      <div className={styles._bubbleOne}></div>
      <div className={styles._bubbleTwo}></div>
    </div>
  )
}

export default Menu
