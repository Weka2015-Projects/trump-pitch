import React, { Component } from 'react'
import Q from './q.jsx'
import P from './p.jsx'

let components = {81:Q, 80:P}

class App extends Component {
  constructor (props) {
    super(props)
    var keyCode = document.addEventListener(
      'keydown',
      this.handleKeyDown.bind(this)
    )
    this.state = {
      keyCode: 81
    }
  }
  handleKeyDown (event) {
    console.log(event)
    event.preventDefault()
    this.setState({keyCode: event.keyCode})
  }

  render() {
    return  React.createElement(components[this.state.keyCode])
  }
}

export default App
