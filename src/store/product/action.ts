// import { productDetail } from '@graphql/query'
import { actionObject } from '@utils'
import { GET_PRODUCT } from './action-types'

export const getProduct: any = (id: string) => async dispatch => {
  // const result = await productDetail(id)
  // dispatch(actionObject(GET_PRODUCT, { detail: result.product }))
}
