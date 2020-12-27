import React, {Component} from 'react';
import './add-form.css';
import plus from './plus.png';


class AddPost extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: ''
        }
    }

    setValue = (e) => {
        this.setState({ 
            value: e.target.value
        })
    }

    addPost = (e) => {
        e.preventDefault()
        this.props.addPost(this.state.value);
    }

    render(){

        return(
            <form className='addFormMain'
                onSubmit={this.addPost}
            
            >
                <div className='addPostButton'>
                    <button className='addPost' >
                        <img  src={plus} className='buttonImg'/>
                    </button>
                </div>
                <div className='addForm' >
                    <input className='addFormText'
                            onChange={this.setValue} 
                            type='text'
                            placeholder='Please add your ToDo list'
                    />
                </div>
            </form>
        )
    }
}


export default AddPost;
