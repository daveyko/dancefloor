import React from 'react'
import {connect} from 'react-redux'
import {Choosedancer, Songs} from './index'
import {toggleDancers, toggleSongs} from '../store'

const Navbar = (props) => {
    return (
      <header>
        <h1>Giphy Dance Party</h1>
        <h1 onClick = {props.handleShowDancers}>Add Dancer</h1>
        <h1 onClick = {props.handleShowSongs}>Song</h1>
        <h1>Dancefloor</h1>
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
    }
  }
}

export default connect(state => state, mapDispatchToProps)(Navbar)

