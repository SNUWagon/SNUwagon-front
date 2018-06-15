import React, { PropTypes } from 'react'
import TitleBar from '../../../components/molecules/TitleBar'
import SearchBox from '../../../components/organisms/SearchBox'
import BaseModal from '../../../containers/modals/BaseModal'
import LoadingModal from '../../../containers/modals/LoadingModal'

const SearchPage = () => {
  return (
    <div>
      <TitleBar />
      <SearchBox />
      <BaseModal />
      <LoadingModal />
    </div>
  )
}

export default SearchPage
