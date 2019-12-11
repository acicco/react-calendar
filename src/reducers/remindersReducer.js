import {ADD_REMINDER, GET_REMINDERS_BY_ID} from '../actions/types';
import moment from 'moment';

const initialState = {
    allReminders: []
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