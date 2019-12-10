import React, { Component } from 'react'
import moment from 'moment';
import Day from './Day';
import Week from './Week';

let weekDays = moment.weekdays().map( day => {
    return (
        <th key={day} className="table-head">
            {day}
        </th>
    )
});

let today = moment();
let startOfTheMonth = moment().startOf('month');
let endOfTheMonth = moment().endOf('month');
let startDate = startOfTheMonth.startOf('week');
let endDate = endOfTheMonth.endOf('week')
let days = [];
let weeks = [];
let day = startDate;

while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
        days.push(moment(day));
        day.add(1, 'days');
    }
    weeks.push(days);
    days = [];
}




export default class Month extends Component {
    render() {
        return (
            <div className="table">
                <div className="table-row">
                    {weekDays}
                </div>
                <div className="table-body">
                    {weeks.map(week =>  <Week week={week} today={today}/>)}
                </div>
            </div>
        )
    }
}
