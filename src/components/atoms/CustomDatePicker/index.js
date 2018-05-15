import React, { PropTypes } from 'react'
import DatePicker from 'material-ui/DatePicker'

const today = new Date()

export default class CustomDatePicker extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      due: null,
    }
  }

  handleChange = (event, date) => {
    this.setState({
      due: date,
    })
    this.props.handleChange(date)
  }

  render() {
    return (
      <DatePicker
        className={'due-input'}
        autoOk
        hintText="Select Due Date"
        value={this.state.due}
        minDate={today}
        onChange={this.handleChange}
      />
    )
  }
}

CustomDatePicker.propTypes = {
  handleChange: PropTypes.func,
}
