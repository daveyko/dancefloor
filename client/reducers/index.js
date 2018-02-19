import { combineReducers } from 'redux'
import showDancers from './showDancers'
import allDancers from './allDancers'
import danceFloorDancers from './danceFloorDancers'
import showSongs from './showSongs'
import allSongs from './allSongs'
import currSong from './currentSong'

const rootReducer = combineReducers({
  showDancers,
  allDancers,
  danceFloorDancers,
  showSongs,
  allSongs,
  currSong
})

export default rootReducer
