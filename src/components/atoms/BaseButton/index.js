import React, { PropTypes } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import * as colors from 'material-ui/styles/colors'

const Button = (props) => {
  return (
    <RaisedButton
      labelColor={'#FFFFFF'}
      buttonStyle={{
        color: '#FFFFFF',
      }}
      // label={props.children}
      backgroundColor={colors.indigo200}
      {...props}
    />
  )
}

Button.propTypes = {
  props: PropTypes.any,
  children: PropTypes.any,
}

export default Button

