import React, { Component, Fragment } from 'react'
import SimpleModal from './SimpleModal';

export default class Reminder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.reminder.id,
            title: props.reminder.title,
            dateTime: props.reminder.dateTime,
            city: props.reminder.city,
            color: props.reminder.color,
            weather: props.reminder.weather,
            isModalOpen: false
        }
    }
    reminderDetails() {
        this.openModal();
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
        const { title, dateTime, color, weather, isModalOpen } = this.state;
        const {month} = this.props;
        const reminderStyle = {
            background: color,
            border: "1px",
            margin: "5px",
            fontSize: "12px"
        };
        return (
            <Fragment>
                <div key={`${dateTime}-${title}`} style={reminderStyle} onClick={this.reminderDetails.bind(this)}>
                    <p>{title}</p>
                    <p className="date-weather">Weather: {weather}</p>
                </div>
                <SimpleModal isModalOpen={isModalOpen} reminder={this.state} closeModal={this.closeModal.bind(this)} month={month}/>
            </Fragment>
        )
    }
}
