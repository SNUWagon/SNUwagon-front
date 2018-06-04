import React, { PropTypes } from 'react'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card'
import * as colors from 'material-ui/styles/colors'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import { connect } from 'react-redux'
import { selectQuestionAnswer } from '../../../store/answer/actions'
import Button from '../../../components/atoms/BaseButton'

const styles = {
  notSelected: {
    fontSize: 18,
    textAlign: 'center',
    padding: '20px',
  },
  selected: {
    fontSize: 24,
    textAlign: 'center',
    padding: '20px',
    color: colors.amber800,
  },
}

class Answer extends React.Component {

  constructor(props) {
    super(props)
    this.onClickSelectButton = this.onClickSelectButton.bind(this)
  }

  onClickSelectButton() {
    this.props.onClickSelect(this.props.question.postId, this.props.answer.id)
  }

  formatDate = (due) => {
    const d = new Date(due)
    return d.toLocaleString()
  }

  render() {
    const a = this.props.answer
    const qid = this.props.question.postId
    const aid = a.id
    const isOwner = (this.props.username === this.props.question.author)

    return (
      <Paper style={{ textAlign: 'center', margin: '10px 0px' }} zDepth={2}>
        <Card>
          <CardText>
            <br />
            <div style={{ fontSize: 14, textAlign: 'right' }} >
              {'Written by '}
              <span style={{ color: colors.indigo400 }}>{a.author}</span>
              <br />
              <span style={{ color: colors.grey500 }}>{this.formatDate(a.created)}</span>
            </div>
            <div style={this.props.selected ? styles.selected : styles.notSelected} >
              {a.content}
            </div>
          </CardText>
          <CardActions>
            {isOwner && !this.props.question.resolved ? (
              <Button className={'select-button'} type={'submit'} onClick={this.onClickSelectButton}>Select</Button>
            ) : ('')}
          </CardActions>
        </Card>
      </Paper>
    )
  }
}

Answer.propTypes = {
  reverse: PropTypes.bool,
  onClickSelect: PropTypes.func,
  answer: PropTypes.object,
  question: PropTypes.object,
  username: PropTypes.string,
  selected: PropTypes.bool,
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
