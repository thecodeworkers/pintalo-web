import { combineReducers } from 'redux'
import page from './page/reducer'
import intermitence from './intermitence/reducer'

const reducers = combineReducers({
  page,
  intermitence
})

export default reducers
