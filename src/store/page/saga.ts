import { takeLatest, call, put } from 'redux-saga/effects'
import { homePageQuery } from '@graphql/query'
import { actionObject, GraphQlClient, validateFetch } from '@utils';
import {
  GET_HOME_PAGE,
  GET_HOME_PAGE_ASYNC,
  GET_PAGES,
  GET_PAGES_ASYNC
} from './action-types'

function* getHomePageAsync() {
  try {
    const query = `
      query Home {
        ${homePageQuery}
      }
    `

    const response = yield call(GraphQlClient, query)
    const { homePage: { home } } = validateFetch(response)

    yield put(actionObject(GET_HOME_PAGE_ASYNC, { homePage: home }));

  } catch (err) {
    yield put(actionObject(GET_HOME_PAGE_ASYNC, { homePage: {
      img: 'https://cryptobuyer-dev-admin.thecodeworkers.com/wp-content/uploads/2021/03/banner-home.png'
     } }));
  }
}

function* getPageAsync() {
  try {
    // const { home } = yield call(pages, 'homePage')
    // yield put(actionObject(GET_PAGES_ASYNC, { homePage: home }));

  } catch {

  }
}

export function* watchGetHomePage() {
  yield takeLatest(GET_HOME_PAGE, getHomePageAsync)
}

export function* watchGetPages() {
  yield takeLatest(GET_PAGES, getPageAsync)
}
