import { takeLatest, call, put } from 'redux-saga/effects'
import { actionObject, GraphQlClient, manageError, showDialog, validateFetch } from '@utils'
import { loginUser, registerUser, sendPasswordResetEmail } from '@graphql/mutation'
import { SHOW_LOADER, SHOW_MODAL, SHOW_TOAST } from '../intermitence/action-types'
import { FORGOT_PASSWORD, SIGN_IN, SIGN_UP, SIGN_UP_ASYNC } from './action-types'

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
        ...response.login.customer,
        authToken: response.login.authToken,
        sessionToken: response.login.sessionToken
      },
      isAuth: true
    }));

    yield put(actionObject(SHOW_LOADER, false))

  } catch (err) {
    yield call(manageError, err, SHOW_TOAST, SHOW_LOADER)
  }
}

function* forgotPasswordAsync({ payload }: any) {
  try {
    yield put(actionObject(SHOW_LOADER, true))

    let response = yield call(GraphQlClient, sendPasswordResetEmail(payload))
    validateFetch(response)

    yield put(actionObject(SHOW_LOADER, false))
    yield put(actionObject(SHOW_MODAL, {
      modal: { sendEmail: false }
    }))

    yield call(showDialog, 'Correo electrónico enviado!')

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

export function* watchForgotPassword() {
  yield takeLatest(FORGOT_PASSWORD, forgotPasswordAsync)
}
