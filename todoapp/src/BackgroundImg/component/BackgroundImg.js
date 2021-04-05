import React from 'react';
import planeImg from '../container/plane.jpg'
import '../container/BackgroundImg.css'


export default function AddBackgroundImg() {
    return (
        <div className='container__BackgroundImg'>
            <img src={planeImg}/>
        </div>
    )
}