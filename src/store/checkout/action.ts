import { actionObject } from '@utils'
import { CHECKOUT_DATA, CURRENT_FORM } from './action-types'

export const setCheckoutData = (data: any) => actionObject(CHECKOUT_DATA, data)
export const setFormRef = (ref: any) => actionObject(CURRENT_FORM, ref)
