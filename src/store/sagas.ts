import { all, fork } from 'redux-saga/effects'
import { watchGetInspoPage, watchGetPages } from './page/saga'
import { watchSignIn, watchSignUp } from './user/saga'

function* sagas() {
  yield all([
    fork(watchGetPages),
    fork(watchSignUp),
    fork(watchGetInspoPage),
    fork(watchSignIn)
  ])
}

export default sagas
