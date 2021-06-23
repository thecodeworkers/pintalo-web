import { AnyAction } from 'redux'
import { CHANGE_PAGE, SET_FILTER_ASYNC } from './action-types'

const initialState = {
  filters: [],
  prevPage: 0,
  page: 1
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
    case CHANGE_PAGE:
      return { ...state, ...payload }
    default:
      return state
  }
}

export default shopReducer
