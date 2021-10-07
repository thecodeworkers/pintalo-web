import { useFormik } from 'formik'
import { emailRegex, onlyLettersRegex, onlyNumbersRegex } from '@utils/regex'
import * as Yup from 'yup'
import { setCheckoutData, setMenuShow } from '@store/actions'
import { showToast } from '@utils/common'

const settings: any = {
  status: 1,
  message: 'Datos guardados exitosamente',
  type: 'success'
}

export const formikBasicData = (dispatch, defaultValues) => (useFormik({
  initialValues: {
    name: defaultValues?.name ?? '',
    lastname: defaultValues?.lastname ?? '',
    document: defaultValues?.document ?? '',
    phone: defaultValues?.phone ?? '',
    email: defaultValues?.email ??  ''
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
    dispatch(setCheckoutData({ basic: values, step: 2 }))
    showToast(dispatch, settings)
  }
}))
