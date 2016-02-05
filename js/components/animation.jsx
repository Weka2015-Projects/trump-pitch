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

    var animations = {81: "#eee", 80: "#777", 87: "#666", 65: "#248f24", 83: "#ffff80",
    68: "#7a0099", 70: "#ff33b8", 71: "#b30000", 72:"#33ffff", 74: "#3385ff", 75: "#b35900",
    76: "#ffb84d", 90: "#9933ff"}
    var audio = {81: "hotlinebling", 80: "trump", 87: "airhorn", 65: "1", 83: "2", 68: "3", 70: "4",
     71: "5", 72: "6", 74: "7", 75: "8", 76: "9", 90: "applause"}
    this.changeColor(animations[this.props.keyCode])
    this.changeAudio(audio[this.props.keyCode])
    return (
      <p></p>
    )
  }

}


export default Animation
