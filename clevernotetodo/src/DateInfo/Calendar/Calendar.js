import React,{useState} from 'react';
import './Calendar.css';


export default function AddCalendar({days}) {
    
    const [color, setColor] = useState('dateElem');

    function switchColor(e) {

        if (e.target.className === 'dateElem' || e.target.className === 'dataElem__blue') {
            if (color === 'dateElem'){
                setColor('dataElem__blue')
                e.target.className = color
            } else {
                setColor('dateElem')
                e.target.className = color
            }
        };  
    }
    
    return (
        <div className='addCalendar'>
            {   
              days.map((elem, index) => {
                  return(
                     <div 
                        className='dateElem'
                        key={index}
                        onClick={switchColor}>
                        {elem}
                    </div>
                  )
              })      
            } 
        </div>
        )
  
}
