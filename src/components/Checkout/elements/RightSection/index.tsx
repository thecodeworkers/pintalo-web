import { useEffect } from 'react'
import { GeneralButton, GeneralModal } from '@components'
import { BasicInformation, AddressInformation, PaymentMethods, BudgetInformation } from './elements'
import styles from './styles.module.scss'
import { showModal, setCheckoutData } from '@store/actions'
import { useDispatch, useSelector } from 'react-redux'
import { showToast } from '@utils/common'
import { useRouter } from 'next/router'

const title = {
  basicInformation: 'Tus datos',
  addressInformation: 'Delivery',
  paymentMethods: 'Metodos de pago',
  budgetInformation: 'Datos de factura',
}

const settings: any = {
  status: 1,
  message: 'Metodo de pago agregado correctamente',
  type: 'success'
}

enum buttonTitle {
  'Siguiente',
  'Finalizar'
}

const returnComponent = (status) => {
  switch(status) {
    case 1:
    return <BasicInformation />

    case 2:
    return <AddressInformation />

    case 3:
    return <PaymentMethods />

    case 4:
      return <BudgetInformation />

    default:
      return <BasicInformation />
  }
}

const RightSection = () => {

  const router = useRouter()
  const dispatch = useDispatch()

  const { modal: { paymentProcessing }, showLoader  } = useSelector((state: any) => state.intermitence)
  const { checkout } = useSelector((state: any) => state)
  const { reference, step, successOrder, paymentMethod } = checkout

  useEffect(() => {
    let timeout

    if (successOrder) {
      redirect(timeout)
      dispatch(showModal('paymentProcessing', true))
    }

    return () => { clearTimeout(timeout) }
  }, [successOrder])

  const redirect = (timeout: any) => {
    timeout = setTimeout(() => {
      router.push('/')
    }, 3000);
  }

  const paymentRedirect = () => {
    if(paymentMethod && step == 3) {
      if(paymentMethod != 'mobilePayment' && paymentMethod != 'transfer') {
        showToast(dispatch, settings)
        dispatch(setCheckoutData({ step: 4 }))
      }
    }
  }

  return (
    <div className={styles._paymentSteps}>
      <div className={styles._paymentSteps_content}>
        <div className={styles._formContent}>
          <div className={styles._paymentSteps_header}>
            <p>{title.basicInformation}</p>
          </div>
          {returnComponent(step)}
        </div>
        <div className={styles._formButtonContainer}>
          <GeneralButton
            backgroundColor="#FDCA40"
            textColor="#262833"
            type='submit'
            formId={reference}
            method={paymentRedirect}
            showLoader={showLoader}
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
