import { ADD_REMINDER, GET_REMINDERS_BY_ID } from './types';

export const addReminder = reminder => dispatch => {
    return dispatch({
        type: ADD_REMINDER,
        payload: reminder
    });
}

export const getReminderById = id => dispatch => {
    return dispatch({
        type: GET_REMINDERS_BY_ID,
        payload: id
    });
}