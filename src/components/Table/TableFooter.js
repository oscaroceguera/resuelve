import React from 'react'
import _ from 'lodash'
import './styles.css'

import TableFooterRow from './TableFooterRow'

const TableFooter = ({data}) => {
  const subtotal = _.sumBy(data, (item) => item.cantidad * item.precioUnit)
  const iva = subtotal * 0.16
  const total = subtotal + iva

  return (
    <div className='tableFooter'>
      <TableFooterRow title={'Subtotal'} cant={subtotal.toFixed(2)} />
      <TableFooterRow title={'IVA (16%)'} cant={iva.toFixed(2)} />
      <TableFooterRow title={'Total'} cant={total.toFixed(2)} />
    </div>
  )
}

TableFooter.propTypes = {
  data: React.PropTypes.array.isRequired
}

export default TableFooter
