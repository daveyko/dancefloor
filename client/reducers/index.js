import { combineReducers } from 'redux'
import showDancers from './showDancers'
import allDancers from './allDancers'
import danceFloorDancers from './danceFloorDancers'
import showSongs from './showSongs'
import allSongs from './allSongs'
import currSong from './currentSong'
import currDanceFloor from './currentDanceFloor'
import allVenues from './allDanceFloors'

const rootReducer = combineReducers({
  showDancers,
  allDancers,
  danceFloorDancers,
  showSongs,
  allSongs,
  currSong,
  currDanceFloor,
  allVenues
})

export default rootReducer
