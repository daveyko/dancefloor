import React, { Component } from 'react'
import Dancer from './Dancer.jsx'
import {connect} from 'react-redux'
import { DropTarget } from 'react-dnd'
import Type from './Type'

//JS object with methods to describe how the drag source reacts to drag and drop events
const specs = {
  drop(props, monitor){
    return monitor.getSourceClientOffset()
  }
}

//returns an object of props to inject into component
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
    this.sound = ''
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
    //this Url points to the location of the locally hosted ogg audio files and will change based on what song the user selects
    const songUrl = `https://s3.us-east-2.amazonaws.com/davidkosongs/${encodeURI(this.props.currSong)}.ogg`
    const dancers = this.renderDancers()
    return this.props.connectDropTarget(
      <div id = "background" style = {{backgroundImage: `url(${this.props.allVenues[this.props.currDanceFloor]}`}}>
        {dancers}
        {this.props.currSong ? <audio src = {songUrl}  autoPlay controls /> : null}
      </div>
    )
  }
}

//DropTarget higher order component to make our dancer draggable
//We need to specify a TYPE so that the drop target knows which types to accept as a drag source

const HomepageWrapper = connect(state => state)(Homepage)
export default DropTarget(Type.DANCER, specs, collect)(HomepageWrapper)

