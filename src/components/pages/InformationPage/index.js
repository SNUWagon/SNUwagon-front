import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import TitleBar from '../../../components/molecules/TitleBar'
import Information from '../../../containers/Information'
import { getInformationPost, getVote } from '../../../store/information/actions'
import BaseModal from '../../../containers/modals/BaseModal'
import BaseSnackbar from '../../../containers/BaseSnackbar'
import LoadingModal from '../../../containers/modals/LoadingModal'

class InformationPage extends React.Component {

  componentDidMount() {
    this.props.loadInformation(this.props.params.id)
  }

  componentDidUpdate() {
    this.props.loadInformation(this.props.params.id)
  }

  render() {
    const informationId = this.props.params.id

    return (
      <div>
        <TitleBar />
        <Information id={informationId} />
        <BaseModal />
        <BaseSnackbar />
        <LoadingModal />
      </div>
    )
  }
}

InformationPage.propTypes = {
  params: PropTypes.object,
  loadInformation: PropTypes.func,
}

export const mapStateToProps = (state) => {
  return {
    logged: state.user.login,
    profile: state.user.profile,
  }
}


export const mapDispatchToProps = (dispatch) => {
  return {
    loadInformation: (postId) => {
      dispatch(getInformationPost(postId))
      dispatch(getVote(postId))
    },
  }
}

export const InformationPageShallow = InformationPage
export default connect(mapStateToProps, mapDispatchToProps)(InformationPage)
