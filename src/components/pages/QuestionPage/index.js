import React, { PropTypes } from 'react'
import Question from '../../../containers/Question'

const QuestionPage = (props) => {
  const questionId = props.params.id
  return (
    <Question id={questionId} />
  )
}

QuestionPage.propTypes = {
  params: PropTypes.object,
}

export default QuestionPage
