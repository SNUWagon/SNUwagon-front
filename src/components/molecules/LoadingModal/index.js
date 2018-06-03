import React, { PropTypes } from 'react'
import Dialog from 'material-ui/Dialog'
import CircularProgress from 'material-ui/CircularProgress'

const style = {
  width: '15%',
  textAlign: 'center',
}

const LoadingModal = ({ open }) => {
  return (
    <Dialog
      contentStyle={style}
      title="Loading"
      modal
      open={open}
    >
      <br />
      <CircularProgress size={60} thickness={7} />
    </Dialog>
  )
}

LoadingModal.propTypes = {
  open: PropTypes.bool,
}


export default LoadingModal
