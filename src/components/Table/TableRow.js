import React from 'react'
import AddIcon from '../../svg/add.svg'
import DeleteIcon from '../../svg/delete.svg'
import './styles.css'

const TableRow = ({item}) => (
    <div className='tableRow'>
      <div className='tableRow__descripcion xl'>{item.descripcion}</div>
      <div className='tableRow__cantidad xm'>{item.cantidad}</div>
      <div className='tableRow__unidades xm'>{item.unidades}</div>
      <div className='tableRow__precio xm'>$ {item.precioUnit}</div>
      <div className='tableRow__total xm'>
        <div>{'$'}</div>
        <div>{item.total}</div>
      </div>
      <div className='tableRow__acciones x-s'>
        <img className='tableRow__acciones__img' src={AddIcon} alt='plus'/>
        <img className='tableRow__acciones__img' src={DeleteIcon} alt='del'/>
      </div>
    </div>
)

TableRow.propTypes = {
  item: React.PropTypes.object.isRequired
}

export default TableRow
