import React from 'react'
import { connect } from 'react-redux'
import QuestionWrite from '../components/molecules/QuestionWrite'
import { writeQuestionPost, changeRoute } from '../store/question/actions'

const mapStateToProps = (state) => {
  return {
    state,
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    onClickWriteQuestion: (title, content, due, bounty, author) => {
      // TODO: tags
      dispatch(writeQuestionPost(title, content, due, bounty, author))
    },
    onClickBack: (route) => {
      dispatch(changeRoute(route))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionWrite)
