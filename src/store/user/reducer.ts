import { AnyAction } from 'redux'
import { SIGN_UP_ASYNC, SIGN_IN_ASYNC, LOGOUT } from './action-types'

const initialState = {
  isAuth: false,
  user: {}
}

const userReducer = (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case SIGN_UP_ASYNC:
      return { ...state, ...payload }

    case SIGN_IN_ASYNC:
      return { ...state, ...payload }

    case LOGOUT:
      return initialState

    default:
      return state
  }
}

export default userReducer
