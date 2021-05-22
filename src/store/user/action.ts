import { actionObject } from '@utils'
import { SIGN_UP } from './action-types'

export const signUp = (values) => actionObject(SIGN_UP, values)
