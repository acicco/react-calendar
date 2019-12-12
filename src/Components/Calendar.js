import React, { Component } from 'react'
import Month from './Month';
import ReminderForm from './ReminderForm';
import moment from 'moment';

export default class Calendar extends Component {
    render() {
        return (
            <div>
                <Month/>
            </div>
        )
    }
}
