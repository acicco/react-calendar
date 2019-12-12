import { ADD_REMINDER, UPDATE_REMINDER, DELETE_REMINDER, DELETE_REMINDERS } from './types';

export const addReminder = reminder => dispatch => {
    return dispatch({
        type: ADD_REMINDER,
        payload: reminder
    });
}

export const updateReminder = reminder => dispatch => {
    return dispatch({
        type: UPDATE_REMINDER,
        payload: reminder
    });
}

export const deleteReminder = reminder => dispatch => {
    return dispatch({
        type: DELETE_REMINDER,
        payload: reminder
    });
}
export const deleteAllReminders = dispatch => {
    return dispatch({
        type: DELETE_REMINDERS
    });
}