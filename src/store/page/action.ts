import { actionObject } from '@utils'
import { GET_PAGE } from './action-types'

// const setResources = (data, page, resources) => {
//   data[resources] = page
//   return data;
// }

// export const getPages: any = (resources) => async (dispatch, getState) => {

//   const result: any = await pages(resources)
//   const { page } = getState()
//   let data = page
//   data = setResources(data, result, resources);
//   dispatch(actionObject(GET_PAGES, data))
// }

export const getPage = pageName => actionObject(GET_PAGE, pageName)
