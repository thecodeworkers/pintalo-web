import { actionObject } from '@utils'
import { CHECKOUT_DATA, CURRENT_FORM, CHANGE_STEP } from './action-types'

export const setCheckoutData = (data: any) => actionObject(CHECKOUT_DATA, data)
export const setFormRef = (ref: any) => actionObject(CURRENT_FORM, ref)
export const changeStep = (step) => actionObject(CHANGE_STEP, step)
