import React, { Component } from 'react'
import Animation from './animation.jsx'

class App extends Component {
  constructor (props) {
    super(props)
    var keyCode = document.addEventListener(
      'keydown',
      this.handleKeyDown.bind(this)
    )
    this.state = {
      keyCode
    }
  }
  handleKeyDown (event) {
    console.log(event)
    event.preventDefault()
    this.setState({keyCode: event.keyCode})
  }

  render() {
    return(
    <Animation keyCode={this.state.keyCode} />
  )}
}

export default App
