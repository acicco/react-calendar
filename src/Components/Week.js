import React, { Component } from 'react'
import Day from './Day';
import uuid from 'uuid';

export default class Week extends Component {

    render() {
        const { week, month } = this.props;
        return (
            <div className="table-row">
                {week.map(day => {
                    return (
                        <div key={uuid.v4()} className="table-data">
                            <Day key={uuid.v4()} day={day} month={month} />
                        </div>
                    )
                })}
            </div>
        )
    }
}
