import { call, put, takeLatest, select } from '@redux-saga/core/effects'
import { actionObject, GraphQlClient, manageError, validateFetch, WooComerceClient } from '@utils'
import { GET_CHECKOUT_DATA, GET_COUNTRY_DATA_ASYNC, SEND_CHECKOUT_FORM, CHECKOUT_DATA, RESET_STATE } from './action-types'
import { SHOW_LOADER } from '@store/intermitence/action-types'
import { SET_ITEM } from '@store/cart/action-types'
import { SHOW_TOAST } from '@store/intermitence/action-types'
import { checkoutQuery } from '@graphql/query'
import { checkoutForm } from '@graphql/mutation'
import { getCheckout, getUser } from '@store/selectors'

function* getCheckoutDataAsync() {
  try {
    let response = yield call(GraphQlClient, checkoutQuery)
    response = validateFetch(response)

    const allCountries = yield call(WooComerceClient, 'data/countries')

    yield put(actionObject(GET_COUNTRY_DATA_ASYNC,
      {
        countries: response?.countries,
        paymentMethods: response?.paymentGateways
       }
    ))

  } catch (err) {
    yield call(manageError, err, SHOW_TOAST)
  }
}

function* sendCheckoutFormAsync() {

  try {
    yield put(actionObject(SHOW_LOADER, true))
    const { basic, address, paymentMethod, budget } = yield select(getCheckout)
    const { user: { sessionToken } } = yield select(getUser)

    let response = yield call(GraphQlClient, checkoutForm(basic, address, budget, paymentMethod), {}, sessionToken)
    response = validateFetch(response)

    if(response) {
      yield put(actionObject(SET_ITEM, { cart: {} }))
      yield put(actionObject(CHECKOUT_DATA, { successOrder: true }))
    }

    yield put(actionObject(SHOW_LOADER, false))
    yield put(actionObject(RESET_STATE))

  }
  catch (err){
    yield call(manageError, err, SHOW_TOAST)
  }
}

export function* watchGetCheckoutData() {
  yield takeLatest(GET_CHECKOUT_DATA, getCheckoutDataAsync)
}

export function* watchSendCheckoutForm() {
  yield takeLatest(SEND_CHECKOUT_FORM, sendCheckoutFormAsync)
}
