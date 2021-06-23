import { AnyAction } from 'redux'
import { takeLatest, call, put, select } from 'redux-saga/effects'
import { CHANGE_PAGE, SEARCH, SET_FILTER, SET_FILTER_ASYNC } from './action-types'
import { actionObject, showDialog } from '@utils'
import { products } from '@utils/tmpProducts'
import { FILTER_PRODUCTS } from '../product/action-types'
import { getShop } from '../selectors'

const searchRecords = (record: any, searchValue: string) => {
  const keys = Object.keys(record)

  for(let key of keys) {
    const match = String(record[key]).toLocaleLowerCase().search(searchValue)
    if(match > -1) return record
  }
}

const searchResults = (phrase: string, records: Array<any>) => {
  if(phrase) {
    const results = records.filter((record) => searchRecords(record, phrase))
    return results
  }

  return records
}

const filterResults = (filters) => (
  products.filter(p => {
    for (let f of filters) {
      if (p.type == f) return true
    }
    return false
  })
)

function* setFilterAsync({ payload }: AnyAction) {
  try {
    const { filters, page, prevPage } = yield select(getShop)

    const index = filters.indexOf(payload)
    index > -1 ? filters.splice(index, 1) : filters.push(payload)

    const productFilters = filterResults(filters)

    let productArray = products
    let pagination = {}

    if (filters.length) {
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

    yield put(actionObject(FILTER_PRODUCTS, {
      products: productArray
    }))

  } catch {
    yield call(showDialog, 'Ha ocurrido un error.', 'error')
  }
}

function* searchAsync({ payload }: AnyAction) {
  try {
    const { page, prevPage, filters } = yield select(getShop)

    let allProducts = products
    if (filters.length) allProducts = filterResults(filters)

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
