import React, { Component } from 'react';
import AddDefaultDate from '../AddDefaultDate/AddDefaultDate';
import AddCalendar from '../AddCalendar/AddCalendar';



const AddDate = (props) => {
    
    return (
        <>
            <div className='addDate'>
                <AddDefaultDate 
                    time={props.time}
                />
            </div>
            <div className='addCalendar'>
                <AddCalendar
                   elems={props.elems}
                   elemOfData={props.elemOfData}
                   getId={props.getId}
                   
                   />
            </div>
        </>
    )
}


export default AddDate;