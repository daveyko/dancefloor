import React from 'react'
require('react-bootstrap-modal/lib/css/rbm-complete.css')
const Modal = require('react-bootstrap-modal')
import {toggleDancers} from '../store'
import {connect} from 'react-redux'

const Choosedancer = (props) => {
  return (
    <Modal style = {{marginTop: '230px'}} show = {props.showDancers} onHide = {props.handleToggleDancers} aria-labelledby="ModalHeader" >
    <Modal.Header />
        <Modal.Body>
          <div>
          {props.allDancers.map(dancer => {
            return (
              <img key = {dancer.id} src = {dancer.images.downsized.url} />
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
    }
  }
}

export default connect(state => state, mapDispatchToProps)(Choosedancer)
