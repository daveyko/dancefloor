import {createStore, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '../reducers'

const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({collapsed: true})
))
const store = createStore(rootReducer, middleware)

//this way we can access all of our action creators, and thunks from this file instead of separate files
export default store
export * from '../reducers/showDancers'
export * from '../reducers/allDancers'
export * from '../reducers/danceFloorDancers'
export * from '../reducers/showSongs'
export * from '../reducers/allSongs'
export * from '../reducers/currentSong'
export * from '../reducers/currentDanceFloor'
export * from '../reducers/allDanceFloors'
