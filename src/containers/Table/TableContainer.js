import React, { Component } from 'react';
import { Link } from 'react-router'

class TableContainer extends Component {
  render () {
    return (
      <div>
        <h1>{'Table Container'}</h1>
        {/* Back to home */}
        <Link to='/'>{'Home'}</Link>
      </div>
    )
  }
}

export default TableContainer;
