import { take, call, fork, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import api from 'services/api'
import * as actions from './actions'

const baseUrl = ''
const questionUrl = `${baseUrl}/posts/question`

export function* handleChangeRoute(newRoute) {
  yield put(push(newRoute))
}

export function* handleWriteQuestionPost(title, content, due, bounty, author) {
  // TODO: tags
  // let authorId = author.userId
  // const hash = new Buffer(`${author.username}:${author.userId}`).toString('base64')
  const data = { title, content, username: 'david', due, bounty, question_type: 'private' }
  // const auth = { headers: {'Authorization' : `Basic ${hash}`, 'Content-Type' : 'application/json'} }
  const response = yield call(api.post, `${questionUrl}`, data)
  if (response.success === true) {
    yield put(actions.updateQuestionPost(response.data.id, response.data.resolved))
    yield put(actions.getQuestionPost(response.data.id))
  }
}

export function* handleGetQuestionPost(postId) {
  const response = yield call(api.get, `${questionUrl}/${postId}`)
  if (response.success === true) {
    yield put(actions.changeRoute(`question/${postId}`))
    // TODO: retrieve all answers
  }
}

export function* handleDeleteQuestionPost(postId) {
  const response = yield call(api.delete, `${questionUrl}/${postId}`)
  if (response.success === true) {
    yield put(actions.changeRoute('/'))
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

export default function* () {
  yield fork(watchChangeRoute)
  yield fork(watchWriteQuestionPost)
  yield fork(watchGetQuestionPost)
  yield fork(watchDeleteQuestionPost)
}
