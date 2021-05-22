import { all, fork } from 'redux-saga/effects'
import { watchGetHomePage, watchGetPages } from './page/saga'
import { watchGetResources } from './resource/saga'

function* sagas() {
  yield all([
    fork(watchGetResources),
    fork(watchGetHomePage),
    fork(watchGetPages)
  ])
}

export default sagas
