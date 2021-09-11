import { GeneralButton } from '@components'
import { useDispatch, useSelector } from 'react-redux'
import { changeStep } from '@store/actions'
import styles from './styles.module.scss'

const LeftSection = () => {

  const { checkout: { step, currentStep }, cart } = useSelector((state: any) => state)
  const dispatch = useDispatch()

  const options = [
    {
      title: 'Tus datos',
      step: 1,
      isEnabled: (step >= 1 || currentStep >= 1) ? true : false
    },
    {
      title: 'Forma de entrega',
      step: 2,
      isEnabled: (step >= 2 || currentStep >= 2) ? true : false
    },
    {
      title: 'Forma de pago',
      step: 3,
      isEnabled: (step >= 3 || currentStep >= 3) ? true : false
    },
    {
      title: 'Factura',
      step: 4,
      isEnabled: (step >= 4 || currentStep >= 4) ? true : false
    },
  ]

  return (
    <>
      <div className={styles._paymentProcess}>
        <h1>Proceso de pago</h1>
        <p>Llena los siguiente parametros para realizar tu compra</p>
        {
          options.map((option, index) => (
            <div
              key={index}
              className={styles._processContainer}
              onClick={() => {
                if (option.isEnabled) {
                  if (!currentStep || step > currentStep) {
                    dispatch(changeStep({ step: option.step, currentStep: step }))
                    return
                  }

                  dispatch(changeStep({ step: option.step }))
                }
              }}
            >
              <div className={styles._checkboxContainer}>
                <input
                  type="checkbox"
                  className={styles[option.isEnabled ? '_checkboxActive' : '_checkboxDesactive']}
                  onChange={() => {}}
                  checked={true}
                />
              </div>
              <div className={styles[option.isEnabled ? '_processActive' : '_processDesactive']}>
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
            <p>{cart?.cart?.total || '$0.00'}</p>
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
