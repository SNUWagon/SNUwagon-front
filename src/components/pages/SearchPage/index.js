import React, { PropTypes } from 'react'
import TitleBar from '../../../components/molecules/TitleBar'
import SearchBox from '../../../components/organisms/SearchBox'
import BaseModal from '../../../containers/modals/BaseModal'

const SearchPage = () => {
  return (
    <div>
      <TitleBar />
      <SearchBox />
      <BaseModal />
    </div>
  )
}

export default SearchPage
