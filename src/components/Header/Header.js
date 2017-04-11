import React from 'react'
import AddIcon from '../../svg/add.svg'
import { HEADER_CONTAINER , TITLE, BTN } from './styles'

const Header = () => (
  <div style={HEADER_CONTAINER}>
    <p style={TITLE}>{'Conceptos'}</p>
    <div style={BTN}>
      <img src={AddIcon} alt='add-icon'/>
      <div>{'Agregar concepto'}</div>
    </div>
  </div>
)

export default Header
