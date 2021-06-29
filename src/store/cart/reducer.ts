import { AnyAction } from 'redux'
import { SET_ITEM } from './action-types'

const initialState = {
  items: []
}

const cartReducer = (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case SET_ITEM:
      return {
        ...state, ...payload
      }
    default:
      return state
  }
}

export default cartReducer
