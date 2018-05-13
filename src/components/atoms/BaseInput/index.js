import React, { PropTypes } from 'react'
import TextField from 'material-ui/TextField'
import * as colors from 'material-ui/styles/colors'

const Input = (props) => {
  return (
    <TextField
      hintText={props.placeholder}
      underlineStyle={{ borderColor: colors.indigo100 }}
      underlineFocusStyle={{ borderColor: colors.indigo500 }}
      {...props}
    />
  )
}

Input.propTypes = {
  placeholder: PropTypes.string,
}

export default Input
