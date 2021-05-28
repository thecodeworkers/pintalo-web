import { useFormik } from 'formik'
import { emailRegex, passwordRegex } from '@utils/regex'
import { signUp } from '@store/actions'
import * as Yup from 'yup'

const formikConfig = (dispatch = null) => (useFormik({
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
    console.log(values);
    // dispatch(signUp(values))
  }
}))

export default formikConfig
