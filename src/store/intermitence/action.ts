import { MENU_SHOW, FOOTER_SHOW, SHOW_MODAL } from './action-types'
import { actionObject } from '@utils'

export const setMenuShow = (show: any) => actionObject(MENU_SHOW, show)

export const setFooterShow = (showFooter: any) => actionObject(FOOTER_SHOW, { showFooter })

export const showModal = (name: string, show: boolean) => actionObject(SHOW_MODAL, {
  modal: { [name]: show }
})
