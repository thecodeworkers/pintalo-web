import { takeLatest, call, put, select } from 'redux-saga/effects'
import { SET_FILTER, SET_FILTER_ASYNC } from './action-types'
import { FILTER_PRODUCTS } from '../product/action-types'
import { actionObject, showDialog } from '@utils'
import { products } from '@utils/tmpProducts'
import { getShop } from '../selectors'

function* setFilterAsync({ payload }: any) {
  try {
    const { filters } = yield select(getShop)

    const index = filters.indexOf(payload)
    index > -1 ? filters.splice(index, 1) : filters.push(payload)

    const productFilters = products.filter(p => {
      for (let f of filters) {
        if (p.type == f) return true
      }
      return false
    })

    yield put(actionObject(SET_FILTER_ASYNC, filters))

    yield put(actionObject(FILTER_PRODUCTS, {
      products: filters.length ? productFilters : products
    }))

  } catch {
    yield call(showDialog, 'Ha ocurrido un error.', 'error')
  }
}

export function* watchSetFilter() {
  yield takeLatest(SET_FILTER, setFilterAsync)
}
