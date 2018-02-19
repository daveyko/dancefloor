import React from 'react'
import { connect } from 'react-redux'
import { DragSource } from 'react-dnd'
import Type from './Type'
import {moveDancer, removeDancer} from '../store'

//JS object with methods to describe how the drag source reacts to drag and drop events
const dancerSource = {

	beginDrag(props) {
		return {id: props.dancer.id}
	},

	endDrag(props, monitor, component){
    if (monitor.didDrop()){
    let {x, y} = monitor.getDropResult()
    let movedDancer = Object.assign({}, component.props.dancer, {top: y, left: x})
    component.store.dispatch(moveDancer(movedDancer))
    }
	}
}

//returns an object of props to inject into component
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
      <div className = "dancer-wrapper" style = {{top: `${props.dancer.top}px`, left: `${props.dancer.left}px`}} >
        <button onClick = {() => {props.handleRemoveDancer(props.dancer)}} className = "remove-dancer">x</button>
        <img className = "dancer" src = {props.dancer.images.original.url} />
      </div>
      )
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    handleRemoveDancer(dancer){
      dispatch(removeDancer(dancer))
    }
  }
}


const dancerWrapper  = connect(state => state, mapDispatchToProps)(Dancer)

//DragSource higher order component to make our dancer draggable
//We need to specify a TYPE so that the drop target knows which types to accept as a drag source

export default DragSource(Type.DANCER, dancerSource, collect)(dancerWrapper)
