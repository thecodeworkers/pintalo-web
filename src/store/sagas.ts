import { all, fork } from 'redux-saga/effects'
import { watchGetPages } from './page/saga'
import { watchGetResources } from './resource/saga'

function* sagas() {
  yield all([
    fork(watchGetResources),
    fork(watchGetPages)
  ])
}

export default sagas
