import React, { PropTypes } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: auto;
  width: 100%;
  display: inline-block;
  text-align: center;
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
