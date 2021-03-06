import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper'
import IndexButtons from '../../../components/molecules/IndexButtons'
import IndexTable from '../../../components/molecules/IndexTable'
import { changeRoute } from '../../../store/user/actions'
import { updateModal } from '../../../store/display/actions'
import { getInformationList, getQuestionList } from '../../../store/list/actions'
import { getTagList } from '../../../store/search/actions'

const style = {
  width: '50%',
  margin: 'auto',
  textAlign: 'center',
  display: 'inline-block',
  padding: '20px 20px 20px 20px',
}

class IndexBox extends React.Component {

  componentDidMount() {
    this.props.loadPostList()
    this.props.loadTagList()
  }

  render() {
    return (
      <div style={{ width: '50%', textAlign: 'center', margin: '60px auto' }}>
        <Paper style={{ style }}>
          <IndexButtons
            logged={this.props.logged}
            onNotLoggedIn={this.props.openModal}
            changeRoute={this.props.changeRoute}
          />
          <IndexTable
            logged={this.props.logged}
            onNotLoggedIn={this.props.openModal}
            questionList={this.props.questionList}
            informationList={this.props.informationList.sort(
              (a, b) => {
                if (a.sponsor_credit < b.sponsor_credit) return 1
                else if (a.sponsor_credit > b.sponsor_credit) return -1
                return 0
              }
            )}
            changeRoute={this.props.changeRoute}
          />
        </Paper>
      </div>
    )
  }
}

IndexBox.propTypes = {
  logged: PropTypes.bool,
  questionList: PropTypes.array,
  informationList: PropTypes.array,
  changeRoute: PropTypes.func,
  openModal: PropTypes.func,
  loadPostList: PropTypes.func,
  loadTagList: PropTypes.func,
}

export const mapStateToProps = (state) => {
  return {
    logged: state.user.login,
    questionList: state.list.questionList,
    informationList: state.list.informationList,
  }
}


export const mapDispatchToProps = (dispatch) => {
  return {
    changeRoute: (route) => {
      dispatch(changeRoute(route))
    },
    openModal: () => {
      dispatch(updateModal(true, 'Sign in first'))
    },
    loadPostList: () => {
      dispatch(getQuestionList())
      dispatch(getInformationList())
    },
    loadTagList: () => {
      dispatch(getTagList())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexBox)
