import { actionObject } from '@utils'
import { ADDED_ITEM, SET_ITEM } from './action-types'

export const setItem = (items) => actionObject(SET_ITEM, { items })

export const addedItem = () => actionObject(ADDED_ITEM)
