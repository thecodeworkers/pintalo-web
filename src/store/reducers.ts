import { combineReducers } from 'redux'
import page from './page/reducer'
import intermitence from './intermitence/reducer'
import setColor from './exploreColor/reducer'
const reducers = combineReducers({
  page,
  intermitence,
  setColor
})

export default reducers
