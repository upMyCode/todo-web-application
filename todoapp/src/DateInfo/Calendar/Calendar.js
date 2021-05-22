import React,{useState} from 'react';
import './Calendar.css';


export default function AddCalendar({days}) {
    
    const [color, setColor] = useState('dateElem');

    function switchColor(e) {

        if (e.target.className === 'dateElem' || e.target.className === 'blue__elem') {
            if (color === 'dateElem'){
                setColor('blue__elem')
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
                            <span className='elem__number'>
                                {elem}
                            </span>
                    </div>
                  )
              })      
            } 
        </div>
        )
  
}
