import { MENU_SHOW, FOOTER_SHOW, MODAL_CLOSE} from './action-types'
import { AnyAction } from 'redux'

const initialState = {
	showMenu: 0,
  showFooter: true,
  showModal: false
}

 const setIntermitenceReducer = (state = initialState, { type, payload }: AnyAction) => {
  switch(type) {
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
