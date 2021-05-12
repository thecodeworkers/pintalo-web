import { EXPLORECOLOR } from './actions-types'

export const setColor = (color: any) => {
  return {
    type: EXPLORECOLOR,
    payload: color
  }
}
