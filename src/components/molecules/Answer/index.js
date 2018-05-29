import React, { PropTypes } from 'react'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card'
import * as colors from 'material-ui/styles/colors'
import RaisedButton from 'material-ui/RaisedButton'
import { connect } from 'react-redux'
import { selectQuestionAnswer } from '../../../store/answer/actions'


class Answer extends React.Component {

  constructor(props) {
    super(props)
    this.onClickSelectButton = this.onClickSelectButton.bind(this)
  }

  onClickSelectButton() {
    this.props.onClickSelect(this.props.question.postId, this.props.answer.id)
  }

  render() {
    const a = this.props.answer
    const qid = this.props.question.postId
    const aid = a.id
    const isOwner = (this.props.username === this.props.question.author)

    return (
      <div style={{ textAlign: 'center', margin: '10px 0px' }}>
        <Card>
          <CardText>
            <br />
            <div style={{ fontSize: 12, textAlign: 'left' }} >
              Author: {a.author}
              <br />
              Answer: {a.content}
            </div>
          </CardText>
          <CardActions>
            {isOwner && !this.props.question.resolved ? (
              <RaisedButton className={'select-button'} type={'submit'} onClick={this.onClickSelectButton}>Select</RaisedButton>
            ) : ('')}
          </CardActions>
        </Card>
      </div>
    )
  }
}

Answer.propTypes = {
  reverse: PropTypes.bool,
  onClickSelect: PropTypes.func,
  answer: PropTypes.object,
  question: PropTypes.object,
  username: PropTypes.string,
}

export const mapStateToProps = () => {
  return {}
}

export const mapDispatchToProps = (dispatch) => {
  return {
    onClickSelect: (qid, aid) => {
      dispatch(selectQuestionAnswer(qid, aid))
    },
  }
}

export const AnswerShallow = Answer
export default connect(mapStateToProps, mapDispatchToProps)(Answer)
