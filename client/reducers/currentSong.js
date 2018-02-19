//ACTION TYPES
const CHANGE_SONG = 'CHANGE_SONG'

//ACTION CREATORS
export const changeSong = song => ({type: CHANGE_SONG, song})

const currSong = ''

export default function(state = currSong, action){
  switch (action.type){
    case CHANGE_SONG:{
      return action.song
    }
    default:
      return state
  }
}
