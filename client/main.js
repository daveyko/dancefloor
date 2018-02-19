import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Navbar, Homepage} from './components'
import {fetchDancers, fetchSongs, fetchVenues} from './store'
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'


/**
 * COMPONENT
 *  The Main component is our 'picture frame' - it displays the navbar and anything
 *  else common to our entire app. The 'picture' inside the frame is the space
 *  rendered out by the component's `children`.
 */
class  Main extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchTrendingStickers()
    this.props.fetchAllSongs()
    this.props.fetchAllVenues()
    const script = document.createElement('script')
    script.src = '/confetti.js'
    script.async = true
    document.body.appendChild(script)
  }

  render(){
    return (
      <div>
        <Navbar />
        <Homepage />
      </div>
    )
  }
}

/**
 * CONTAINER
 */
// const mapState = (state) => {
//   return {
//     isLoggedIn: !!state.user.id
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTrendingStickers () {
      dispatch(fetchDancers())
    },
    fetchAllSongs(){
      dispatch(fetchSongs())
    },
    fetchAllVenues(){
      dispatch(fetchVenues())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes

const MainWrapper =  connect(state => state, mapDispatchToProps)(Main)
export default DragDropContext(HTML5Backend)(MainWrapper)

/**
 * PROP TYPES
 */
// Main.propTypes = {
//   children: PropTypes.object,
//   handleClick: PropTypes.func.isRequired,
//   isLoggedIn: PropTypes.bool.isRequired
// }
