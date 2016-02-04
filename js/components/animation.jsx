import React, { Component } from 'react'

class Animation extends Component {
  constructor (props) {
    super(props)
  }

  changeColor(param) {
    document.body.style.backgroundColor = param
  }
  addSound1(param) {
    var audioElement = document.createElement('audio')
      audioElement.setAttribute('src', 'audio/' + param + '.mp3')
      audioElement.setAttribute('autoplay', 'autoplay')
      
      audioElement.addEventListener("load", function() {
        audioElement.Play()
    }, true)
  }

  render() {
    if(this.props.keyCode === 81) {
      this.changeColor("#eee")
      this.addSound1('trump')
    } else if (this.props.keyCode === 80 ) {
      this.addSound1('hotlinebling')
    }

    return (
      <p></p>
    )
  }

}


export default Animation
