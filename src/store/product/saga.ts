import { call, put, takeLatest } from '@redux-saga/core/effects'
import { actionObject, GraphQlClient, manageError, validateFetch } from '@utils'
import { GET_PRODUCT, GET_PRODUCT_ASYNC } from './action-types'
import { SHOW_TOAST } from '@store/intermitence/action-types'
import { product } from '@graphql/query'

function* getProductAsync({ payload }: any) {
  try {
    let response = yield call(GraphQlClient, product(payload))
    response = validateFetch(response)

    yield put(actionObject(GET_PRODUCT_ASYNC, { detail: response.product }))

  } catch (err) {
    yield call(manageError, err, SHOW_TOAST)
  }
}

export function* watchGetProduct() {
  yield takeLatest(GET_PRODUCT, getProductAsync)
}
