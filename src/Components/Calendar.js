import React, { Component } from 'react'
import Month from './Month';
import ReminderForm from './ReminderForm';

export default class Calendar extends Component {
    render() {
        return (
            <div>
               <ReminderForm/>
               <h2 className="title">Calendar</h2>
               <Month/>
            </div>
        )
    }
}
