import { combineReducers } from 'redux'
import page from './page/reducer'
import intermitence from './intermitence/reducer'
import resource from './resource/reducer'

const reducers = combineReducers({
  page,
  intermitence,
  resource
})

export default reducers
