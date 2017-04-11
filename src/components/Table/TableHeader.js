import React from 'react'
import './styles.css'

const TableHeader = () => (
  <div className='tableHeader'>
    <div className='tableHeader__description xl'>{'Descripción'}</div>
    <div className='tableHeader__cantidad xm'>{'Cantidad'}</div>
    <div className='tableHeader__unidades xm'>{'Unidades'}</div>
    <div className='tableHeader__precio xm'>{'Precio unitario'}</div>
    <div className='tableHeader__total xm'>{'Total'}</div>
    <div className='tableHeader__acciones x-s'>{'Acciones'}</div>
  </div>
)

export default TableHeader
