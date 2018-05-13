import { take, call, fork, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import api from 'services/api'
import * as actions from './actions'

const baseUrl = ''
const listUrl = `${baseUrl}/list`

function* handleGetPostList() {
  // TODO: need to be fixed to list/all
  const response = yield call(api.get, `${listUrl}/questions`)

  if (response.success === true) {
    yield put(actions.updatePostList(response.data.map(
      (data) => {
        return {
          id: data.id,
          title: data.title,
          created: data.created,
          due: data.due,
          type: 'question',
        }
      }
    )))
  }
}


/* watcher functions */

function* watchGetPostList() {
  while (true) {
    yield take(actions.GET_POST_LIST)
    yield call(handleGetPostList)
  }
}

export default function* () {
  yield fork(watchGetPostList)
}
