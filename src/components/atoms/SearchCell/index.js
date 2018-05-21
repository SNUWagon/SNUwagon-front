import React, { PropTypes } from 'react'
import { TableRow, TableRowColumn } from 'material-ui/Table'

const SearchCell = ({ items, onClick }) => {
  return (
    <TableRow className={'search-list-row-cell'} onCellClick={onClick}>
      {Object.keys(items).map(key => {
        return <TableRowColumn key={items[key]}>{items[key]}</TableRowColumn>
      })}
    </TableRow>
  )
}

SearchCell.propTypes = {
  onClick: PropTypes.func,
  items: PropTypes.any,
}

export default SearchCell
