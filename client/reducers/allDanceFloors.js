import axios from 'axios'
//ACTION TYPES

const GET_VENUES = 'GET_VENUES'

//ACTION CREATORS
const getVenues = venues => ({type: GET_VENUES, venues})

//THUNK CREATORS

export function fetchVenues () {
  return function thunk (dispatch){
    return axios.get('/api/venues')
    .then(data => {
      dispatch(getVenues(data.data))
    })
  }
}

const allVenues = []

export default function(state = allVenues, action){
  switch (action.type){
    case GET_VENUES:{
      return state.concat(action.venues)
    }
    default:
      return state
  }
}
