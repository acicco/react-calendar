import React, { Component } from 'react'
import Reminder from './Reminder';
import uuid from 'uuid';

export default class Reminders extends Component {

    render() {
        const { reminders } = this.props;
        return (
            <div className="reminders">
                {reminders.map(reminder => {
                    return (
                        <Reminder key={uuid.v4()} reminder={reminder} />
                    )
                })}
            </div>
        )
    }
}
