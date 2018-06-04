import React, { PropTypes } from 'react'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card'
import * as colors from 'material-ui/styles/colors'
import Avatar from 'material-ui/Avatar'
import Chip from 'material-ui/Chip'
// import RaisedButton from 'material-ui/RaisedButton'
import Button from '../../../components/atoms/BaseButton'

const style = {
  width: 800,
  margin: 30,
  textAlign: 'center',
  display: 'inline-block',
  padding: '20px 20px 20px 20px',
}

const Information = ({ onClickPurchase, ...props }) => {
  const i = props.information
  const onClickPurchaseButton = () => {
    onClickPurchase(i.postId)
  }

  const isOwner = (i.author === props.user.profile.username)
  const showHidden = (i.hiddenExist && (isOwner || i.hiddenBought))

  const displayTags = (tags) => {
    return tags.reduce((accum, value) => {
      return `${accum} #${value}`
    }, '')
  }

  const formatDue = (due) => {
    const d = new Date(due)
    return d.toLocaleString()
  }

  return (
    <div style={{ textAlign: 'center', margin: '40px 0px' }}>
      <Card style={style}>
        <CardTitle title={i.title} titleStyle={{ fontSize: 30, color: colors.indigo500 }} style={{ padding: '16px 0px 0px 0px' }} />
        <CardText style={{ fontSize: 16, color: colors.orange800, padding: '0px' }} >
          {displayTags(i.tags)}
        </CardText>
        <CardText style={{ fontSize: 14, color: colors.grey500, padding: '10px' }} >
          {'~'}{formatDue(i.due)}
        </CardText>
        <CardText>
          <div style={{ fontSize: 20, textAlign: 'center', padding: '20px' }} >
            <br /><br />
            {i.content}
            <br />
            {showHidden ? (<div style={{ color: colors.grey500 }} > {i.hiddenContent} </div>) : ''}
            <br />
            {(i.hiddenExist && !showHidden) ? (
              <div>
                <CardText style={{ fontSize: 16, textAlign: 'center', color: colors.indigo400 }}>
                  {'Purchase hidden contents for '}
                  <span style={{ fontSize: 24, color: colors.orange700 }}>{i.hiddenContentCost}</span>
                  {' credit'}
                </CardText>
                <Button className={'purchase-button'} type={'submit'} onClick={onClickPurchaseButton}>Purchase</Button>
              </div>
            ) : ''
            }
          </div>
        </CardText>
        <CardHeader style={{ float: 'right', textAlign: 'right', margin: '0px', padding: '0px' }} >
          <div style={{ display: 'inline-block', verticalAlign: 'top', whitespace: 'normal', padding: '0px' }} >
            <span style={{ display: 'block', fontSize: '15px', margin: '0px' }} >{`Written by ${i.author}`}</span>
            <span style={{ display: 'block', fontSize: '15px', margin: '0px', color: colors.grey500 }} >{`Submitted on ${formatDue(i.created)}`}</span>
          </div>
        </CardHeader>
      </Card>
    </div>
  )
}

Information.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  due: PropTypes.string,
  hidden_content_cost: PropTypes.number,
  author: PropTypes.string,
  tags: PropTypes.string,
  reverse: PropTypes.bool,
  onClickPurchase: PropTypes.func,
  information: PropTypes.object,
  user: PropTypes.object,
}

export default Information
