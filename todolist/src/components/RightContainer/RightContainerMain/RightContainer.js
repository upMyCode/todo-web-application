import React from 'react';
import RightContainerTop from '../RightContainerTop/RightContainerTop';
import AddToDoList from '../RightContainerMiddle/RightContainerMiddle';
import AddPost from '../../AddForm';
import './rightcontainer.css'

const RightContainer = (props) => {
    return (
        <div  className = 'rightcontainer'>
            <div className = 'rightcontainer__top'>
                <RightContainerTop/>
            </div>
            <div className = 'rightcontainer__middle'>
                <AddToDoList value = {props.value}/>
            </div>
            <div className = 'rightcontainer__bottom'>
                {/* <AddPost/> */}
            </div>
        </div>
    )
}


export default RightContainer;