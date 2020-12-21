import React, {Component} from 'react';
import './add-form.css';
import plus from './plus.png';

class AddPost extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className='addFormMain'>
                <div className='addPost'>
                    <a className='btn btn-addPost'>
                        <img  src={plus} className='buttonImg'/>
                    </a>
                </div>
                <form className='addForm'>
                    <input className='addFormText' 
                            type='text'
                            placeholder='Please add your ToDo list'
                    />
                </form>
            </div>
        )
    }
}


export default AddPost;