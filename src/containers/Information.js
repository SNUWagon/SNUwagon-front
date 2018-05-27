import { connect } from 'react-redux'
import Information from '../components/molecules/Information'
import { changeRoute, purchaseInformationPost } from '../store/information/actions'

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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Information)
