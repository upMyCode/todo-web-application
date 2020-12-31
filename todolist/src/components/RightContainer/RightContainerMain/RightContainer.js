import React from 'react';
import RightContainerTop from '../RightContainerTop/RightContainerTop';
import AddToDoList from '../RightContainerMiddle/RightContainerMiddle';
import AddPost from '../RightContainerBotton/RightConstainerBottom';
import './rightcontainer.css'

const RightContainer = (props) => {
    return (
        <div  className = 'rightcontainer'>
            <div className = 'rightcontainer__top'>
                <RightContainerTop/>
            </div>
            <div className = 'rightcontainer__middle'>
                <AddToDoList elem = {props.elem}/>
            </div>
            <div className = 'rightcontainer__bottom'>
                <AddPost elem = {props.elem} />
            </div>
        </div>
    )
}


export default RightContainer;