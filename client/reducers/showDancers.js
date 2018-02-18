//ACTION TYPES
const TOGGLE_DANCERS = 'TOGGLE_DANCERS'

//INITIAL STATE
const showDancers = false

//ACTION CREATORS

export const toggleDancers = () => ({
  type: TOGGLE_DANCERS
})

export default function (state = showDancers, action){
  switch (action.type){
    case TOGGLE_DANCERS: {
      const newState = !state
      return newState
    }
    default:
      return state
  }
}
