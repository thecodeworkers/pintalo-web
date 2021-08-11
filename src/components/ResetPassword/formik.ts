import { useFormik } from 'formik'
import { passwordRegex } from '@utils/regex'
import * as Yup from 'yup'

export const formikConfig = () => (useFormik({
  initialValues: {
    password: '',
    confirmPassword: ''
  },

  validationSchema: Yup.object({
    password: Yup.string()
      .min(8)
      .required()
      .matches(passwordRegex),

    confirmPassword: Yup.string()
      .min(8)
      .required()
      .oneOf([Yup.ref('password'), null])
      .matches(passwordRegex),
  }),

  onSubmit: values => {
    console.log(values);

  }
}))
