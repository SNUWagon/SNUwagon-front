import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper'
import * as colors from 'material-ui/styles/colors'
import RaisedButton from 'material-ui/RaisedButton'
import Input from '../../atoms/BaseInput'
import CustomDatePicker from '../../atoms/CustomDatePicker'
import TagSelector from '../../molecules/TagSelector'
import { updateModal } from '../../../store/display/actions'

const style = {
  width: 800,
  margin: 30,
  textAlign: 'center',
  display: 'inline-block',
  padding: '20px 20px 20px 20px',
}

let title
let content
let due
let bounty
let tags

class QuestionWrite extends React.Component {
  constructor(props) {
    super(props)
    this.onClickBackButton = this.onClickBackButton.bind(this)
    this.onClickWriteQuestionButton = this.onClickWriteQuestionButton.bind(this)
  }

  onClickBackButton = () => {
    this.props.onClickBack('')
  }

  onClickWriteQuestionButton = () => {
    if (title && content && due && bounty) {
      this.props.onClickWriteQuestion(title.value, content.value, due, bounty.value, this.props.state.user.profile.username, tags)
      title = undefined
      content = undefined
      due = undefined
      bounty = undefined
      tags = undefined
    } else {
      this.props.showFailModal()
    }
  }

  render() {
    return (
      <div style={{ textAlign: 'center', margin: '40px 0px' }}>
        <Paper style={style} zDepth={3}>
          <div style={{ fontSize: 25, color: colors.indigo500 }}>
            Ask a question!
          </div>
          <br />
          <Input
            fullWidth
            className={'title-input'} floatingLabelText="Question Title"
            floatingLabelFixed
            onChange={node => { title = node.target }}
          />
          <br />
          <Input
            style={{ textAlign: 'left' }}
            fullWidth multiLine rows={5} rowsMax={5}
            floatingLabelText="Question Contents"
            floatingLabelFixed
            className={'content-input'}
            onChange={node => { content = node.target }} type={'textarea'}
          />
          <br />
          <TagSelector className={'tag-input'} tagList={this.props.state.search.tagList.map(tag => `#${tag}`)} onUpdate={(tag) => { tags = tag }} />
          <br />
          <Input
            className={'bounty-input'} hintText={'Bounty'}
            onChange={node => { bounty = node.target }} type={'number'} pattern={'d+'} min={'1'} step={'1'}
          />
          <CustomDatePicker className={'due-input'} onChange={date => { due = date }} />
          <br />
          <RaisedButton className={'back-button'} type={'submit'} onClick={this.onClickBackButton}>Back</RaisedButton>
          {'   '}
          <RaisedButton className={'write-question-button'} type={'submit'} onClick={this.onClickWriteQuestionButton}>Submit Question</RaisedButton>
        </Paper>
      </div>
    )
  }
}

export const mapStateToProps = () => {
  return {}
}

export const mapDispatchToProps = (dispatch) => {
  return {
    showFailModal: () => {
      dispatch(updateModal(true, 'Please fill in all required fields.'))
    },
  }
}

QuestionWrite.propTypes = {
  onClickBack: PropTypes.func,
  onClickWriteQuestion: PropTypes.func,
  state: PropTypes.object,
  reverse: PropTypes.bool,
  showFailModal: PropTypes.func,
}

export const QuestionWriteShallow = QuestionWrite
export default connect(mapStateToProps, mapDispatchToProps)(QuestionWrite)
