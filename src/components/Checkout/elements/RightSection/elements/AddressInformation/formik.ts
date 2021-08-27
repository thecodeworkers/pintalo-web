import { useFormik } from 'formik'
import { onlyLettersRegex, onlyNumbersRegex } from '@utils/regex'
import { setCheckoutData, setMenuShow} from '@store/actions'
import * as Yup from 'yup'

const settings = {
  status: 1,
  message: 'message',
  type: 'success'
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
    // for (const property in newValues) {
    //   if (newValues[property] == '') return console.log('valid')
    // }

    // return console.log('invalid')

    // return console.log(newValues)
    dispatch(setCheckoutData({ budget: newValues, step: 3 }))
    dispatch(setMenuShow({ toast: settings }))

    setTimeout(() => {
      dispatch(setMenuShow({ toast: { ...settings, status: 2 }}))
    }, 2000);
  }
}))
