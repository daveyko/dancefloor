// import axios from 'axios'
//ACTION TYPES

const ADD_DANCER = 'ADD_DANCER'
const MOVE_DANCER = 'MOVE_DANCER'

//ACTION CREATORS
export const addDancer = dancer => ({type: ADD_DANCER, dancer})
export const moveDancer = dancer => ({type: MOVE_DANCER, dancer })
//THUNK CREATORS

// const apiKey = 'jIxgg6PkUJsL9TPIujZ40AmEIT3j3K8A'
// var giphy = require('giphy-api')(apiKey);

// const url = `http://api.giphy.com/v1/stickers/search?q=dancers&api_key=${apiKey}&limit=10`


// export function fetchDancers () {
//   return function thunk (dispatch){
//     return giphy.search({
//       api: 'stickers',
//       q: 'dancers',
//       limit: 10
//     })
//     .then(data => {
//       dispatch(getDancers(data.data))
//     })
//   }
// }

const danceFloorDancers = []

export default function(state = danceFloorDancers, action){
  switch (action.type){
    case ADD_DANCER:{
      return state.concat(action.dancer)
    }
    case MOVE_DANCER:{
      return state.filter(dancer => dancer.id !== action.dancer.id).concat(action.dancer)
    }
    default:
      return state
  }
}
