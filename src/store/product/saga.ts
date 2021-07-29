import { call, put, takeLatest } from '@redux-saga/core/effects'
import { actionObject, GraphQlClient, manageError, normalizedArray, showDialog, validateFetch } from '@utils'
import { GET_PRODUCT, GET_PRODUCT_ASYNC, GET_SHOP } from './action-types'
import { SHOW_TOAST } from '@store/intermitence/action-types'
import { attributesQuery, categoriesQuery, product, productsQuery, shopPageQuery } from '@graphql/query'
import { GET_PAGE_ASYNC } from '@store/page/action-types'

function* getProductAsync({ payload }: any) {
  try {
    let response = yield call(GraphQlClient, product(payload))
    response = validateFetch(response)
    yield put(actionObject(GET_PRODUCT_ASYNC, { detail: response.product }))

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
  }`
)

function* getShopAsync() {
  try {
    const response = yield call(GraphQlClient, constructShopQuery())
    const { page, products, allPaUses, allPaTypes, allPaPresentations, allPaBases, paColors, paClasses, allPaMarcas, productCategories } = validateFetch(response)

    const data = {
      products: normalizedArray(products?.nodes),
      allProducts: normalizedArray(products?.nodes),
      categories: normalizedArray(productCategories?.nodes),
      attributes: {
        uses: normalizedArray(allPaUses?.nodes),
        types: normalizedArray(allPaTypes?.nodes),
        presentations: normalizedArray(allPaPresentations?.nodes),
        bases: normalizedArray(allPaBases?.nodes),
        colors: normalizedArray(paColors?.nodes),
        classes: normalizedArray(paClasses?.nodes),
        brands: normalizedArray(allPaMarcas?.nodes)
      }
    }
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
