import React, { PropTypes } from 'react'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card'
import * as colors from 'material-ui/styles/colors'
import Avatar from 'material-ui/Avatar'
import Chip from 'material-ui/Chip'
import Divider from 'material-ui/Divider'
import Paper from 'material-ui/Paper'
import IconButton from 'material-ui/IconButton'
// import RaisedButton from 'material-ui/RaisedButton'
import Button from '../../../components/atoms/BaseButton'
import VoteBox from '../../../components/molecules/VoteBox'

const style = {
  width: 800,
  margin: 30,
  textAlign: 'center',
  display: 'inline-block',
  padding: '20px 20px 20px 20px',
}

const Information = ({ onClickPurchase, postVote, ...props }) => {
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

  const credit2Color = (credit) => {
    let color
    if (credit === undefined) color = colors.black
    else if (credit > 1500) color = colors.lightGreen700
    else if (credit > 500) color = colors.black
    else color = colors.red700

    return color
  }

  const credit2FontSize = (credit) => {
    let fontSize

    if (credit === undefined) fontSize = '15px'
    else if (credit > 1500) fontSize = '20px'
    else if (credit > 500) fontSize = '15px'
    else fontSize = '20px'

    return fontSize
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
            <pre style={{ fontFamily: 'Roboto' }}>{i.content}</pre>
            <br />
            {showHidden ? (
              <div style={{ color: colors.grey600, marginTop: 30 }}>
                <Divider />
                <div style={{ marginTop: 30 }}>
                  {i.hiddenContent}
                </div>
              </div>
            ) : ''}
            <br />
            {/*
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
            */}
            {(i.hiddenExist && !showHidden) ? (
              <Paper
                style={{
                  width: '90%',
                  margin: 'auto',
                }}
                zDepth={1}
              >
                <div
                  style={{
                    backgroundImage: 'url(/blue-blur.png)',
                    backgroundSize: 'cover',
                    opacity: 0.8,
                  }}
                >
                  <Divider style={{ margin: 50 }} />
                  <Paper
                    style={{
                      width: '70%',
                      margin: 'auto',
                    }}
                  >
                    <div style={{ margin: 50 }}>
                      <CardText style={{ fontSize: 16, textAlign: 'center', color: colors.indigo400 }}>
                        {'Purchase hidden contents for '}
                        <span style={{ fontSize: 24, color: colors.orange700 }}>{i.hiddenContentCost}</span>
                        {' credit'}
                      </CardText>
                      <Button
                        className={'purchase-button'}
                        style={{ margin: 30 }}
                        type={'submit'}
                        onClick={onClickPurchaseButton}
                      >Purchase</Button>
                    </div>
                  </Paper>
                  <Divider style={{ margin: 50 }} />
                </div>
              </Paper>
              // <CardMedia
              //   mediaStyle={{
              //     width: '60%',
              //     margin: 'auto',
              //     opacity: 0.5,
              //   }}
              //   overlay={<Button className={'purchase-button'} type={'submit'} onClick={onClickPurchaseButton}>Purchase</Button>}
              // >
              //
              // </CardMedia>
            ) : ''}
          </div>
        </CardText>
        <VoteBox
          className={'vote-box'}
          upVoteValue={i.vote.upVote}
          downVoteValue={i.vote.downVote}
          onClickUpVote={() => postVote(i.postId, 'upvote')}
          onClickDownVote={() => postVote(i.postId, 'downvote')}
        />
        <CardHeader style={{ float: 'right', textAlign: 'right', margin: '0px', padding: '0px' }} >
          <div style={{ display: 'inline-block', verticalAlign: 'top', whitespace: 'normal', padding: '0px' }} >
            <span style={{ display: 'block', fontSize: '15px', margin: '0px' }} >
              {'Written by '}
              <span
                style={{
                  color: credit2Color(i.authorCredit),
                  fontSize: credit2FontSize(i.authorCredit),
                }}
              >
                {`${i.author}`}
              </span>
            </span>
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
  postVote: PropTypes.func,
}

export default Information
