import { SET_RESOURCES, } from './action-types'
import { actionObject } from '../../utils'
import { pages, resources } from '../../graphql/query'
import { GET_PAGES } from '@store/page/action-types'

export const getResources: any = () => async (dispatch, getState) => {
  const allResources = await resources()
  const { page } = getState()
  const homePage = await pages('homePage')
  dispatch(actionObject(GET_PAGES, { ...page, ...{ homePage: homePage } }))
  dispatch(actionObject(SET_RESOURCES, allResources))
}
