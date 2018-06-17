import { take, call, fork, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import api from 'services/api'
import * as actions from './actions'
import * as userActions from '../user/actions'
import * as displayActions from '../display/actions'

const baseUrl = ''
const informationUrl = `${baseUrl}/posts/information`
const voteUrl = `${baseUrl}/vote`
const authUrl = `${baseUrl}/auth`

export function* handleChangeRoute(newRoute) {
  yield put(push(newRoute))
}

export function* handleWriteInformationPost(title, content, hiddenExist, hiddenContent, hiddenContentCost, hiddenBought, due, author, sponsorCredit, tags) {
  const data = { title, content, username: author, tags, hidden_content_cost: hiddenContentCost, hidden_exist: hiddenExist, hidden_content: hiddenContent, hidden_bought: hiddenBought, due, sponsor_credit: sponsorCredit }
  const response = yield call(api.post, `${informationUrl}`, data)
  if (response.success === true) {
    yield put(actions.changeRoute(`/information/${response.data.id}`))
    yield put(displayActions.updateSnackbar(true, `${title} posted!`))
  }
}

export function* handleGetInformationPost(postId) {
  const response = yield call(api.get, `${informationUrl}/${postId}`)
  if (response.success === true) {
    yield put(actions.updateInformationPost(
      response.data.id,
      response.data.title,
      response.data.content,
      response.data.hidden_exist,
      response.data.hidden_content,
      response.data.hidden_content_cost,
      response.data.hidden_bought,
      response.data.due,
      response.data.author,
      response.data.tags,
      response.data.created,
    ))
    yield put(actions.getInformationUserProfile(response.data.author_id))
  }
}

export function* handlePurchaseInformationPost(postId) {
  const data = {}
  const response = yield call(api.put, `${informationUrl}/${postId}`, data)
  if (response.success === true) {
    yield put(actions.getInformationPost(postId))
    yield put(userActions.getUserProfile())
    yield put(displayActions.updateSnackbar(true, 'Successfully bought hidden information *_*!'))
  }
}

export function* handleGetVote(postId) {
  const response = yield call(api.get, `${voteUrl}/${postId}`)
  if (response.success === true) {
    yield put(actions.updateVote(response.data.upvotes, response.data.downvotes))
  }
}

export function* handlePostVote(postId, voteType) {
  const data = {
    vote_type: voteType,
  }
  const response = yield call(api.post, `${voteUrl}/${postId}`, data)
  if (response.success === true) {
    yield put(actions.getVote(postId))
  } else {
    yield put(displayActions.updateModal(true, 'You already voted for this information!'))
  }
}

export function* handleGetInformationUserProfile(userId) {
  const response = yield call(api.get, `${authUrl}/userinfo/${userId}`)
  if (response.success === true) {
    yield put(actions.updateInformationUserProfile(response.data.credit))
  } else {
    yield put(actions.updateInformationUserProfile(undefined))
  }
}

/* watcher functions */
function* watchChangeRoute() {
  while (true) {
    const { route } = yield take(actions.CHANGE_ROUTE)
    yield call(handleChangeRoute, route)
  }
}

function* watchWriteInformationPost() {
  while (true) {
    const { title, content, hiddenExist, hiddenContent, hiddenContentCost, hiddenBought, due, author, sponsorCredit, tags } = yield take(actions.WRITE_INFORMATION_POST)
    yield call(handleWriteInformationPost, title, content, hiddenExist, hiddenContent, hiddenContentCost, hiddenBought, due, author, sponsorCredit, tags)
  }
}

function* watchGetInformationPost() {
  while (true) {
    const { postId } = yield take(actions.GET_INFORMATION_POST)
    yield call(handleGetInformationPost, postId)
  }
}

function* watchPurchaseInformationPost() {
  while (true) {
    const { postId } = yield take(actions.PURCHASE_INFORMATION_POST)
    yield call(handlePurchaseInformationPost, postId)
  }
}

function* watchGetVote() {
  while (true) {
    const { postId } = yield take(actions.GET_VOTE)
    yield call(handleGetVote, postId)
  }
}

function* watchPostVote() {
  while (true) {
    const { postId, voteType } = yield take(actions.POST_VOTE)
    yield call(handlePostVote, postId, voteType)
  }
}

function* watchGetInformationUserProfile() {
  while (true) {
    const { userId } = yield take(actions.GET_INFORMATION_USER_PROFILE)
    yield call(handleGetInformationUserProfile, userId)
  }
}

export default function* () {
  yield fork(watchChangeRoute)
  yield fork(watchWriteInformationPost)
  yield fork(watchGetInformationPost)
  yield fork(watchPurchaseInformationPost)
  yield fork(watchGetVote)
  yield fork(watchPostVote)
  yield fork(watchGetInformationUserProfile)
}
