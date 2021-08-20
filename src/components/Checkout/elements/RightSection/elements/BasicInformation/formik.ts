import { useFormik } from 'formik'
import { emailRegex, onlyLettersRegex, onlyNumbersRegex } from '@utils/regex'
import * as Yup from 'yup'
import { setCheckoutData } from '@store/actions'

export const formikBasicData = dispatch => (useFormik({
  initialValues: {
    name: '',
    lastname: '',
    document: '',
    phone: '',
    email: ''
  },

  validationSchema: Yup.object({
    name: Yup.string()
      .min(2)
      .required()
      .matches(onlyLettersRegex),

    lastname: Yup.string()
      .min(2)
      .required()
      .matches(onlyLettersRegex),

    document: Yup.string()
      .min(6)
      .max(8)
      .required()
      .matches(onlyNumbersRegex),

      phone: Yup.string()
      .min(9)
      .max(11)
      .required()
      .matches(onlyNumbersRegex),

      email: Yup.string()
      .required()
      .matches(emailRegex),
  }),

  onSubmit: values => {
    dispatch(setCheckoutData({ basic: values }))
  }
}))
