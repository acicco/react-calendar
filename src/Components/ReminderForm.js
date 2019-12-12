import { CirclePicker } from 'react-color';
import { addReminder, updateReminder } from '../actions/reminderActions';
import { connect } from 'react-redux';
import { monthInterval } from '../helpers/dateUtil';
import Button from '@material-ui/core/Button';
import DateTimePicker from './DateTimePicker';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import moment from 'moment';
import React from 'react';
import Select from '@material-ui/core/Select';
import uuid from 'uuid';

class ReminderForm extends React.Component {
    constructor(props) {
        super(props);
        if (props.inModal) {
            this.state = {
                id: props.reminder.id,
                title: props.reminder.title,
                dateTime: props.reminder.dateTime,
                city: props.reminder.city,
                color: props.reminder.color
            }
        } else {
            this.state = {
                id: uuid.v4(),
                title: "",
                dateTime: moment(),
                city: "",
                color: ""
            }
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
        const { addReminder, updateReminder, inModal } = this.props;
        let { id, title, dateTime, color, city } = this.state;
        let reminder = {
                id,
                title,
                dateTime,
                city,
                color,
                date : dateTime.format('D-M-Y')
            };
        e.preventDefault();
        if (inModal) {
            updateReminder(reminder);
        } else {
            addReminder(reminder);
            this.setState({
                id: uuid.v4(),
                title: "",
                dateTime: moment(),
                city: "",
                color: ""
            });
        }
    }

    render() {
        const today = moment();
        const { startDate, endDate } = monthInterval(today);
        let { title, color, dateTime, city } = this.state;
        const { inModal } = this.props;
        return (
            <form className="form" onSubmit={this.submit.bind(this)}>
                <TextField placeholder="Title" helperText={title.length >= 30 ? 'The title is too long' : ''} error={title.length >= 30 ? true : false} type="text" onChange={this.handleType.bind(this)} value={title} />
                <FormControl>
                    <InputLabel>City</InputLabel>
                    <Select
                        value={city}
                        onChange={this.handleSelect.bind(this)}
                    >
                        <MenuItem value="London">London</MenuItem>
                        <MenuItem value="New York">New York</MenuItem>
                        <MenuItem value="Buenos Aires">Buenos Aires</MenuItem>
                    </Select>
                </FormControl>
                <InputLabel>Color</InputLabel>
                <CirclePicker circleSize={15} width={100} colors={['#dce775', '#ff8a65', '#ba68c8']} color={color} onChangeComplete={this.handleChangeComplete} />
                <DateTimePicker value={dateTime} minDate={startDate} maxDate={endDate} onChange={(dateTime) => this.setState({ dateTime })} />
                <Button type="submit" disabled={(title.length === 0 || title.length >= 30) ? true : false} color="primary">{inModal ? 'Update Reminder' : 'Add Reminder'}</Button>
            </form>
        );
    }
}
const mapStateToProps = state => ({
    reminders: state.reminders.allReminders
});
export default connect(mapStateToProps, { addReminder, updateReminder })(ReminderForm);