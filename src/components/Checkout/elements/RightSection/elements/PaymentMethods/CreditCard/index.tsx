import { useState } from 'react'
import styles from './styles.module.scss'
import { useDispatch } from 'react-redux'
import FormikConfig from './formik'
import { GeneralButton } from '@components'
import { CardElement, useElements } from '@stripe/react-stripe-js';
import { setCheckoutData } from '@store/actions'
import getStripe from '@utils/getStripe'
import { cardOptions } from './options'
import { showToast } from '@utils'

const settings: any = {
  status: 1,
  message: 'Tarjeta agregada exitosamente',
  type: 'success'
}
const errorSettings: any = {
  status: 1,
  message: 'Tarjeta Fallida',
  type: 'error'
}
const CreditCard = () => {

  const dispatch = useDispatch()
  const elements = useElements()
  const [disabled, setDisabled] = useState(false)
  const [showLoader, setShowLoader] = useState(false)
  const formik = FormikConfig()
  const { errors, touched } = formik

  const setData = async () => {

    try {
      if (!disabled) {
        setShowLoader(true)

        const cardElement = elements.getElement(CardElement)
        const stripe = await getStripe()

        const { paymentMethod, error } = await stripe.createPaymentMethod({
          type: 'card',
          card: cardElement,
          billing_details: {
            name: formik.values.name,
          },
        })

        if (error) throw new Error(error.message);

        dispatch(setCheckoutData({ card: paymentMethod.id, cardValid: true }))
        showToast(dispatch, settings)
        setShowLoader(false)
        setDisabled(!disabled)
        return
      }
      setDisabled(!disabled)
    } catch (error) {
      showToast(dispatch, errorSettings)
      setShowLoader(false)
      setDisabled(!disabled)
    }

  }

  return (
    <>
      <div className={styles._titleParent}>
        <p className={styles._tdcTitle}>Datos de tarjeta</p>
      </div>
      <form onSubmit={formik.handleSubmit}>

        <div className={styles._list}>
          <div className={styles._formCardContainer}>
            <div className={`${styles._inputParent} ${styles._separation}`}>
              <label className={styles._label}>Nombre en la tarjeta</label>
              <input disabled={disabled} id="name" name="name" type="text" className={errors.name && touched.name ? [styles._inputError, styles._input].join(' ') : styles._input}
                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
            </div>
            <div className={styles._cardContainer}>
              <CardElement options={cardOptions} />
            </div>
          </div>
        </div>
        <div className={styles._buttonContainer}>
          <div className={styles._btnParent}>
            <GeneralButton
              backgroundColor="#FDCA40"
              textColor="#262833"
              type='submit'
              method={setData}
              showLoader={showLoader}
            >
              {'Agregar Tarjeta'}
            </GeneralButton>
          </div>
        </div>
      </form>
    </>)
}

export default CreditCard
