import React, { PropTypes } from 'react'
import Paper from 'material-ui/Paper'
import TitleBar from '../../../components/molecules/TitleBar'
import IndexBox from '../../organisms/IndexBox'
import BaseModal from '../../../containers/modals/BaseModal'

const HomePage = () => {
  return (
    <div>
      <TitleBar />
      <IndexBox />
      <BaseModal />
    </div>
  )
}


export default HomePage
