import styles from './styles.module.scss'
import { Logo } from '../../../public/images/logos'
import { useSelector, useDispatch } from 'react-redux'
import { logout, setMenuShow } from '@store/actions'
import { useRouter } from 'next/router'
import { Menu } from '@components'

const Navbar = () => {
  const {
    intermitence: { showMenu },
    user: { isAuth }
  }  = useSelector((state: any) => state)

  const router = useRouter()
  const dispatch = useDispatch()

  const deployMenu = () => {
    if(showMenu === 1) return dispatch(setMenuShow({ showMenu: 2 }))
    dispatch(setMenuShow({ showMenu: 1 }))
  }

  const returnStyles = () => {
    if(showMenu === 0) return styles._staticParent
    if(showMenu === 1) return styles._parentPush
    if(showMenu === 2) return styles._parent
  }

  const navigation = (route) => {
    if(router.pathname != route) router.push(route)
    dispatch(setMenuShow({ showMenu: 0 }))
  }

  const exitSession = () => {
    dispatch(logout())
  }

  return (
    <>
      <nav className={returnStyles()}>
        <div className={`${styles._nav} _main`}>
          <div className={styles._logoParent} onClick={() => navigation('/')}>
            <Logo color='#000000' />
          </div>

          <div className={styles._linksParent}>
            <img src='/images/icons/cart.svg' alt='cart' width='16px' onClick={() => navigation('/cart')}/>
            <img src='/images/icons/search.svg' alt='search' width='16px' onClick={() => navigation('/shop')} />
            { !isAuth && <img src='/images/icons/user.svg' alt='user' width='16px' onClick={() => navigation('/login')} /> }
            {
              !isAuth ? (
                <a onClick={() => navigation('/register')} > Registrar </a>
              ) : (
                <a onClick={() => exitSession()} > Salir </a>
              )
            }
          </div>
        </div>

        <div className={styles._toggleParent} onClick={deployMenu}>
          <img src='/images/icons/toggle.svg' alt='toggle' width='16px'></img>
        </div>
      </nav>

      <Menu showMenu={showMenu} />
    </>
  )
}

export default Navbar
