import { RESET_STATE } from '@store/scrollReference/action-types'
import { AnyAction } from 'redux'
import { CHECKOUT_DATA, CURRENT_FORM, CHANGE_STEP, GET_COUNTRY_DATA_ASYNC } from './action-types'

const initialState: any = {
  basic: null,
  address: null,
  budget: null,
  paymentData: null,
  paymentMethod: 'zelle',
  reference: 'basic-form',
  step: 1,
  currentStep: 0,
  countries: [],
  paymentMethods: [],
  successOrder: false,
  paymentMethodId: ''
}

const checkoutReducer = (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case CHECKOUT_DATA:
      return { ...state, ...payload }

    case CURRENT_FORM:
      return { ...state, ...payload }

    case CHANGE_STEP:
      return { ...state, ...payload }

    case GET_COUNTRY_DATA_ASYNC:
      return { ...state, ...payload }

    case RESET_STATE:
      return initialState

    default:
      return state
  }
}

export default checkoutReducer
