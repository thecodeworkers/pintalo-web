import { all, fork } from 'redux-saga/effects'
import { watchGetInspoPage, watchGetPages } from './page/saga'
import { watchSignIn, watchSignUp, watchForgotPassword } from './user/saga'
import { watchGetProduct, watchGetShop } from './product/saga'
import { watchSetFilter, watchSearch } from './shop/saga'
import { watchAddedItem, watchRemoveItem, watchUpdateItemQuantities } from './cart/saga'
import { watchSubmitForm } from './contact/saga'
import { watchGetCountry } from './checkout/saga'

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
    fork(watchAddedItem),
    fork(watchGetShop),
    fork(watchUpdateItemQuantities),
    fork(watchRemoveItem),
    fork(watchSubmitForm),
    fork(watchGetCountry)
  ])
}

export default sagas
