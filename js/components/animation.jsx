import React, { Component } from 'react'

class Animation extends Component {
  constructor (props) {
    super(props)
  }

  changeColor(param) {
    return(document.body.style.backgroundColor = param)
  }

  render() {
    var animations = {81: "#eee", 80: "#777" }
    var audio = {81: , 80: }
    this.changeColor(animations[this.props.keyCode])
    return (
      <p></p>
    )
  }

}


export default Animation
