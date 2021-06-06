import { actionObject } from '@utils'
import { GET_PRODUCT } from './action-types'

export const getProduct = (id: string) => actionObject(GET_PRODUCT, id)
