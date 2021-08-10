import styles from './styles.module.scss'
import Methods from './Methods'
import { useState } from 'react'

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
  const [option, setOption] = useState('zelle')

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
                  onChange={(e) => setOption(e.target.value)}
                  checked={option == method.value ? true : false}
                  value={method.value}
                />
                <p className="_methodTitle">{method.title}</p>
                <style jsx>{`
                  ._methodTitle {
                    color: ${option == method.value ? '#262833' : '#9B9B9B'};
                  }
                `}</style>
              </div>
            ))
          }
        </div>
      </div>
      <div className={styles._informationContainer}>
        <div className={styles._receiptInfoContainer}>
          <Methods value={option} />
        </div>
        <div className={styles._receiptImgContainer}>

        </div>
      </div>
    </div>
  )
}

export default PaymentMethods
