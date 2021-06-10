import { AnyAction } from 'redux'
import { palettes } from '@utils/tmpPalettes'
import { SELECT_PALETTE } from './action-types'

const initialState = {
  currentType: 'palettes',
  currentElements: palettes
}

const paletteReducer = (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case SELECT_PALETTE:
      return { ...state, ...payload }
    default:
      return state
  }
}

export default paletteReducer
