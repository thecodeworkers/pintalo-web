import { actionObject } from '@utils'
import { SELECT_PALETTE } from './action-types'

export const selectPalette = (currentType, currentElements) => {
  return actionObject(SELECT_PALETTE, { currentType, currentElements })
}
