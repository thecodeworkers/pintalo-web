import { MENU_SHOW } from './action-types';
import { AnyAction } from 'redux';

const initialState = {
	showMenu: 0
}

 const setIntermitenceReducer = (state = initialState, { type, payload }: AnyAction) => {
  switch(type) {
    case MENU_SHOW:
    return { ...state, ...payload }

    default:
    return state;
  }
}

export default setIntermitenceReducer
