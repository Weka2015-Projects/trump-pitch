import React, { Component } from 'react'

class App extends Component {
  constructor (props) {
    super(props)
    var keycode = document.addEventListener(
      'keydown',
      this.handleKeyDown.bind(this)
    )
    this.state = {keycode}
  }
  handleKeyDown (event) {
    event.preventDefault()
    this.setState({keycode: event.keyCode})
  }

  render() {
    return (
      <p>{this.state.keycode}</p>
    )
  }
}

export default App
