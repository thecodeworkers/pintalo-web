import { AnyAction } from 'redux'
import { SET_FILTER_ASYNC } from './action-types'

const initialState = {
  filters: []
}

const shopReducer = (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case SET_FILTER_ASYNC:
      return {
        ...state,
        filters: [
          ...payload
        ]
      }
    default:
      return state
  }
}

export default shopReducer
