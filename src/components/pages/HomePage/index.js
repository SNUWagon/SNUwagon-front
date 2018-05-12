import React, { PropTypes } from 'react'
import TitleBar from '../../../components/molecules/TitleBar'
import ProfileHeader from '../../../containers/ProfileHeader'
import IndexBox from '../../../components/molecules/IndexBox'

const HomePage = () => {
  return (
    <div>
      <TitleBar />
      <div
        style={{
          margin: 'auto',
          width: '50%',
          padding: '10px',
        }}
      >
        <IndexBox />
      </div>
    </div>
  )
}


export default HomePage
