import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import TitleBar from '../../../components/molecules/TitleBar'
import Question from '../../../containers/Question'
import { getQuestionPost } from '../../../store/question/actions'
import { getQuestionAnswer } from '../../../store/answer/actions'

class QuestionPage extends React.Component {

  componentDidMount() {
    this.props.loadQuestion(this.props.params.id)
    this.props.loadAnswer(this.props.params.id)
  }

  render() {
    const questionId = this.props.params.id

    return (
      <div>
        <TitleBar />
        <Question id={questionId} />
      </div>
    )
  }
}

QuestionPage.propTypes = {
  params: PropTypes.object,
  loadQuestion: PropTypes.func,
  loadAnswer: PropTypes.func,
}

export const mapStateToProps = (state) => {
  return {
    logged: state.user.login,
    profile: state.user.profile,
  }
}


export const mapDispatchToProps = (dispatch) => {
  return {
    loadQuestion: (postId) => {
      dispatch(getQuestionPost(postId))
    },
    loadAnswer: (postId) => {
      dispatch(getQuestionAnswer(postId))
    },
  }
}

export const QuestionPageShallow = QuestionPage
export default connect(mapStateToProps, mapDispatchToProps)(QuestionPage)
