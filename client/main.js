import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Navbar, Homepage} from './components'
import {fetchDancers, fetchSongs, fetchVenues} from './store'
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'

class  Main extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    //ajax request to fetch intial dancers, and all images/songs in local dir
    this.props.fetchTrendingStickers()
    this.props.fetchAllSongs()
    this.props.fetchAllVenues()

    //add script to queue the confetti
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


const MainWrapper =  connect(state => state, mapDispatchToProps)(Main)

//need to wrap root component in HOC in order to enable drag and drop feature
export default DragDropContext(HTML5Backend)(MainWrapper)

/**
 * PROP TYPES
 */
// Main.propTypes = {
//   children: PropTypes.object,
//   handleClick: PropTypes.func.isRequired,
//   isLoggedIn: PropTypes.bool.isRequired
// }
