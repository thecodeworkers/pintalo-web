import { RESET_STATE } from '@store/scrollReference/action-types'
import { actionObject } from '@utils'
import { CHECKOUT_DATA, CURRENT_FORM, CHANGE_STEP, GET_CHECKOUT_DATA, SEND_CHECKOUT_FORM } from './action-types'

export const setCheckoutData = (data: any) => actionObject(CHECKOUT_DATA, data)
export const setFormRef = (ref: any) => actionObject(CURRENT_FORM, ref)
export const changeStep = (step) => actionObject(CHANGE_STEP, step)
export const getCheckoutData = () => actionObject(GET_CHECKOUT_DATA)
export const resetState = () => actionObject(RESET_STATE)
export const sendCheckoutForm = (data: any) => actionObject(SEND_CHECKOUT_FORM, data)
