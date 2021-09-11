import { useFormik } from 'formik'
import { onlyLettersRegex, onlyNumbersRegex } from '@utils/regex'
import { setCheckoutData } from '@store/actions'
import * as Yup from 'yup'

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
    dispatch(setCheckoutData({ paymentData: values }))
  }
}))
