import React from 'react';
import AddDate from './AddDate';
import './addDateForLeftSide.css'
import AddPicture from './AddPicture';


const LeftContainer = () => {
    return (
        <>
            <div className='addDateForLeftSide'>
                <AddDate/>
            </div>
            {/* <div className='addPicture'>
                <AddPicture/>
            </div> */}
        </>
    )
}


export default LeftContainer;