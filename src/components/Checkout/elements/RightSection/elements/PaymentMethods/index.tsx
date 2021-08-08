import styles from './styles.module.scss'

const paymentMethods = [
  {
    title: 'Zelle',
    value: 'zelle'
  },
  {
    title: 'Pago móvil',
    value: 'mobilePayment'
  },
  {
    title: 'Transferencia',
    value: 'transfer'
  },
  {
    title: 'Venmo',
    value: 'venmo'
  },
  {
    title: 'Efectivo euro/cash'
  },
  {
    title: 'TDC'
  }
]

const logos = [
  {
    name: 'euro.svg'
  },
  {
    name: 'dollar.svg'
  },
  {
    name: 'bs.svg'
  },
  {
    name: 'creditcard.svg'
  },
  {
    name: 'zelle.svg'
  }
]

const RenderMethod = ({ value }) => {
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
        <div></div>
      )

    default:
      return null
  }
}

const PaymentMethods = () => {
  return (
    <div className={styles._container}>
      <div className={styles._methodsContainer}>
        <div>
          <div className={styles._titleContainer}>
            <h1>Seleccione una opción</h1>
            {
              logos.map((logo, index) => (
                <img key={index} src={`/images/icons/${logo.name}`} alt={logo.name} />
              ))
            }
          </div>
          {
            paymentMethods.map((method, index) => (
              <div key={index} className={styles._optionContainer}>
                <input
                  type="checkbox"
                  className={styles._checkboxActive}
                  onChange={() => {}}
                  checked={true}
                />
                <p>{method.title}</p>
              </div>
            ))
          }
        </div>
      </div>
      <div className={styles._informationContainer}>
        <div className={styles._receiptInfoContainer}>
          <RenderMethod value="mobilePayment" />
        </div>
        <div className={styles._receiptImgContainer}>

        </div>
      </div>
    </div>
  )
}

export default PaymentMethods
