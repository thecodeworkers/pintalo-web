import { actionObject } from '@utils'
import { SIGN_IN, SIGN_UP } from './action-types'

export const signUp = values => actionObject(SIGN_UP, values)

export const signIn = values => actionObject(SIGN_IN, values)
