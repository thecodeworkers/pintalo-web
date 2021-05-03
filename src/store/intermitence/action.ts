import { MENU_SHOW, FOOTER_SHOW, MODAL_CLOSE } from './action-types'
import { actionObject } from '@utils'

export const setMenuShow = (show: any) => {
  return {
    type: MENU_SHOW,
    payload: show
  }
}

export const setFooterShow = (showFooter: any) => actionObject(FOOTER_SHOW, { showFooter })

export const modalClose = (showModal: boolean) => actionObject(MODAL_CLOSE, { showModal })
