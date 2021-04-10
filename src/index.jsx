import {render} from 'react-dom'
import React, {Component} from 'react'
import {App} from './App/App'

class HelloWord extends Component {

  render() {
    return <React.StrictMode>
      <App />
    </React.StrictMode>
  }

}

render(<HelloWord/>, document.querySelector('#root'))