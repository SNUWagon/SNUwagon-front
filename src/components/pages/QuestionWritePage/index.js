import React from 'react'
import QuestionWrite from '../../../containers/QuestionWrite'
import TitleBar from '../../../components/molecules/TitleBar'
import BaseModal from '../../../containers/modals/BaseModal'

const QuestionWritePage = () => {
  return (
    <div>
      <TitleBar />
      <QuestionWrite />
      <BaseModal />
    </div>
  )
}

export default QuestionWritePage
