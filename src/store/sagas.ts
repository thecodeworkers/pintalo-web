import { all, fork } from 'redux-saga/effects'
import { watchGetInspoPage, watchGetPages } from './page/saga'
import { watchSignIn, watchSignUp, watchForgotPassword } from './user/saga'
import { watchGetProduct } from './product/saga'
import { watchRemoveFilter, watchSetFilter } from './shop/saga'

function* sagas() {
  yield all([
    fork(watchGetPages),
    fork(watchSignUp),
    fork(watchGetInspoPage),
    fork(watchSignIn),
    fork(watchForgotPassword),
    fork(watchGetProduct),
    fork(watchSetFilter),
    fork(watchRemoveFilter)
  ])
}

export default sagas
