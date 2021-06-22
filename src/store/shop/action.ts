import { actionObject } from '@utils'
import { REMOVE_FILTER, SET_FILTER } from './action-types'

export const setFilter = (filter: string) => actionObject(SET_FILTER, filter)
export const removeFilter = (index: number) => actionObject(REMOVE_FILTER, index)
