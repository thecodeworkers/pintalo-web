import { AnyAction } from 'redux'
import { SIGN_UP_ASYNC } from './action-types'

const initialState = {
  isAuth: false,
  user: {}
}

const userReducer = (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case SIGN_UP_ASYNC:
      return { ...state, ...payload }
    default:
      return state
  }
}

export default userReducer
