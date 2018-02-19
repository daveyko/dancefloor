//ACTION TYPES
const CHANGE_FLOOR = 'CHANGE_FLOOR'

//ACTION CREATORS
export const changeFloor = allFloors => ({type: CHANGE_FLOOR, allFloors})

const currFloor = 0

export default function(state = currFloor, action){
  switch (action.type){
    case CHANGE_FLOOR:{
      //we always increment by 1 to access a new index of the venues array to access a new image file to set as the background image
      //we need to take the modulo of the length of the array so we stay within the bounds of the array
      let newFloor = (state + 1) % action.allFloors.length
      return newFloor
    }
    default:
      return state
  }
}
