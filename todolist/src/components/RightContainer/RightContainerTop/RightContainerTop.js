import React, {Component} from 'react';
import RightContainerTopLeft from './RightContainerTopLeft/RightContainerTopLeft';
import AddUserPicture from './RightContainerTopRight/AddUserPicture';
import './right-container-top.css';

class RightContainerTop extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className = 'rightcontainer__top'>
                <div className = 'rightcontainer__top-left'>
                    <RightContainerTopLeft/>
                </div>
                <div className = 'rightcontainer__top-right'>
                    <AddUserPicture/>
                </div>
            </div>
        )
    }
}


export default RightContainerTop;