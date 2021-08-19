import { actionObject } from '@utils'
import { CHECKOUT_DATA } from './action-types'

export const setCheckoutData = (data) => {
  return actionObject(CHECKOUT_DATA, data)
}
