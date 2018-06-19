import { take, call, fork, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import api from 'services/api'
import * as actions from './actions'
import * as displayActions from '../display/actions'

const baseUrl = ''
const listUrl = `${baseUrl}/list`

function* handleGetPostList(type) {
  let url = `${listUrl}`
  let action

  switch (type) {
    case 'question':
      url = `${url}/questions`
      action = actions.updateQuestionList
      break
    case 'information':
      url = `${url}/informations`
      action = actions.updateInformationList
      break
    default:
      return
  }

  const response = yield call(api.get, url)

  if (response.success === true) {
    yield put(action(response.data.map(
      (data) => {
        return {
          ...data,
          // id: data.id,
          // title: data.title,
          // created: data.created,
          // due: data.due,
          type,
        }
      }
    )))
  }
}


/* watcher functions */

function* watchGetQuestionList() {
  while (true) {
    yield take(actions.GET_QUESTION_LIST)
    yield call(handleGetPostList, 'question')
  }
}

function* watchGetInformationList() {
  while (true) {
    yield take(actions.GET_INFORMATION_LIST)
    yield call(handleGetPostList, 'information')
  }
}

export default function* () {
  yield fork(watchGetQuestionList)
  yield fork(watchGetInformationList)
}
