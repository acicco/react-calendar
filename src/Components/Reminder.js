import React, { Component } from 'react'

export default class Reminder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.reminder.title,
            dateTime: props.reminder.dateTime,
            city: props.reminder.city,
            color: props.reminder.color 
        }
    }
    reminderDetails () {
        console.log(this.state);
    }

    render() {
        const {title, dateTime, city, color} = this.state;
        const reminderStyle = {
                        background: color,
                        border: "1px",
                        margin: "5px",
                        fontSize: "12px"
                    };
        return (
            <div key={`${dateTime}-${title}`} style={reminderStyle} onClick={this.reminderDetails.bind(this)}>
                {title}
            </div>
        )
    }
}
