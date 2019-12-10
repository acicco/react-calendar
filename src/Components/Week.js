import React, { Component } from 'react'
import Day from './Day';

export default class Week extends Component {

    render() {
        const {week, today} = this.props;
        return (
            <div className="table-row">
               {week.map( day => {
                   return (
                       <div className="table-data">
                           <Day day={day} today={today}/>
                       </div>
                   )
               })} 
            </div>
        )
    }
}
