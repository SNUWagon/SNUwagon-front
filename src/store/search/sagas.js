import { take, call, fork, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import api from 'services/api'
import * as actions from './actions'

const baseUrl = ''
const listUrl = `${baseUrl}/list`

export function* handleSearch(postType, searchType, query) {
  let url

  switch (postType) {
    case 'question':
      url = `${listUrl}/questions`
      break
    case 'information':
      url = `${listUrl}/informations`
      break
    default:
      return
  }

  switch (searchType) {
    case 'title':
      url = `${url}/title`
      break
    case 'tag':
      url = `${url}/tag`
      break
    case 'type':
      url = `${url}/type`
      break
    default:
      url = `${url}/title`
      break
  }

  const response = yield call(api.get, `${url}/${query}`)
  if (response.success === true) {
    switch (postType) {
      case 'question':
        yield put(actions.updateQuestionSearchResult(response.data))
        break
      case 'information':
        yield put(actions.updateQuestionSearchResult(response.data))
        break
      default:
        break
    }
  }
}

export function* handleGetTagList() {
  const response = yield call(api.get, `${listUrl}/tags`)
  if (response.success === true) {
    yield put(actions.updateTagList(response.data.tags))
  }
}

/* watcher functions */
function* watchSearchQuestionsWithTitle() {
  while (true) {
    const { query } = yield take(actions.SEARCH_QUESTIONS_WITH_TITLE)
    yield call(handleSearch, 'question', 'title', query)
  }
}

function* watchSearchQuestionsWithTag() {
  while (true) {
    const { query } = yield take(actions.SEARCH_QUESTIONS_WITH_TAG)
    yield call(handleSearch, 'question', 'tag', query)
  }
}

function* watchSearchInformationsWithTitle() {
  while (true) {
    const { query } = yield take(actions.SEARCH_INFORMATIONS_WITH_TITLE)
    yield call(handleSearch, 'information', 'title', query)
  }
}

function* watchSearchInformationsWithTag() {
  while (true) {
    const { query } = yield take(actions.SEARCH_INFORMATIONS_WITH_TAG)
    yield call(handleSearch, 'information', 'tag', query)
  }
}

function* watchGetTagList() {
  while (true) {
    yield take(actions.GET_TAG_LIST)
    yield call(handleGetTagList)
  }
}

export default function* () {
  yield fork(watchSearchQuestionsWithTitle)
  yield fork(watchSearchQuestionsWithTag)
  yield fork(watchSearchInformationsWithTitle)
  yield fork(watchSearchInformationsWithTag)
  yield fork(watchGetTagList)
}
