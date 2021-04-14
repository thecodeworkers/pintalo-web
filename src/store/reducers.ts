import { combineReducers } from 'redux'
import page from './page/reducer'
import intermitence from './intermitence/reducer'
import setColorReducer from './exploreColor/reducer'
const reducers = combineReducers({
  page,
  intermitence,
  setColorReducer
})

export default reducers
