export const GET_QUESTION_ANSWER = 'GET_QUESTION_ANSWER'
export const SELECT_QUESTION_ANSWER = 'SELECT_QUESTION_ANSWER'
export const UPDATE_QUESTION_ANSWER = 'UPDATE_QUESTION_ANSWER'
// export const ANSWER_QUESTION_POST = 'ANSWER_QUESTION_POST'

export const getQuestionAnswer = (postId) => {
  return {
    type: GET_QUESTION_ANSWER,
    postId,
  }
}

export const selectQuestionAnswer = (qid, aid) => {
  return {
    type: SELECT_QUESTION_ANSWER,
    qid,
    aid,
  }
}

export const updateQuestionAnswer = (answerList) => {
  return {
    type: UPDATE_QUESTION_ANSWER,
    answerList,
  }
}


// export const answerQuestionPost = (answer, author, qid) => {
//   return {
//     type: ANSWER_QUESTION_POST,
//     answer,
//     author,
//     qid,
//   }
// }
