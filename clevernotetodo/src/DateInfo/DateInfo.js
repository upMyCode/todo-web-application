import React from 'react';
import AddDate from './Date/Date'
import AddCalendar from './Calendar/Calendar'
import './DateInfo.css'

export default function DateInfo({year, month, date, hours, minutes, days}) {
    return (
        <>  
            <div className='container_Date'>
                <AddDate 
                    hours={hours} 
                    minutes={minutes} 
                    year={year} date={date} 
                    month={month}
                />
            </div>
            <div className='container__Calendar'>
                <AddCalendar days={days}/>
            </div>
            
        </>
    )}