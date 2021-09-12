import { call, put, takeLatest, select } from '@redux-saga/core/effects'
import { actionObject, GraphQlClient, manageError, validateFetch } from '@utils'
import { GET_COUNTRY, GET_COUNTRY_ASYNC, SEND_CHECKOUT_FORM } from './action-types'
import { SHOW_TOAST } from '@store/intermitence/action-types'
import { countriesQuery } from '@graphql/query'
import { checkoutForm } from '@graphql/mutation'
import { getCheckout } from '@store/selectors'

function* getCountryAsync() {
  try {
    let response = yield call(GraphQlClient, countriesQuery)
    response = validateFetch(response)

    const buildSimpleArray = (array: any, key: string): Array<any> => {
      let newArray = []
      array.forEach((item: any, index: number) => {
        newArray[index] = item[key]
      })

      return newArray
    }

    yield put(actionObject(GET_COUNTRY_ASYNC,
      {
        countries: buildSimpleArray(response?.countries?.nodes, 'title'),
        municipalities: buildSimpleArray(response?.municipalities?.nodes, 'name')
       }
    ))

  } catch (err) {
    yield call(manageError, err, SHOW_TOAST)
  }
}


function* sendCheckoutFormAsync() {

  const { basic, address, paymentMethod, budget } = yield select(getCheckout)

  try {
    console.log(checkoutForm(basic, address, paymentMethod, budget))
  }
  catch (err){
    yield call(manageError, err, SHOW_TOAST)
  }
}

export function* watchGetCountry() {
  yield takeLatest(GET_COUNTRY, getCountryAsync)
}

export function* watchSendCheckoutForm() {
  yield takeLatest(SEND_CHECKOUT_FORM, sendCheckoutFormAsync)
}
