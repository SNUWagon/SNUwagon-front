import React, { PropTypes } from 'react'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card'
import * as colors from 'material-ui/styles/colors'
import RaisedButton from 'material-ui/RaisedButton'
import Input from '../../atoms/BaseInput'
import CustomDatePicker from '../../atoms/CustomDatePicker'

const style = {
  height: 650,
  width: 800,
  margin: 30,
  textAlign: 'center',
  display: 'inline-block',
  padding: '20px 20px 20px 20px',
}

const InformationWrite = ({ onClickBack, onClickWriteInformation, state }) => {
  let title
  let content
  let hiddenExist = false
  let hiddenContent
  let hiddenContentCost
  let hiddenBought
  let due
  let sponsorCredit
  let tags

  const onClickBackButton = () => {
    onClickBack('')
  }

  const onClickWriteInformationButton = () => {
    if (title && content && due && sponsorCredit) {
      if (hiddenExist && hiddenContent !== undefined && hiddenContentCost !== undefined) {
        hiddenContent = hiddenContent.value
        hiddenContentCost = hiddenContentCost.value
        hiddenBought = true
      } else {
        hiddenContent = ''
        hiddenContentCost = 0
        hiddenBought = false
      }
      onClickWriteInformation(title.value, content.value, hiddenExist, hiddenContent, hiddenContentCost, hiddenBought, due, state.user.profile.username, sponsorCredit.value, tags)
      title.value = ''
      content.value = ''
      due = ''
      sponsorCredit.value = ''
    }
  }

  return (
    <div style={{ textAlign: 'center', margin: '40px 0px' }}>
      <Card style={style} zDepth={3}>
        <div style={{ fontSize: 25, color: colors.indigo500 }}>
          Write an information!
        </div>
        <br />
        <Input
          fullWidth
          className={'title-input'} floatingLabelText="Information Title"
          floatingLabelFixed
          onChange={node => { title = node.target }}
        />
        <br />
        <Input
          style={{ textAlign: 'left' }}
          fullWidth multiLine rows={5} rowsMax={5}
          floatingLabelText="Post Contents"
          floatingLabelFixed
          className={'content-input'}
          onChange={node => { content = node.target }} type={'textarea'}
        />
        <br />
        <CardActions actAsExpander>
          <RaisedButton className={'hidden-content-button'} type={'submit'} onClick={() => { hiddenExist = !hiddenExist }}>Add Hidden Contents</RaisedButton>
        </CardActions>
        <CardText expandable>
          <Input
            style={{ textAlign: 'left', width: 500 }}
            className={'hidden-content-input'} floatingLabelText="Hidden Contents"
            multiLine rows={2}
            floatingLabelFixed
            onChange={node => { hiddenContent = node.target }}
          />
          <Input
            style={{ width: 200 }}
            className={'hidden-content-cost-input'} hintText={'Hidden Content Cost'}
            onChange={node => { hiddenContentCost = node.target }} type={'number'} pattern={'d+'} min={'0'} step={'1'}
          />
        </CardText>
        <Input
          className={'sponsor-credit-input'} hintText={'Sponsor Credit'}
          onChange={node => { sponsorCredit = node.target }} type={'number'} pattern={'d+'} min={'1'} step={'1'}
        />
        <CustomDatePicker className={'due-input'} onChange={date => { due = date }} />
        <br />
        <RaisedButton className={'back-button'} type={'submit'} onClick={onClickBackButton}>Back</RaisedButton>
        {'   '}
        <RaisedButton className={'write-information-button'} type={'submit'} onClick={onClickWriteInformationButton}>Submit Information</RaisedButton>
      </Card>
    </div>
  )
}

InformationWrite.propTypes = {
  onClickBack: PropTypes.func,
  onClickWriteInformation: PropTypes.func,
  state: PropTypes.object,
  reverse: PropTypes.bool,
}

export default InformationWrite
