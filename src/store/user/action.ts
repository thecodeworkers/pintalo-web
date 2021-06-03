import { actionObject } from '@utils'
import { FORGOT_PASSWORD, LOGOUT, SIGN_IN, SIGN_UP } from './action-types'

export const signUp = values => actionObject(SIGN_UP, values)

export const signIn = values => actionObject(SIGN_IN, values)

export const forgotPassword = email => actionObject(FORGOT_PASSWORD, email)

export const logout = () => actionObject(LOGOUT)
