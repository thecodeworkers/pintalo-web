import { actionObject } from '@utils'
import { SET_FILTER } from './action-types'

export const setFilter = (filter: string) => actionObject(SET_FILTER, filter)
