import { call, delay, put } from '@redux-saga/core/effects'
import { END } from '@redux-saga/core'

export const normalizedArray = response => response ? response : []

export const normalized = response => response ? response : {}

export const actionObject = (type: string, payload = null) => ({ type, payload })

export const paginate = (items: Array<any>, page_number: number = 1, page_size: number = 15) => {
  return items.slice((page_number - 1) * page_size, page_number * page_size);
}

export const scrolling = (reference) => {
  if(reference) {
    const target = reference.current;
    window.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
  }
}

export const createMarkup = (text) => { return {__html: text}; }

export const isRetina = () => {
  const query = '(-webkit-min-device-pixel-ratio: 2), n\
    (min--moz-device-pixel-ratio: 2), n\
    (-o-min-device-pixel-ratio: 2/1), n\
    (min-device-pixel-ratio: 2), n\
    (min-resolution: 192dpi), n\
    (min-resolution: 2dppx)';

  return !!window?.matchMedia(query).matches
}

export const validateFetch = ({ errors, data }) => {
  if (errors) throw errors[0].message
  if (typeof(data) == 'undefined') throw 'Cannot connect'

  return data
}

export function* showDialog(message, type = 'success', toast = 'SHOW_TOAST') {
  yield put(actionObject(toast, {
    status: 1,
    message,
    type
  }))

  yield delay(3000)

  yield put(actionObject(toast, {
    status: 2
  }))
}


export function* manageError(error, toast = 'SHOW_TOAST', loader = 'SHOW_LOADER') {
  yield put(actionObject(loader, false))
  yield call(showDialog, error, 'error', toast)
}

export const mapProps = async (store, action) => {
  store.dispatch(action)
  store.dispatch(END)
  await store.sagaTask.toPromise();
}
