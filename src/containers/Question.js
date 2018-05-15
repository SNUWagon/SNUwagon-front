import { connect } from 'react-redux'
import Question from '../components/molecules/Question'
import { changeRoute, deleteQuestionPost } from '../store/question/actions'

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
    question: state.question,
    questionId: ownProps.id,
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    onClickAnswer: (route) => {
      // answer import 해서 post
      dispatch(changeRoute(route))
    },
    onClickDelete: (postId) => {
      dispatch(deleteQuestionPost(postId))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Question)
