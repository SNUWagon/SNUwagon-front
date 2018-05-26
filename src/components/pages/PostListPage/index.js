import React, { PropTypes } from 'react'
import TitleBar from '../../../components/molecules/TitleBar'
import PostListBox from '../../../components/organisms/PostListBox'
import BaseModal from '../../../containers/modals/BaseModal'

const PostListPage = () => {
  return (
    <div>
      <TitleBar />
      <PostListBox />
      <BaseModal />
    </div>
  )
}

export default PostListPage
