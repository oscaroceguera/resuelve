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
      isUpdate: false,
      modalOpen: false,
      currentConcepto: {
        descripcion: '',
        cantidad: '',
        unidades: '',
        precioUnit: ''
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

    currentConcepto[inputName] = value

    return this.setState(currentConcepto)
  }

  saveConcepto () {
    const newState = Object.assign({}, this.state)
    const _currentConcepto = this.state.currentConcepto
    const _total = _currentConcepto.cantidad * _currentConcepto.precioUnit

    _currentConcepto.total = _total.toFixed(2)

    newState.conceptos.push(_currentConcepto)
    newState.modalOpen = false

    // inital state for currentConcepto
    newState.currentConcepto = {
      descripcion: '',
      cantidad: '',
      unidades: '',
      precioUnit: ''
    }

    this.setState(newState)
  }
  updateConcepto () {
    const newConceptos = Object.assign([], this.state.conceptos, {
      [this.state.updateCurrentIndex]: {
        descripcion: this.state.currentConcepto.descripcion,
        cantidad: this.state.currentConcepto.cantidad,
        unidades: this.state.currentConcepto.unidades,
        precioUnit: this.state.currentConcepto.precioUnit,
        total: (this.state.currentConcepto.cantidad * this.state.currentConcepto.precioUnit).toFixed(2)
      }
    })

    const obj = {
      isUpdate: false,
      modalOpen: false,
      conceptos: newConceptos,
      currentConcepto: {
        descripcion: '',
        cantidad: '',
        unidades: '',
        precioUnit: ''
      }
    }
    this.setState(obj)
  }

  addConcepto = (e) => {
    e.preventDefault()

    if (this.state.isUpdate) {
      return this.updateConcepto()
    }

    this.saveConcepto()
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
      isUpdate: false,
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

  handleUpdateConcepto = (index) => (e) => {
    e.preventDefault()
    this.setState({
      updateCurrentIndex: index,
      isUpdate: true,
      currentConcepto: this.state.conceptos[index],
      modalOpen: true
    })
  }

  render () {
    const { conceptos, modalOpen, currentConcepto} = this.state
    return (
      <div>
        <Link to='/'>{'Home'}</Link>
        <Wrapper>
          <Header openModal={this.openModal}/>
          <Table
            data={conceptos}
            deleteConcepto={this.deleteConcepto}
            onUpdateConcepto={this.handleUpdateConcepto}
          />
        <ExtraButtons
          print={this.consoleLog}
          clear={this.clearState}
        />
        </Wrapper>
        <Modal
          currentConcepto={currentConcepto}
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
