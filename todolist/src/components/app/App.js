import React from 'react';
import LeftContainer from '../LeftContainer/LeftContainerMain/LeftContainer';
import RightContainer from '../RightContainer/RightContainerMain/RightContainer';
import AddPost from '../AddForm/';
import './App.css';



class App  extends React.Component {
  constructor(props) {
    super(props);
    this.posts = [];
    this.state = {
      elem: this.posts
    }
  }

  addPost = (value) => {
    this.posts.push({
      data: 'data',
      elem: value,
      important: false,
      id: 0
    });

    this.setState({
      elem: this.posts
    })
    console.log(this.state.elem)
  }


  render(){
    return (
      <div className='main_container'>
        <div className='left__container'>
            <LeftContainer/>
        </div>
        <div className='right__container'>
            <RightContainer elem={this.state.elem}/>
        </div>
        <div className='addFormContainer'>
          <AddPost addPost={this.addPost}/>
        </div>

      </div>
    )
  }
}


export default App;
