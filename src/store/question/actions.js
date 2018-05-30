export const CHANGE_ROUTE = 'CHANGE_ROUTE'
export const WRITE_QUESTION_POST = 'WRITE_QUESTION_POST'
export const GET_QUESTION_POST = 'GET_QUESTION_POST'
export const DELETE_QUESTION_POST = 'DELETE_QUESTION_POST'
export const UPDATE_QUESTION_POST = 'UPDATE_QUESTION_POST'
export const ANSWER_QUESTION_POST = 'ANSWER_QUESTION_POST'

export const changeRoute = (route) => {
  return {
    type: CHANGE_ROUTE,
    route,
  }
}

export const writeQuestionPost = (title, content, due, bounty, author, tags) => {
  return {
    type: WRITE_QUESTION_POST,
    title,
    content,
    due,
    bounty,
    author,
    tags,
  }
}

export const getQuestionPost = (postId) => {
  return {
    type: GET_QUESTION_POST,
    postId,
  }
}

export const deleteQuestionPost = (postId) => {
  return {
    type: DELETE_QUESTION_POST,
    postId,
  }
}

export const updateQuestionPost = (postId, title, content, due, bounty, author, resolved, selected, tags) => {
  return {
    type: UPDATE_QUESTION_POST,
    postId,
    title,
    content,
    due,
    bounty,
    author,
    resolved,
    selected,
    tags,
  }
}

export const answerQuestionPost = (answer, author, qid) => {
  return {
    type: ANSWER_QUESTION_POST,
    answer,
    author,
    qid,
  }
}
