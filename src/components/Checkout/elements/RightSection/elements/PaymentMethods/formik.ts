import { useFormik } from 'formik'
import { onlyLettersRegex, onlyNumbersRegex } from '@utils/regex'
import { setCheckoutData } from '@store/actions'
import { showToast } from '@utils/common'
import * as Yup from 'yup'

const settings: any = {
  status: 1,
  message: 'Metodo de pago agregado correctamente',
  type: 'success'
}

export const bankTransferInfo = (dispatch: any) => (useFormik({
  initialValues: {
    name: '',
    referenceNumber: '',
    bank: ''
  },

  validationSchema: Yup.object({
    name: Yup.string()
      .min(2)
      .required()
      .matches(onlyLettersRegex),

    referenceNumber: Yup.string()
      .min(2)
      .required()
      .matches(onlyNumbersRegex),

    bank: Yup.string()
      .min(2)
      .max(40)
      .required()
      .matches(onlyLettersRegex),
  }),

  onSubmit: values => {
    dispatch(setCheckoutData({ paymentData: values, step: 4 }))
    showToast(dispatch, settings)
  }
}))
