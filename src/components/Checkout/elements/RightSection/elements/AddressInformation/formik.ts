import { useFormik } from 'formik'
import { onlyLettersRegex, onlyNumbersRegex } from '@utils/regex'
import { setCheckoutData } from '@store/actions'
import { showToast } from '@utils/common'

import * as Yup from 'yup'

const settings: any = {
  status: 1,
  message: 'message',
  type: 'success'
}

const errorSettings: any = {
  status: 1,
  message: 'error',
  type: 'error'
}

export const formikAddresInfo = (dispatch: any, data: any) => (useFormik({
  initialValues: {
    date: '',
    hour: '',
    name: '',
    lastname: '',
    phone: '',
    address: '',
    country: '',
    city: '',
    referencePoint: '',
    postalCode: ''
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

    phone: Yup.string()
      .min(9)
      .max(11)
      .required()
      .matches(onlyNumbersRegex),

    address: Yup.string()
      .required()
      .max(200),

    postalCode: Yup.string()
      .required()
      .max(4)
      .matches(onlyNumbersRegex)
  }),

  onSubmit: values => {
    const newValues = { ...values, ...data }
    const dataArray = Object.values(newValues)
    const notValid = dataArray.some((item: string) => item == '')

    if(notValid) return showToast(dispatch, errorSettings)

    showToast(dispatch, settings)
    dispatch(setCheckoutData({ address: newValues, step: 4 }))
  }
}))
