import { AnyAction } from 'redux'
import { SET_RESOURCES } from './action-types'

const initialState = {
  categories: [],
  types: [],
  products: [],
  bases: [],
  brands: [],
  inspo: [],
  painterEntry: [],
  brandEntry: []
}

const resourceReducer = (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case SET_RESOURCES:
      return { ...state, ...payload }
    default:
      return state
  }
}

export default resourceReducer
