import React from 'react';
import '../container/Calendar.css';

export default function AddCalendar({days}) {
    return (
        <div className='addCalendar'>
            {   
              days.map((elem, index) => {
                  return(
                     <div className = 'dateElem' id={index}><span className='elem__number'>{elem}</span></div>
                  )
              })      
            } 
        </div>
        )
   
    
}
