//ACTION TYPES

const ADD_DANCER = 'ADD_DANCER'
const REMOVE_DANCER = 'REMOVE_DANCER'
const MOVE_DANCER = 'MOVE_DANCER'

//ACTION CREATORS
export const addDancer = dancer => ({type: ADD_DANCER, dancer})
export const removeDancer = dancer => ({type: REMOVE_DANCER, dancer})
export const moveDancer = dancer => ({type: MOVE_DANCER, dancer })

const danceFloorDancers = []

export default function(state = danceFloorDancers, action){
  switch (action.type){
    case ADD_DANCER:{
      return state.concat(action.dancer)
    }
    case MOVE_DANCER:{
      return state.filter(dancer => dancer.id !== action.dancer.id).concat(action.dancer)
    }
    case REMOVE_DANCER:{
      return state.filter(dancer => dancer.id !== action.dancer.id)
    }
    default:
      return state
  }
}
