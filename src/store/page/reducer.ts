import { AnyAction } from 'redux'
import { GET_INSPO_PAGE_ASYNC, GET_PAGE_ASYNC } from './action-types'

const initialState = {
  homePage: {},
  loginPage: {},
  registerPage: {},
  aboutPage: {},
  painterPage: {},
  shopPage: {},
  inspoPage: {},
  contactForm: []
}

const pageReducer = (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case GET_PAGE_ASYNC:
      return { ...state, ...payload }
    case GET_INSPO_PAGE_ASYNC:
      return { ...state, ...payload }
    default:
      return state
  }
}

export default pageReducer
