import React from 'react'
import InformationWrite from '../../../containers/InformationWrite'
import TitleBar from '../../../components/molecules/TitleBar'
import BaseModal from '../../../containers/modals/BaseModal'

const InformationWritePage = () => {
  return (
    <div>
      <TitleBar />
      <InformationWrite />
      <BaseModal />
    </div>
  )
}

export default InformationWritePage
