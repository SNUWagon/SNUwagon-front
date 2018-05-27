import React, { PropTypes } from 'react'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card'
import * as colors from 'material-ui/styles/colors'
import RaisedButton from 'material-ui/RaisedButton'

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

  return (
    <div style={{ textAlign: 'center', margin: '40px 0px' }}>
      <Card style={style}>
        <CardTitle title={i.title} titleStyle={{ fontSize: 30, color: colors.indigo500 }} />
        <CardText>
          <br />
          <div style={{ fontSize: 20, textAlign: 'right' }}>
            Author: {i.author}
          </div>
          <br />
          <div style={{ fontSize: 20, textAlign: 'left' }} >
            Due: {i.due}
            <br /><br /><br />
            {i.content}
            <br />
            {showHidden ? (<div> {i.hiddenContent} </div>) : ''}
            <br />
            {(i.hiddenExist && !showHidden) ? (
              <div>
                Hidden Content Cost: {i.hiddenContentCost} {'   '}
                <RaisedButton className={'purchase-button'} type={'submit'} onClick={onClickPurchaseButton}>Purchase</RaisedButton>
              </div>
            ) : ''
            }
          </div>
        </CardText>

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
