import React, { Component } from 'react';
import { Link } from 'react-router'

import Wrapper from '../../components/commons/Wrapper'
import Header from '../../components/Header/Header'
import Table from '../../components/Table/Table'

class TableContainer extends Component {
  render () {
    return (
      <div>
        {/* Back to home */}
        <Link to='/'>{'Home'}</Link>

        <Wrapper>
          <Header />
          <Table />
        </Wrapper>
      </div>
    )
  }
}

export default TableContainer;
