import { take, call, fork, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import api from 'services/api'
import * as actions from './actions'

const baseUrl = ''
const authUrl = `${baseUrl}/auth`

export function* handleChangeRoute(newRoute) {
  yield put(push(newRoute))
}

export function* handleSignIn(username, password) {
  const data = { username, password }
  try {
    yield call(api.post, `${authUrl}/signin`, data)
  } catch (error) {
    yield error
  }

  // yield put(actions.updateUserAuth(data))
  // yield put(push('/'))
}

export function* handleSignUp(email, username, password) {
  const data = { email, username, password }
  try {
    yield call(api.post, `${authUrl}/signup`, data)
  } catch (error) {
    yield error
  }
}

/* watcher functions */
function* watchChangeRoute() {
  while (true) {
    const { route } = yield take(actions.CHANGE_ROUTE)
    yield call(handleChangeRoute, route)
  }
}

function* watchSignIn() {
  while (true) {
    const { username, password } = yield take(actions.SIGN_IN)
    yield call(handleSignIn, username, password)
  }
}

function* watchSignUp() {
  while (true) {
    const { email, username, password } = yield take(actions.SIGN_UP)
    yield call(handleSignUp, email, username, password)
  }
}

export default function* () {
  yield fork(watchSignIn)
  yield fork(watchSignUp)
  yield fork(watchChangeRoute)
}
