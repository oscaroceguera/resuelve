import React from 'react'

import TableHeader from './TableHeader'
import TableRow from './TableRow'
import TableFooter from './TableFooter'

const styles = {
  width: '95%',
  margin: '0 auto'
}

const Table = ({data}) => (
  <div style={styles}>
    <TableHeader />
    {
      data.map((item, key) => <TableRow key={key} item={item} />)
    }
    <TableFooter />
  </div>
)

Table.propTypes = {
  data: React.PropTypes.array.isRequired
}

export default Table
