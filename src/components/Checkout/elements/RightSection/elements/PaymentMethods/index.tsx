import styles from './styles.module.scss'
import Methods from './Methods'
import { useDispatch, useSelector } from 'react-redux'
import { setCheckoutData } from '@store/actions'
import getStripe from '@utils/getStripe'
import { Elements } from '@stripe/react-stripe-js'

const paymentMethods = [
  {
    title: 'Zelle',
    value: 'zelle',
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
    title: 'Efectivo euro/cash',
    value: 'cash'
  },
  {
    title: 'TDC',
    value: 'tdc'
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

const PaymentMethods = () => {

  const stripe = getStripe()
  const dispatch = useDispatch()
  const { checkout: { paymentMethod } } = useSelector((state: any) => state)

  return (

    <Elements stripe={stripe}>
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
            <div className={styles._methodsSubcontainer}>
              <div className={styles._methods}>
                {
                  paymentMethods.map((method, index) => (
                    <div key={index} className={styles._optionContainer}>
                      <input
                        type="checkbox"
                        className={styles._checkboxActive}
                        onChange={(e) => dispatch(setCheckoutData({ paymentMethod: e.target.value, paymentMethodId: 'alg_custom_gateway_1' }))}
                        checked={paymentMethod == method.value ? true : false}
                        value={method.value}
                      />
                      <p className="_methodTitle">{method.title}</p>
                      <style jsx>{`
                      ._methodTitle {
                        color: ${paymentMethod == method.value ? '#262833' : '#9B9B9B'};
                      }
                    `}</style>
                    </div>
                  ))
                }
              </div>
              <div className={styles._importantCaption}>
                <p>Enviar comprobante de pago a nuestro correo</p>
                <p>Pintalo@gmail.com</p>
                <div className={styles._paymentDetail}>
                  <p>-Pago movil, transferencia, Zelle:</p>
                  <p>Debe verse legible el numero de confirmacion y banco</p>
                </div>
                <div className={styles._paymentDetail}>
                  <p>-Efectivo:</p>
                  <p>Debe verse legible el numero de serie del billete</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles._informationContainer}>
          <div className={styles._receiptInfoContainer}>
            <Methods value={paymentMethod} />
          </div>
          <div className={styles._receiptImgContainer}>

          </div>
        </div>
      </div>
    </Elements>
  )
}

export default PaymentMethods
