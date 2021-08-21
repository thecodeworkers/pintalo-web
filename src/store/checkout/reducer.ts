import { AnyAction } from 'redux'
import { CHECKOUT_DATA, CURRENT_FORM } from './action-types'

const initialState = {
  basic: null,
  address: null,
  budget: null,
  payment: null,
  reference: null,
  step: 1
}

const checkoutReducer = (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case CHECKOUT_DATA:
      return { ...state, ...payload }

    case CURRENT_FORM:
      return { ...state, ...payload }

    default:
      return state
  }
}

export default checkoutReducer
