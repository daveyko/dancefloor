import React, { Component } from 'react'
import Dancer from './Dancer.jsx'
import {connect} from 'react-redux'
import { DropTarget } from 'react-dnd'
import Type from './Type'


const specs = {
  drop(props, monitor, component){
    console.log('droptarget monitor!', monitor.getSourceClientOffset())
    return monitor.getSourceClientOffset()
    // console.log('PROPS', props, 'component', component, 'dropresult', monitor.getDropResult())
    // let movedDancer = props.allDancers.filter(dancer => dancer.id === monitor.getItem().id).map(dancer => Object.assign({}, dancer, {top: monitor.getSourceClientOffset().y, left: monitor.getSourceClientOffset().x}))
    // props.handleMoveDancer(movedDancer)
  }
}

function collect(connectDND, monitor) {
	return {
		connectDropTarget: connectDND.dropTarget(),
		isOver: monitor.isOver(),
		isOverCurrent: monitor.isOver({ shallow: true }),
		canDrop: monitor.canDrop(),
		itemType: monitor.getItemType(),
	}
}

class Homepage extends Component{

  constructor(props){
    super(props)
    this.renderDancers = this.renderDancers.bind(this)
  }

  renderDancers(){
    if (this.props.danceFloorDancers.length){
      return this.props.danceFloorDancers.map(dancer => {
        return (
          <Dancer key = {dancer.id} dancer = {dancer} />
        )
      })
    }
  }

  render(){
    const songUrl = `http://localhost:8080/songs/${encodeURI(this.props.currSong + '.ogg')}`
    const dancers = this.renderDancers()
    return this.props.connectDropTarget(
      <div id = "background">
        {dancers}
        <audio src = {songUrl}  autoPlay controls />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleMoveDancer(dancer){
      dispatch(moveDancer(dancer))
    }
  }
}

const HomepageWrapper = connect(state => state, mapDispatchToProps)(Homepage)
export default DropTarget(Type.DANCER, specs, collect)(HomepageWrapper)

