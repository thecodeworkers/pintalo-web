import styles from './styles.module.scss'

const Methods = ({ value }) => {
  switch (value) {
    case 'zelle':
      return (
        <div className={styles._textContainer}>
          <p>Zelle</p>
          <div className={styles._textQuote}>
            <p>Banco</p>
            <p>Arianna Perez</p>
            <p>arianna.plp@gmail.com</p>
          </div>
        </div>
      )

    case 'mobilePayment':
      return (
        <>
          <div className={styles._textContainer}>
            <p>Pago Movil</p>
            <div className={styles._textQuote}>
              <p>Banplus</p>
              <p>J409000303</p>
              <p>0414-0180382</p>
            </div>
          </div>
          <form className={styles._formContainer}>
            <div className={styles._formItem}>
              <label htmlFor="Nombre">Nombre completo</label>
              <input placeholder='Nombre' className={styles._input} />
            </div>
            <div className={styles._formItem}>
              <label htmlFor="Nombre">Número de comprobante</label>
              <input placeholder='Nombre' className={styles._input} />
            </div>
            <div className={styles._formItem}>
              <label htmlFor="Nombre">Banco proveniente</label>
              <input placeholder='Nombre' className={styles._input} />
            </div>
          </form>
        </>
      )

    case 'transfer':
      return (
        <>
          <div className={styles._textContainer}>
            <p>Tranferencia</p>
            <div className={styles._textQuote}>
              <p>Píntalo</p>
              <p>J000000000</p>
              <p>Banco</p>
              <p>0000 0000000000000000</p>
              <p>email@gmail.com</p>
            </div>
          </div>
          <form className={styles._formContainer}>
            <div className={styles._formItem}>
              <label htmlFor="Nombre">Nombre completo</label>
              <input placeholder='Nombre' className={styles._input} />
            </div>
            <div className={styles._formItem}>
              <label htmlFor="Nombre">Número de comprobante</label>
              <input placeholder='Nombre' className={styles._input} />
            </div>
            <div className={styles._formItem}>
              <label htmlFor="Nombre">Banco proveniente</label>
              <input placeholder='Nombre' className={styles._input} />
            </div>
          </form>
        </>
      )

    case 'venmo':
      return (
        <div className={styles._textContainer}>
          <p>Venmo</p>
          <div className={styles._textQuote}>
            <p>Arianna Perez</p>
            <p>arianna.plp@gmail.com</p>
          </div>
        </div>
      )

    case 'cash':
      return (
        <div className={styles._textContainer}>
          <p>Efectivo</p>
          <p>En caso de no disponer del monto exacto en efectivo, te ofrecemos las siguientes opciones:</p>
          <div className={styles._textQuote}>
            <p>1- Recibir vuelto en efectivo, sujeto a nuestra disponibilidad.</p>
            <p>2- Completar el restante de tu pago en Bolívares a la tasa del día</p>
          </div>
        </div>
      )

    case 'tdc':
      return (
        <>
          <div className={styles._cardLogoContainer}>
            <img src="/images/icons/bxl-mastercard.svg" alt="mastercard" />
            <img src="/images/icons/bxl-visa.svg" alt="visa" />
            <img src="/images/icons/a-express.svg" alt="american-express" />
          </div>
          <form className={styles._formContainer}>
            <div className={styles._formItem}>
              <label htmlFor="Nombre">Nombre de tarjeta</label>
              <input placeholder='Nombre' className={styles._input} />
            </div>
            <div className={styles._formItem}>
              <label htmlFor="Nombre">N. de tarjeta</label>
              <input placeholder='Nombre' className={styles._input} />
            </div>
            <div className={styles._inputRow}>
              <div className={styles._formItem}>
                <label htmlFor="Nombre">CVV</label>
                <input placeholder='Nombre' className={styles._input} />
              </div>
              <div className={styles._formItem}>
                <label htmlFor="Nombre">Caducidad</label>
                <input placeholder='Nombre' className={styles._input} />
              </div>
            </div>
          </form>
        </>
      )

    default:
      return null
  }
}

export default Methods
