import { CirclePicker } from 'react-color';
import {addReminder, getReminderById} from '../actions/reminderActions';
import {connect} from 'react-redux';
import {monthInterval} from '../helpers/dateUtil';
import Button from '@material-ui/core/Button';
import DateTimePicker from './DateTimePicker';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import moment from 'moment';
import React from 'react';
import Select from '@material-ui/core/Select';

class ReminderForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        title: "",
        dateTime: moment(),
        city: "",
        color: ""
    }
  }

  handleChangeComplete = color => {
    this.setState({
      color: color.hex
    })
  }

  handleType = (e) => {
    this.setState({
      title: e.target.value,
    });
  }

  handleSelect = (e) => {
    this.setState({
      city: e.target.value,
    });
  }

  submit(e) {
    e.preventDefault();
    let {title, dateTime, color, city} = this.state;
    dateTime = dateTime.format('D-M-Y');
    let reminder = {
      title,
      dateTime,
      city,
      color
    };
    this.props.addReminder(reminder);
    this.setState({
      title: "",
      dateTime: moment(),
      city: "",
      color: ""
    });
  }

  render() {
    const today = moment();
    const {startDate, endDate} = monthInterval(today);
    const {title, color, dateTime, city} = this.state;
    return (
      <form className="form" onSubmit={this.submit.bind(this)}>
        <TextField placeholder="Title" helperText={title.length >= 30 ? 'The title is too long': ''} error={title.length >= 30 ? true : false} type="text" onChange={this.handleType.bind(this)} value={title} />
        <FormControl>
          <InputLabel id="demo-simple-select-label">City</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={city}
            onChange={this.handleSelect.bind(this)}
            >
            <MenuItem value="London">London</MenuItem>
            <MenuItem value="New York">New York</MenuItem>
            <MenuItem value="Buenos Aires">Buenos Aires</MenuItem>
          </Select>
        </FormControl>
        <InputLabel id="demo-simple-select-label">Color</InputLabel>
        <CirclePicker circleSize={15} width={100} colors={['#dce775', '#ff8a65', '#ba68c8']} color={color} onChangeComplete={this.handleChangeComplete} />
        <DateTimePicker value={dateTime} minDate={startDate} maxDate={endDate} onChange={(dateTime) => this.setState({dateTime})} />
        <Button type="submit" disabled={(title.length === 0 || title.length >= 30) ? true : false} color="primary">Add Reminder</Button>
      </form>
    );
  }
}
const mapStateToProps = state => ({
  reminders: state.reminders.allReminders
});
export default connect(mapStateToProps, {addReminder, getReminderById})(ReminderForm);