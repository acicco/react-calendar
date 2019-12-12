import { CirclePicker } from 'react-color';
import { addReminder, updateReminder, deleteReminder } from '../actions/reminderActions';
import { connect } from 'react-redux';
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
import axios from 'axios';

class ReminderForm extends React.Component {
    constructor(props) {
        super(props);
        if (props.inModal) {
            this.state = {
                id: props.reminder.id,
                title: props.reminder.title,
                dateTime: props.reminder.dateTime,
                city: props.reminder.city,
                color: props.reminder.color,
                weather: props.reminder.weather
            }
        } else {
            this.state = {
                id: uuid.v4(),
                title: "",
                dateTime: moment(),
                city: "",
                color: "",
                weather: "",
            }
        }
    }

    getWeather = async (city, date) => {
        let json = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&mode=jsonl&APPID=03da5164e7037f62d9922b5dcb99630b`);
        let data = await json.data;
        let weatherData = await data.list.find(day => moment(day.dt, 'X').format('D-M-YYYY') === date);
    
        return weatherData ? weatherData.weather[0].main : "-";
    }

    handleChangeComplete = color => {
        this.setState({
            color: color.hex
        })
    }

    removeReminder = () => {
        this.props.deleteReminder(this.props.reminder);
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

    async submit(e) {
        e.preventDefault();
        const { addReminder, updateReminder, inModal } = this.props;
        let { id, title, dateTime, color, city } = this.state;
        let date = dateTime.format('D-M-Y');
        let weather = await this.getWeather(city, date);
        let reminder = {
            id,
            title,
            dateTime,
            city,
            color,
            date,
            weather
        };
        if (inModal) {
            updateReminder(reminder);
        } else {
            addReminder(reminder);
            this.setState({
                id: uuid.v4(),
                title: "",
                dateTime: moment(),
                city: "",
                color: "",
                weather: ""
            });
        }
    }

    render() {
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
                <DateTimePicker value={dateTime} onChange={(dateTime) => this.setState({ dateTime })} />
                <Button type="submit" disabled={(title.length === 0 || title.length >= 30) ? true : false} color="primary">{inModal ? 'Update Reminder' : 'Add Reminder'}</Button>
                {inModal && <Button onClick={this.removeReminder} color="primary">DELETE REMINDER</Button>}
            </form>
        );
    }
}
const mapStateToProps = state => ({
    reminders: state.reminders.allReminders
});
export default connect(mapStateToProps, { addReminder, updateReminder, deleteReminder })(ReminderForm);