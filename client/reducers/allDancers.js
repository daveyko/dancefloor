//ACTION TYPES

const GET_DANCERS = 'GET_DANCERS'

//ACTION CREATORS
const getDancers = dancers => ({type: GET_DANCERS, dancers})

//THUNK CREATORS

const apiKey = 'jIxgg6PkUJsL9TPIujZ40AmEIT3j3K8A'
var giphy = require('giphy-api')(apiKey);

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

export function fetchQueriedDancers (query) {
  return function thunk (dispatch){
    return giphy.search({
      api: 'stickers',
      q: query,
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
      return action.dancers
    }
    default:
      return state
  }
}
