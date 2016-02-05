'use strict'
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
    let letters = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p','[', ']', '\\', 'a', 's', 'd',
     'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'return', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.',
      '/', 'shift']
    let keyCodes = [81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220, 65, 83, 68, 70, 71, 72, 74,
    75, 76, 186, 222, 13, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 16 ]
    var newLetters = letters.map((letter, index) => {
      return <Key letter = {letter} keyCode = {keyCodes[index]}/>
    })
    return(
      <div>
        {newLetters}
      </div>
  )}
}

export default Keyboard
