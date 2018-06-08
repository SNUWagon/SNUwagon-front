import { connect } from 'react-redux'
import Information from '../components/molecules/Information'
import { changeRoute, purchaseInformationPost, postVote } from '../store/information/actions'

export const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
    information: state.information,
    informationId: ownProps.id,
  }
}


export const mapDispatchToProps = (dispatch) => {
  return {
    onClickPurchase: (postId) => {
      dispatch(purchaseInformationPost(postId))
    },
    postVote: (postId, voteType) => {
      dispatch(postVote(postId, voteType))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Information)
