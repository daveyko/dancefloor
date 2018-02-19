//ACTION TYPES

const CHANGE_FLOOR = 'CHANGE_FLOOR'

//ACTION CREATORS
export const changeFloor = allFloors => ({type: CHANGE_FLOOR, allFloors})

const currFloor = 0

export default function(state = currFloor, action){
  switch (action.type){
    case CHANGE_FLOOR:{
      let newFloor = (state + 1) % action.allFloors.length
      return newFloor
    }
    default:
      return state
  }
}
