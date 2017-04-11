import React, { Component } from 'react'
import { Link } from 'react-router'

class HomeContainer extends Component {
  render () {
    return (
      <div>
        <h1>{'Home Container'}</h1>
        {/* Go to table route */}
        <Link to='/tabla'>{'Tabla'}</Link>
      </div>
    )
  }
}

export default HomeContainer;
