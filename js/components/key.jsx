import React, { Component } from 'react'
import Animation from './animation.jsx'


class Key extends Component {
  constructor (props) {
    super(props)
    var background = document.addEventListener(
      'keydown',
      this.handleBackground.bind(this)
    )
     this.state = {
      background: 'box'
    }
  }
  handleBackground(event) {
    event.keyCode === this.props.keyCode ? this.setState({background:'box-active'})
    : this.setState({background:'box'})
  }
  render() {
    return(
      <span className={this.props.letter + ' ' + this.state.background}>
        {this.props.letter}
      </span>
  )}
}

export default Key
