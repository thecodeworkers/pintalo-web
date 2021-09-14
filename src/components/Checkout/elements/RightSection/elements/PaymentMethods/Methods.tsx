import { useEffect } from 'react'
import styles from './styles.module.scss'
import { bankTransferInfo } from './formik'
import { useDispatch, useSelector } from 'react-redux'
import { setFormRef } from '@store/actions'

const Methods = ({ value }) => {

  const dispatch = useDispatch()
  const formik = bankTransferInfo(dispatch)

  useEffect(() => {
    if (value == 'transfer') return dispatch(setFormRef({ reference: 'transferpay-form' }))
    if (value == 'mobilePayment') return dispatch(setFormRef({ reference: 'mobilepay-form' }))
    dispatch(setFormRef({ reference: null }))
  }, [value])

  const { checkout: { paymentMethods } } = useSelector((state: any) => state)

  const data = paymentMethods?.nodes ?? []

  const returnDataArray = () => {
    const dataSplit = data[1]?.description.split('/')
    return dataSplit ?? []
  }

  switch (value) {
    case 'zelle':
      return (
        <div className={styles._textContainer}>
          <p>{data[1]?.title}</p>
          <div className={styles._textQuote}>
            {
              returnDataArray().map((item: string, index: number) => {
                return <p key={index}>{item}</p>
              })
            }
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
          <form className={styles._formContainer} onSubmit={formik.handleSubmit} id='mobilepay-form'>
            <div className={styles._formItem}>
              <label htmlFor="Nombre">Nombre completo</label>
              <input
                placeholder='Nombre'
                className={formik.errors.name && formik.touched.name ? styles._inputError : styles._input}
                name='name'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
            </div>
            <div className={styles._formItem}>
              <label htmlFor="Nombre">Número de comprobante</label>
              <input
                placeholder='Número'
                className={formik.errors.referenceNumber && formik.touched.referenceNumber ? styles._inputError : styles._input}
                name='referenceNumber'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.referenceNumber}
              />
            </div>
            <div className={styles._formItem}>
              <label htmlFor="Nombre">Banco proveniente</label>
              <input
                placeholder='Nombre'
                className={formik.errors.bank && formik.touched.bank ? styles._inputError : styles._input}
                name='bank'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.bank}
              />
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
          <form className={styles._formContainer} onSubmit={formik.handleSubmit} id='transferpay-form'>
            <div className={styles._formItem}>
              <label htmlFor="Nombre">Nombre completo</label>
              <input
                placeholder='Nombre'
                className={formik.errors.name && formik.touched.name ? styles._inputError : styles._input}
                name='name'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
            </div>
            <div className={styles._formItem}>
              <label htmlFor="Nombre">Número de comprobante</label>
              <input
                placeholder='Número'
                className={formik.errors.referenceNumber && formik.touched.referenceNumber ? styles._inputError : styles._input}
                name='referenceNumber'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.referenceNumber}
              />
            </div>
            <div className={styles._formItem}>
              <label htmlFor="Nombre">Banco proveniente</label>
              <input
                placeholder='Nombre'
                className={formik.errors.bank && formik.touched.bank ? styles._inputError : styles._input}
                name='bank'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.bank}
              />
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
