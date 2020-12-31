import React from 'react';
import AddDate from '../LeftContainerTop/AddDate/AddDate';
import './left-container.css'
import AddPicture from '../LeftContainerBottom/AddPicture';



const LeftContainer = (props) => {
    return (
        <>
            <div className='addDateForLeftSide'>
                <AddDate time={props.time}
                        elems={props.elems}
                        elemOfData={props.elemOfData}
                        getId={props.getId}
                
                />
            </div>
            <div className='addPicture'>
                <AddPicture/>
            </div>
        </>
    )
}


export default LeftContainer;