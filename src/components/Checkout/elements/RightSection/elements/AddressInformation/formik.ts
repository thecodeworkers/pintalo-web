import { useFormik } from 'formik'
import { emailRegex, passwordRegex } from '@utils/regex'
import { setCheckoutData } from '@store/actions'
import * as Yup from 'yup'

export const formikAddresInfo = dispatch => (useFormik({
  initialValues: {
    date: '',
    hour: '',
    name: '',
    lastname: '',
    phone: '',
    address: '',
    country: '',
    city: '',
    postalCode: ''
  },

  // validationSchema: Yup.object({
  //   email: Yup.string()
  //     .required()
  //     .matches(emailRegex),

  //   password: Yup.string()
  //     .min(8)
  //     .required()
  //     .matches(passwordRegex)
  // }),

  onSubmit: values => {
    dispatch(setCheckoutData({ budget: values }))
  }
}))
