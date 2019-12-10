import React, { Component } from 'react'
import Month from './Month';
import moment from 'moment';

export default class Calendar extends Component {
    render() {
        return (
            <div>
               <h2 className="title">Calendar</h2>
               <Month/>
            </div>
        )
    }
}
