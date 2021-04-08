import { MENU_SHOW, FOOTER_SHOW} from './action-types';
import { AnyAction } from 'redux';

const initialState = {
	showMenu: 0,
  showFooter: true
}

 const setIntermitenceReducer = (state = initialState, { type, payload }: AnyAction) => {
  switch(type) {
    case MENU_SHOW:
    return { ...state, ...payload }

    case FOOTER_SHOW:
    return { ...state, ...payload }

    default:
    return state;
  }
}

export default setIntermitenceReducer
