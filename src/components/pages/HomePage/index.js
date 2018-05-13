import React, { PropTypes } from 'react'
import Paper from 'material-ui/Paper'
import TitleBar from '../../../components/molecules/TitleBar'
import IndexBox from '../../../components/molecules/IndexBox'

const style = {
  height: 800,
  width: 500,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
  padding: '20px 20px 20px 20px',
}


const HomePage = () => {
  return (
    <div>
      <TitleBar />
      <div
        style={{
          margin: '80px auto',
          width: '800px',
          padding: '10px 10px 10px',
        }}
      >
        <Paper style={{ style }} zDepth={2}>
          <IndexBox />
        </Paper>
      </div>
    </div>
  )
}


export default HomePage
