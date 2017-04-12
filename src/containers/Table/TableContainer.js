import React, { Component } from 'react';
import { Link } from 'react-router'

import Wrapper from '../../components/commons/Wrapper'
import Header from '../../components/Header/Header'
import Table from '../../components/Table/Table'
import Modal from '../../components/Modal/Modal'
import ExtraButtons from '../../components/ExtraButtons/ExtraButtons'

class TableContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      modalOpen: false,
      currentConcepto: {
        descripcion: '',
        cantidad: 0,
        unidades: 0,
        precioUnit: 0
      },
      conceptos: []
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

  handleChange = (e) => {
    const { currentConcepto } = this.state
    const inputName = e.target.name
    let value = e.target.value

    if (inputName === 'precioUnit') {
      value = parseFloat(value)
      value = value.toFixed(2)
    }

    currentConcepto[inputName] = value

    return this.setState(currentConcepto)
  }

  addConcepto = (e) => {
    const newState = Object.assign({}, this.state)
    const _currentConcepto = this.state.currentConcepto
    const _total = _currentConcepto.cantidad * _currentConcepto.precioUnit

    _currentConcepto.total = _total.toFixed(2)

    newState.conceptos.push(_currentConcepto)
    newState.modalOpen = false

    // inital state for currentConcepto
    newState.currentConcepto = {
      descripcion: '',
      cantidad: 0,
      unidades: 0,
      precioUnit: 0
    }

    this.setState(newState)
  }

  deleteConcepto = (index) => (e) => {
    e.preventDefault()

    const { conceptos } = this.state

    this.setState({
      conceptos: [...conceptos.slice(0, index), ...conceptos.slice(index + 1)]
    })
  }

  consoleLog = (e) => {
    console.log(this.state.conceptos)
  }

  clearState = (e) => {
    this.setState({
      modalOpen: false,
      currentConcepto: {
        descripcion: '',
        cantidad: 0,
        unidades: 0,
        precioUnit: 0
      },
      conceptos: []
    })
  }

  render () {
    const { conceptos, modalOpen} = this.state
    return (
      <div>
        <Link to='/'>{'Home'}</Link>
        <Wrapper>
          <Header openModal={this.openModal}/>
          <Table
            data={conceptos}
            deleteConcepto={this.deleteConcepto}
          />
        <ExtraButtons
          print={this.consoleLog}
          clear={this.clearState}
        />
        </Wrapper>
        <Modal
          modalOpen={modalOpen}
          closeModal={this.closeModal}
          handleChange={this.handleChange}
          addConcepto={this.addConcepto}
        />
      </div>
    )
  }
}

export default TableContainer;
