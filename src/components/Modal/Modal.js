import React from 'react'
import { default as ReactModal} from 'react-modal'

import './styles.css'

const modalStyles = {
  content: {
    width: 500,
    margin: '20px auto',
    height: 400,
    borderRadius: 4,
    background: '#FAFAFA',
    padding: 0
  }
}

const Modal = ({modalOpen, closeModal}) => (
  <ReactModal
    style={modalStyles}
    isOpen={modalOpen}
    onRequestClose={closeModal}
    contentLabel='Agregar concepto'>
    <h1 className='modal__title'>{'Agregar concepto'}</h1>
    <div className='modal__form'>
      <input className='modal__form--input' placeholder='Descripción' />
      <input className='modal__form--input' placeholder='Cantidad' />
      <input className='modal__form--input' placeholder='Unidades' />
      <input className='modal__form--input' placeholder='Precio unitario' />
    </div>
    <div className='modal__agregar'>
      <button className='modal__agregar--btn'>Agregar</button>
    </div>
  </ReactModal>
)

Modal.propTypes = {
  modalOpen: React.PropTypes.bool.isRequired,
  closeModal: React.PropTypes.func.isRequired
}

export default Modal
