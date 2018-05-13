import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow } from 'material-ui/Table'
import PostListCell from '../../../components/atoms/PostListCell'
import { changeRoute } from '../../../store/user/actions'
import { getPostList } from '../../../store/list/actions'

class PostListTable extends React.Component {
  constructor(props) {
    super(props)

    this.onCellClick = this.onCellClick.bind(this)
  }

  componentDidMount() {
    this.props.loadPostList()
  }

  onCellClick(type, id) {
    if (type === 'question') {
      this.props.changeRoute(`/question/${id}`)
    } else if (type === 'information') {
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
            <TableHeaderColumn>Type</TableHeaderColumn>
            <TableHeaderColumn>Title</TableHeaderColumn>
            <TableHeaderColumn>Created</TableHeaderColumn>
            <TableHeaderColumn>Due</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          { this.props.postList.map((row) => (
            <PostListCell
              key={row.id}
              type={row.type}
              title={row.title}
              due={row.due}
              created={row.created}
              onClick={() => this.onCellClick(row.type, row.id)}
            />
          ))}
        </TableBody>
      </Table>
    )
  }
}

PostListTable.propTypes = {
  postList: PropTypes.array,
  loadPostList: PropTypes.func,
  changeRoute: PropTypes.func,
}


const mapStateToProps = (state) => {
  return {
    postList: state.list,
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    changeRoute: (route) => {
      dispatch(changeRoute(route))
    },
    loadPostList: () => {
      dispatch(getPostList())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostListTable)
