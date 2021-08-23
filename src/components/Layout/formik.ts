import { useFormik } from 'formik'
import { emailRegex, onlyLettersRegex } from '@utils/regex'
import { submitForm } from '@store/actions'
import * as Yup from 'yup'

export const formikContact = dispatch => (useFormik({
  initialValues: {
    name: '',
    lastname: '',
    email: '',
    message: ''
  },

  validationSchema: Yup.object({
    name: Yup.string().required().matches(onlyLettersRegex),
    lastname: Yup.string().required().matches(onlyLettersRegex),
    email: Yup.string().required().matches(emailRegex),
    message: Yup.string()
  }),

  onSubmit: values => {
    dispatch(submitForm(values))
  }
}))
