import React from 'react'
import { connect } from 'react-redux'
import InformationWrite from '../components/molecules/InformationWrite'
import { writeInformationPost, changeRoute } from '../store/information/actions'

export const mapStateToProps = (state) => {
  return {
    state,
  }
}


export const mapDispatchToProps = (dispatch) => {
  return {
    onClickWriteInformation: (title, content, hiddenExist, hiddenContent, hiddenContentCost, hiddenBought, due, author, sponsorCredit, tags) => {
      dispatch(writeInformationPost(title, content, hiddenExist, hiddenContent, hiddenContentCost, hiddenBought, due, author, sponsorCredit, tags))
    },
    onClickBack: (route) => {
      dispatch(changeRoute(route))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InformationWrite)
