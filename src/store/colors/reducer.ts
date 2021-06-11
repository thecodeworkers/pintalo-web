import { AnyAction } from 'redux'
import { SELECT_OPTION } from './action-types'

const initialState = {
  category: 'colorOfBrand',
  brand: '',
  colorSelected: '#3CBC3C'
}

const colorsReducer = (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case SELECT_OPTION:
      return { ...state, ...payload }
    default:
      return state
  }
}

export default colorsReducer
