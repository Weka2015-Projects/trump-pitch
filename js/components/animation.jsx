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
      audioElement.setAttribute('src', 'audio/trump.mp3')
      audioElement.setAttribute('autoplay', 'autoplay')
      $.get()
      audioElement.addEventListener("load", function() {
        audioElement.Play()
    }, true)
  }

  addAnotherSound(){
    var audioElement = document.createElement('audio')
      audioElement.setAttribute('src', 'audio/hotlinebling.mp3')
      audioElement.setAttribute('autoplay', 'autoplay')
      $.get()
      audioElement.addEventListener("load", function() {
        audioElement.Play()
    }, true)
  }

  render() {
    var x;
    if(this.props.keyCode === 81) {
      this.changeColor("#eee")
      this.addSound1()
    } else if (this.props.keyCode === 80 ) {
      this.addAnotherSound()
    }

    return (
      <p>{x}</p>
    )
  }

}


export default Animation
