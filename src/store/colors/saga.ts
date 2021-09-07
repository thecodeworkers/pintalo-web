import { call, put, takeLatest } from '@redux-saga/core/effects'
import { actionObject, GraphQlClient, normalizedArray, showDialog, validateFetch } from '@utils'
import { GET_PRODUCT_ASYNC } from '../product/action-types'
import { attributesQuery, cartQuery, categoriesQuery, productsQuery, colorPageQuery } from '@graphql/query'
import { GET_PAGE_ASYNC } from '@store/page/action-types'
import { SET_ITEM } from '@store/cart/action-types'
import { select } from 'redux-saga/effects'
import { GET_COLORS } from './action-types'

const constructColorQuery = () => (
  `query shopQuery {
    ${attributesQuery}
    ${categoriesQuery}
    ${productsQuery}
    ${colorPageQuery}
    ${cartQuery}
  }`
)

function* getColorAsync() {
  try {

    const { user: { user: { sessionToken } } } = yield select(state => state)
    const response = yield call(GraphQlClient, constructColorQuery(), {}, sessionToken)

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
    yield put(actionObject(GET_PAGE_ASYNC, { 'colorsPage': page }))
    yield put(actionObject(GET_PRODUCT_ASYNC, data))
  } catch (err) {
    yield call(showDialog, 'Ha ocurrido un error.', 'error')
  }
}


export function* watchGetColor() {
  yield takeLatest(GET_COLORS, getColorAsync)
}
