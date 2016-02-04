import React, { Component } from 'react'
import Animation from './animation.jsx'
import Keyboard from './keyboard.jsx'

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
    <div className="keyboard">
      <Animation keyCode={this.state.keyCode} />
      <Keyboard />
    </div>
  )}
}

export default App
