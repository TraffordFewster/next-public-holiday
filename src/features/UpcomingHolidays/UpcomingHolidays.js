import React from 'react'
import { useSelector } from 'react-redux'

const UpcomingHolidays = () => {
    const holidays = useSelector(state => state.holiday.holidayArray)
    const ONE_DAY = 1000 * 60 * 60 * 24;
    let now = new Date()
    const list = holidays.map((holiday,index) =>
        (<div key={index} className="col-12 col-sm-6 col-md-4 col-xl-3 mb-4 d-flex align-items-stretch">
            <div className="card w-100">
                <div className="card-body">
                    <h5 className="card-title mb-0">{holiday.title}</h5>
                    <p className="card-text m-0"><small>{holiday.notes}</small></p>
                    <p className="card-text">{Math.round((new Date(holiday.date) - now) / ONE_DAY)} days away!</p>
                </div>
            </div>
        </div>)
    )

    return (
        <div className="row mt-4">
            {list}
        </div>
    )
}

export default UpcomingHolidays
