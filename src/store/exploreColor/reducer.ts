import { EXPLORECOLOR } from './actions-types'
import { AnyAction } from 'redux'

const initialState = {
  category: null,
  base: null,
  type: null,
  step: 1
}

const setColorReducer = (state = initialState, { type, payload }: AnyAction) => {

  switch (type) {
    case EXPLORECOLOR:
      return { ...state, ...payload }

    default:
      return state
  }
}

export default setColorReducer
