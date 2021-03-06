import React from 'react'
import _ from 'lodash'
import TableHeader from './TableHeader'
import TableRow from './TableRow'
import TableRowDefault from './TableRowDefault'
import TableFooter from './TableFooter'

const styles = {
  width: '95%',
  margin: '0 auto'
}

const Table = ({data, deleteConcepto, onUpdateConcepto}) => (
  <div style={styles}>
    <TableHeader />
    {
      data.length === 0
        ? <TableRowDefault />
      : data.map((item, key) => (
        <TableRow
          key={key}
          index={key}
          item={item}
          updateConcepto={onUpdateConcepto}
          deleteConcepto={deleteConcepto}
        />
      ))
    }
    <TableFooter data={data}/>
  </div>
)

Table.propTypes = {
  data: React.PropTypes.array.isRequired,
  deleteConcepto: React.PropTypes.func.isRequired,
  onUpdateConcepto: React.PropTypes.func.isRequired
}

export default Table
