import React, { PropTypes } from 'react'
import _ from 'lodash'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow } from 'material-ui/Table'
import SearchCell from '../../../components/atoms/SearchCell'

class SearchTable extends React.Component {

  constructor(props) {
    super(props)
    this.onCellClick = this.onCellClick.bind(this)
  }

  onCellClick(id) {
    if (this.props.type === 'question') {
      this.props.changeRoute(`/question/${id}`)
    } else if (this.props.type === 'information') {
      this.props.changeRoute(`/information/${id}`)
    }
  }

  render() {
    return (
      <Table>
        <TableHeader
          displaySelectAll={false}
          adjustForCheckbox={false}
        >
          <TableRow>
            {this.props.columns.map(column => {
              return <TableHeaderColumn key={column}>{column}</TableHeaderColumn>
            })}
          </TableRow>
        </TableHeader>
        <TableBody>
          { this.props.postList.map((row) => (
            <SearchCell
              className={'search-cell'}
              items={
                _.pick(row, this.props.columns)
              }
              onClick={() => this.onCellClick(row.id)}
              key={row.id}
            />
          ))}
        </TableBody>
      </Table>
    )
  }
}

SearchTable.propTypes = {
  postList: PropTypes.array,
  type: PropTypes.string,
  columns: PropTypes.array,
  changeRoute: PropTypes.func,
}

export default SearchTable
