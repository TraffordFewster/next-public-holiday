import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const UpcomingHolidays = () => {
    const holidays = useSelector(state => state.holiday.holidayArray)
    const list = holidays.map((holiday,index) =>
        (<div className="col-12 col-sm-6 col-md-4 col-xl-3 mb-4 d-flex align-items-stretch">
            <div key={holiday.id} class="card">
                <img class="card-img-top" src="https://api.time.com/wp-content/uploads/2019/06/what-is-half-christmas-workaholics.jpg" alt="Card cap"></img>
                <div class="card-body">
                    <h5 class="card-title">{holiday.title}</h5>
                    <p class="card-text">{holiday.notes}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>)
    )

    console.log(holidays,list);
    return (
        <div className="row mt-4">
            {list}
        </div>
    )
}

export default UpcomingHolidays
