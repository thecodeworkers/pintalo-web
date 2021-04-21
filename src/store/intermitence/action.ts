import { MENU_SHOW, FOOTER_SHOW } from './action-types'
import { actionObject } from '@utils'

export const setMenuShow = (show: any) => {
  return {
    type: MENU_SHOW,
    payload: show
  }
}

export const setFooterShow = (showFooter: any) => actionObject(FOOTER_SHOW, { showFooter })
