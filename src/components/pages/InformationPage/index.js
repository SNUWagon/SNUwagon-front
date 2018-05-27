import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import TitleBar from '../../../components/molecules/TitleBar'
import Information from '../../../containers/Information'
import { getInformationPost } from '../../../store/information/actions'

class InformationPage extends React.Component {

  componentDidMount() {
    this.props.loadInformation(this.props.params.id)
  }

  render() {
    const informationId = this.props.params.id

    return (
      <div>
        <TitleBar />
        <Information id={informationId} />
      </div>
    )
  }
}

InformationPage.propTypes = {
  params: PropTypes.object,
  loadInformation: PropTypes.func,
}

const mapStateToProps = (state) => {
  return {
    logged: state.user.login,
    profile: state.user.profile,
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    loadInformation: (postId) => {
      dispatch(getInformationPost(postId))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InformationPage)
