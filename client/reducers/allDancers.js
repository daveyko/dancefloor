//ACTION TYPES

const GET_DANCERS = 'GET_DANCERS'

//ACTION CREATORS
const getDancers = dancers => ({type: GET_DANCERS, dancers})

//THUNK CREATORS

const apiKey = 'jIxgg6PkUJsL9TPIujZ40AmEIT3j3K8A'
var giphy = require('giphy-api')(apiKey);

// const url = `http://api.giphy.com/v1/stickers/search?q=dancers&api_key=${apiKey}&limit=10`


export function fetchDancers () {
  return function thunk (dispatch){
    return giphy.search({
      api: 'stickers',
      q: 'dancers',
      limit: 10
    })
    .then(data => {
      let updatedData = data.data.map(dancer => {
        return Object.assign({}, dancer, {top: 0, left: 0})
      })
      dispatch(getDancers(updatedData))
    })
  }
}

const allDancers = []

export default function(state = allDancers, action){
  switch (action.type){
    case GET_DANCERS:{
      return state.concat(action.dancers)
    }
    default:
      return state
  }
}
