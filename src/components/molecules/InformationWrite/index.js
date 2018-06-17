import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card'
import * as colors from 'material-ui/styles/colors'
// import RaisedButton from 'material-ui/RaisedButton'
import Button from '../../../components/atoms/BaseButton'
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
let hiddenExist = false
let hiddenContent
let hiddenContentCost
let hiddenBought
let due
let sponsorCredit
let tags

class InformationWrite extends React.Component {
  constructor(props) {
    super(props)
    this.onClickBackButton = this.onClickBackButton.bind(this)
    this.onClickWriteInformationButton = this.onClickWriteInformationButton.bind(this)
  }

  onClickBackButton = () => {
    this.props.onClickBack('')
  }

  onClickWriteInformationButton = () => {
    let sponsorCreditValue
    let hiddenContentValue
    let hiddenContentCostValue

    if (title && content && due) {
      if (sponsorCredit === undefined || sponsorCredit < 0) {
        sponsorCreditValue = 0
      } else {
        sponsorCreditValue = sponsorCredit.value
      }

      if (hiddenExist && hiddenContent !== undefined && hiddenContentCost !== undefined) {
        hiddenContentValue = hiddenContent.value
        hiddenContentCostValue = hiddenContentCost.value
        hiddenBought = true
      } else if (!hiddenExist || (hiddenContent === undefined && hiddenContentCost === undefined)) {
        hiddenExist = false
        hiddenContentValue = ''
        hiddenContentCostValue = 0
        hiddenBought = false
      } else {
        this.props.showFailModal()
        return
      }

      this.props.onClickWriteInformation(title.value, content.value,
                                         hiddenExist, hiddenContentValue, hiddenContentCostValue, hiddenBought,
                                         due, this.props.state.user.profile.username, sponsorCreditValue, tags)

      title = undefined
      content = undefined
      hiddenExist = false
      hiddenContent = undefined
      hiddenContentCost = undefined
      hiddenBought = undefined
      due = undefined
      sponsorCredit = undefined
      tags = undefined
    } else {
      this.props.showFailModal()
    }
  }

  render() {
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
            <Button className={'hidden-content-button'} type={'submit'} onClick={() => { hiddenExist = !hiddenExist }}>{' Add Hidden Contents '}</Button>
          </CardActions>
          <CardText expandable>
            <Input
              style={{ textAlign: 'left', width: '90%' }}
              className={'hidden-content-input'} floatingLabelText="Hidden Contents"
              multiLine rows={2}
              floatingLabelFixed
              onChange={node => { hiddenContent = node.target }}
            />
            <Input
              // style={{ width: 200 }}
              className={'hidden-content-cost-input'} hintText={'Hidden Content Cost'}
              onChange={node => { hiddenContentCost = node.target }} type={'number'} pattern={'d+'} min={'0'} step={'1'}
            />
          </CardText>
          <TagSelector className={'tag-input'} tagList={this.props.state.search.tagList.map(tag => `#${tag}`)} onUpdate={(tag) => { tags = tag }} />
          <Input
            className={'sponsor-credit-input'} hintText={'Sponsor Credit (Optional)'}
            onChange={node => { sponsorCredit = node.target }} type={'number'} pattern={'d+'} min={'0'} step={'1'}
          />
          <CustomDatePicker className={'due-input'} onChange={date => { due = date }} />
          <br />
          <Button className={'back-button'} style={{ margin: 10 }} type={'submit'} onClick={this.onClickBackButton}>Back</Button>
          {' '}
          <Button className={'write-information-button'} style={{ margin: 10 }} type={'submit'} onClick={this.onClickWriteInformationButton}>Submit</Button>
        </Card>
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

InformationWrite.propTypes = {
  onClickBack: PropTypes.func,
  onClickWriteInformation: PropTypes.func,
  state: PropTypes.object,
  reverse: PropTypes.bool,
  showFailModal: PropTypes.func,
}

export const InformationWriteShallow = InformationWrite
export default connect(mapStateToProps, mapDispatchToProps)(InformationWrite)
