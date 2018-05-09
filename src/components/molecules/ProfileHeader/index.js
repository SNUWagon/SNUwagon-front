import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const ProfileHeader = ({ children, ...props }) => {
  return (
    <Wrapper>
      <p>Userinfo(test)</p>
      <p>username: {props.username}</p>
      <p>userId: {props.userId}</p>
      <p>credit: {props.credit}</p>
    </Wrapper>
  )
}

ProfileHeader.propTypes = {
  username: PropTypes.string,
  userId: PropTypes.number,
  credit: PropTypes.number,
  reverse: PropTypes.bool,
  children: PropTypes.node,
}

export default ProfileHeader
