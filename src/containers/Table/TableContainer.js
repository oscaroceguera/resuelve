import React, { Component } from 'react';
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as Actions from '../../reducers/tableReducer'

import Wrapper from '../../components/commons/Wrapper'
import Header from '../../components/Header/Header'
import Table from '../../components/Table/Table'
import Modal from '../../components/Modal/Modal'
import ExtraButtons from '../../components/ExtraButtons/ExtraButtons'

class TableContainer extends Component {
  closeModal = (e) => {
    this.props.closeModalAction()
  }

  openModal = (e) => {
    this.props.openModalAction()
  }

  handleChange = (e) => {
    const inputName = e.target.name
    let value = e.target.value
    this.props.listenFields(inputName, value)
  }

  onSaved = (e) => {
    e.preventDefault()

    if (this.props.isUpdate) {
      return this.props.updateConceptoFanout()
    }

    this.props.conceptoFanout()
  }

  deleteConcepto = (index) => (e) => {
    e.preventDefault()

    this.props.deleteConcepto(index)
  }

  consoleLog = (e) => {
    console.log(this.props.conceptos)
  }

  clearState = (e) => {
    this.props.resetValues()
  }

  handleUpdateConcepto = (index) => (e) => {
    e.preventDefault()
    this.props.setConceptoToUpdate(index)
  }

  render () {
    const { modalOpen, conceptos, currentConcepto } = this.props
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
          addConcepto={this.onSaved}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) =>  {
  const tableJS = state.tableReducer.toJS()
  return {
    modalOpen: tableJS.modalOpen,
    conceptos: tableJS.conceptos,
    currentConcepto: tableJS.currentConcepto,
    isUpdate: tableJS.isUpdate,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...Actions
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TableContainer)
