const HolidayReducer = (state={today:0, holidayArray:[]}, action) => {
    switch(action.type){
        case 'SET_HOLIDAYS':
            return action.payload;
        default:
            return {today:0,next:"?", holidayArray:[]};
    }
}
export default HolidayReducer