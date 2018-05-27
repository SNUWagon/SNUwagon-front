import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper'
import { Tabs, Tab } from 'material-ui/Tabs'
import Divider from 'material-ui/Divider'
import * as colors from 'material-ui/styles/colors'
import Pagination from 'material-ui-pagination'
import PostList from '../../../components/molecules/PostList'
import { changeRoute } from '../../../store/user/actions'
import { getQuestionList, getInformationList } from '../../../store/list/actions'

const styles = {
  grid: {
    margin: '40px 300px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridColumnGap: '30',
  },
  paper: {
    width: 500,
    margin: 'auto',
    textAlign: 'center',
    display: 'inline-block',
    padding: '20px 20px 20px 20px',
  },
  header: {
    textAlign: 'center',
  },
}

class PostListBox extends React.Component {

  constructor(props) {
    super(props)

    this.postPerPage = 5

    this.state = {
      questionTotalPage: 1,
      questionCurrentPage: 1,
      informationTotalPage: 1,
      informationCurrentPage: 1,
    }
  }

  componentDidMount() {
    this.props.loadPostList()
  }

  componentWillReceiveProps(nextProps) {
    const questionCount = nextProps.questionList.length
    const informationCount = nextProps.informationList.length

    this.setState({
      questionTotalPage: Math.ceil(questionCount / this.postPerPage),
      questionCurrentPage: 1,
      informationTotalPage: Math.ceil(informationCount / this.postPerPage),
      informationCurrentPage: 1,
    })
  }

  render() {
    return (
      <div style={styles.grid}>
        <Paper style={styles.paper} zDepth={2}>
          <h3 style={styles.header}>Questions</h3>
          <Divider />
          <PostList
            className={'question-list'}
            postList={this.props.questionList.slice(
              ((this.state.questionCurrentPage - 1) * this.postPerPage),
              (this.state.questionCurrentPage * this.postPerPage),
            )}
            type={'question'}
            changeRoute={this.props.changeRoute}
          />
          <Pagination
            styleRoot={{
              textAlign: 'center',
            }}
            total={this.state.questionTotalPage}
            current={this.state.questionCurrentPage}
            display={10}
            onChange={questionCurrentPage => this.setState({ questionCurrentPage })}
          />
        </Paper>
        <Paper style={styles.paper} zDepth={2}>
          <h3 style={styles.header}>Information</h3>
          <Divider />
          <PostList
            postList={this.props.informationList.slice(
              ((this.state.informationCurrentPage - 1) * this.postPerPage),
              (this.state.informationCurrentPage * this.postPerPage),
            )}
            type={'information'}
            changeRoute={this.props.changeRoute}
          />
          <Pagination
            styleRoot={{
              textAlign: 'center',
            }}
            total={this.state.informationTotalPage}
            current={this.state.informationCurrentPage}
            display={10}
            onChange={informationCurrentPage => this.setState({ informationCurrentPage })}
          />
        </Paper>
      </div>
    )
  }
}

PostListBox.propTypes = {
  questionList: PropTypes.array,
  informationList: PropTypes.array,
  changeRoute: PropTypes.func,
  loadPostList: PropTypes.func,
}


export const mapStateToProps = (state) => {
  return {
    questionList: state.list.questionList,
    informationList: state.list.informationList,
  }
}


export const mapDispatchToProps = (dispatch) => {
  return {
    changeRoute: (route) => {
      dispatch(changeRoute(route))
    },
    loadPostList: (route) => {
      dispatch(getQuestionList())
      dispatch(getInformationList())
    },
  }
}

export const PostListBoxShallow = PostListBox
export default connect(mapStateToProps, mapDispatchToProps)(PostListBox)
