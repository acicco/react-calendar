import '@testing-library/jest-dom/extend-expect';
import * as actions from '../actions/reminderActions';
import * as types from '../actions/types';

describe('Create a reminder', () => {
    const payload = {
        id: 'c7e2da6d-854e-4c05-9c53-80508c922f49',
        title: 'Hola',
        dateTime: '2019-12-12T18:28:53.052Z',
        city: 'New York',
        color: '#ba68c8',
        date: '12-12-2019',
        weather: 'Clouds'
    }
    it ('title should be less than 30 characters', () => {
        expect(payload.title.length).toBeLessThanOrEqual(30);
    });
    it('should create a reminder', () => {
        const expectedAction = {
            type: types.ADD_REMINDER,
            payload
        }
        let addReminder = actions.addReminder(payload);
        expect(addReminder(receivedAction => expect(receivedAction).toEqual(expectedAction)));
    });
})