import React, { PropTypes } from 'react'
import Button from '../../../components/atoms/BaseButton'

const style = {
  margin: 12,
}

const IndexButtons = ({ logged, onNotLoggedIn, changeRoute }) => {
  const handleClickWriteQuestion = () => {
    if (logged !== true) onNotLoggedIn()
    else changeRoute('/question')
  }

  const handleClickWriteInformation = () => {
    if (logged !== true) onNotLoggedIn()
    else changeRoute('/information')
  }

  const handleClickPostList = () => {
    changeRoute('/list')
  }

  const handleClickSearch = () => {
    changeRoute('/search')
  }

  return (
    <div>
      <Button
        className={'question-write-button'}
        onClick={handleClickWriteQuestion}
        style={style}
      >
        Write Question
      </Button>
      <Button
        className={'information-write-button'}
        onClick={handleClickWriteInformation}
        style={style}
      >
        Write Information
      </Button>
      <Button
        className={'post-list-button'}
        onClick={handleClickPostList}
        style={style}
      >
        Post List
      </Button>
      <Button
        className={'search-button'}
        onClick={handleClickSearch}
        style={style}
      >
        Search
      </Button>
    </div>
  )
}

IndexButtons.propTypes = {
  logged: PropTypes.bool,
  onNotLoggedIn: PropTypes.func,
  changeRoute: PropTypes.func,
}

export default IndexButtons
