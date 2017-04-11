import React from 'react'

import TableHeader from './TableHeader'
import TableRow from './TableRow'
import TableFooter from './TableFooter'

const styles = {
  width: '95%',
  margin: '0 auto'
}

const data = [
  {descripcion: 'Control Xbox', cantidad: 1, unidades: 12, precio: '999.00', total: '999.00'},
  {descripcion: 'Control Xbox', cantidad: 1, unidades: 12, precio: '999.00', total: '999.00'},
  {descripcion: 'Control Xbox', cantidad: 1, unidades: 12, precio: '999.00', total: '999.00'},
  {descripcion: 'Control Xbox', cantidad: 1, unidades: 12, precio: '999.00', total: '999.00'},
  {descripcion: 'Control Xbox', cantidad: 1, unidades: 12, precio: '999.00', total: '999.00'},
  {descripcion: 'Control Xbox', cantidad: 1, unidades: 12, precio: '999.00', total: '999.00'}
]

const Table = () => (
  <div style={styles}>
    <TableHeader />
    {
      data.map((item, key) => <TableRow key={key} item={item} />)
    }
    <TableFooter />
  </div>
)

export default Table
