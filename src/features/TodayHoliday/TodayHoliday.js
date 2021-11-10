import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import { store } from '../../app/store'
import * as actions from './TodayHolidayActions'
import axios from 'axios'

const TodayHoliday = () => {
    const isToday = useSelector(state => state.holiday.today)
    const nextHoliday = useSelector(state => state.holiday.next)

    useEffect(() => {
        async function getIsHoliday() {
            let response = await axios.get(`https://www.gov.uk/bank-holidays.json`)
            store.dispatch(actions.setHolidays(response.data['england-and-wales']['events']))
            
        }
        getIsHoliday()
    }, [])

    const getTag = () => {
        if (isToday === 0) return (<h3>🤔 Thinking 🤔</h3>);
        if (isToday === 1) return (<h3>😢 No 😢</h3>);
        if (isToday === 2) return (<h3>🎉 Yes 🎉</h3>);
    }

    return (
        <div className="bg-primary w-100 p-4 text-light rounded">
            <h1>Is Today a Bank Holiday?</h1>
            {getTag()}
            <h4>Next holiday in {nextHoliday} days!</h4>
        </div>
    )
}

export default TodayHoliday
