import { GeneralButton } from '@components'
import styles from './styles.module.scss'

const options = [
  {
    checkboxClass: '_checkboxActive',
    labelClass: '_processActive',
    title: 'Tus datos'
  },
  {
    checkboxClass: '_checkboxActive',
    labelClass: '_processActive',
    title: 'Forma de entrega'
  },
  {
    checkboxClass: '_checkboxDesactive',
    labelClass: '_processDesactive',
    title: 'Forma de pago'
  },
  {
    checkboxClass: '_checkboxDesactive',
    labelClass: '_processDesactive',
    title: 'Factura'
  },
]

const LeftSection = () => {
  return (
    <>
      <div className={styles._paymentProcess}>
        <h1>Proceso de pago</h1>
        <p>Llena los siguiente parametros para realizar tu compra</p>
        {
          options.map((option, index) => (
            <div key={index} className={styles._processContainer}>
              <div className={styles._checkboxContainer}>
                <input
                  type="checkbox"
                  className={styles[option.checkboxClass]}
                  onChange={() => {}}
                  checked={true}
                />
              </div>
              <div className={styles[option.labelClass]}>
                <h1>{option.title}</h1>
              </div>
            </div>
          ))
        }
        <div className={styles._totalContainer}>
          <div>
            <p>Total</p>
          </div>
          <div>
            <p>$1,000.00</p>
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
    </>
  )
}

export default LeftSection
