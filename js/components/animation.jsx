import React, { Component } from 'react'

class Animation extends Component {
  constructor (props) {
    super(props)
  }

  changeColor(param) {
    return(document.body.style.backgroundColor = param)
  }

  changeAudio(param) {
    var audio = new Audio('audio/' + param + '.mp3')
    audio.play()
  }

  render() {

    var animations = {81: "#eee", 80: "#777" }
    var audio = {81: "hotlinebling", 80: "trump" }
    this.changeColor(animations[this.props.keyCode])
    this.changeAudio(audio[this.props.keyCode])
    return (
      <p></p>
    )
  }

}


export default Animation
