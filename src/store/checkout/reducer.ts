import { AnyAction } from 'redux'
import { CHECKOUT_DATA } from './action-types'

const initialState = {
  basic: null,
  address: null,
  budget: null,
  payment: null
}

const checkoutReducer = (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case CHECKOUT_DATA:
      return { ...state, ...payload }
    default:
      return state
  }
}

export default checkoutReducer
