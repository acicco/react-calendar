import { ADD_REMINDER, UPDATE_REMINDER, DELETE_REMINDER, DELETE_REMINDERS } from '../actions/types';

const initialState = {
    allReminders: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_REMINDER:
            let reminders = [...state.allReminders];
            reminders.push(action.payload);
            return {
                ...state,
                allReminders: reminders
            }
        case UPDATE_REMINDER:
            return {
                ...state,
                allReminders: state.allReminders.map(reminder => reminder.id === action.payload.id ? action.payload : reminder)
            }
        case DELETE_REMINDER:
            return {
                ...state,
                allReminders: state.allReminders.filter(reminder => reminder.id !== action.payload.id)
            }
        case DELETE_REMINDERS:
            return {
                ...state,
                allReminders: []
            }
        default:
            return state;
    }
}