import { all, fork } from 'redux-saga/effects'
import { watchGetResources } from './resource/saga'

function* sagas() {
  yield all([
    fork(watchGetResources)
  ])
}

export default sagas
