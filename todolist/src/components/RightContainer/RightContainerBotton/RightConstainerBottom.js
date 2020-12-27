import React from 'react';
import './add-post.css';

const AddPost = (props) => {
        
     return (
        props.elem.map(function(elem) {
            return(
                <div className='rightContainerBottom'>
                    <div className='addPostTittle'>
                        <p className ='postText'>{elem.elem}</p>
                    </div>
                </div>
                )
            })

     )
}

export default AddPost