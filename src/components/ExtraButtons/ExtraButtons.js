import React from 'react'
import Printcon from '../../svg/print.svg'
import DeleteIcon from '../../svg/delete.svg'
import './styles.css'

const ExtraButtons = ({print, clear}) => (
  <div className='btnContainer'>
    <button onClick={print} className='btnContainer__btn'>
      <img src={Printcon} alt='print-icon'/>
      <div>{'Imprimir en consola'}</div>
    </button>
    <button onClick={clear} className='btnContainer__btn'>
      <img src={DeleteIcon} alt='delete-icon'/>
      <div>{'Limpiar'}</div>
    </button>
  </div>
)

ExtraButtons.propTypes = {
  print: React.PropTypes.func.isRequired,
  clear: React.PropTypes.func.isRequired
}

export default ExtraButtons
