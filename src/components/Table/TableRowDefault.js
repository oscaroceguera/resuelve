import React from 'react'
import UpdateIcon from '../../svg/update.svg'
import DeleteIcon from '../../svg/delete.svg'
import './styles.css'

const TableRowDefault = () => (
    <div className='tableRowDefault'>
      <div className='tableRow__descripcion xl'>{'Descripción'}</div>
      <div className='tableRow__cantidad xm'>{'Cantidad'}</div>
      <div className='tableRow__unidades xm'>{'Unidades'}</div>
      <div className='tableRow__precio xm'>$ {'Precio unitario'}</div>
      <div className='tableRow__total xm'>
        <div>{'$'}</div>
        <div>{'0.00'}</div>
      </div>
      <div className='tableRow__acciones x-s'>
        <img className='tableRow__acciones__img' src={UpdateIcon} alt='update'/>
        <img className='tableRow__acciones__img' src={DeleteIcon} alt='del'/>
      </div>
    </div>
)

export default TableRowDefault
