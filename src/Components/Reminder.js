import React, { Component } from 'react'
import SimpleModal from './SimpleModal';

export default class Reminder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.reminder.title,
            dateTime: props.reminder.dateTime,
            city: props.reminder.city,
            color: props.reminder.color,
            isModalOpen: false
        }
    }
    reminderDetails() {
        this.openModal();
        console.log(this.state);
    }

    openModal() {
        this.setState({
            isModalOpen: true
        });
    }

    closeModal() {
        this.setState({
            isModalOpen: false
        });
    }

    render() {
        const { title, dateTime, color, isModalOpen } = this.state;
        const reminderStyle = {
            background: color,
            border: "1px",
            margin: "5px",
            fontSize: "12px"
        };
        return (
            <>
                <div key={`${dateTime}-${title}`} style={reminderStyle} onClick={this.reminderDetails.bind(this)}>
                    {title}
                </div>
                <SimpleModal isModalOpen={isModalOpen} reminder={this.state} closeModal={this.closeModal.bind(this)}/>
            </>
        )
    }
}
