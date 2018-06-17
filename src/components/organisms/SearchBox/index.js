import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider'
import { Tabs, Tab } from 'material-ui/Tabs'
import * as colors from 'material-ui/styles/colors'
import Pagination from 'material-ui-pagination'
import SearchInput from '../../../components/molecules/SearchInput'
import SearchTable from '../../../components/molecules/SearchTable'
import PostList from '../../../components/molecules/PostList'
import { searchQuestionWithTitle, searchQuestionWithTag,
         searchInformationWithTitle, searchInformationWithTag,
         updateQuestionSearchResult, updateInformationSearchResult } from '../../../store/search/actions'
import { changeRoute } from '../../../store/user/actions'
import { updateModal } from '../../../store/display/actions'

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
  input: {
    textAlign: 'center',
    margin: '60px 300px',
  },
  header: {
    textAlign: 'center',
  },
}

class SearchBox extends React.Component {

  constructor(props) {
    super(props)

    this.postPerPage = 5

    this.state = {
      showSearchResult: false,
      questionTotalPage: 1,
      questionCurrentPage: 1,
      informationTotalPage: 1,
      informationCurrentPage: 1,
    }
  }

  componentDidMount() {
    this.props.resetSearchResult()
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
      <div>
        <div style={styles.input}>
          <SearchInput
            className={'search-input'}
            titleSearch={this.props.titleSearch}
            tagSearch={this.props.tagSearch}
            tagList={this.props.tagList.map((tag) => (`#${tag}`))}
            searched={() => this.setState({ showSearchResult: true })}
          />
        </div>
        {
          this.state.showSearchResult ?
            <div style={styles.grid}>
              <Paper style={styles.paper} zDepth={2}>
                <h3 style={styles.header}>Questions</h3>
                <Divider />
                <PostList
                  className={'question-list'}
                  login={this.props.login}
                  postList={this.props.questionList.slice(
                    ((this.state.questionCurrentPage - 1) * this.postPerPage),
                    (this.state.questionCurrentPage * this.postPerPage),
                  )}
                  type={'question'}
                  changeRoute={this.props.changeRoute}
                  showFailModal={this.props.showFailModal}
                />
                <Pagination
                  className={'question-list-pagination'}
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
                  className={'information-list'}
                  login={this.props.login}
                  postList={this.props.informationList.slice(
                    ((this.state.informationCurrentPage - 1) * this.postPerPage),
                    (this.state.informationCurrentPage * this.postPerPage),
                  )}
                  type={'information'}
                  changeRoute={this.props.changeRoute}
                  showFailModal={this.props.showFailModal}
                />
                <Pagination
                  className={'information-list-pagination'}
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
            :
            <div style={styles.input}>
              <p>{'Search Posts!'}</p>
            </div>
        }
      </div>
    )
  }
}

SearchBox.propTypes = {
  login: PropTypes.bool,
  tagList: PropTypes.array,
  questionList: PropTypes.array,
  informationList: PropTypes.array,
  titleSearch: PropTypes.func,
  tagSearch: PropTypes.func,
  changeRoute: PropTypes.func,
  resetSearchResult: PropTypes.func,
  showFailModal: PropTypes.func,
}


export const mapStateToProps = (state) => {
  return {
    login: state.user.login,
    tagList: state.search.tagList,
    questionList: state.search.questionSearchResult,
    informationList: state.search.informationSearchResult,
  }
}


export const mapDispatchToProps = (dispatch) => {
  return {
    titleSearch: (query) => {
      dispatch(searchQuestionWithTitle(query))
      dispatch(searchInformationWithTitle(query))
    },
    tagSearch: (query) => {
      dispatch(searchQuestionWithTag(query))
      dispatch(searchInformationWithTag(query))
    },
    changeRoute: (route) => {
      dispatch(changeRoute(route))
    },
    resetSearchResult: () => {
      dispatch(updateQuestionSearchResult([]))
      dispatch(updateInformationSearchResult([]))
    },
    showFailModal: () => {
      dispatch(updateModal(true, 'Sign in first'))
    },
  }
}

export const SearchBoxShallow = SearchBox
export default connect(mapStateToProps, mapDispatchToProps)(SearchBox)
