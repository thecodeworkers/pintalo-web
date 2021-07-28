import { actionObject } from '@utils'
import { CHANGE_PAGE, SEARCH, SET_FILTER } from './action-types'

export const setFilter = (filter: string, type) => actionObject(SET_FILTER, { value: filter, type })
export const changePage = (page: number) => actionObject(CHANGE_PAGE, { page })
export const search = (word: string) => actionObject(SEARCH, word)
