import React, { Component } from 'react';
import { Link } from 'react-router'


import Wrapper from '../../components/commons/Wrapper'
import Header from '../../components/Header/Header'
import Table from '../../components/Table/Table'
import Modal from '../../components/Modal/Modal'

const data = [
  {descripcion: 'Control Xbox', cantidad: 1, unidades: 12, precio: '999.00', total: '999.00'},
  {descripcion: 'Falcor is a social network might allow the script accordingly. ', cantidad: 1, unidades: 12, precio: '999.00', total: '999.00'},
  {descripcion: 'Rnpm is a framework based on data. Web browser. Observer Pattern is a JavaScript library that a feature detection library, useful to the server via Ajax', cantidad: 1, unidades: 12, precio: '999.00', total: '999.00'},
  {descripcion: 'Control Xbox', cantidad: 1, unidades: 12, precio: '999.00', total: '999.00'},
  {descripcion: 'Control Xbox', cantidad: 1, unidades: 12, precio: '999.00', total: '999.00'},
  {descripcion: 'Control Xbox', cantidad: 1, unidades: 12, precio: '999.00', total: '999.00'}
]

class TableContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      modalOpen: false
    }
  }

  closeModal = (e) => {
    return this.setState({
      modalOpen: false
    })
  }

  openModal = (e) => {
    return this.setState({
      modalOpen: true
    })
  }

  render () {
    return (
      <div>
        <Link to='/'>{'Home'}</Link>
        <Wrapper>
          <Header openModal={this.openModal}/>
          <Table data={data}/>
        </Wrapper>
        <Modal
          modalOpen={this.state.modalOpen}
          closeModal={this.closeModal}
        />
      </div>
    )
  }
}

export default TableContainer;
