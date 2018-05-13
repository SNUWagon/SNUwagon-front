import React, { PropTypes } from 'react'
import { TableRow, TableRowColumn } from 'material-ui/Table'

const PostListCell = ({ onClick, type, title, created, due }) => {
  return (
    <TableRow className={'post-list-row-cell'} onCellClick={onClick}>
      <TableRowColumn className={'post-list-row-cell-type'}>{type}</TableRowColumn>
      <TableRowColumn className={'post-list-row-cell-title'}>{title}</TableRowColumn>
      <TableRowColumn className={'post-list-row-cell-created'}>{created}</TableRowColumn>
      <TableRowColumn className={'post-list-row-cell-due'}>{due}</TableRowColumn>
    </TableRow>
  )
}

PostListCell.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  due: PropTypes.string,
  created: PropTypes.string,
  onClick: PropTypes.func,
}

export default PostListCell
