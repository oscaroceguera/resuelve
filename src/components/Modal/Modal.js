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

const Modal = ({modalOpen, closeModal, handleChange, addConcepto, currentConcepto, showSubmit}) => (
  <ReactModal
    style={modalStyles}
    isOpen={modalOpen}
    onRequestClose={closeModal}
    contentLabel='Agregar concepto'>
    <h1 className='modal__title'>{'Agregar concepto'}</h1>
    <div className='modal__form'>
      <input value={currentConcepto.descripcion} name='descripcion' onChange={handleChange} className='modal__form--input' placeholder='Descripción' />
      <input value={currentConcepto.cantidad} name='cantidad' onChange={handleChange} className='modal__form--input' placeholder='Cantidad' />
      <input value={currentConcepto.unidades} name='unidades' onChange={handleChange} className='modal__form--input' placeholder='Unidades' />
      <input value={currentConcepto.precioUnit} name='precioUnit' onChange={handleChange} className='modal__form--input' placeholder='Precio unitario' />
    </div>
    <div className='modal__agregar'>
      <button
        className={showSubmit ? 'modal__agregar--btn' : 'modal__agregar--disabled'}
        onClick={showSubmit ? addConcepto : null}
      >
        {'Agregar'}
      </button>
    </div>
  </ReactModal>
)

Modal.propTypes = {
  modalOpen: React.PropTypes.bool.isRequired,
  closeModal: React.PropTypes.func.isRequired,
  handleChange: React.PropTypes.func.isRequired,
  addConcepto: React.PropTypes.func.isRequired,
  currentConcepto: React.PropTypes.object.isRequired,
  showSubmit: React.PropTypes.bool.isRequired
}

export default Modal
