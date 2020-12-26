import React, { Component } from 'react';
import AddDefaultDate from '../AddDefaultDate/AddDefaultDate';
import AddCalendar from '../AddCalendar/AddCalendar';



const AddDate = () => {
    Date.prototype.dayS = function () {
        return 32 - new Date(this.getFullYear(),this.getMonth(),32).getDate();
    } 

    let dateS = new Date().dayS();
    return (
        <>
            <div className='addDate'>
                <AddDefaultDate 
                />
            </div>
            <div className='addCalendar'>
                <AddCalendar
                   date = {dateS}/>
            </div>
        </>
    )
}


export default AddDate;