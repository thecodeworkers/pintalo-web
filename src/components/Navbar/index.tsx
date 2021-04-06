import { useEffect } from 'react'
import styles from './styles.module.scss'
import { Logo } from '../../../public/images/logos'
import { useSelector, useDispatch } from 'react-redux'
import { setMenuShow } from '@store/actions'

const Navbar = () => {

  const dispatch = useDispatch()
  const { showMenu }  = useSelector((state: any) => state.intermitence)

  const deployMenu = () => {
    dispatch(setMenuShow({ showMenu: showMenu ? false : true }))
  }

  const returnStyles = () => {
    if(!showMenu) return styles._parent;
    return styles._parentPush
  }

  return (
    <nav className={returnStyles()}>
      <div className={`${styles._nav} _main`}>
        <div className={styles._logoParent}>
          <Logo color='#000000' />
        </div>

        <div className={styles._linksParent}>
          <img src='images/icons/cart.svg' alt='cart' width='16px' />
          <img src='images/icons/search.svg' alt='search' width='16px' />
          <img src='images/icons/user.svg' alt='user' width='16px' />
          <a> Registrar</a>
        </div>
      </div>

      <div className={styles._toggleParent} onClick={deployMenu}>
        <img src='images/icons/toggle.svg' alt='toggle' width='16px'></img>
      </div>
    </nav>
  )
}

export default Navbar
