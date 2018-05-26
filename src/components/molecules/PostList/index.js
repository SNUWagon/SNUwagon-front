import React, { PropTypes } from 'react'
import { List } from 'material-ui/List'
import Divider from 'material-ui/Divider'
import Avatar from 'material-ui/Avatar'
import Subheader from 'material-ui/Subheader'
import * as colors from 'material-ui/styles/colors'
import PostListElement from '../../../components/atoms/PostListElement'


class PostList extends React.Component {

  constructor(props) {
    super(props)
    this.onCellClick = this.onCellClick.bind(this)
    this.rightIcon = this.rightIcon.bind(this)
  }

  onCellClick(id) {
    if (this.props.login === false) {
      this.props.showFailModal(true, 'Sign in first')
      return
    }
    if (this.props.type === 'question') {
      this.props.changeRoute(`/question/${id}`)
    } else if (this.props.type === 'information') {
      this.props.changeRoute(`/information/${id}`)
    }
  }

  rightIcon(post) {
    let icon

    if (this.props.type === 'question') {
      icon = (
        <Avatar
          size={32}
          color={colors.darkWhite}
          backgroundColor={colors.indigo200}
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {post.bounty}
        </Avatar>
      )
    } else if (this.props.type === 'information') {
      icon = (<span />)
    }
    return icon
  }

  render() {
    return (
      <List>
        { this.props.postList.map((post) => (
          <div
            key={post.id + post.title}
          >
            <PostListElement
              key={post.id}
              className={'post-list-element'}
              type={this.props.type}
              title={post.title}
              due={post.due}
              tags={post.tags}
              rightIcon={this.rightIcon(post)}
              onClick={() => this.onCellClick(post.id)}
            />
            <Divider />
          </div>
        ))}
        {
          this.props.postList.length === 0 ? <Subheader>No result ;(</Subheader> : <div />
        }
      </List>
    )
  }
}

PostList.propTypes = {
  login: PropTypes.bool,
  postList: PropTypes.array,
  type: PropTypes.string,
  changeRoute: PropTypes.func,
  showFailModal: PropTypes.func,
}

export default PostList
