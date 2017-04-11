import React from 'react'
import './styles.css'

const TableFooterRow = ({title, cant}) => (
  <div className='tableFooter__row'>
    <div className='tableFooter__row--title'>{title}</div>
    <div className='tableFooter__row--desc'>
      <div>{'$'}</div>
      <div>{cant}</div>
    </div>
  </div>
)

TableFooterRow.propTypes = {
  title: React.PropTypes.string.isRequired,
  cant: React.PropTypes.any.isRequired
}

export default TableFooterRow
