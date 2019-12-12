import { ADD_REMINDER, UPDATE_REMINDER } from './types';

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