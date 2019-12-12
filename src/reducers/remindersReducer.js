import { ADD_REMINDER, UPDATE_REMINDER } from '../actions/types';

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
        default:
            return state;
    }
}