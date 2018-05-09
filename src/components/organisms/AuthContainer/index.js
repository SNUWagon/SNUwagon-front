import React, { PropTypes } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 80px auto;
  width: 640px;
`

const AuthContainer = (props) => {
  return (
    <Wrapper>{props.children}</Wrapper>
  )
}

AuthContainer.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.object,
}

export default AuthContainer
