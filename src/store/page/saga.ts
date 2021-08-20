import { takeLatest, call, put, select } from 'redux-saga/effects'
import { actionObject, GraphQlClient, manageError, normalizedArray, validateFetch } from '@utils'
import { SHOW_TOAST } from '../intermitence/action-types'
import {
  homePageQuery,
  registerPageQuery,
  loginPageQuery,
  aboutPageQuery,
  painterPageQuery,
  shopPageQuery,
  inspoPageQuery,
  cartQuery,
  attributesQuery,
  categoriesQuery
} from '@graphql/query'
import {
  GET_INSPO_PAGE,
  GET_PAGE,
  GET_PAGE_ASYNC
} from './action-types'
import { SET_ITEM } from '@store/cart/action-types'
import { getUser } from '@store/selectors'
import { GET_PRODUCT_ASYNC } from '@store/product/action-types'

const getPageByName = (name) => {
  const pages = {
    homePage: homePageQuery,
    registerPage: registerPageQuery,
    loginPage: loginPageQuery,
    aboutPage: aboutPageQuery,
    painterPage: painterPageQuery,
    shopPage: shopPageQuery
  }

  const optional = (name === 'homePage') ? `
  ${attributesQuery}
  ${categoriesQuery}
  ` : ''
  const query = `
    query Page {
      ${pages[name]}
      ${optional}
      ${cartQuery}
    }
  `

  return query
}

function* getPageAsync({ payload }: any) {
  try {

    const { user: { sessionToken } } = yield select(getUser)
    const response = yield call(GraphQlClient, getPageByName(payload), {}, sessionToken)
    const { page, cart, productCategories, bases, customTypes } = validateFetch(response)

    if (payload === 'homePage') {
      const categories = normalizedArray(productCategories?.nodes)
      categories.splice(categories.findIndex((data) => data.name === 'Uncategorized'), 1)
      const optional = {
        categories: categories,
        attributes: {
          customTypes: normalizedArray(customTypes?.nodes),
          bases: normalizedArray(bases?.nodes)
        }
      }
      yield put(actionObject(GET_PRODUCT_ASYNC, optional))
    }

    yield put(actionObject(SET_ITEM, { cart: cart }))
    yield put(actionObject(GET_PAGE_ASYNC, { [payload]: page }));

  } catch (err) {
    yield call(manageError, err)
  }
}

function* getInspoPageAsync() {
  try {
    const query = `
      query Page {
        ${inspoPageQuery}
      }
    `

    const { data } = yield call(GraphQlClient, query)

    yield put(actionObject(GET_PAGE_ASYNC, { inspoPage: data }))

  } catch (err) {
    yield call(manageError, err, SHOW_TOAST)
  }
}

export function* watchGetPages() {
  yield takeLatest(GET_PAGE, getPageAsync)
}

export function* watchGetInspoPage() {
  yield takeLatest(GET_INSPO_PAGE, getInspoPageAsync)
}
