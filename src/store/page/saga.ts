import { takeLatest, call, put } from 'redux-saga/effects'
import { actionObject, GraphQlClient, validateFetch } from '@utils';
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
  GET_PAGE,
  GET_PAGE_ASYNC
} from './action-types'

const getPageByName = (name) => {
  const pages = {
    homePage: homePageQuery,
    'registerPage': registerPageQuery,
    'loginPage': loginPageQuery,
    'aboutPage': aboutPageQuery,
    'painterPage': painterPageQuery,
    'shopPage': shopPageQuery,
    'inspoPage': inspoPageQuery
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
    console.log(err)
  }
}

export function* watchGetPages() {
  yield takeLatest(GET_PAGE, getPageAsync)
}
