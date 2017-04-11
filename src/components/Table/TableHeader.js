import React from 'react'
import {
  TB_HEADER, WIDTH_LARGE, WIDTH_MEDIUM_LFT,
  WIDTH_MEDIUM_CNTR, WIDTH_SMALL
} from './styles'

const TableHeader = () => (
  <div style={TB_HEADER}>
    <div style={WIDTH_LARGE}>{'Descripción'}</div>
    <div style={WIDTH_SMALL}>{'Cantidad'}</div>
    <div style={WIDTH_SMALL}>{'Unidades'}</div>
    <div style={WIDTH_MEDIUM_LFT}>{'Precio unitario'}</div>
    <div style={WIDTH_MEDIUM_CNTR}>{'Total'}</div>
    <div style={WIDTH_SMALL}>{'Acciones'}</div>
  </div>
)

export default TableHeader
