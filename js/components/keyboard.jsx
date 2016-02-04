import React, { Component } from 'react'
import Animation from './animation.jsx'
import Key from './key.jsx'

class Keyboard extends Component {
  constructor (props) {
    super(props)


    this.state = {

    }
  }

  render() {
    var letters = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p','[', ']', '\\', 'a', 's', 'd',
     'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'return', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'shift']
    var newLetters = letters.map((letter) => {
      return <Key letter = {letter}/>
    })
    return(
      <div>
        {newLetters}
      </div>
  )}
}

export default Keyboard
