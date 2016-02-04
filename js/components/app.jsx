import React, { Component } from 'react'


class App extends Component {
  constructor (props) {
    super(props)
  }
  componentDidMount() {
   window.addEventListener('onKeyPress', this.onKeyPress());
  }
  onKeyPress(e) {
    return (
      console.log("sdgdsgsgdssdgsdg")
    )
  }
  render() {
    return (
      <h2>Trump sucks</h2>
    )
  }
}

export default App
