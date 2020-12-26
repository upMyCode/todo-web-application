import React, {Component} from 'react';
import './right-container-middle.css'

class AddToDoList extends Component {
    constructor(props) {
        super(props);
    }

    
    render() {
        return (
            <div className='rightContainerMiddle'>
                <div className='addToDoList'>
                    <p>{this.props.value}</p>
                </div>
            </div>
        )
    }
}


export default AddToDoList;