import { call, put, takeLatest, select } from '@redux-saga/core/effects'
import { actionObject, GraphQlClient, manageError, validateFetch } from '@utils'
import { GET_CHECKOUT_DATA, GET_COUNTRY_DATA_ASYNC, SEND_CHECKOUT_FORM } from './action-types'
import { SHOW_TOAST } from '@store/intermitence/action-types'
import { checkoutQuery } from '@graphql/query'
import { checkoutForm } from '@graphql/mutation'
import { getCheckout, getUser } from '@store/selectors'

function* getCheckoutDataAsync() {
  try {
    let response = yield call(GraphQlClient, checkoutQuery)
    response = validateFetch(response)

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
    const { basic, address, paymentMethod, budget } = yield select(getCheckout)
    const { user: { sessionToken } } = yield select(getUser)

    let response = yield call(GraphQlClient, checkoutForm(basic, address, budget, paymentMethod), {}, sessionToken)
    response = validateFetch(response)

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
