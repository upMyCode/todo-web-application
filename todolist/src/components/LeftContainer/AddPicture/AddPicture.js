import React from 'react';
import imge from '../imagine/plane.png';
import './addPicture.css';



const AddPicture = () => {
    return (
        <div className='left__picture'>
            <img 
                src={imge}
                alt="plane"
                
            />
        </div>
    )
}


export default AddPicture;