import { all, fork } from 'redux-saga/effects'
import { watchGetInspoPage, watchGetPages } from './page/saga'
import { watchSignUp } from './user/saga'

function* sagas() {
  yield all([
    fork(watchGetPages),
    fork(watchSignUp),
    fork(watchGetInspoPage)
  ])
}

export default sagas
