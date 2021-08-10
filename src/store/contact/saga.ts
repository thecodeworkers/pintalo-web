import { takeLatest, call, put, select } from 'redux-saga/effects'
import { actionObject, GraphQlClient, manageError, showDialog, validateFetch } from '@utils'
import { SHOW_LOADER } from '../intermitence/action-types'
import { SUBMIT_FORM } from './action-types'
import { getContact } from '@store/selectors'
import { submitForm } from '@graphql/mutation'
import { showModal } from '@store/intermitence/action'

function* submitFormAsync({ payload }: any) {
  try {

    yield put(actionObject(SHOW_LOADER, true))
    const { contactForm } = yield select(getContact)

    const newData = contactForm.map((field: any) => {
      return `{ id: ${field.fieldId}, value: "${payload[field.key]}" }`
    })

    const response = yield call(GraphQlClient, submitForm(newData.toString()))
    const { submitForm: { success } } = validateFetch(response)
    if (success) yield call(showDialog, 'Correo electrónico enviado!')
    else throw new Error("Correo electronico no enviado")

    yield put(actionObject(SHOW_LOADER, false))
    yield put(showModal('contact', false))
  } catch (err) {
    yield put(actionObject(SHOW_LOADER, false))
    yield call(manageError, err)
  }
}

export function* watchSubmitForm() {
  yield takeLatest(SUBMIT_FORM, submitFormAsync)
}

