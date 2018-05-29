import React, { PropTypes } from 'react'
import Snackbar from 'material-ui/Snackbar'
import * as colors from 'material-ui/styles/colors'

class BaseSnackbar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
    }

    this.handleRequestClose = this.handleRequestClose.bind(this)
  }

  handleRequestClose() {
    this.props.onClose()
  }

  render() {
    return (
      <Snackbar
        open={this.props.open}
        message={this.props.content}
        autoHideDuration={this.props.duration || 3000}
        onRequestClose={this.handleRequestClose}
        contentStyle={{
          textAlign: 'center',
          fontSize: 18,
        }}
        bodyStyle={{
          backgroundColor: colors.black,
        }}
      />
    )
  }
}

BaseSnackbar.propTypes = {
  open: PropTypes.bool,
  content: PropTypes.string,
  duration: PropTypes.number,
  onClose: PropTypes.func,
}

export default BaseSnackbar
