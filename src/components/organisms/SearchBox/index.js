import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper'
import { Tabs, Tab } from 'material-ui/Tabs'
import * as colors from 'material-ui/styles/colors'
import Pagination from 'material-ui-pagination'
import SearchInput from '../../../components/molecules/SearchInput'
import SearchTable from '../../../components/molecules/SearchTable'
import { searchQuestionWithTitle, searchQuestionWithTag,
         searchInformationWithTitle, searchInformationWithTag,
         updateQuestionSearchResult, updateInformationSearchResult } from '../../../store/search/actions'
import { changeRoute } from '../../../store/user/actions'


const style = {
  width: 800,
  margin: 'auto',
  textAlign: 'center',
  display: 'inline-block',
  padding: '20px 20px 20px 20px',
}


class SearchBox extends React.Component {

  constructor(props) {
    super(props)

    this.postPerPage = 5
    this.questionColumns = ['id', 'title', 'author', 'bounty', 'due']
    this.informationColumns = ['id', 'title', 'author', 'due']

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
      <div style={{ textAlign: 'center', margin: '40px 300px' }}>
        <Paper style={{ style }}>
          <SearchInput
            titleSearch={this.props.titleSearch}
            tagSearch={this.props.tagSearch}
            tagList={this.props.tagList.map(tag => (`#${tag}`))}
            searched={() => this.setState({ showSearchResult: true })}
          />
          {
            this.state.showSearchResult ?
              <Tabs
                tabItemContainerStyle={{
                  backgroundColor: colors.indigo500,
                }}
              >
                <Tab label={'Question'}>
                  <SearchTable
                    postList={this.props.questionList.slice(
                      ((this.state.questionCurrentPage - 1) * this.postPerPage),
                      (this.state.questionCurrentPage * this.postPerPage),
                    )}
                    type={'question'}
                    columns={this.questionColumns.slice(1)}
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
                </Tab>
                <Tab label={'Information'}>
                  <SearchTable
                    postList={this.props.informationList}
                    type={'information'}
                    columns={this.informationColumns.slice(1)}
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
                </Tab>
              </Tabs>
              :
              <p>Search Something!</p>
          }
        </Paper>
      </div>
    )
  }
}

SearchBox.propTypes = {
  tagList: PropTypes.array,
  questionList: PropTypes.array,
  informationList: PropTypes.array,
  titleSearch: PropTypes.func,
  tagSearch: PropTypes.func,
  changeRoute: PropTypes.func,
  resetSearchResult: PropTypes.func,
}


export const mapStateToProps = (state) => {
  return {
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox)
