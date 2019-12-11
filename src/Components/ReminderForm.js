import React from 'react';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { CirclePicker } from 'react-color';
import moment from 'moment';
import {monthInterval} from '../helpers/dateUtil';
import DateTimePicker from './DateTimePicker';

class ReminderForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        title: "",
        dateTime: moment()
    }
  }

  submit(e) {
    e.preventDefault();
    console.log(this.state);
    
  }

  render() {
    const today = moment();
    const {startDate, endDate} = monthInterval(today);
    return (
      <form onSubmit={this.submit.bind(this)}>
        <Input placeholder="Title" type="text" />
        <CirclePicker circleSize={15} width={100} colors={["#f44336", "#e91e63", "#9c27b0"]} />
        <DateTimePicker value={this.state.dateTime} minDate={startDate} maxDate={endDate} onChange={(dateTime) => this.setState({dateTime})} />
        <Button type="submit" color="primary">Add Reminder</Button>
      </form>
    );
  }
}
export default ReminderForm;