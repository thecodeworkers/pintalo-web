import { takeLatest, call, put } from 'redux-saga/effects'
// import { pages, resources } from '@graphql'
// import { GET_PAGES_ASYNC } from '../page/action-types'
import { GET_RESOURCES, GET_RESOURCES_ASYNC } from './action-types'
import { actionObject } from '@utils';

function* getResourcesAsync() {
  try {
    // const allResources = yield call(resources)
    // const homePage = yield call(pages, 'homePage')

    // yield put(actionObject(GET_PAGES_ASYNC, {
    //   ...pages,
    //   ...{ homePage }
    // }))

    // yield put(actionObject(GET_RESOURCES_ASYNC, allResources))

  } catch {

  }
}

export function* watchGetResources() {
  yield takeLatest(GET_RESOURCES, getResourcesAsync)
}
