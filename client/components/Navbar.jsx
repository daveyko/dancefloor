import React from 'react'
import {connect} from 'react-redux'
import {Choosedancer, Songs} from './index'
import {toggleDancers, toggleSongs, changeFloor} from '../store'

const Navbar = (props) => {
    return (
      <header>
        <h1 className = "app-name">Giphy Dance Party</h1>
        <h4 onClick = {props.handleShowDancers}>Add Dancer</h4>
        <h4 onClick = {props.handleShowSongs}>Choose Song</h4>
        <h4 onClick = {() => {props.handleToggleVenue(props.allVenues)}}>Change Dancefloor</h4>
        {props.showDancers ?
        <Choosedancer /> : null}
        {props.showSongs ?
        <Songs /> : null}
      </header>
    )
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleShowDancers(){
      dispatch(toggleDancers())
    },
    handleShowSongs(){
      dispatch(toggleSongs())
    },
    handleToggleVenue(floors){
      dispatch(changeFloor(floors))
    }
  }
}

export default connect(state => state, mapDispatchToProps)(Navbar)

