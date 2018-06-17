import React, { PropTypes } from 'react'
import TitleBar from '../../../components/molecules/TitleBar'
import PostListBox from '../../../components/organisms/PostListBox'
import BaseModal from '../../../containers/modals/BaseModal'
import LoadingModal from '../../../containers/modals/LoadingModal'

const PostListPage = () => {
  return (
    <div>
      <TitleBar />
      <PostListBox />
      <BaseModal />
      <LoadingModal />
    </div>
  )
}

export default PostListPage
