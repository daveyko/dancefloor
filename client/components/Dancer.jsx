import React from 'react'
import { connect } from 'react-redux'
import { DragSource } from 'react-dnd'
import Type from './Type'
import {moveDancer} from '../store'

const dancerSource = {

	beginDrag(props) {
		return {id: props.dancer.id}
	},

	endDrag(props, monitor, component){
    if (monitor.didDrop()){
    let {x, y} = monitor.getDropResult()
    let movedDancer = Object.assign({}, component.props.dancer, {top: y, left: x})
    console.log('moveddancer!', movedDancer)
    component.store.dispatch(moveDancer(movedDancer))
    }
		// return {component}
	}
}

const collect = (connectDND, monitor) => {
	return {
		connectDragSource: connectDND.dragSource(),
		isDragging: monitor.isDragging()
	}
}

const Dancer = (props) => {
  if (props.isDragging){
    return null
  } else {
  return (
      props.connectDragSource(
      <div className = "dancer" style = {{top: `${props.dancer.top}px`, left: `${props.dancer.left}px`}} >
        <img src = {props.dancer.images.original.url} />
      </div>
      )
    )
  }
}

const dancerWrapper  = connect(state => state)(Dancer)
export default DragSource(Type.DANCER, dancerSource, collect)(dancerWrapper)
