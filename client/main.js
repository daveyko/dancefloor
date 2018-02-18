import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Navbar, Homepage} from './components'
import {fetchDancers} from './store'

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
    console.log('yo', fetchDancers)
    this.props.fetchTrendingStickers()
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
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default connect(state => state, mapDispatchToProps)(Main)

/**
 * PROP TYPES
 */
// Main.propTypes = {
//   children: PropTypes.object,
//   handleClick: PropTypes.func.isRequired,
//   isLoggedIn: PropTypes.bool.isRequired
// }
