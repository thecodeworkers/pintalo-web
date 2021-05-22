import { all, fork } from 'redux-saga/effects'
import { watchGetPages } from './page/saga'
import { watchSignUp } from './user/saga'

function* sagas() {
  yield all([
    fork(watchGetPages),
    fork(watchSignUp)
  ])
}

export default sagas
