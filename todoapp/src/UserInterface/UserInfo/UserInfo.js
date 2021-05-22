import React from 'react';
import './UserInfo.css';
import user from './user.svg';

/*******UserInfo*******/
export default function AddUserInfo() {
    return (
        <div className='container__UserInfo'>
            <div className='container__UserInfo-userData'>
                <h3>Johan Skcrey</h3>
                <p>Life position -  meditation</p>
                <p>Favorite song - Imagine Dragons</p>
            </div>
            <div className='container__UserInfo-userPhoto'>
                <img
                     src={user}
                     alt='userPhoto'
                />
            </div> 
        </div>
    )
}