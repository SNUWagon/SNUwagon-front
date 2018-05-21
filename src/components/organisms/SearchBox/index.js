import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper'
import { Tabs, Tab } from 'material-ui/Tabs'
import * as colors from 'material-ui/styles/colors'
import SearchInput from '../../../components/molecules/SearchInput'
import SearchTable from '../../../components/molecules/SearchTable'
import { searchQuestionWithTitle, searchQuestionWithTag,
         searchInformationWithTitle, searchInformationWithTag } from '../../../store/search/actions'
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

    this.questionColumns = ['id', 'title', 'author', 'bounty', 'due']
    this.informationColumns = ['id', 'title', 'author', 'due']
  }


  render() {
    return (
      <div style={{ textAlign: 'center', margin: '40px 300px' }}>
        <Paper style={{ style }}>
          <SearchInput
            titleSearch={this.props.titleSearch}
            tagSearch={this.props.tagSearch}
            tagList={this.props.tagList}
          />
          <Tabs
            tabItemContainerStyle={{
              backgroundColor: colors.indigo500,
            }}
          >
            <Tab label={'Question'}>
              <SearchTable
                postList={this.props.questionList}
                type={'question'}
                columns={this.questionColumns.slice(1)}
                changeRoute={this.props.changeRoute}
              />
            </Tab>
            <Tab label={'Information'}>
              <SearchTable
                postList={this.props.informationList}
                type={'information'}
                columns={this.informationColumns.slice(1)}
                changeRoute={this.props.changeRoute}
              />
            </Tab>
          </Tabs>
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox)
