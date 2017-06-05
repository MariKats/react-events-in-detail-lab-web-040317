import React from 'react';

export default class CoordinatesButton extends React.Component {
  constructor() {
    super()
    this.clickEvent = this.clickEvent.bind(this)
  }

  clickEvent(event){
    this.props.onReceiveCoordinates([event.screenX, event.screenY])
  }

  render() {
    return(
      <button onClick={this.clickEvent}>Click</button>
    )
  }
}
