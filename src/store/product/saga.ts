import { call, put, takeLatest } from '@redux-saga/core/effects'
import { actionObject, GraphQlClient, manageError, normalizedArray, showDialog, validateFetch } from '@utils'
import { GET_PRODUCT, GET_PRODUCT_ASYNC, GET_SHOP } from './action-types'
import { SHOW_TOAST } from '@store/intermitence/action-types'
import { attributesQuery, cartQuery, categoriesQuery, product, productsQuery, shopPageQuery } from '@graphql/query'
import { GET_PAGE_ASYNC } from '@store/page/action-types'
import { SET_ITEM } from '@store/cart/action-types'
import { select } from 'redux-saga/effects'

function* getProductAsync({ payload }: any) {
  try {
    let response = yield call(GraphQlClient, product(payload))
    response = validateFetch(response)
    yield put(actionObject(GET_PRODUCT_ASYNC, { detail: response.product }))
    yield put(actionObject(SET_ITEM, { cart: response.cart }))
  } catch (err) {
    yield call(manageError, err, SHOW_TOAST)
  }
}


const constructShopQuery = () => (
  `query shopQuery {
    ${attributesQuery}
    ${categoriesQuery}
    ${productsQuery}
    ${shopPageQuery}
    ${cartQuery}
  }`
)

function* getShopAsync() {
  try {

    const { user: { user: { sessionToken } } } = yield select(state => state)
    const response = yield call(GraphQlClient, constructShopQuery(), {}, sessionToken)
    const { page, products, uses, customTypes, allPaPresentations, bases, colors, clases, brands, productCategories, cart } = validateFetch(response)

    const data = {
      products: normalizedArray(products?.nodes),
      allProducts: normalizedArray(products?.nodes),
      categories: normalizedArray(productCategories?.nodes),
      attributes: {
        uses: normalizedArray(uses?.nodes),
        customTypes: normalizedArray(customTypes?.nodes),
        presentations: normalizedArray(allPaPresentations?.nodes),
        bases: normalizedArray(bases?.nodes),
        colors: normalizedArray(colors?.nodes),
        classes: normalizedArray(clases?.nodes),
        brands: normalizedArray(brands?.nodes)
      }
    }

    yield put(actionObject(SET_ITEM, { cart: cart }))
    yield put(actionObject(GET_PAGE_ASYNC, { 'shopPage': page }))
    yield put(actionObject(GET_PRODUCT_ASYNC, data))
  } catch (err) {
    yield call(showDialog, 'Ha ocurrido un error.', 'error')
  }
}

export function* watchGetProduct() {
  yield takeLatest(GET_PRODUCT, getProductAsync)
}

export function* watchGetShop() {
  yield takeLatest(GET_SHOP, getShopAsync)
}
