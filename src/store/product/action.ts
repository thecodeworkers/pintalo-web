import { actionObject } from '@utils'
import { GET_PRODUCT, GET_SHOP } from './action-types'

export const getProduct = (id: string) => actionObject(GET_PRODUCT, id)
export const getShop = () => actionObject(GET_SHOP)
