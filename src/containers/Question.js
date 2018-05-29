import { connect } from 'react-redux'
import Question from '../components/molecules/Question'
import { answerQuestionPost, deleteQuestionPost } from '../store/question/actions'

export const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
    question: state.question,
    answer: state.answer,
    questionId: ownProps.id,
  }
}


export const mapDispatchToProps = (dispatch) => {
  return {
    onClickAnswer: (answer, author, qid) => {
      dispatch(answerQuestionPost(answer, author, qid))
    },
    onClickDelete: (postId) => {
      dispatch(deleteQuestionPost(postId))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Question)
