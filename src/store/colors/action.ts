import { actionObject } from '@utils'
import { GET_COLORS, SELECT_OPTION } from './action-types'

export const selectOption = (option, value) => {
  return actionObject(SELECT_OPTION, { [option]: value })
}

export const getColorsPage = () => actionObject(GET_COLORS)
