import axios from 'axios'
//ACTION TYPES

const GET_SONGS = 'GET_SONGS'

//ACTION CREATORS
const getSongs = songs => ({type: GET_SONGS, songs})

//THUNK CREATORS

export function fetchSongs () {
  return function thunk (dispatch){
    //read the directory of songs in the public directory and return an array of all the file names of the songs
    return axios.get('/api/songs')
    .then(data => {
      dispatch(getSongs(data.data))
    })
  }
}

const allSongs = []

export default function(state = allSongs, action){
  switch (action.type){
    case GET_SONGS:{
      return state.concat(action.songs)
    }
    default:
      return state
  }
}
