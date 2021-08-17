import { AnyAction } from 'redux'
import { takeLatest, call, put, select } from 'redux-saga/effects'
import { CHANGE_PAGE, SEARCH, SET_FILTER, SET_FILTER_ASYNC } from './action-types'
import { actionObject, productFilter, showDialog } from '@utils'
import { FILTER_PRODUCTS } from '../product/action-types'
import { getShop } from '../selectors'

const searchRecords = (record: any, searchValue: string) => {
  const keys = Object.keys(record)

  for (let key of keys) {
    const match = String(record[key]).toLocaleLowerCase().search(searchValue)
    if (match > -1) return record
  }
}

const searchResults = (phrase: string, records: Array<any>) => {
  if (phrase) {
    const results = records.filter((record) => searchRecords(record, phrase))
    return results
  }

  return records
}



function* setFilterAsync({ payload }: AnyAction) {
  try {

    const { shop: { filters, page, prevPage }, product: { allProducts: products } } = yield select(state => state)
    const index = filters[payload?.type].indexOf(payload?.value)
    index > -1 ? filters[payload?.type].splice(index, 1) : filters[payload?.type].push(payload?.value)

    const productFilters = productFilter(products, filters, 'name')
    let productArray = products
    let pagination = {}

    const length = Object.keys(filters).reduce((prev, next) => {
      if (filters[next].length) return true
      return prev
    }, false)

    if (length) {
      productArray = productFilters
      if (page > 1) {
        pagination = {
          page: 1,
          prevPage: page
        }
      }
    } else {
      if (prevPage > 1) {
        pagination = {
          page: prevPage,
          prevPage: 1
        }
      }
    }

    yield put(actionObject(CHANGE_PAGE, pagination))
    yield put(actionObject(SET_FILTER_ASYNC, filters))
    yield put(actionObject(FILTER_PRODUCTS, { products: productArray }))
  } catch (err) {
    yield call(showDialog, 'Ha ocurrido un error.', 'error')
  }
}

function* searchAsync({ payload }: AnyAction) {
  try {
    const { shop: { page, prevPage, filters }, product: { allProducts: products } } = yield select(state => state)

    let allProducts = products
    if (filters.length) allProducts = productFilter(products, filters, 'name')

    const results = searchResults(payload.toLocaleLowerCase(), allProducts)

    let pagination = {}

    if (page > 1) {
      pagination = {
        page: 1,
        prevPage: page
      }
    }

    if (prevPage > 1) {
      pagination = {
        page: prevPage,
        prevPage: 1
      }
    }

    yield put(actionObject(CHANGE_PAGE, pagination))

    yield put(actionObject(FILTER_PRODUCTS, {
      products: results
    }))

  } catch {
    yield call(showDialog, 'Ha ocurrido un error.', 'error')
  }
}

export function* watchSetFilter() {
  yield takeLatest(SET_FILTER, setFilterAsync)
}

export function* watchSearch() {
  yield takeLatest(SEARCH, searchAsync)
}
