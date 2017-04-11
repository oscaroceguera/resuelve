import React from 'react'
import AddIcon from '../../svg/add.svg'
import './styles.css'

const Header = ({openModal}) => (
  <div className='header'>
    <p className='header--title'>{'Conceptos'}</p>
    <div className='header--btn' onClick={openModal}>
      <img src={AddIcon} alt='add-icon'/>
      <div>{'Agregar concepto'}</div>
    </div>
  </div>
)

Header.propTypes = {
  openModal: React.PropTypes.func.isRequired
}

export default Header
