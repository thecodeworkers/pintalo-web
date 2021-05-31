import { useFormik } from 'formik'
import { emailRegex, passwordRegex } from '@utils/regex'
import { signIn } from '@store/actions'
import * as Yup from 'yup'

export const formikForLogin = dispatch => (useFormik({
  initialValues: {
    email: '',
    password: ''
  },

  validationSchema: Yup.object({
    email: Yup.string()
      .required()
      .matches(emailRegex),

    password: Yup.string()
      .min(8)
      .required()
      .matches(passwordRegex)
  }),

  onSubmit: values => {
    dispatch(signIn(values))
  }
}))

export const formikForPasswordReset = dispatch => (useFormik({
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
      .matches(passwordRegex)
  }),

  onSubmit: values => {
    console.log(values);
    // dispatch(signIn(values))
  }
}))
