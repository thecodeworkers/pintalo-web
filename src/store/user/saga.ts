import { takeLatest, call, put } from 'redux-saga/effects'
import { actionObject, GraphQlClient, manageError, validateFetch } from '@utils'
import { registerUser } from '@graphql/mutation'
import { SHOW_LOADER, SHOW_TOAST } from '../intermitence/action-types'
import { SIGN_UP, SIGN_UP_ASYNC } from './action-types'

function* signUpAsync({ payload }: any) {
  try {
    yield put(actionObject(SHOW_LOADER, true))

    let response = yield call(GraphQlClient, registerUser(payload))
    response = validateFetch(response)

    yield put(actionObject(SIGN_UP_ASYNC, {
      ...response.registerUser,
      isAuth: true
    }));

    yield put(actionObject(SHOW_LOADER, false))

  } catch (err) {
    yield call(manageError, err, SHOW_LOADER, SHOW_TOAST)
  }
}

export function* watchSignUp() {
  yield takeLatest(SIGN_UP, signUpAsync)
}
