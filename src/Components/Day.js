import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder } from '../actions/reminderActions';
import Reminders from './Reminders';


class Day extends Component {

    formattedDay() {
        return this.props.day.format('D');
    }

    currentDate() {
        return this.props.day.format('D-M-Y');
    }

    isInSameMonth() {
        return this.props.day.isSame(this.props.month, 'month');
    }

    addReminder(reminder) {
        return this.props.addReminder(reminder);
    }

    render() {
        return (
            <div className={`day ${!this.isInSameMonth() ? 'next-month-day' : ''}`} >
                <span className="day-number">{this.formattedDay()}</span>
                <Reminders reminders={this.props.reminders.allReminders.filter(reminder => reminder.date === this.currentDate())}/>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    reminders: state.reminders
});
export default connect(mapStateToProps, { addReminder })(Day);