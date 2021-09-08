import { AnyAction } from 'redux'
import { CHECKOUT_DATA, CURRENT_FORM, CHANGE_STEP, GET_COUNTRY_ASYNC } from './action-types'

const initialState = {
  basic: null,
  address: null,
  budget: null,
  payment: null,
  reference: null,
  step: 2,
  currentStep: 0,
  countries: [],
  municipalities: []
}

const checkoutReducer = (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case CHECKOUT_DATA:
      return { ...state, ...payload }

    case CURRENT_FORM:
      return { ...state, ...payload }

    case CHANGE_STEP:
      return { ...state, ...payload }

    case GET_COUNTRY_ASYNC:
      return { ...state, ...payload }

    default:
      return state
  }
}

export default checkoutReducer
