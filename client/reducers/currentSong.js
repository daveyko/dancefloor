import axios from 'axios'
//ACTION TYPES

const CHANGE_SONG = 'CHANGE_SONG'

//ACTION CREATORS
export const changeSong = song => ({type: CHANGE_SONG, song})
//THUNK CREATORS

// export function fetchSong (song) {
//   return function thunk (dispatch){
//     return axios.get(`/api/songs/${song}`)
//     .then(data => {
//       dispatch(changeSong(data.data))
//     })
//   }
// }

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
