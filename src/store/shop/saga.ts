import { takeLatest, call, put, select } from 'redux-saga/effects'
import { REMOVE_FILTER, REMOVE_FILTER_ASYNC, SET_FILTER, SET_FILTER_ASYNC } from './action-types'
import { actionObject, showDialog } from '@utils';
import { getShop } from '../selectors';

function* setFilterAsync({ payload }: any) {
  try {
    const { filters } = yield select(getShop)
    const index = filters.indexOf(payload)

    index > -1 ? filters.splice(index, 1) : filters.push(payload)

    yield put(actionObject(SET_FILTER_ASYNC, filters))

  } catch {
    yield call(showDialog, 'Ha ocurrido un error.', 'error')
  }
}

function* removeFilterAsync({ payload }: any) {
  try {
    const { filters } = yield select(getShop)
    filters.splice(payload, 1)

    yield put(actionObject(REMOVE_FILTER_ASYNC, filters))

  } catch {
    yield call(showDialog, 'Ha ocurrido un error.', 'error')
  }
}

export function* watchSetFilter() {
  yield takeLatest(SET_FILTER, setFilterAsync)
}

export function* watchRemoveFilter() {
  yield takeLatest(REMOVE_FILTER, removeFilterAsync)
}
