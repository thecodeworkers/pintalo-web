import { AnyAction } from 'redux'
import { GET_RESOURCES_ASYNC } from './action-types'

const initialState = {
  categories: [],
  products: [],
  attributes: {
    uses: [],
    types: [],
    presentations: [],
    bases: [],
    colors: [],
    classes: [],
  }
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
