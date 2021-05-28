import { takeLatest, call, put } from 'redux-saga/effects'
import { actionObject, GraphQlClient, manageError, validateFetch } from '@utils'
import { loginUser, registerUser } from '@graphql/mutation'
import { SHOW_LOADER, SHOW_TOAST } from '../intermitence/action-types'
import { SIGN_IN, SIGN_UP, SIGN_UP_ASYNC } from './action-types'

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
    yield call(manageError, err, SHOW_TOAST, SHOW_LOADER)
  }
}

function* signInAsync({ payload }: any) {
  try {
    yield put(actionObject(SHOW_LOADER, true))

    let response = yield call(GraphQlClient, loginUser(payload))
    response = validateFetch(response)

    yield put(actionObject(SIGN_UP_ASYNC, {
      user: {
        ...response.login.user,
        authToken: response.login.authToken
      },
      isAuth: true
    }));

    yield put(actionObject(SHOW_LOADER, false))

  } catch (err) {
    yield call(manageError, err, SHOW_TOAST, SHOW_LOADER)
  }
}

export function* watchSignUp() {
  yield takeLatest(SIGN_UP, signUpAsync)
}

export function* watchSignIn() {
  yield takeLatest(SIGN_IN, signInAsync)
}
