import React, { Component } from 'react'

class Animation extends Component {
  constructor (props) {
    super(props)
  }

  changeColor(param) {
    document.body.style.backgroundColor = param
  }

  render() {
    var x;
    if(this.props.keyCode === 81) {
      this.changeColor("#eee")
    } else this.changeColor('#000')
    return (
      <p>{x}</p>
    )
  }

}


export default Animation
