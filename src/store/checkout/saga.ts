import { call, put, takeLatest, select } from '@redux-saga/core/effects'
import { actionObject, fetchPostJSON, formatWooCommerceAmount, GraphQlClient, manageError, validateFetch, WooComerceClient } from '@utils'
import { GET_CHECKOUT_DATA, GET_COUNTRY_DATA_ASYNC, SEND_CHECKOUT_FORM, CHECKOUT_DATA, RESET_STATE } from './action-types'
import { SHOW_LOADER, SHOW_TOAST } from '@store/intermitence/action-types'
import { SET_ITEM } from '@store/cart/action-types'
import { checkoutQuery, cartQuery } from '@graphql/query'
import { checkoutForm } from '@graphql/mutation'
import { getCart, getCheckout, getUser } from '@store/selectors'
import getStripe from '@utils/getStripe'
import WooCommerceClient from '@utils/wooCommerceClient'

function* getCheckoutDataAsync() {
  try {
    let response = yield call(GraphQlClient, checkoutQuery)
    response = validateFetch(response)

    const allCountries = yield call(WooComerceClient, 'data/countries')

    yield put(actionObject(GET_COUNTRY_DATA_ASYNC,
      {
        countries: response?.countries,
        paymentMethods: response?.paymentGateways,
        paymentCountries: allCountries,
      }
    ))

  } catch (err) {
    yield call(manageError, err, SHOW_TOAST)
  }
}

const getCartQuery = () => {
  return `
  query getCart {
    ${cartQuery}
  }
  `
}

function* sendCheckoutFormAsync() {

  try {
    yield put(actionObject(SHOW_LOADER, true))
    const { basic, address, paymentMethod, budget, card, paymentData } = yield select(getCheckout)
    const { user: { sessionToken, databaseId } } = yield select(getUser)
    const { cart } = yield select(getCart)

    let status = 'pending'

    if (paymentMethod.toLowerCase() === 'tdc') {
      const resp = yield call(fetchPostJSON, '/api/payment-intent', { amount: formatWooCommerceAmount(cart?.total), currency: 'USD', description: 'TESTING' })

      if (resp.statusCode === 500) throw new Error('error');

      const stripe = yield call(getStripe)

      const { paymentIntent, error } = yield call(stripe.confirmCardPayment, resp.client_secret, {
        payment_method: card,
      })

      if (error && paymentIntent?.status !== 'succeeded') throw new Error(error.code);
      status = 'processing'
    }

    let response = yield call(GraphQlClient, checkoutForm(basic, address, budget, paymentMethod, paymentData), {}, sessionToken)
    response = validateFetch(response)

    if (response) {
      yield call(WooCommerceClient, `orders/${response?.checkout?.order?.orderNumber}`, 'PUT', { customer_id: databaseId, status: status })

      let cartResponse = yield call(GraphQlClient, getCartQuery(), {}, sessionToken)
      cartResponse = validateFetch(cartResponse)
      yield put(actionObject(SET_ITEM, { cart: cartResponse }))

      yield put(actionObject(CHECKOUT_DATA, { successOrder: true }))
      yield put(actionObject(SHOW_LOADER, false))
      yield put(actionObject(RESET_STATE))
    }

  }
  catch (err) {
    yield call(manageError, err, SHOW_TOAST)
  }
}

export function* watchGetCheckoutData() {
  yield takeLatest(GET_CHECKOUT_DATA, getCheckoutDataAsync)
}

export function* watchSendCheckoutForm() {
  yield takeLatest(SEND_CHECKOUT_FORM, sendCheckoutFormAsync)
}
