import React from 'react';
import '../container/UserInfo.css';
import userPhoto from '../container/userPhoto.jpg';

/*******UserInfo*******/
export default function AddUserInfo() {
    return (
        <div className='container__UserInfo'>
            <div className='container__UserInfo-userData'>
                <p className='userData__styleHeader'>Johan Skcrey</p>
                <p className='userData__style'>Life position -  meditation</p>
                <p className='userData__style'>Favorite song - Imagine Dragons</p>
            </div>
            <div className='container__UserInfo-userPhoto'>
                <img 
                    src={userPhoto} 
                    alt='userPhoto'
                />
            </div> 
        </div>
    )
}