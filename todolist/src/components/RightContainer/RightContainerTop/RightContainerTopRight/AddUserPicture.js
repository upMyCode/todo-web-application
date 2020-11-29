import React from 'react';
import userIcon from './user.png';


const addUserPicture = () => {
    return (
        <div className = 'user__icon'>
            <img src={userIcon}/>
        </div>
    )
}

export default addUserPicture;