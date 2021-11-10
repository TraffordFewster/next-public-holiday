const HolidayReducer = (state={today:0, holidayArray:[]}, action) => {
    switch(action.type){
        case 'SET_HOLIDAYS':
            return action.payload;
        default:
            return {today:0,next:"?", holidayArray:[{
"title": "New Year’s Day",
"date": "2016-01-01",
"notes": "",
"bunting": true
}]};
    }
}
export default HolidayReducer