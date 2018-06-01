import React, { PropTypes } from 'react'
import Paper from 'material-ui/Paper'
import TitleBar from '../../../components/molecules/TitleBar'
import IndexBox from '../../organisms/IndexBox'
import BaseModal from '../../../containers/modals/BaseModal'
import BaseSnackbar from '../../../containers/BaseSnackbar'

const style = {
  width: '100%',
  margin: 'auto',
  textAlign: 'center',
  display: 'inline-block',
  padding: '20px 20px 20px 20px',
}

const HomePage = () => {
  return (
    <div>
      <TitleBar />
      <IndexBox />
      <Paper style={style}>
        <span>SNUwagon</span>
        이란?
        <br />
        누가 멋있는 설명을 작성해주면 좋겠당
      </Paper>
      <BaseModal />
      <BaseSnackbar />
    </div>
  )
}


export default HomePage
