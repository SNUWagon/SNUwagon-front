import React from 'react'
import { connect } from 'react-redux'
import LoadingModal from '../../components/molecules/LoadingModal'

export const mapStateToProps = (state) => {
  return {
    open: state.display.loadingState,
  }
}


export const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadingModal)
