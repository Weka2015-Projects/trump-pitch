// require('babel-core')
import {shallow, mount} from 'enzyme'
var App = require('../js/components/app.jsx')
var React = require('react')
var ReactDOM = require('react-dom')


it('should render two components', () => {
  var row = shallow(<App />)
  console.log(row)
})
