import { addToCart, removeItemsFromCart, updateItemQuantities } from '@graphql/mutation'
import { call, takeLatest } from '@redux-saga/core/effects'
import { SHOW_LOADER, SHOW_TOAST } from '@store/intermitence/action-types'
import { SIGN_UP_ASYNC } from '@store/user/action-types'
import { actionObject, filter, GraphQlClient, manageError, reduceVariation, showDialog, validateFetch } from '@utils'
import { put, select } from 'redux-saga/effects'
import { ADDED_ITEM, REMOVE_ITEM, SET_ITEM, UPDATE_QUANTITY } from './action-types'

function* addedItemAsync({ payload }: any) {
  try {
    const { user: { user: { sessionToken }, isAuth } } = yield select(state => state)

    yield put(actionObject(SHOW_LOADER, true))

    const { item, quantity, variation } = payload

    console.log(variation)

    let variationId = null

    if (item.variations) {
      const filter = reduceVariation(item.variations.nodes, variation)
      variationId = filter?.databaseId
    }

    const response = yield call(GraphQlClient, addToCart({ product: item.databaseId, quantity, variationId }), {}, sessionToken)

    const { addCartItems: { cart }, sessionToken: newSessionToken } = validateFetch(response)

    if (!isAuth && newSessionToken) yield put(actionObject(SIGN_UP_ASYNC, { isAuth: true, user: { email: 'guest', name: 'guest', sessionToken: newSessionToken } }))

    yield put(actionObject(SET_ITEM, { cart: cart }))
    yield put(actionObject(SHOW_LOADER, false))
    yield call(showDialog, 'Producto agregado al carrito')

  } catch (error) {
    yield call(manageError, error, SHOW_TOAST, SHOW_LOADER)
  }
}


function* updateQuantityAsync({ payload: { product, type } }: any) {
  try {

    yield put(actionObject(SHOW_LOADER, true))

    const { user: { user: { sessionToken } } } = yield select(state => state)

    const quantity = (type === 'add') ? product?.quantity + 1 : product?.quantity - 1;
    const max = product?.variation?.node?.stockQuantity || product?.product?.node?.stockQuantity
    const min = 0

    if (quantity > min && quantity <= max) {
      const response = yield call(GraphQlClient, updateItemQuantities({ product: product?.key, quantity }), {}, sessionToken)

      const { updateItemQuantities: { cart: newCart } } = validateFetch(response)

      yield put(actionObject(SET_ITEM, { cart: newCart }))
      yield put(actionObject(SHOW_LOADER, false))
      yield call(showDialog, 'Producto agregado al carrito')
      return
    }
    yield put(actionObject(SHOW_LOADER, false))
    yield call(showDialog, 'Maximo alcanzado')

  } catch (error) {
    yield call(manageError, error, SHOW_TOAST, SHOW_LOADER)
  }
}

function* removeItemAsync({ payload: key }: any) {

  try {

    yield put(actionObject(SHOW_LOADER, true))

    const { user: { user: { sessionToken } } } = yield select(state => state)
    const response = yield call(GraphQlClient, removeItemsFromCart(key), {}, sessionToken)
    const { removeItemsFromCart: { cart: newCart } } = validateFetch(response)

    yield put(actionObject(SET_ITEM, { cart: newCart }))
    yield put(actionObject(SHOW_LOADER, false))
    yield call(showDialog, 'Producto eliminado del carrito')
  } catch (error) {
    yield call(manageError, error, SHOW_TOAST, SHOW_LOADER)
  }
}

export function* watchAddedItem() {
  yield takeLatest(ADDED_ITEM, addedItemAsync)
}

export function* watchUpdateItemQuantities() {
  yield takeLatest(UPDATE_QUANTITY, updateQuantityAsync)
}

export function* watchRemoveItem() {
  yield takeLatest(REMOVE_ITEM, removeItemAsync)
}
