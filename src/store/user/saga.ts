import { takeLatest, call, put } from 'redux-saga/effects'
import { actionObject, GraphQlClient, validateFetch } from '@utils';
import { SIGN_UP, SIGN_UP_ASYNC } from './action-types';
import { registerUser } from '@graphql/mutation';

function* signUpAsync({ payload }: any) {
  try {
    let response = yield call(GraphQlClient, registerUser(payload))
    response = validateFetch(response)

    yield put(actionObject(SIGN_UP_ASYNC, {
      ...response.registerUser,
      isAuth: true
    }));

  } catch (err) {
    console.log(err)
  }
}

export function* watchSignUp() {
  yield takeLatest(SIGN_UP, signUpAsync)
}
