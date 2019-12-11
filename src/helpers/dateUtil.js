import moment from 'moment';
export function monthInterval(date) {
    const startOfTheMonth = date.clone().startOf('month');
    const endOfTheMonth = date.clone().endOf('month');
    const startDate = startOfTheMonth.startOf('week');
    const endDate = endOfTheMonth.endOf('week')

    return {
        startDate,
        endDate
    }
}

export function getMonth(date) {
    const {startDate, endDate} = monthInterval(date);
    let days = [];
    let weeks = [];
    let day = startDate.clone();

    while (day <= endDate) {
        for (let i = 0; i < 7; i++) {
            days.push(moment(day));
            day.add(1, 'days');
        }
        weeks.push(days);
        days = [];
    }

    return {
        weeks,
        startDate,
        endDate
    };

}