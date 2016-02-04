import React, { Component } from 'react'
import Animation from './animation.jsx'


class Key extends Component {
  constructor (props) {
    super(props)


    this.state = {

    }
  }
  render() {
    console.log(this.props.letter)
    return(
      <span className={this.props.letter + ' box'}>
        {this.props.letter}
      </span>
  )}
}

export default Key
