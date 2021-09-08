import { useFormik } from 'formik'
import { onlyLettersRegex, onlyNumbersRegex } from '@utils/regex'
import { setCheckoutData } from '@store/actions'
import { showToast } from '@utils/common'

import * as Yup from 'yup'

const settings: any = {
  status: 1,
  message: 'Datos guardados exitosamente',
  type: 'success'
}

const errorSettings: any = {
  status: 1,
  message: 'Todos los campos son requeridos',
  type: 'error'
}

export const formikAddresInfo = (dispatch: any, data: any, defaultValues: any) => (useFormik({
  initialValues: {
    date: defaultValues?.date ?? '',
    hour: defaultValues?.hour ?? '',
    name: defaultValues?.name ?? '',
    lastname: defaultValues?.lastname ?? '',
    phone: defaultValues?.phone ??  '',
    address: defaultValues?.address ?? '',
    country: defaultValues?.country ?? '',
    city: defaultValues?.city ?? '',
    referencePoint: defaultValues?.referencePoint ?? '',
    postalCode: defaultValues?.postalCode ?? ''
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

    city: Yup.string()
    .min(2)
    .required()
    .matches(onlyLettersRegex),

    referencePoint: Yup.string()
    .min(2)
    .required()
    .matches(onlyLettersRegex),

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
