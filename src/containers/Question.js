import { connect } from 'react-redux'
import Question from '../components/molecules/Question'
import { changeRoute } from '../store/question/actions'

const mapStateToProps = (state, ownProps) => {
  const questionById = state.question.filter(
    q => (q.postId === parseInt(ownProps.id, 10))
  )
  return {
    questionstate: questionById,
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    onClickAnswer: (route) => {
      // answer import 해서 post
      dispatch(changeRoute(route))
    },
    onClickDelete: (route) => {
      dispatch(changeRoute(route))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Question)
