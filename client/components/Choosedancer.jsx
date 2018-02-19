import React from 'react'
require('react-bootstrap-modal/lib/css/rbm-complete.css')
const Modal = require('react-bootstrap-modal')
import {toggleDancers, addDancer} from '../store'
import {connect} from 'react-redux'

const Choosedancer = (props) => {
  console.log(props.allDancers)
  return (
    <Modal style = {{marginTop: '230px'}} show = {props.showDancers} onHide = {props.handleToggleDancers} aria-labelledby="ModalHeader" >
    <Modal.Header />
        <Modal.Body>
          <div className = "dancer-container">
          {props.allDancers.map(dancer => {
            return (
            <div onClick = {() => {props.handleAddDancer(dancer)}} key = {dancer.id} className = "dancer-thumbnail">
              <img  src = {dancer.images.fixed_height_small_still.url} />
            </div>
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
    handleToggleDancers(){
      dispatch(toggleDancers())
    },
    handleAddDancer(dancer){
      dispatch(addDancer(dancer))
    }
  }
}

export default connect(state => state, mapDispatchToProps)(Choosedancer)
