import { actionObject } from '@utils'
import { SELECT_OPTION } from './action-types'

export const selectOption = (option, value) => {
  return actionObject(SELECT_OPTION, { [option]: value })
}
