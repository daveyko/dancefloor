import { combineReducers } from 'redux'
import showDancers from './showDancers'
import allDancers from './allDancers'

const rootReducer = combineReducers({
  showDancers,
  allDancers
})

export default rootReducer
