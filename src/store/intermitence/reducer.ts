import { AnyAction } from 'redux'
import {
  MENU_SHOW,
  FOOTER_SHOW,
  SHOW_MODAL,
  SHOW_LOADER,
  SHOW_TOAST
} from './action-types'

const initialState = {
	showMenu: 0,
  showFooter: true,
  showLoader: false,
  toast: {
    status: 0,
    message: '',
    type: ''
  },
  modal: {
    contact: false,
    sendEmail: false,
    calculator: false
  }
}

 const setIntermitenceReducer = (state = initialState, { type, payload }: AnyAction) => {
  switch(type) {
    case SHOW_LOADER:
      return { ...state, showLoader: payload }

    case SHOW_TOAST:
      return {
        ...state,
        toast: {
          ...state.toast,
          ...payload
        }
      }

    case MENU_SHOW:
      return { ...state, ...payload }

    case FOOTER_SHOW:
      return { ...state, ...payload }

    case SHOW_MODAL:
      return { ...state, ...payload }

    default:
      return state
  }
}

export default setIntermitenceReducer
