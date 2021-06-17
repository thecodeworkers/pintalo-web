import { takeLatest, call, put } from 'redux-saga/effects'
import { actionObject, GraphQlClient, manageError, validateFetch } from '@utils'
import { SHOW_TOAST } from '../intermitence/action-types'
import {
  homePageQuery,
  registerPageQuery,
  loginPageQuery,
  aboutPageQuery,
  painterPageQuery,
  shopPageQuery,
  inspoPageQuery
} from '@graphql/query'
import {
  GET_INSPO_PAGE,
  GET_PAGE,
  GET_PAGE_ASYNC
} from './action-types'

const getPageByName = (name) => {
  const pages = {
    homePage: homePageQuery,
    registerPage: registerPageQuery,
    loginPage: loginPageQuery,
    aboutPage: aboutPageQuery,
    painterPage: painterPageQuery,
    shopPage: shopPageQuery
  }

  const query = `
    query Page {
      ${pages[name]}
    }
  `

  return query
}

function* getPageAsync({ payload }: any) {
  try {
    const response = yield call(GraphQlClient, getPageByName(payload))
    const { page } = validateFetch(response)

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
