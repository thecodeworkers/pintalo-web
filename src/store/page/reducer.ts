import { AnyAction } from 'redux'
import { GET_PAGE_ASYNC } from './action-types'

const initialState = {
  homePage: {},
  loginPage: {},
  registerPage: {},
  aboutPage: {},
  painterPage: {},
  shopPage: {},
  inspoPage: {}
}

const pageReducer = (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case GET_PAGE_ASYNC:
      return { ...state, ...payload }
    default:
      return state
  }
}

export default pageReducer
