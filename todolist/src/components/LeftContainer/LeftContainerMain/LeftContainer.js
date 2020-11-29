import React from 'react';
import AddDate from '../LeftContainerTop/AddDate/AddDate';
import './left-container.css'
import AddPicture from '../LeftContainerBottom/AddPicture';



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