import { products } from '@utils/tmpProducts'
import { AnyAction } from 'redux'
import { FILTER_PRODUCTS, GET_PRODUCT_ASYNC } from './action-types'

const initialState = {
  detail: {},
  products: [],
  allProducts: [],
  categories: [],
  attributes: {
    uses: [],
    customTypes: [],
    presentations: [],
    bases: [],
    colors: [],
    classes: [],
    brands: []
  }
}

const productReducer = (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case GET_PRODUCT_ASYNC:
      return { ...state, ...payload }
    case FILTER_PRODUCTS:
      return { ...state, ...payload }
    default:
      return state
  }
}

export default productReducer
