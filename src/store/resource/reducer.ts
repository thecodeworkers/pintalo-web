import { AnyAction } from 'redux'
import { GET_RESOURCES_ASYNC } from './action-types'

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
    case GET_RESOURCES_ASYNC:
      return { ...state, ...payload }
    default:
      return state
  }
}

export default resourceReducer
