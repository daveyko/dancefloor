import React from 'react'
require('react-bootstrap-modal/lib/css/rbm-complete.css')
const Modal = require('react-bootstrap-modal')
import {toggleSongs, changeSong} from '../store'
import {connect} from 'react-redux'


//Song choice modal

const Choosesong = (props) => {

  return (
    <Modal style = {{marginTop: '230px'}} show = {props.showSongs} onHide = {props.handleToggleSongs} aria-labelledby="ModalHeader" >
    <Modal.Header />
        <Modal.Body>
          <div className = "songs-container">
          {props.allSongs.map((song, i) => {
            return (
            <div onClick = {() => {props.handleChangeSong(song.slice(0, song.indexOf('.')))}} className = "song" key = {i} >{song}</div>
            )
          })}
          </div>
        </Modal.Body>
        <Modal.Footer />
  </Modal>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleToggleSongs(){
      dispatch(toggleSongs())
    },
    handleChangeSong(song){
      dispatch(changeSong(song))
    }
  }
}

export default connect(state => state, mapDispatchToProps)(Choosesong)
