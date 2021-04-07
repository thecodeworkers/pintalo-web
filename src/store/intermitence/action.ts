import { MENU_SHOW } from './action-types'

export const setMenuShow = (show: any) => {
  return {
    type: MENU_SHOW,
    payload: show
  }
}
