import { useFormik } from 'formik'
import { onlyLettersRegex, onlyNumbersRegex } from '@utils/regex'
import { setCheckoutData, sendCheckoutForm } from '@store/actions'
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

export const formikBudgetInfo = (dispatch: any, data: any, defaultValues: any, status: number) => (useFormik({
  initialValues: {
    name: defaultValues?.name && status == 1 ? defaultValues?.name : '',
    lastname: defaultValues?.lastname && status == 1 ? defaultValues?.lastname : '',
    phone: defaultValues?.phone && status == 1 ? defaultValues?.phone : '',
    address: defaultValues?.address && status == 1 ? defaultValues?.address : '',
    country: defaultValues?.country && status == 1 ? defaultValues?.country : '',
    city: defaultValues?.city && status == 1 ? defaultValues?.city : '',
    referencePoint: defaultValues?.referencePoint && status == 1 ? defaultValues?.referencePoint : '',
    postalCode: defaultValues?.postalCode && status == 1 ? defaultValues?.postalCode : '',
    municipality: defaultValues?.municipality && status == 1 ? defaultValues?.municipality : '',
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
      .matches(onlyLettersRegex),

    postalCode: Yup.string()
      .required()
      .max(6)
      .matches(onlyNumbersRegex),

    municipality: Yup.string()
      .required()
      .min(2)
      .matches(onlyLettersRegex)
  }),

  onSubmit: values => {
    const newValues = { ...values, ...data }
    delete newValues?.referencePoint
    const dataArray = Object.values(newValues)
    const notValid = dataArray.some((item: string) => item == '')

    if (notValid) return showToast(dispatch, errorSettings)

    dispatch(setCheckoutData({ budget: newValues }))
    dispatch(sendCheckoutForm())
  }
}))
