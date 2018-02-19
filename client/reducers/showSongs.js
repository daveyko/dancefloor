//ACTION TYPES
const TOGGLE_SONGS = 'TOGGLE_SONGS'

//INITIAL STATE
const showSongs = false

//ACTION CREATORS

export const toggleSongs = () => ({
  type: TOGGLE_SONGS
})

export default function (state = showSongs, action){
  switch (action.type){
    case TOGGLE_SONGS: {
      const newState = !state
      return newState
    }
    default:
      return state
  }
}
