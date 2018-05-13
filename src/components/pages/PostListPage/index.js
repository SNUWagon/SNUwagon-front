import React, { PropTypes } from 'react'
import TitleBar from '../../../components/molecules/TitleBar'
import PostListTable from '../../../components/molecules/PostListTable'

const PostListPage = () => {
  return (
    <div>
      <TitleBar />
      <div
        style={{
          margin: 'auto',
          width: '50%',
        }}
      >
        <PostListTable />
      </div>
    </div>
  )
}

export default PostListPage
