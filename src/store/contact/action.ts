import { SET_FORM, SUBMIT_FORM } from './action-types'
import { actionObject } from '@utils'

export const setForm = (form: any) => actionObject(SET_FORM, form)

export const submitForm = (data: any) => actionObject(SUBMIT_FORM, data)
