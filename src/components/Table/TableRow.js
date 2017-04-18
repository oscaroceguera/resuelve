import React from 'react'
import UpdateIcon from '../../svg/update.svg'
import DeleteIcon from '../../svg/delete.svg'
import './styles.css'

function decimal(value) {
  value = parseFloat(value)
  return value.toFixed(2)
}

const TableRow = ({item, deleteConcepto, updateConcepto, index}) => (
  <div className='tableRow'>
    <div className='tableRow__descripcion xl'>{item.descripcion}</div>
    <div className='tableRow__cantidad xm'>{item.cantidad}</div>
    <div className='tableRow__unidades xm'>{item.unidades}</div>
    <div className='tableRow__precio xm'>$ {decimal(item.precioUnit)}</div>
    <div className='tableRow__total xm'>
      <div>{'$'}</div>
      <div>{decimal(item.cantidad * item.precioUnit)}</div>
    </div>
    <div className='tableRow__acciones x-s'>
      <img onClick={updateConcepto(index)} className='tableRow__acciones__img' src={UpdateIcon} alt='update'/>
      <img onClick={deleteConcepto(index)} className='tableRow__acciones__img' src={DeleteIcon} alt='del'/>
    </div>
  </div>
)

TableRow.propTypes = {
  item: React.PropTypes.object.isRequired,
  index: React.PropTypes.number.isRequired,
  deleteConcepto: React.PropTypes.func.isRequired,
  updateConcepto: React.PropTypes.func.isRequired
}

export default TableRow
