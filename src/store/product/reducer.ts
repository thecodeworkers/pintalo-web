import { AnyAction } from 'redux'
import { GET_PRODUCT_ASYNC } from './action-types'

const initialState = {
  detail: {}
}

const productReducer = (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case GET_PRODUCT_ASYNC:
      return { ...state, ...payload }
    default:
      return state
  }
}

export default productReducer
