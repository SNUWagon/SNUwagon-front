import React, { PropTypes } from 'react'
import * as colors from 'material-ui/styles/colors'
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper'
import { connect } from 'react-redux'
import { changeRoute } from '../../../store/user/actions'


class IndexBox extends React.Component {
  constructor(props) {
    super(props)

    this.handleClickWriteQuestion = this.handleClickWriteQuestion.bind(this)
    this.handleClickPostList = this.handleClickPostList.bind(this)
    this.handleClickSearch = this.handleClickSearch.bind(this)
  }

  handleClickWriteQuestion() {
    if (this.props.logged === true) {
      this.props.changeRoute('/question')
    } else {
      // show modal
    }
  }

  handleClickPostList() {
    this.props.changeRoute('/list')
  }

  handleClickSearch() {
    this.props.changeRoute('/search')
  }

  render() {
    return (
      <div>
        <RaisedButton className={'question-write-button'} onClick={this.handleClickWriteQuestion}>Write Question</RaisedButton>
        {' '}
        <RaisedButton className={'information-write-button'} disabled>Write Information</RaisedButton>
        {' '}
        <RaisedButton className={'post-list-button'} onClick={this.handleClickPostList}>Post List</RaisedButton>
        {' '}
        <RaisedButton className={'search-button'} onClick={this.handleClickSearch}>Search</RaisedButton>
      </div>
    )
  }
}

IndexBox.propTypes = {
  logged: PropTypes.bool,
  changeRoute: PropTypes.func,
}

const mapStateToProps = (state) => {
  return {
    logged: state.user.login,
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    changeRoute: (route) => {
      dispatch(changeRoute(route))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexBox)
