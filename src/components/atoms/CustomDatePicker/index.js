import React, { PropTypes } from 'react'
import DatePicker from 'material-ui/DatePicker'
import TimePicker from 'material-ui/TimePicker'

const today = new Date()
const maxDay = new Date()
maxDay.setDate(today.getDate() + 10)

export default class CustomDatePicker extends React.Component {

  constructor(props) {
    super(props)
    this.newDate = new Date()
    this.state = {
      dueDate: null,
      dueTime: null,
    }
    this.handleDateChange = this.handleDateChange.bind(this)
    this.handleTimeChange = this.handleTimeChange.bind(this)
  }

  handleDateChange = (event, date) => {
    this.setState({
      dueDate: date,
    })
    this.newDate.setFullYear(date.getFullYear())
    this.newDate.setMonth(date.getMonth())
    this.newDate.setDate(date.getDate())
    if (this.state.dueTime !== null) this.props.onChange(this.newDate)
  }

  handleTimeChange = (event, time) => {
    this.setState({
      dueTime: time,
    })
    this.newDate.setHours(time.getHours())
    this.newDate.setMinutes(time.getMinutes())
    this.newDate.setSeconds(0)
    if (this.state.dueDate !== null) this.props.onChange(this.newDate)
  }

  render() {
    return (
      <div>
        <DatePicker
          className={'due-date-input'}
          autoOk
          hintText="Select Due Date"
          value={this.state.dueDate}
          minDate={today}
          maxDate={maxDay}
          onChange={this.handleDateChange}
        />
        <TimePicker
          className={'due-time-input'}
          defaultTime={today.hours}
          hintText="Select Due Time"
          minutesStep={10}
          onChange={this.handleTimeChange}
        />
      </div>
    )
  }
}

CustomDatePicker.propTypes = {
  handleDateChange: PropTypes.func,
  handleTimeChange: PropTypes.func,
  onChange: PropTypes.func,
}
