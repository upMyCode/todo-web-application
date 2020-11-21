import React from 'react';
import AddDefaultDate from './newDate/AddDefaultDate'
import './addDate.css';


const AddDate = () => {
    return (
        <>
            <div className='addDate'>
                <AddDefaultDate 
                    date = {new Date()}
                />
            </div>
            <div className='addCalendar'>
                {/* <AddCalendar/> */}
            </div>
        </>
    )
}


export default AddDate;