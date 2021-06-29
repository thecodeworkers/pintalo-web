import { all, fork } from 'redux-saga/effects'
import { watchGetInspoPage, watchGetPages } from './page/saga'
import { watchSignIn, watchSignUp, watchForgotPassword } from './user/saga'
import { watchGetProduct } from './product/saga'
import { watchSetFilter, watchSearch } from './shop/saga'
import { watchAddedItem } from './cart/saga'

function* sagas() {
  yield all([
    fork(watchGetPages),
    fork(watchSignUp),
    fork(watchGetInspoPage),
    fork(watchSignIn),
    fork(watchForgotPassword),
    fork(watchGetProduct),
    fork(watchSetFilter),
    fork(watchSearch),
    fork(watchAddedItem)
  ])
}

export default sagas
