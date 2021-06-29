import { call, takeLatest } from '@redux-saga/core/effects'
import { showDialog } from '@utils'
import { ADDED_ITEM } from './action-types'

function* addedItemAsync() {
  yield call(showDialog, 'Producto agregado al carrito')
}

export function* watchAddedItem() {
  yield takeLatest(ADDED_ITEM, addedItemAsync)
}
