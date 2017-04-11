import React from 'react'
import './styles.css'

import TableFooterRow from './TableFooterRow'

const TableFooter = () => (
  <div className='tableFooter'>
    <TableFooterRow title={'Subtotal'} cant={'2004.00'} />
    <TableFooterRow title={'IVA (16%)'} cant={'2004.00'} />
    <TableFooterRow title={'Total'} cant={'2004.00'} />
  </div>
)

export default TableFooter
