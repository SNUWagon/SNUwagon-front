import { take, call, fork, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import api from 'services/api'
import * as actions from './actions'
import * as displayActions from '../display/actions'
import { updateQuestionAnswer } from '../answer/actions'

const baseUrl = ''
const questionUrl = `${baseUrl}/posts/question`
const answerUrl = `${baseUrl}/posts/answer`

export function* handleChangeRoute(newRoute) {
  yield put(push(newRoute))
}

export function* handleWriteQuestionPost(title, content, due, bounty, author, tags) {
  const data = { title, content, username: author, due, bounty, question_type: 'private', tags }
  const response = yield call(api.post, `${questionUrl}`, data)
  if (response.success === true) {
    yield put(actions.changeRoute(`/question/${response.data.id}`))
    yield put(displayActions.updateSnackbar(true, `${title} posted!`))
  }
}

export function* handleGetQuestionPost(postId) {
  const response = yield call(api.get, `${questionUrl}/${postId}`)
  if (response.success === true) {
    yield put(actions.updateQuestionPost(
      response.data.id,
      response.data.title,
      response.data.content,
      response.data.due,
      response.data.bounty,
      response.data.author,
      response.data.resolved,
      response.data.selected,
      response.data.tags,
    ))
  } else {
    yield put(actions.changeRoute('/'))
    yield put(displayActions.updateModal(true, 'Oops... that Question is deleted'))
  }
}

export function* handleDeleteQuestionPost(postId) {
  const response = yield call(api.delete, `${questionUrl}/${postId}`)
  if (response.success === true) {
    yield put(actions.changeRoute('/'))
    yield put(displayActions.updateSnackbar(true, 'Question deleted'))
  }
}

export function* handleAnswerQuestionPost(answer, author, qid) {
  const data = { content: answer, username: author, qid }
  const response = yield call(api.post, `${answerUrl}`, data)
  if (response.success === true) {
    const resp = yield call(api.get, `${answerUrl}/${qid}`)
    yield put(updateQuestionAnswer(resp.data.map(
      (data) => {
        return {
          ...data,
        }
      }
    )))
  }
}

/* watcher functions */
function* watchChangeRoute() {
  while (true) {
    const { route } = yield take(actions.CHANGE_ROUTE)
    yield call(handleChangeRoute, route)
  }
}

function* watchWriteQuestionPost() {
  while (true) {
    const { title, content, due, bounty, author, tags } = yield take(actions.WRITE_QUESTION_POST)
    yield call(handleWriteQuestionPost, title, content, due, bounty, author, tags)
  }
}

function* watchGetQuestionPost() {
  while (true) {
    const { postId } = yield take(actions.GET_QUESTION_POST)
    yield call(handleGetQuestionPost, postId)
  }
}

function* watchDeleteQuestionPost() {
  while (true) {
    const { postId } = yield take(actions.DELETE_QUESTION_POST)
    yield call(handleDeleteQuestionPost, postId)
  }
}

function* watchAnswerQuestionPost() {
  while (true) {
    const { answer, author, qid } = yield take(actions.ANSWER_QUESTION_POST)
    yield call(handleAnswerQuestionPost, answer, author, qid)
  }
}

export default function* () {
  yield fork(watchChangeRoute)
  yield fork(watchWriteQuestionPost)
  yield fork(watchGetQuestionPost)
  yield fork(watchDeleteQuestionPost)
  yield fork(watchAnswerQuestionPost)
}
