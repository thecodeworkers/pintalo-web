import { GeneralButton } from '@components'
import styles from './styles.module.scss'

const CartPage = () => {
  return (
    <div className={styles._container}>
      <h1>Tu carrito</h1>
      <div className={styles._panelContainer}>
        <div className={styles._header}></div>
      </div>
      <div className={styles._buttonsContainer}>
        <GeneralButton
          backgroundColor="#FDCA40"
          textColor="#262833"
        >
          Volver a shop
        </GeneralButton>
        <GeneralButton
          backgroundColor="#FDCA40"
          textColor="#262833"
        >
          Confirmar
        </GeneralButton>
      </div>
    </div>
  )
}

export default CartPage
