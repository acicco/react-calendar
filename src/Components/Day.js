import React, { Component } from 'react';
import moment from 'moment';


export default class Day extends Component {

    formattedDay() {
        return this.props.day.format('D');
    }
    //TODO - Add CSS class to show other month days.
    isInSameMonth() {
        return this.props.day.isSame( this.props.today, 'month');
    }

    render() {
        return (
            <div className={`day ${!this.isInSameMonth() ? 'next-month-day' : ''}`} onClick={() => console.log(this.props.day)}>
                <span className="day-number">{this.formattedDay()}</span>
            </div>
        )
    }
}
