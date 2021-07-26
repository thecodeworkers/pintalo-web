import { takeLatest, call, put } from 'redux-saga/effects'
import { resources } from '@graphql'
import { GET_PAGE_ASYNC } from '../page/action-types'
import { GET_RESOURCES, GET_RESOURCES_ASYNC } from './action-types'
import { actionObject, GraphQlClient, showDialog, validateFetch } from '@utils'
import {
  homePageQuery,
  registerPageQuery,
  loginPageQuery,
  aboutPageQuery,
  painterPageQuery,
  shopPageQuery,
} from '@graphql/query'
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

  return `
    query Page {
      ${pages[name]}
    }
  `
}

function* getResourcesAsync({ payload }) {
  try {
    const allResources = yield call(resources)
    const response = yield call(GraphQlClient, getPageByName(payload))
    const { page } = validateFetch(response)
    yield put(actionObject(GET_PAGE_ASYNC, { [payload]: page }))
    yield put(actionObject(GET_PRODUCT_ASYNC, { products: allResources?.products }))
    yield put(actionObject(GET_RESOURCES_ASYNC, allResources))
  } catch (err) {
    yield call(showDialog, 'Ha ocurrido un error.', 'error')
  }
}

export function* watchGetResources() {
  yield takeLatest(GET_RESOURCES, getResourcesAsync)
}

