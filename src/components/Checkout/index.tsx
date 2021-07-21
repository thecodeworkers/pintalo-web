import { GeneralButton } from '@components'
import { useState } from 'react'
import styles from './styles.module.scss'

const Checkout = () => {
  return (
    <div className={styles._container}>
      <div className={styles._leftContainer}>
        <div className={styles._paymentProcess}>
          <h3>Proceso de pago</h3>
          <p>Llena los siguiente parametros para realizar tu compra</p>

          <div className={styles._processContainer}>
            <div className={styles._checkboxContainer}>
              <input
                type="checkbox"
                className={styles._checkboxActive}
                onChange={() => {}}
                checked={true}
              />
            </div>
            <div className={styles._processActive}>
              <h1>Tus datos</h1>
            </div>
          </div>

          <div className={styles._processContainer}>
            <div className={styles._checkboxContainer}>
              <input
                type="checkbox"
                className={styles._checkboxDesactive}
                onChange={() => {}}
                checked={true}
              />
            </div>
            <div className={styles._processDesactive}>
              <h1>Forma de entrega</h1>
            </div>
          </div>

          <div className={styles._processContainer}>
            <div className={styles._checkboxContainer}>
              <input
                type="checkbox"
                className={styles._checkboxDesactive}
                onChange={() => {}}
                checked={true}
              />
            </div>
            <div className={styles._processDesactive}>
              <h1>Forma de pago</h1>
            </div>
          </div>

          <div className={styles._processContainer}>
            <div className={styles._checkboxContainer}>
              <input
                type="checkbox"
                className={styles._checkboxDesactive}
                onChange={() => {}}
                checked={true}
              />
            </div>
            <div className={styles._processDesactive}>
              <h1>Factura</h1>
            </div>
          </div>
        </div>
        <div className={styles._buttonContainer}>
          <GeneralButton
            backgroundColor="#FDCA40"
            textColor="#262833"
          >
            Volver al carrito
          </GeneralButton>
        </div>
      </div>
      <div className={styles._rightContainer}>
        <div className={styles._paymentSteps}>

        </div>
      </div>
    </div>
  )
}

export default Checkout
