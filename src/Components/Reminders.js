import React, { Component } from 'react'

export default class Reminders extends Component {
    state = {
        reminder: {
            dayId: null,
            title: "",
            time: "",
            city: "",
            weather : "",
            color: ""
        },
    }
    render() {
        const {reminders} = this.props;
        return (
            <div className="reminders">
                {reminders.map( reminder => {
                    const reminderStyle = {
                        background: reminder.color,
                        border: "1px",
                        margin: "5px",
                        fontSize: "12px"
                    };

                    return (
                        <div key={`${reminder.time}-${reminder.title}`} style={reminderStyle}>
                            {reminder.title}
                        </div>
                    )
                })}
            </div>
        )
    }
}
