import {ADD_REMINDER, GET_REMINDERS_BY_ID} from '../actions/types';
import moment from 'moment';

const initialState = {
    reminder: {
        dayId: null,
        title: "",
        time: "",
        city: "",
        weather : "",
        color: ""
    },
    allReminders: [
        {
            date : '10/12/2019',
            title :"Reminder",
            time :"20:10",
            city :"London",
            Weather: "Rain",
            color :"red"
        },
        {
            dayId :10,
            title :"Reminder",
            time :"20:15",
            city :"Wales",
            Weather: "Rain",
            color :"red"
        }
    ]
}

export default function(state = initialState, action) {
    switch(action.type) {
        case ADD_REMINDER:
            let reminders = [...state.allReminders];    
            reminders.push(action.payload);
            return {
                ...state,
                allReminders: reminders
            }
        case GET_REMINDERS_BY_ID:
            return {
                ...state,
                allReminders: state.allReminders.filter(reminder => reminder.dayId !== action.payload)
            }
        default:
            return state;
    }
}