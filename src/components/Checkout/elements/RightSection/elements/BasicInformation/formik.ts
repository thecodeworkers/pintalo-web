import { useFormik } from 'formik'
import { emailRegex, passwordRegex } from '@utils/regex'
import * as Yup from 'yup'

export const formikBasicData = dispatch => (useFormik({
  initialValues: {
    name: '',
    lastname: '',
    document: '',
    phone: '',
    email: ''
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
    console.log(values)
  }
}))
