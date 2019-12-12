import React, { Component } from 'react'
import moment from 'moment';
import Week from './Week';
import { getMonth } from '../helpers/dateUtil';
import uuid from 'uuid';
import Button from '@material-ui/core/Button';
import ReminderForm from './ReminderForm';

let weekDays = moment.weekdays().map(day => {
    return (
        <div key={uuid.v4()} className="table-head">
            {day}
        </div>
    )
});

export default class Month extends Component {
    state = {
        month: moment(),
        currentMonth: getMonth(moment()).currentMonth,
        weeks: getMonth(moment()).weeks
    }


    previousMonth() {
        const {month} = this.state;
        let previousMonth = month.subtract(1, 'month');
        this.setState({
            month: previousMonth,
            currentMonth: getMonth(previousMonth).currentMonth,
            weeks: getMonth(previousMonth).weeks
        })
    }

    nextMonth() {
        const {month} = this.state;
        let nextMonth = month.add(1, 'month');
        this.setState({
            month: nextMonth,
            currentMonth: getMonth(nextMonth).currentMonth,
            weeks: getMonth(nextMonth).weeks,
        })
    }
    render() {
        const { weeks, currentMonth, month, startDate, endDate} = this.state;
        return (
            <div className="month">
                <ReminderForm inModal={false} month={{startDate, endDate}}/>
                <h1 className="is-text-center">{currentMonth}</h1>
                <div className="prev-next-month">
                    <Button onClick={this.previousMonth.bind(this)}>Previous Month</Button>
                    <Button onClick={this.nextMonth.bind(this)}>Next Month</Button>
                </div>
                <div className="table">
                    <div className="table-row">
                        {weekDays}
                    </div>
                    <div className="table-body">
                        {weeks.map(week => <Week key={uuid.v4()} week={week} month={month} />)}
                    </div>
                </div>
            </div>
        )
    }
}
