import { AnyAction } from 'redux'
import { SET_FORM, SUBMIT_FORM } from './action-types'

const initialState = {
  contactForm: []
}

const setIntermitenceReducer = (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case SET_FORM:
      return { ...state, contactForm: payload }
    default:
      return state
  }
}

export default setIntermitenceReducer
