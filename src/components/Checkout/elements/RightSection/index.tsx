import { GeneralButton, GeneralModal } from '@components'
import { BasicInformation, AddressInformation, PaymentMethods, BudgetInformation } from './elements'
import styles from './styles.module.scss'
import { showModal } from '@store/actions'
import { useDispatch, useSelector } from 'react-redux'

const title = {
  basicInformation: 'Tus datos',
  addressInformation: 'Delivery',
  paymentMethods: 'Metodos de pago',
  budgetInformation: 'Datos de factura'
}

enum buttonTitle {
  'Siguiente',
  'Finalizar'
}

const RightSection = () => {

  const dispatch = useDispatch()

  const { modal: { paymentProcessing } } = useSelector((state: any) => state.intermitence)
  const { checkout } = useSelector((state: any) => state)
  const { reference } = checkout

  return (
    <div className={styles._paymentSteps}>
      <div className={styles._paymentSteps_content}>
        <div className={styles._formContent}>
          <div className={styles._paymentSteps_header}>
            <p>{title.basicInformation}</p>
          </div>
          <BasicInformation />
          {/* <AddressInformation /> */}
          {/* <PaymentMethods /> */}
          {/* <BudgetInformation /> */}
        </div>
        <div className={styles._formButtonContainer}>
          <GeneralButton
            backgroundColor="#FDCA40"
            textColor="#262833"
            type='submit'
            formId={reference}
            // method={() => dispatch(showModal('paymentProcessing', true))}
          >
            {buttonTitle[0]}
          </GeneralButton>
        </div>

        {
          paymentProcessing ? (
            <GeneralModal title='' className={styles._modalBody}>
              <div className={styles._modalHeight}>
                <div className={styles._modalContent}>
                  <div className={styles._imgContainer}>
                    <img src="/images/icons/payment-process.svg" alt="payment" width={'40%'} />
                  </div>
                  <div className={styles._titleContainer}>
                    <p className={styles._title}>Su pago está siendo confirmado</p>
                  </div>
                  <div className={styles._subtitleContainer}>
                    <p className={styles._subtitle}>en minutos tendrá en su correo la información de la compra</p>
                  </div>
                </div>

              </div>
            </GeneralModal>
          ) : null
        }
      </div>
    </div>
  )
}

export default RightSection
