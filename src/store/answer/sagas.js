import { take, call, fork, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import api from 'services/api'
import * as actions from './actions'
import { updateQuestionPost } from '../question/actions'

const baseUrl = ''
const questionUrl = `${baseUrl}/posts/question`
const answerUrl = `${baseUrl}/posts/answer`

function* handleGetQuestionAnswer(postId) {
  const response = yield call(api.get, `${answerUrl}/${postId}`)

  if (response.success === true) {
    yield put(actions.updateQuestionAnswer(response.data.map(
      (data) => {
        return {
          ...data,
        }
      }
    )))
  }
}

function* handleSelectQuestionAnswer(qid, aid) {
  const data = { qid, aid }
  let response = yield call(api.put, `${questionUrl}`, data)
  if (response.success === true) {
    response = yield call(api.get, `${questionUrl}/${qid}`)
    yield put(updateQuestionPost(
      response.data.id,
      response.data.title,
      response.data.content,
      response.data.due,
      response.data.bounty,
      response.data.author,
      true,
      aid,
      response.data.tags,
    ))
  }
}


/* watcher functions */

function* watchGetQuestionAnswer() {
  while (true) {
    const { postId } = yield take(actions.GET_QUESTION_ANSWER)
    yield call(handleGetQuestionAnswer, postId)
  }
}

function* watchSelectQuestionAnswer() {
  while (true) {
    const { qid, aid } = yield take(actions.SELECT_QUESTION_ANSWER)
    yield call(handleSelectQuestionAnswer, qid, aid)
  }
}

export default function* () {
  yield fork(watchGetQuestionAnswer)
  yield fork(watchSelectQuestionAnswer)
}
