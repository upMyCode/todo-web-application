import React from 'react';
import AddDate from '../newDate/AddDate/AddDate';
import './addDateForLeftSide.css'
import AddPicture from '../AddPicture/AddPicture';



const LeftContainer = () => {
    return (
        <>
            <div className='addDateForLeftSide'>
                <AddDate/>
            </div>
            <div className='addPicture'>
                <AddPicture/>
            </div>
        </>
    )
}


export default LeftContainer;