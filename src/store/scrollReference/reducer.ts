import { AnyAction } from 'redux'
import { SET_REFERENCE } from './action-types'

const initialState = {
  homeReference: {
    current: '',
    promotions: false,
  }
}

const pageReducer = (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case SET_REFERENCE:
      return { ...state, ...payload }

    default:
      return state
  }
}

export default pageReducer
