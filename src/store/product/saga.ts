import { call, put, takeLatest } from '@redux-saga/core/effects'
import { actionObject, GraphQlClient, manageError, validateFetch } from '@utils'
import { GET_PRODUCT, GET_PRODUCT_ASYNC } from './action-types'
import { SHOW_TOAST } from '@store/intermitence/action-types'
import { product } from '@graphql/query'

function* getProductAsync({ payload }: any) {
  try {
    console.log(payload)
    let response = yield call(GraphQlClient, product(payload))
    console.log(response)
    response = validateFetch(response)
    console.log(response)
    yield put(actionObject(GET_PRODUCT_ASYNC, { detail: response.product }))

  } catch (err) {
    yield call(manageError, err, SHOW_TOAST)
  }
}

export function* watchGetProduct() {
  yield takeLatest(GET_PRODUCT, getProductAsync)
}
