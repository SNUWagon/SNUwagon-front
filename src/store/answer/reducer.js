import { initialState } from './selectors'
import * as actions from './actions'

const answerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.UPDATE_QUESTION_ANSWER:
      return action.answerList
    default:
      return state
  }
}

export default answerReducer
