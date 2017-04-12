import React from 'react'

import TableHeader from './TableHeader'
import TableRow from './TableRow'
import TableRowDefault from './TableRowDefault'
import TableFooter from './TableFooter'

const styles = {
  width: '95%',
  margin: '0 auto'
}

const Table = ({data}) => (
  <div style={styles}>
    <TableHeader />
    {
      data.length === 0
        ? <TableRowDefault />
        : data.map((item, key) => <TableRow key={key} item={item} />)
    }
    <TableFooter data={data}/>
  </div>
)

Table.propTypes = {
  data: React.PropTypes.array.isRequired
}

export default Table
