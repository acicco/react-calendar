import React, { Component } from 'react'
import moment from 'moment';
import Week from './Week';
import {getMonth} from '../helpers/dateUtil';
import uuid from 'uuid';

let weekDays = moment.weekdays().map( day => {
    return (
        <div key={uuid.v4()} className="table-head">
            {day}
        </div>
    )
});

const today = moment();
const {weeks} = getMonth(today);

export default class Month extends Component {
    state = {
        startOfTheMonth: moment().startOf('month'),
        endOfTheMonth : moment().endOf('month'),
    }
    

    nextMonth () {
        let c = this.state.startOfTheMonth;
        let e = this.state.endOfTheMonth;
        this.setState({
            startOfTheMonth: c.add(1, 'month'),
            endOfTheMonth: e.add(1, 'month')
        });
    }
    render() {
        return (
            <div className="table">
                <div className="table-row">
                    {weekDays}
                </div>
                <div className="table-body">
                    {weeks.map(week =>  <Week key={uuid.v4()} week={week} today={today}/>)}
                </div>
            <button onClick={this.nextMonth.bind(this)}>Click</button>
            </div>
        )
    }
}
