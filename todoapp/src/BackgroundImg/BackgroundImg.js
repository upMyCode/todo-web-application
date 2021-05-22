import React from 'react';
import planeImg from './plane.jpg'
import './BackgroundImg.css'


export default function AddBackgroundImg() {
    return (
        <div className='container__BackgroundImg'>
            <img 
                src={planeImg}
                alt='plane'
             />
        </div>
    )
}