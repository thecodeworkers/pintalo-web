import { combineReducers } from 'redux'
import page from './page/reducer'
import intermitence from './intermitence/reducer'
import resource from './resource/reducer'
import setColor from './exploreColor/reducer'
import product from './product/reducer'

const reducers = combineReducers({
  page,
  intermitence,
  resource,
  setColor,
  product
})

export default reducers
