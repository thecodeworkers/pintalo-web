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
        <>
          <p>Zelle</p>
          <div>
            <p>Banco</p>
            <p>Arianna Perez</p>
            <p>arianna.plp@gmail.com</p>
          </div>
        </>
      )

    case 'mobilePayment':
      return (
        <>
          <p>Pago Movil</p>
          <div>
            <p>Banplus</p>
            <p>J409000303</p>
            <p>0414-0180382</p>
          </div>
        </>
      )

    case 'transfer':
      return (
        <>
          <p>Tranferencia</p>
          <div>
            <p>Píntalo</p>
            <p>J000000000</p>
            <p>Banco</p>
            <p>0000 0000000000000000</p>
            <p>email@gmail.com</p>
          </div>
        </>
      )

    case 'venmo':
      return (
        <>
          <p>Venmo</p>
          <div>
            <p>Arianna Perez</p>
            <p>arianna.plp@gmail.com</p>
          </div>
        </>
      )

    case 'cash':
      return (
        <>
          <p>Efectivo</p>
          <p>En caso de no disponer del monto exacto en efectivo, te ofrecemos las siguientes opciones:</p>
          <div>
            <p>1- Recibir vuelto en efectivo, sujeto a nuestra disponibilidad.</p>
            <p>2- Completar el restante de tu pago en Bolívares a la tasa del día</p>
          </div>
        </>
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
          <RenderMethod value="cash" />
        </div>
        <div className={styles._receiptImgContainer}>

        </div>
      </div>
    </div>
  )
}

export default PaymentMethods
