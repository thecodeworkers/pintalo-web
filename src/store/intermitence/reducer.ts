import { MENU_SHOW, FOOTER_SHOW, MODAL_CLOSE, SHOW_LOADER, SHOW_TOAST} from './action-types'
import { AnyAction } from 'redux'

const initialState = {
	showMenu: 0,
  showFooter: true,
  showModal: false,
  showLoader: false,
  toast: {
    status: 0,
    message: ''
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

    case MODAL_CLOSE:
      return { ...state, ...payload }

    default:
      return state
  }
}

export default setIntermitenceReducer
