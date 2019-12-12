// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import './node_modules/@testing-library/jest-dom/extend-expect';
import * as actions from '../actions/reminderActions';
import * as types from '../actions/types';

describe('Create a reminder', () => {
    it('should create a reminder', () => {
        const reminder = {
            title: "Hola"
        }
        const expectedAction = {
            type: types.CREATE_REMINDER,
            reminder
        }
        expect(actions.addReminder(reminder)).toEqual(expectedAction);
    })
})