import { actionObject } from '@utils'
import { ADDED_ITEM, REMOVE_ITEM, UPDATE_QUANTITY } from './action-types'

export const addedItem = (item, quantity, variation) => actionObject(ADDED_ITEM, { item, quantity, variation })

export const updateQuantity = (product, type) => actionObject(UPDATE_QUANTITY, { product, type })

export const removeItem = (key) => actionObject(REMOVE_ITEM, key)
