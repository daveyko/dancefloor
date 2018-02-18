import React from 'react'
import {connect} from 'react-redux'
import {Choosedancer} from './index'
import {toggleDancers} from '../store'

const Navbar = (props) => {
    return (
      <header>
        <h1>Giphy Dance Party</h1>
        <h1 onClick = {props.handleShowDancers}>Add Dancer</h1>
        {props.showDancers ?
        <Choosedancer /> : null}
      </header>
    )
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleShowDancers(){
      dispatch(toggleDancers())
    }
  }
}

export default connect(state => state, mapDispatchToProps)(Navbar)

