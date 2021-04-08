import { MENU_SHOW, FOOTER_SHOW } from './action-types'

export const setMenuShow = (show: any) => {
  return {
    type: MENU_SHOW,
    payload: show
  }
}

export const setFooterShow = (showFooter: any) => {
  return {
    type: FOOTER_SHOW,
    payload: showFooter
  }
}
