export function setHolidays(data) {
    let holidayArray = []
    var midnight = new Date();
    midnight.setHours(0,0,0,0);
    let today = 1;
    let next = 2147483647000;
    let id = 1;

    data.forEach(element => {
        let elementDateTime = new Date(element.date).getTime()
        if (elementDateTime >= midnight.getTime()) {
            element.id = id++;
            holidayArray.push(element);
            if (elementDateTime < next) {
                next = elementDateTime;
            }
        }
        if (elementDateTime === midnight.getTime())
        {
            today = 2;
        }
    });

    const ONE_DAY = 1000 * 60 * 60 * 24;
    let now = new Date()
    let nextDate = new Date(next)
    let dateDiff = nextDate - now

    // console.log(now,"           ",nextDate,"              ",dateDiff)

    let diff = Math.round(dateDiff / ONE_DAY)
    next = diff

    return {
        type: 'SET_HOLIDAYS',
        payload: {today,next, holidayArray}
    }
}