import { GET_RESOURCES, } from './action-types'
import { actionObject } from '@utils'

export const getResources: any = (payload) => actionObject(GET_RESOURCES, payload)
