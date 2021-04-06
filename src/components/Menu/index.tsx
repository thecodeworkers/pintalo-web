import { useSelector } from 'react-redux'
import styles from './styles.module.scss'

const Menu = () => {
  const { showMenu } = useSelector((state: any) => state.intermitence)

  return (
    <div className={showMenu ? styles._mainMenu : styles._hideMenu}>menu</div>
  )
}

export default Menu
