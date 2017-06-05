import React from 'react';

export default class DelayedButton extends React.Component {
  constructor() {
    super()
    this.clickEvent = this.clickEvent.bind(this)
  }

  clickEvent(event){
    event.persist()
    setTimeout(function() {
      this.props.onDelayedClick(event)
    }.bind(this), this.delay);
  }

  render() {
    return(
      <button onClick={this.clickEvent}>Click</button>
    )
  }
}
