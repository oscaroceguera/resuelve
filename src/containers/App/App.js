import React, { Component } from 'react'
import './App.css'

class App extends Component {
  // Validate prop-types
  static propTypes = {
    children: React.PropTypes.object.isRequired
  }
  render() {
    return (
      <div className="App">
        <h1>{'Resuelve Table'}</h1>
        {/* Load routes */}
        { this.props.children }
      </div>
    );
  }
}

export default App
