import { actionObject } from '@utils'
import { GET_INSPO_PAGE, GET_PAGE } from './action-types'

export const getPage = pageName => actionObject(GET_PAGE, pageName)

export const getInspoPage = () => actionObject(GET_INSPO_PAGE)
