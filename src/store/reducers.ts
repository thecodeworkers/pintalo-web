import { combineReducers } from 'redux'
import page from './page/reducer'
import intermitence from './intermitence/reducer'
import setColor from './exploreColor/reducer'
import product from './product/reducer'
import user from './user/reducer'
import palette from './palette/reducer'
import colors from './colors/reducer'
import shop from './shop/reducer'
import cart from './cart/reducer'
import scrollReference from './scrollReference/reducer'
import checkout from './checkout/reducer'

const reducers = combineReducers({
  page,
  intermitence,
  setColor,
  product,
  user,
  palette,
  colors,
  shop,
  cart,
  scrollReference,
  checkout
})

export default reducers
