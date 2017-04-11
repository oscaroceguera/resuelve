import React, { Component } from 'react';
import { Link } from 'react-router'

import Wrapper from '../../components/commons/Wrapper'
import Header from '../../components/Header/Header'
import Table from '../../components/Table/Table'

const data = [
  {descripcion: 'Control Xbox', cantidad: 1, unidades: 12, precio: '999.00', total: '999.00'},
  {descripcion: 'Falcor is a social network might allow the script accordingly. ', cantidad: 1, unidades: 12, precio: '999.00', total: '999.00'},
  {descripcion: 'Rnpm is a framework based on data. Web browser. Observer Pattern is a JavaScript library that a feature detection library, useful to the server via Ajax', cantidad: 1, unidades: 12, precio: '999.00', total: '999.00'},
  {descripcion: 'Control Xbox', cantidad: 1, unidades: 12, precio: '999.00', total: '999.00'},
  {descripcion: 'Control Xbox', cantidad: 1, unidades: 12, precio: '999.00', total: '999.00'},
  {descripcion: 'Control Xbox', cantidad: 1, unidades: 12, precio: '999.00', total: '999.00'}
]

class TableContainer extends Component {
  render () {
    return (
      <div>
        {/* Back to home */}
        <Link to='/'>{'Home'}</Link>

        <Wrapper>
          <Header />
          <Table data={data}/>
        </Wrapper>
      </div>
    )
  }
}

export default TableContainer;
